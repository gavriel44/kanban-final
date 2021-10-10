'use strict'

/*
 * The mane Board class.
 *
 * every render off the UI is done thru the board object
 * the basic structure is like this:
 *
 * board = {
 *  lists: [{ id: 1, name: 'done', tasks: [{id: 1, text: 'I am a task'}, {}...], styleclass: 'done-tasks'}, {}, ...],
 *  baseTasksList = []
 * }
 *
 */

class Board {
  constructor(BASE_TASKS_LISTS, tasks = {}) {
    /*
    the first thing we do is to add the base lists so they always
    be in the same order when we render them. (todo, in-progress, done)
    The problem is this:
    when we save the board in the localStorage we
    cant keep the order, we save in object form, so we force the order off the first base lists.

    **tasks - the lists in the localStorage format. We keep the name for clarity,
    but for each property of the object, tasks, we create a new list.

    ~ tasks object example:

    tasks = {
      todo: [],
      'in-progress, ["im a task", "me to"]],
      done: [],
      'list-i-added': ["hello world"],
    }
    
    */
    this.BASE_TASKS_LISTS = BASE_TASKS_LISTS
    this.lists = []
    for (let listName of this.BASE_TASKS_LISTS) {
      this.addNewList(listName, [], formatListClassName(listName))
    }

    for (let newTaskListName in tasks) {
      if (this.BASE_TASKS_LISTS.includes(newTaskListName)) {
        const alreadyExistsList = this.getListByName(newTaskListName)
        tasks[newTaskListName].forEach((taskText) => this.addTask(alreadyExistsList.id, taskText))
      } else {
        this.addNewList(newTaskListName, [], formatListClassName(newTaskListName))
        const newExistingList = this.getListByName(newTaskListName)
        tasks[newTaskListName].forEach((taskText) => this.addTask(newExistingList.id, taskText))
      }
    }
  }

  addTask(listId, taskText) {
    const listTasks = this.getList(listId).tasks
    listTasks.push({ text: taskText, id: this.generateUniqueTaskId(listTasks) })
  }

  getList(listId) {
    return getObjectFromArray(listId, this.lists)
  }

  deleteList(listId) {
    this.lists.splice(this.lists.indexOf(this.getList(listId)), 1)
  }

  deleteTask(taskId) {
    const listId = this.getListIdFromTaskId(taskId)
    const list = this.getList(listId)
    const task = this.getTask(taskId)

    list.tasks.splice(list.tasks.indexOf(task), 1)
  }

  generateUniqueTaskId() {
    let allTasks = []

    for (let list of this.lists) {
      allTasks.push(...list.tasks)
    }
    return generateNewIdInArrayOfObjects(allTasks)
  }

  getTask(taskId) {
    const allTasks = []

    for (let list of this.lists) {
      allTasks.push(...list.tasks)
    }

    return getObjectFromArray(taskId, allTasks)
  }

  getListIdFromTaskId(taskId) {
    for (let list of this.lists) {
      for (let task of list.tasks) {
        if (task.id === taskId) return list.id
      }
    }
    throw new Error(`there is no taskId: ${taskId}`)
  }

  getTaskIndex(taskId) {
    return this.getList(this.getListIdFromTaskId(taskId)).tasks.indexOf(this.getTask(taskId))
  }

  getListByName(listName) {
    return this.lists.find((list) => list.name === listName)
  }

  addNewList(name, tasks, styleClass, id = generateNewIdInArrayOfObjects(this.lists)) {
    checkIfObjectIdTaken(id, this.getList)

    this.lists.push({
      id,
      name,
      tasks,
      styleClass,
    })
  }
}

// constants for us to use.
const LISTS_DIV = document.getElementById('lists-div')
const BASE_TASKS_LISTS = ['to-do', 'in-progress', 'done']
let board

/*
 * ENTERING FUNCTION.
 *
 * When entering the site or refreshing the page we check
 * if we have a localStorage tasks object set up.
 * if not, we create one in base form.
 *
 * After that we render the board.
 */

function onEnteringSite() {
  if (!localStorage.getItem('tasks')) {
    setDefaultLocalStorageTasks()
  }

  renderBoard()
}

function setDefaultLocalStorageTasks() {
  localStorage.setItem('tasks', JSON.stringify({ todo: [], 'in-progress': [], done: [] }))
}

// -------------------
/*
 *
 * The main rendering functions
 *
 *
 */

/*
 *
 * renderBoard - creates a new board from localStorage
 * and renders the lists.
 * optional for the future - adding renderCalender() and
 * what we want to add to the board class
 *
 */
function renderBoard() {
  board = new Board(BASE_TASKS_LISTS, getLocalStorageBoardTasks())
  renderLists(LISTS_DIV)
  // renderCalender(calenderDiv)
}

function renderLists(fatherDiv) {
  removeAllChildNodes(LISTS_DIV)

  for (let list of board.lists) {
    renderList(list, fatherDiv)
  }
}

/*
 *
 * renderList - creates each task and insert it into ul
 * then renders to the LISTS_DIV
 *
 */

function renderList(list, fatherDiv) {
  fatherDiv.style.height = ''

  const deleteButton = createElement('button', ['delete'], ['delete-button', 'add-button'], {
    'data-role': 'delete-list',
  })
  const listHeader = createElement('h2', [formatName(list.name)], ['list-header'])
  const input = createElement('input', [], ['add-input'], {
    id: `add-${list.styleClass.slice(0, -1)}`,
    placeholder: 'new task',
  })
  const addButton = createElement('button', ['Add'], ['add-button'], {
    id: `submit-add-${list.styleClass.slice(0, list.styleClass.indexOf('-tasks'))}`,
    'data-role': 'adding-task',
  })

  const inputDiv = createElement('div', [input, addButton], ['input-div'])

  const tasks = createTasksFromList(list)

  const tasksList = createElement('ul', tasks, [list.styleClass, 'task-list'])
  const section = createElement('section', [deleteButton, listHeader, tasksList, inputDiv], ['section', 'droppable'], {
    'data-original-list-id': list.id,
  })

  fatherDiv.append(section)
}

function createTasksFromList(list) {
  const tasks = []
  for (let task of list.tasks) {
    tasks.push(
      createElement('li', [task.text], ['task', 'droppable'], {
        'data-original-task-id': task.id,
        onmousedown: 'clickDrugAndDropHandler(event)', // look down in handler functions
        ondragstart: 'onDragStart()', // to cancel the default browser action
      })
    )
  }
  return tasks
}

function formatName(listName) {
  return listName
    .split('-')
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ')
}

function formatListClassName(listName) {
  return formatListName(listName) + '-tasks'
}

function formatListName(name) {
  return name.replace(/[' ']/g, '-')
}

// -------------------
/*
 *
 *
 * board management functions.
 *
 *
 */

function addTask(listId, taskText) {
  board.addTask(listId, taskText)
  updateLocalStorageTasks()

  renderLists(LISTS_DIV)
}

function addNewList(listName, tasks = []) {
  board.addNewList(formatListName(listName), tasks, formatListClassName(listName))
  updateLocalStorageTasks()
  renderLists(LISTS_DIV)
}

function deleteList(listId) {
  board.deleteList(listId)
  updateLocalStorageTasks()
  renderLists(LISTS_DIV)
}

function deleteTask(taskId) {
  board.deleteTask(taskId)
  updateLocalStorageTasks()
  renderLists(LISTS_DIV)
}

function moveTask(taskId, newListId, newIndex = 0) {
  const task = board.getTask(taskId)
  const oldListId = board.getListIdFromTaskId(taskId)
  const oldList = board.getList(oldListId)
  const newList = board.getList(newListId)

  oldList.tasks.splice(oldList.tasks.indexOf(task), 1)
  newList.tasks.splice(newIndex, 0, task)

  updateLocalStorageTasks()
  renderLists(LISTS_DIV)
}

// -------------------
/*
 *
 *
 * event handling functions.
 *
 */

// this function is for the search input at the top of the page.
// onkeyup="filterLists()" --> look in html
function filterLists() {
  const allLiElements = document.querySelectorAll('.section li')

  const valueInput = document.querySelector('#search').value.toLowerCase().trim()

  for (let liElement of allLiElements) {
    const liValue = liElement.innerText.toLowerCase().trim()

    liElement.style.display = liValue.search(new RegExp(valueInput.replace(/\s+/, '|'))) != -1 ? '' : 'none'
  }
}

// will activate when user press right click on a task
// this will display the context menu.
function contextClickHandler(event) {
  const prevMenu = document.querySelector('.context-menu')
  if (prevMenu) prevMenu.remove()

  const target = event.target.closest('LI')

  if (!target) return

  event.preventDefault() // to prevent the browser default context menu.

  const menuOptionDelete = createMenuOption('delete task', removeTask)
  const contextMenu = createElement('div', [menuOptionDelete], ['context-menu'])

  function removeTask() {
    const taskId = getLiTaskId(target)
    deleteTask(taskId)
  }

  // this function is used to create menu options. feel free to add one of your own!

  contextMenu.style.position = 'absolute'
  contextMenu.style.zIndex = 1000
  document.body.append(contextMenu)

  contextMenu.style.left = event.pageX + 'px'
  contextMenu.style.top = event.pageY + 'px'

  document.addEventListener('click', exitContextMenuHandler)

  function exitContextMenuHandler(event) {
    contextMenu.remove()
    document.removeEventListener('onclick', exitContextMenuHandler)
  }
}

function createMenuOption(text, handler) {
  const menuOption = createElement('div', [`${text}`], [`${text.replace(/[' ']/g, '-')}-option`])
  menuOption.addEventListener('click', handler)
  return menuOption
}

// this is a event delegation handler for left click events on buttons
function clickEventHandler(event) {
  const target = event.target.closest('BUTTON')

  if (!target) return

  // Each html button element has a dataset role.
  // this way we determine the action to execute.
  const targetRole = target.dataset.role

  if (targetRole === 'adding-task') {
    const inputValue = target.parentElement.querySelector('input').value
    if (inputValue === '') {
      alert('Cant add an empty task!')
    } else {
      const relevantListId = getAncestorSectionListId(target)
      addTask(relevantListId, inputValue)
    }
  } else if (targetRole === 'adding-list') {
    const inputValue = document.getElementById('add-new-list').value
    if (inputValue === '') {
      alert('Cant add an empty task!')
    } else {
      addNewList(inputValue)
    }
  } else if (targetRole === 'saving-board') {
    putTasksToApi(getLocalStorageBoardTasksInNativeFormat())
    startLoadAnimation()
    setTimeout(() => {
      renderBoard()
    }, 100)
  } else if (targetRole === 'loading-board') {
    startLoadAnimation()

    getTasksFromApi().then((tasks) => {
      updateLocalStorageTasksInNativeFormat(tasks)
      renderBoard()
    })
  } else if (targetRole === 'delete-list') {
    let relevantListId = getAncestorSectionListId(target)
    deleteList(relevantListId)
  }
}

let mouseInTask = null // this is for monitoring if the mouse is pointing at the task

function altKeyDownEventHandler(event) {
  const keyPressed = event.key

  if (mouseInTask && keyPressed === 'Alt') {
    document.addEventListener('keydown', numberKeyDownEventHandler)
    document.addEventListener('keyup', altKeyUpEventHandler)
  }
}

function numberKeyDownEventHandler(event) {
  const keyPressed = event.key
  const listsIdsArray = getIdsArrayFromObjArray(board.lists).map((id) => String(id))
  if (mouseInTask && listsIdsArray.includes(keyPressed)) {
    const taskId = getLiTaskId(mouseInTask)
    const newListId = Number(keyPressed)

    moveTask(taskId, newListId)
    mouseInTask = null // the task has moved so the mouse is no longer inside it.
  }
}

function altKeyUpEventHandler(event) {
  const keyLifted = event.key
  if (keyLifted === 'Alt') {
    document.removeEventListener('keydown', numberKeyDownEventHandler)
    document.removeEventListener('keyup', altKeyUpEventHandler)
  }
}

/*
 *
 * here we get the task we are pointing at.
 *
 */

function mouseOverEventHandler(event) {
  const target = event.target

  if (target.tagName !== 'LI') return
  mouseInTask = target
}

function mouseOutEventHandler(event) {
  const target = event.target

  if (target.tagName !== 'LI') return

  mouseInTask = null
}

/*
 *
 * dbl click handlers
 *
 */

let dblClicked = false // later used to determine if to start drag and drop
let mouseDown = false // later used to determine if to start drag and drop

function dblClickEventHandler(event) {
  const target = event.target

  if (target.tagName !== 'LI') return

  dblClicked = true

  target.setAttribute('contenteditable', 'true')
  target.focus()

  // a function to select all the inside off the task.
  function selectElementContents(el) {
    const range = document.createRange()
    range.selectNodeContents(el)
    const sel = window.getSelection()
    sel.removeAllRanges()
    sel.addRange(range)
  }

  selectElementContents(target)
}

function focusOutEventHandler(event) {
  const target = event.target

  if (target.tagName !== 'LI') return

  // We will use this later when we do the drag and drop
  // to know if to start the drag or not.
  dblClicked = false

  target.setAttribute('contenteditable', 'false')

  // update the task text to mach the new one
  const task = getTaskFromLi(target)
  task.text = target.innerText

  updateLocalStorageTasks()
}

function getAncestorSectionListId(liElement) {
  return Number(liElement.closest('section').dataset.originalListId)
}

function getLiTaskId(liElement) {
  return Number(liElement.dataset.originalTaskId)
}

function getTaskFromLi(liElement) {
  const taskId = getLiTaskId(liElement)

  return board.getTask(taskId)
}

/*
 *
 * drag and drop handlers
 *
 * IMPORTANT! - these functions go on the HTML element itself
 * in renderList() we create tasks with an
 * "onclick" = "clickDrugAndDropHandler(event)" and
 * "ondragstart" = "onDragStart()" attributes.
 *
 */

// to prevent the browser default action
function onDragStart() {
  return false
}

function clickDrugAndDropHandler(event) {
  const target = event.target

  event.preventDefault() // to prevent the selecting action of click

  mouseDown = true

  document.addEventListener('mouseup', onMouseUp)

  function onMouseUp(event) {
    if (event.target === target) {
      mouseDown = false
    }
  }

  // the main drag and drop section!
  // we set a time out so the user can make a dblclick without starting to drag
  // I found that the best time is 300 ms. microsoft says its 500 ms ;)
  const TIME_FOR_USER_TO_DBL_CLICK = 300

  setTimeout(() => {
    if (dblClicked === true || mouseDown === false) return

    event.preventDefault()

    target.classList.add('moving-task')

    let shiftX = event.clientX - target.getBoundingClientRect().left
    let shiftY = event.clientY - target.getBoundingClientRect().top

    target.style.position = 'absolute'
    target.style.zIndex = 1000
    document.body.append(target)

    moveAt(event.pageX, event.pageY)

    // moves the task at (pageX, pageY) coordinates
    // taking initial shifts into account
    function moveAt(pageX, pageY) {
      target.style.left = pageX - shiftX + 'px'
      target.style.top = pageY - shiftY - 5 + 'px' // small adjustment for better performance
    }

    let currentDroppable = null

    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY)

      target.style.display = 'none'
      let elemBelow = document.elementFromPoint(event.clientX, event.clientY)
      target.style.display = ''

      // mousemove events may trigger out of the window (when the ball is dragged off-screen)
      // if clientX/clientY are out of the window, then elementFromPoint returns null
      if (!elemBelow) return

      // potential droppable are labeled with the class "droppable" (can be other logic)
      let droppableBelow = elemBelow.closest('.droppable')

      if (currentDroppable != droppableBelow) {
        // we're flying in or out...
        // note: both values can be null
        //   currentDroppable=null if we were not over a droppable before this event (e.g over an empty space)
        //   droppableBelow=null if we're not over a droppable now, during this event

        if (currentDroppable) {
          // the logic to process "flying out" of the droppable (remove highlight)
          leaveDroppable(currentDroppable)
        }
        currentDroppable = droppableBelow
        if (currentDroppable) {
          // the logic to process "flying in" of the droppable
          enterDroppable(currentDroppable)
        }
      }
    }

    // move the task on mousemove
    document.addEventListener('mousemove', onMouseMove)

    // drop the task, remove unneeded handlers
    target.onmouseup = function () {
      if (aboveDroppable) {
        if (currentDroppable.tagName === 'LI') {
          const newListId = getAncestorSectionListId(currentDroppable)
          const taskId = Number(target.dataset.originalTaskId)
          const droppableTaskId = getTaskFromLi(currentDroppable).id
          const droppableIndex = board.getTaskIndex(droppableTaskId)

          moveTask(taskId, newListId, droppableIndex + 1)
        } else {
          const newListId = getAncestorSectionListId(currentDroppable)
          const taskId = Number(target.dataset.originalTaskId)

          moveTask(taskId, newListId)
        }
      }

      document.removeEventListener('mousemove', onMouseMove)
      target.onmouseup = null
      target.remove()
      renderBoard()
    }
  }, TIME_FOR_USER_TO_DBL_CLICK)
}

let aboveDroppable = false

function enterDroppable(droppableElement) {
  aboveDroppable = true

  if (droppableElement.tagName === 'LI') {
    droppableElement.classList.add('below-drag')
  }
}

function leaveDroppable(droppableElement) {
  aboveDroppable = false

  if (droppableElement.tagName === 'LI') {
    droppableElement.classList.remove('below-drag')
  }
}

// -------------

// adding the event listeners:

LISTS_DIV.addEventListener('keydown', altKeyDownEventHandler)
LISTS_DIV.addEventListener('mouseover', mouseOverEventHandler)
LISTS_DIV.addEventListener('mouseout', mouseOutEventHandler)

document.addEventListener('click', clickEventHandler)
LISTS_DIV.addEventListener('contextmenu', contextClickHandler)

LISTS_DIV.addEventListener('dblclick', dblClickEventHandler)

LISTS_DIV.addEventListener('focusout', focusOutEventHandler)

// -------------------

/*
 *
 *
 * local storage management functions.
 *
 * this is an api for working with the local storage format.
 * the format:
 * {
 *    'todo' : [],
 *    'in-progress: [],
 *    'done': [],
 * }
 */

function updateLocalStorageTasks() {
  const tasks = {
    todo: [],
    'in-progress': [],
    done: [],
  }

  // the format requires 'todo' and not 'to-do' so we handle this here.
  for (let list of board.lists) {
    if (list.name === 'to-do') {
      tasks['todo'] = list.tasks.map((task) => task.text)
    } else {
      tasks[list.name] = list.tasks.map((task) => task.text)
    }
  }

  localStorage.setItem('tasks', JSON.stringify(tasks))
}

function getLocalStorageBoardTasks() {
  const localStorageTasks = getLocalStorageBoardTasksInNativeFormat()

  // we replace the property key: 'todo' with the key 'to-do',
  // so our Board class can handle it properly.
  delete Object.assign(localStorageTasks, { ['to-do']: localStorageTasks['todo'] })['todo']
  return localStorageTasks
}

// this functions will help us in managing the sever api.
function getLocalStorageBoardTasksInNativeFormat() {
  return JSON.parse(localStorage.getItem('tasks'))
}

function updateLocalStorageTasksInNativeFormat(newTasks) {
  localStorage.setItem('tasks', JSON.stringify(newTasks))
}

// -------------------
/*
 *
 *
 * server api methods.
 *
 * here we use fetch to send requests to the server.
 * important - if we get an error we alert the user and run the function again.
 *
 */

const TASKS_API_URL = 'https://json-bins.herokuapp.com/bin/614af7b24021ac0e6c080cbd'

async function request(method = '', data = null) {
  const options = {
    method: method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }

  if (data) {
    options['body'] = JSON.stringify(data)
  }

  try {
    return await fetch(TASKS_API_URL, options).then((response) => response.json())
  } catch {
    alert('server error - trying again')
    request(method, data)
  }
}

async function getTasksFromApi() {
  const loaded = await request('GET')
  return loaded.tasks
}

async function putTasksToApi(tasks) {
  await request('PUT', { tasks })
}

/*
 *
 * loading animation.
 * renders a cool animation to the LISTS_DIV
 *
 */

function startLoadAnimation() {
  let height = window.getComputedStyle(LISTS_DIV).getPropertyValue('height')

  removeAllChildNodes(LISTS_DIV)

  LISTS_DIV.style.height = height

  let barDiv = document.createElement('div')
  barDiv.classList.add('bar', 'loader')

  let circleDiv = document.createElement('div')
  circleDiv.classList.add('circle')

  let p = document.createElement('p')
  p.innerHTML = 'Loading'
  p.classList.add('loading-p')

  barDiv.append(circleDiv, p)
  LISTS_DIV.append(barDiv)
}

// -------------------
/*
 *
 * help functions
 *
 */

/**
 * Creates a new DOM element.
 *
 * Example usage:
 * createElement("div", ["just text", createElement(...)], ["nana", "banana"], {id: "bla"})
 *
 * @param {String} tagName - the type of the element
 * @param {Array} children - the child elements for the new element.
 *                           Each child can be a DOM element, or a string (if you just want a text element).
 * @param {Array} classes - the class list of the new element
 * @param {Object} attributes - the attributes for the new element
 */
function createElement(tagName, children = [], classes = [], attributes = {}) {
  const mainElement = document.createElement(tagName)
  children.forEach((childElement) => mainElement.append(childElement))
  mainElement.classList.add(...classes)
  for (let attribute in attributes) {
    mainElement.setAttribute(attribute, attributes[attribute])
  }
  return mainElement
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild)
  }
}

function generateNewIdInArrayOfObjects(objectArr) {
  /* Gets the largest id and returns it + 1. 
    i.e the returning id does not exists in the
    array and is unique.
    */

  if (objectArr.length === 0) return 1
  const idArray = getIdsArrayFromObjArray(objectArr)
  return Math.max(...idArray) + 1
}

function getObjectFromArray(objectId, objectArr) {
  // throws Error if Object does not exists.
  const requestedObject = objectArr.find((obj) => obj.id === objectId)
  if (requestedObject === undefined) throw new Error('so such object exists')
  return requestedObject
}

function getIdsArrayFromObjArray(objectArr) {
  return objectArr.map((obj) => obj.id)
}

function checkIfObjectIdTaken(id, getFunction) {
  // getFunction is a function expression. we will know where to search depending on the function
  try {
    getFunction(id) // remember: getFunction can be: [getList] and throws Error if no list was found.
    throw new Error('id already exist')
  } catch (error) {
    /* 
      Only if the error is because of "finding" the object
      then we continue and throw an Error.
      */
    if (error.message === 'id already exist') {
      throw new Error('id already exist')
    }
  }
}

function deepCopyObj(obj) {
  return JSON.parse(JSON.stringify(obj))
}

// -------------------

onEnteringSite()

// -------------------
