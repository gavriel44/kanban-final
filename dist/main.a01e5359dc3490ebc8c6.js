/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***************************!*\
  !*** ./solution/index.js ***!
  \***************************/
/* eslint-disable no-alert */
/* eslint-disable no-prototype-builtins */
/* eslint-disable consistent-return */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-use-before-define */
/* eslint-disable no-restricted-syntax */
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
    for (const listName of this.BASE_TASKS_LISTS) {
      this.addNewList(listName, [], formatListClassName(listName))
    }

    for (const newTaskListName in tasks) {
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
    const task = validateTask({ text: taskText, id: this.generateUniqueTaskId(listTasks) })
    listTasks.push(task)
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
    const allTasks = []

    for (const list of this.lists) {
      allTasks.push(...list.tasks)
    }
    return generateNewIdInArrayOfObjects(allTasks)
  }

  getTask(taskId) {
    const allTasks = []

    for (const list of this.lists) {
      allTasks.push(...list.tasks)
    }

    return getObjectFromArray(taskId, allTasks)
  }

  getListIdFromTaskId(taskId) {
    for (const list of this.lists) {
      for (const task of list.tasks) {
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

  for (const list of board.lists) {
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
  for (const task of list.tasks) {
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
  return `${formatListName(listName)}-tasks`
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

  for (const liElement of allLiElements) {
    const liValue = liElement.innerText.toLowerCase().trim()

    // eslint-disable-next-line eqeqeq
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

  contextMenu.style.left = `${event.pageX}px`
  contextMenu.style.top = `${event.pageY}px`

  document.addEventListener('click', exitContextMenuHandler)

  function exitContextMenuHandler() {
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
    const relevantListId = getAncestorSectionListId(target)
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
  const { target } = event

  if (target.tagName !== 'LI') return
  mouseInTask = target
}

function mouseOutEventHandler(event) {
  const { target } = event

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
  const { target } = event

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
  const { target } = event

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
  const { target } = event

  event.preventDefault() // to prevent the selecting action of click

  mouseDown = true

  document.addEventListener('mouseup', onMouseUp)

  // eslint-disable-next-line no-shadow
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

    const shiftX = event.clientX - target.getBoundingClientRect().left
    const shiftY = event.clientY - target.getBoundingClientRect().top

    target.style.position = 'absolute'
    target.style.zIndex = 1000
    document.body.append(target)

    moveAt(event.pageX, event.pageY)

    // moves the task at (pageX, pageY) coordinates
    // taking initial shifts into account
    function moveAt(pageX, pageY) {
      target.style.left = `${pageX - shiftX}px`
      target.style.top = `${pageY - shiftY - 5}px` // small adjustment for better performance
    }

    let currentDroppable = null

    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY)

      target.style.display = 'none'
      const elemBelow = document.elementFromPoint(event.clientX, event.clientY)
      target.style.display = ''

      // mousemove events may trigger out of the window (when the ball is dragged off-screen)
      // if clientX/clientY are out of the window, then elementFromPoint returns null
      if (!elemBelow) return

      // potential droppable are labeled with the class "droppable" (can be other logic)
      const droppableBelow = elemBelow.closest('.droppable')

      // eslint-disable-next-line eqeqeq
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
    target.onmouseup = function bar() {
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
  for (const list of board.lists) {
    if (list.name === 'to-do') {
      tasks.todo = list.tasks.map((task) => task.text)
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
  delete Object.assign(localStorageTasks, { 'to-do': localStorageTasks.todo }).todo
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
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }

  if (data) {
    options.body = JSON.stringify(data)
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
  const height = window.getComputedStyle(LISTS_DIV).getPropertyValue('height')

  removeAllChildNodes(LISTS_DIV)

  LISTS_DIV.style.height = height

  const barDiv = document.createElement('div')
  barDiv.classList.add('bar', 'loader')

  const circleDiv = document.createElement('div')
  circleDiv.classList.add('circle')

  const p = document.createElement('p')
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

  for (const attribute in attributes) {
    if (attributes.hasOwnProperty(attribute)) {
      mainElement.setAttribute(attribute, attributes[attribute])
    }
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
  if (requestedObject === undefined) throw new Error('no such object exists')
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

/*
 *
 * validation functions
 *
 */

function validateTask(task) {
  if (typeof task === 'object' && task.text.length) {
    return task
  }

  throw Error('Invalid task')
}

// -------------------

onEnteringSite()

// -------------------

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5hMDFlNTM1OWRjMzQ5MGViYzhjNi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsOEJBQThCLDJCQUEyQixJQUFJLCtCQUErQixJQUFJO0FBQzlHO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0NBQWdDLDBEQUEwRDtBQUMxRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsT0FBTztBQUNsRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsaURBQWlELHVDQUF1QztBQUN4Rjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGVBQWUsNkJBQTZCO0FBQzVDO0FBQ0EsR0FBRztBQUNIO0FBQ0Esc0JBQXNCLDREQUE0RDtBQUNsRjtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWSx5QkFBeUI7QUFDckM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsOEJBQThCLFlBQVk7QUFDMUMsNkJBQTZCLFlBQVk7O0FBRXpDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4Q0FBOEMsS0FBSyxRQUFRLDRCQUE0QjtBQUN2RjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBVSxTQUFTOztBQUVuQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVLFNBQVM7O0FBRW5COztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsVUFBVSxTQUFTOztBQUVuQjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFVBQVUsU0FBUzs7QUFFbkI7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBVSxTQUFTOztBQUVuQjs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNFQUFzRTtBQUN0RTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixlQUFlO0FBQzVDLDRCQUE0QixtQkFBbUI7QUFDL0M7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEMsaUNBQWlDO0FBQzdFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlCQUF5QixPQUFPO0FBQ2hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdGQUFnRixVQUFVO0FBQzFGO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsT0FBTztBQUNsQjtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLFFBQVE7QUFDbkI7QUFDQSw0RUFBNEU7QUFDNUU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maW5hbC8uL3NvbHV0aW9uL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLWFsZXJ0ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgKi9cbi8qIGVzbGludC1kaXNhYmxlIGNvbnNpc3RlbnQtcmV0dXJuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1zaGFkb3cgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtc3ludGF4ICovXG4vKlxuICogVGhlIG1hbmUgQm9hcmQgY2xhc3MuXG4gKlxuICogZXZlcnkgcmVuZGVyIG9mZiB0aGUgVUkgaXMgZG9uZSB0aHJ1IHRoZSBib2FyZCBvYmplY3RcbiAqIHRoZSBiYXNpYyBzdHJ1Y3R1cmUgaXMgbGlrZSB0aGlzOlxuICpcbiAqIGJvYXJkID0ge1xuICogIGxpc3RzOiBbeyBpZDogMSwgbmFtZTogJ2RvbmUnLCB0YXNrczogW3tpZDogMSwgdGV4dDogJ0kgYW0gYSB0YXNrJ30sIHt9Li4uXSwgc3R5bGVjbGFzczogJ2RvbmUtdGFza3MnfSwge30sIC4uLl0sXG4gKiAgYmFzZVRhc2tzTGlzdCA9IFtdXG4gKiB9XG4gKlxuICovXG5cbmNsYXNzIEJvYXJkIHtcbiAgY29uc3RydWN0b3IoQkFTRV9UQVNLU19MSVNUUywgdGFza3MgPSB7fSkge1xuICAgIC8qXG4gICAgdGhlIGZpcnN0IHRoaW5nIHdlIGRvIGlzIHRvIGFkZCB0aGUgYmFzZSBsaXN0cyBzbyB0aGV5IGFsd2F5c1xuICAgIGJlIGluIHRoZSBzYW1lIG9yZGVyIHdoZW4gd2UgcmVuZGVyIHRoZW0uICh0b2RvLCBpbi1wcm9ncmVzcywgZG9uZSlcbiAgICBUaGUgcHJvYmxlbSBpcyB0aGlzOlxuICAgIHdoZW4gd2Ugc2F2ZSB0aGUgYm9hcmQgaW4gdGhlIGxvY2FsU3RvcmFnZSB3ZVxuICAgIGNhbnQga2VlcCB0aGUgb3JkZXIsIHdlIHNhdmUgaW4gb2JqZWN0IGZvcm0sIHNvIHdlIGZvcmNlIHRoZSBvcmRlciBvZmYgdGhlIGZpcnN0IGJhc2UgbGlzdHMuXG5cbiAgICAqKnRhc2tzIC0gdGhlIGxpc3RzIGluIHRoZSBsb2NhbFN0b3JhZ2UgZm9ybWF0LiBXZSBrZWVwIHRoZSBuYW1lIGZvciBjbGFyaXR5LFxuICAgIGJ1dCBmb3IgZWFjaCBwcm9wZXJ0eSBvZiB0aGUgb2JqZWN0LCB0YXNrcywgd2UgY3JlYXRlIGEgbmV3IGxpc3QuXG5cbiAgICB+IHRhc2tzIG9iamVjdCBleGFtcGxlOlxuXG4gICAgdGFza3MgPSB7XG4gICAgICB0b2RvOiBbXSxcbiAgICAgICdpbi1wcm9ncmVzcywgW1wiaW0gYSB0YXNrXCIsIFwibWUgdG9cIl1dLFxuICAgICAgZG9uZTogW10sXG4gICAgICAnbGlzdC1pLWFkZGVkJzogW1wiaGVsbG8gd29ybGRcIl0sXG4gICAgfVxuICAgIFxuICAgICovXG4gICAgdGhpcy5CQVNFX1RBU0tTX0xJU1RTID0gQkFTRV9UQVNLU19MSVNUU1xuICAgIHRoaXMubGlzdHMgPSBbXVxuICAgIGZvciAoY29uc3QgbGlzdE5hbWUgb2YgdGhpcy5CQVNFX1RBU0tTX0xJU1RTKSB7XG4gICAgICB0aGlzLmFkZE5ld0xpc3QobGlzdE5hbWUsIFtdLCBmb3JtYXRMaXN0Q2xhc3NOYW1lKGxpc3ROYW1lKSlcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IG5ld1Rhc2tMaXN0TmFtZSBpbiB0YXNrcykge1xuICAgICAgaWYgKHRoaXMuQkFTRV9UQVNLU19MSVNUUy5pbmNsdWRlcyhuZXdUYXNrTGlzdE5hbWUpKSB7XG4gICAgICAgIGNvbnN0IGFscmVhZHlFeGlzdHNMaXN0ID0gdGhpcy5nZXRMaXN0QnlOYW1lKG5ld1Rhc2tMaXN0TmFtZSlcbiAgICAgICAgdGFza3NbbmV3VGFza0xpc3ROYW1lXS5mb3JFYWNoKCh0YXNrVGV4dCkgPT4gdGhpcy5hZGRUYXNrKGFscmVhZHlFeGlzdHNMaXN0LmlkLCB0YXNrVGV4dCkpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmFkZE5ld0xpc3QobmV3VGFza0xpc3ROYW1lLCBbXSwgZm9ybWF0TGlzdENsYXNzTmFtZShuZXdUYXNrTGlzdE5hbWUpKVxuICAgICAgICBjb25zdCBuZXdFeGlzdGluZ0xpc3QgPSB0aGlzLmdldExpc3RCeU5hbWUobmV3VGFza0xpc3ROYW1lKVxuICAgICAgICB0YXNrc1tuZXdUYXNrTGlzdE5hbWVdLmZvckVhY2goKHRhc2tUZXh0KSA9PiB0aGlzLmFkZFRhc2sobmV3RXhpc3RpbmdMaXN0LmlkLCB0YXNrVGV4dCkpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYWRkVGFzayhsaXN0SWQsIHRhc2tUZXh0KSB7XG4gICAgY29uc3QgbGlzdFRhc2tzID0gdGhpcy5nZXRMaXN0KGxpc3RJZCkudGFza3NcbiAgICBjb25zdCB0YXNrID0gdmFsaWRhdGVUYXNrKHsgdGV4dDogdGFza1RleHQsIGlkOiB0aGlzLmdlbmVyYXRlVW5pcXVlVGFza0lkKGxpc3RUYXNrcykgfSlcbiAgICBsaXN0VGFza3MucHVzaCh0YXNrKVxuICB9XG5cbiAgZ2V0TGlzdChsaXN0SWQpIHtcbiAgICByZXR1cm4gZ2V0T2JqZWN0RnJvbUFycmF5KGxpc3RJZCwgdGhpcy5saXN0cylcbiAgfVxuXG4gIGRlbGV0ZUxpc3QobGlzdElkKSB7XG4gICAgdGhpcy5saXN0cy5zcGxpY2UodGhpcy5saXN0cy5pbmRleE9mKHRoaXMuZ2V0TGlzdChsaXN0SWQpKSwgMSlcbiAgfVxuXG4gIGRlbGV0ZVRhc2sodGFza0lkKSB7XG4gICAgY29uc3QgbGlzdElkID0gdGhpcy5nZXRMaXN0SWRGcm9tVGFza0lkKHRhc2tJZClcbiAgICBjb25zdCBsaXN0ID0gdGhpcy5nZXRMaXN0KGxpc3RJZClcbiAgICBjb25zdCB0YXNrID0gdGhpcy5nZXRUYXNrKHRhc2tJZClcblxuICAgIGxpc3QudGFza3Muc3BsaWNlKGxpc3QudGFza3MuaW5kZXhPZih0YXNrKSwgMSlcbiAgfVxuXG4gIGdlbmVyYXRlVW5pcXVlVGFza0lkKCkge1xuICAgIGNvbnN0IGFsbFRhc2tzID0gW11cblxuICAgIGZvciAoY29uc3QgbGlzdCBvZiB0aGlzLmxpc3RzKSB7XG4gICAgICBhbGxUYXNrcy5wdXNoKC4uLmxpc3QudGFza3MpXG4gICAgfVxuICAgIHJldHVybiBnZW5lcmF0ZU5ld0lkSW5BcnJheU9mT2JqZWN0cyhhbGxUYXNrcylcbiAgfVxuXG4gIGdldFRhc2sodGFza0lkKSB7XG4gICAgY29uc3QgYWxsVGFza3MgPSBbXVxuXG4gICAgZm9yIChjb25zdCBsaXN0IG9mIHRoaXMubGlzdHMpIHtcbiAgICAgIGFsbFRhc2tzLnB1c2goLi4ubGlzdC50YXNrcylcbiAgICB9XG5cbiAgICByZXR1cm4gZ2V0T2JqZWN0RnJvbUFycmF5KHRhc2tJZCwgYWxsVGFza3MpXG4gIH1cblxuICBnZXRMaXN0SWRGcm9tVGFza0lkKHRhc2tJZCkge1xuICAgIGZvciAoY29uc3QgbGlzdCBvZiB0aGlzLmxpc3RzKSB7XG4gICAgICBmb3IgKGNvbnN0IHRhc2sgb2YgbGlzdC50YXNrcykge1xuICAgICAgICBpZiAodGFzay5pZCA9PT0gdGFza0lkKSByZXR1cm4gbGlzdC5pZFxuICAgICAgfVxuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoYHRoZXJlIGlzIG5vIHRhc2tJZDogJHt0YXNrSWR9YClcbiAgfVxuXG4gIGdldFRhc2tJbmRleCh0YXNrSWQpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0KHRoaXMuZ2V0TGlzdElkRnJvbVRhc2tJZCh0YXNrSWQpKS50YXNrcy5pbmRleE9mKHRoaXMuZ2V0VGFzayh0YXNrSWQpKVxuICB9XG5cbiAgZ2V0TGlzdEJ5TmFtZShsaXN0TmFtZSkge1xuICAgIHJldHVybiB0aGlzLmxpc3RzLmZpbmQoKGxpc3QpID0+IGxpc3QubmFtZSA9PT0gbGlzdE5hbWUpXG4gIH1cblxuICBhZGROZXdMaXN0KG5hbWUsIHRhc2tzLCBzdHlsZUNsYXNzLCBpZCA9IGdlbmVyYXRlTmV3SWRJbkFycmF5T2ZPYmplY3RzKHRoaXMubGlzdHMpKSB7XG4gICAgY2hlY2tJZk9iamVjdElkVGFrZW4oaWQsIHRoaXMuZ2V0TGlzdClcblxuICAgIHRoaXMubGlzdHMucHVzaCh7XG4gICAgICBpZCxcbiAgICAgIG5hbWUsXG4gICAgICB0YXNrcyxcbiAgICAgIHN0eWxlQ2xhc3MsXG4gICAgfSlcbiAgfVxufVxuXG4vLyBjb25zdGFudHMgZm9yIHVzIHRvIHVzZS5cbmNvbnN0IExJU1RTX0RJViA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0cy1kaXYnKVxuY29uc3QgQkFTRV9UQVNLU19MSVNUUyA9IFsndG8tZG8nLCAnaW4tcHJvZ3Jlc3MnLCAnZG9uZSddXG5sZXQgYm9hcmRcblxuLypcbiAqIEVOVEVSSU5HIEZVTkNUSU9OLlxuICpcbiAqIFdoZW4gZW50ZXJpbmcgdGhlIHNpdGUgb3IgcmVmcmVzaGluZyB0aGUgcGFnZSB3ZSBjaGVja1xuICogaWYgd2UgaGF2ZSBhIGxvY2FsU3RvcmFnZSB0YXNrcyBvYmplY3Qgc2V0IHVwLlxuICogaWYgbm90LCB3ZSBjcmVhdGUgb25lIGluIGJhc2UgZm9ybS5cbiAqXG4gKiBBZnRlciB0aGF0IHdlIHJlbmRlciB0aGUgYm9hcmQuXG4gKi9cblxuZnVuY3Rpb24gb25FbnRlcmluZ1NpdGUoKSB7XG4gIGlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykpIHtcbiAgICBzZXREZWZhdWx0TG9jYWxTdG9yYWdlVGFza3MoKVxuICB9XG5cbiAgcmVuZGVyQm9hcmQoKVxufVxuXG5mdW5jdGlvbiBzZXREZWZhdWx0TG9jYWxTdG9yYWdlVGFza3MoKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHsgdG9kbzogW10sICdpbi1wcm9ncmVzcyc6IFtdLCBkb25lOiBbXSB9KSlcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLVxuLypcbiAqXG4gKiBUaGUgbWFpbiByZW5kZXJpbmcgZnVuY3Rpb25zXG4gKlxuICpcbiAqL1xuXG4vKlxuICpcbiAqIHJlbmRlckJvYXJkIC0gY3JlYXRlcyBhIG5ldyBib2FyZCBmcm9tIGxvY2FsU3RvcmFnZVxuICogYW5kIHJlbmRlcnMgdGhlIGxpc3RzLlxuICogb3B0aW9uYWwgZm9yIHRoZSBmdXR1cmUgLSBhZGRpbmcgcmVuZGVyQ2FsZW5kZXIoKSBhbmRcbiAqIHdoYXQgd2Ugd2FudCB0byBhZGQgdG8gdGhlIGJvYXJkIGNsYXNzXG4gKlxuICovXG5mdW5jdGlvbiByZW5kZXJCb2FyZCgpIHtcbiAgYm9hcmQgPSBuZXcgQm9hcmQoQkFTRV9UQVNLU19MSVNUUywgZ2V0TG9jYWxTdG9yYWdlQm9hcmRUYXNrcygpKVxuICByZW5kZXJMaXN0cyhMSVNUU19ESVYpXG4gIC8vIHJlbmRlckNhbGVuZGVyKGNhbGVuZGVyRGl2KVxufVxuXG5mdW5jdGlvbiByZW5kZXJMaXN0cyhmYXRoZXJEaXYpIHtcbiAgcmVtb3ZlQWxsQ2hpbGROb2RlcyhMSVNUU19ESVYpXG5cbiAgZm9yIChjb25zdCBsaXN0IG9mIGJvYXJkLmxpc3RzKSB7XG4gICAgcmVuZGVyTGlzdChsaXN0LCBmYXRoZXJEaXYpXG4gIH1cbn1cblxuLypcbiAqXG4gKiByZW5kZXJMaXN0IC0gY3JlYXRlcyBlYWNoIHRhc2sgYW5kIGluc2VydCBpdCBpbnRvIHVsXG4gKiB0aGVuIHJlbmRlcnMgdG8gdGhlIExJU1RTX0RJVlxuICpcbiAqL1xuXG5mdW5jdGlvbiByZW5kZXJMaXN0KGxpc3QsIGZhdGhlckRpdikge1xuICBmYXRoZXJEaXYuc3R5bGUuaGVpZ2h0ID0gJydcblxuICBjb25zdCBkZWxldGVCdXR0b24gPSBjcmVhdGVFbGVtZW50KCdidXR0b24nLCBbJ2RlbGV0ZSddLCBbJ2RlbGV0ZS1idXR0b24nLCAnYWRkLWJ1dHRvbiddLCB7XG4gICAgJ2RhdGEtcm9sZSc6ICdkZWxldGUtbGlzdCcsXG4gIH0pXG4gIGNvbnN0IGxpc3RIZWFkZXIgPSBjcmVhdGVFbGVtZW50KCdoMicsIFtmb3JtYXROYW1lKGxpc3QubmFtZSldLCBbJ2xpc3QtaGVhZGVyJ10pXG4gIGNvbnN0IGlucHV0ID0gY3JlYXRlRWxlbWVudCgnaW5wdXQnLCBbXSwgWydhZGQtaW5wdXQnXSwge1xuICAgIGlkOiBgYWRkLSR7bGlzdC5zdHlsZUNsYXNzLnNsaWNlKDAsIC0xKX1gLFxuICAgIHBsYWNlaG9sZGVyOiAnbmV3IHRhc2snLFxuICB9KVxuICBjb25zdCBhZGRCdXR0b24gPSBjcmVhdGVFbGVtZW50KCdidXR0b24nLCBbJ0FkZCddLCBbJ2FkZC1idXR0b24nXSwge1xuICAgIGlkOiBgc3VibWl0LWFkZC0ke2xpc3Quc3R5bGVDbGFzcy5zbGljZSgwLCBsaXN0LnN0eWxlQ2xhc3MuaW5kZXhPZignLXRhc2tzJykpfWAsXG4gICAgJ2RhdGEtcm9sZSc6ICdhZGRpbmctdGFzaycsXG4gIH0pXG5cbiAgY29uc3QgaW5wdXREaXYgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBbaW5wdXQsIGFkZEJ1dHRvbl0sIFsnaW5wdXQtZGl2J10pXG5cbiAgY29uc3QgdGFza3MgPSBjcmVhdGVUYXNrc0Zyb21MaXN0KGxpc3QpXG5cbiAgY29uc3QgdGFza3NMaXN0ID0gY3JlYXRlRWxlbWVudCgndWwnLCB0YXNrcywgW2xpc3Quc3R5bGVDbGFzcywgJ3Rhc2stbGlzdCddKVxuICBjb25zdCBzZWN0aW9uID0gY3JlYXRlRWxlbWVudCgnc2VjdGlvbicsIFtkZWxldGVCdXR0b24sIGxpc3RIZWFkZXIsIHRhc2tzTGlzdCwgaW5wdXREaXZdLCBbJ3NlY3Rpb24nLCAnZHJvcHBhYmxlJ10sIHtcbiAgICAnZGF0YS1vcmlnaW5hbC1saXN0LWlkJzogbGlzdC5pZCxcbiAgfSlcblxuICBmYXRoZXJEaXYuYXBwZW5kKHNlY3Rpb24pXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2tzRnJvbUxpc3QobGlzdCkge1xuICBjb25zdCB0YXNrcyA9IFtdXG4gIGZvciAoY29uc3QgdGFzayBvZiBsaXN0LnRhc2tzKSB7XG4gICAgdGFza3MucHVzaChcbiAgICAgIGNyZWF0ZUVsZW1lbnQoJ2xpJywgW3Rhc2sudGV4dF0sIFsndGFzaycsICdkcm9wcGFibGUnXSwge1xuICAgICAgICAnZGF0YS1vcmlnaW5hbC10YXNrLWlkJzogdGFzay5pZCxcbiAgICAgICAgb25tb3VzZWRvd246ICdjbGlja0RydWdBbmREcm9wSGFuZGxlcihldmVudCknLCAvLyBsb29rIGRvd24gaW4gaGFuZGxlciBmdW5jdGlvbnNcbiAgICAgICAgb25kcmFnc3RhcnQ6ICdvbkRyYWdTdGFydCgpJywgLy8gdG8gY2FuY2VsIHRoZSBkZWZhdWx0IGJyb3dzZXIgYWN0aW9uXG4gICAgICB9KVxuICAgIClcbiAgfVxuICByZXR1cm4gdGFza3Ncbn1cblxuZnVuY3Rpb24gZm9ybWF0TmFtZShsaXN0TmFtZSkge1xuICByZXR1cm4gbGlzdE5hbWVcbiAgICAuc3BsaXQoJy0nKVxuICAgIC5tYXAoKHdvcmQpID0+IHdvcmRbMF0udG9VcHBlckNhc2UoKSArIHdvcmQuc2xpY2UoMSkpXG4gICAgLmpvaW4oJyAnKVxufVxuXG5mdW5jdGlvbiBmb3JtYXRMaXN0Q2xhc3NOYW1lKGxpc3ROYW1lKSB7XG4gIHJldHVybiBgJHtmb3JtYXRMaXN0TmFtZShsaXN0TmFtZSl9LXRhc2tzYFxufVxuXG5mdW5jdGlvbiBmb3JtYXRMaXN0TmFtZShuYW1lKSB7XG4gIHJldHVybiBuYW1lLnJlcGxhY2UoL1snICddL2csICctJylcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLVxuLypcbiAqXG4gKlxuICogYm9hcmQgbWFuYWdlbWVudCBmdW5jdGlvbnMuXG4gKlxuICpcbiAqL1xuXG5mdW5jdGlvbiBhZGRUYXNrKGxpc3RJZCwgdGFza1RleHQpIHtcbiAgYm9hcmQuYWRkVGFzayhsaXN0SWQsIHRhc2tUZXh0KVxuICB1cGRhdGVMb2NhbFN0b3JhZ2VUYXNrcygpXG5cbiAgcmVuZGVyTGlzdHMoTElTVFNfRElWKVxufVxuXG5mdW5jdGlvbiBhZGROZXdMaXN0KGxpc3ROYW1lLCB0YXNrcyA9IFtdKSB7XG4gIGJvYXJkLmFkZE5ld0xpc3QoZm9ybWF0TGlzdE5hbWUobGlzdE5hbWUpLCB0YXNrcywgZm9ybWF0TGlzdENsYXNzTmFtZShsaXN0TmFtZSkpXG4gIHVwZGF0ZUxvY2FsU3RvcmFnZVRhc2tzKClcbiAgcmVuZGVyTGlzdHMoTElTVFNfRElWKVxufVxuXG5mdW5jdGlvbiBkZWxldGVMaXN0KGxpc3RJZCkge1xuICBib2FyZC5kZWxldGVMaXN0KGxpc3RJZClcbiAgdXBkYXRlTG9jYWxTdG9yYWdlVGFza3MoKVxuICByZW5kZXJMaXN0cyhMSVNUU19ESVYpXG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVRhc2sodGFza0lkKSB7XG4gIGJvYXJkLmRlbGV0ZVRhc2sodGFza0lkKVxuICB1cGRhdGVMb2NhbFN0b3JhZ2VUYXNrcygpXG4gIHJlbmRlckxpc3RzKExJU1RTX0RJVilcbn1cblxuZnVuY3Rpb24gbW92ZVRhc2sodGFza0lkLCBuZXdMaXN0SWQsIG5ld0luZGV4ID0gMCkge1xuICBjb25zdCB0YXNrID0gYm9hcmQuZ2V0VGFzayh0YXNrSWQpXG4gIGNvbnN0IG9sZExpc3RJZCA9IGJvYXJkLmdldExpc3RJZEZyb21UYXNrSWQodGFza0lkKVxuICBjb25zdCBvbGRMaXN0ID0gYm9hcmQuZ2V0TGlzdChvbGRMaXN0SWQpXG4gIGNvbnN0IG5ld0xpc3QgPSBib2FyZC5nZXRMaXN0KG5ld0xpc3RJZClcblxuICBvbGRMaXN0LnRhc2tzLnNwbGljZShvbGRMaXN0LnRhc2tzLmluZGV4T2YodGFzayksIDEpXG4gIG5ld0xpc3QudGFza3Muc3BsaWNlKG5ld0luZGV4LCAwLCB0YXNrKVxuXG4gIHVwZGF0ZUxvY2FsU3RvcmFnZVRhc2tzKClcbiAgcmVuZGVyTGlzdHMoTElTVFNfRElWKVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tXG4vKlxuICpcbiAqXG4gKiBldmVudCBoYW5kbGluZyBmdW5jdGlvbnMuXG4gKlxuICovXG5cbi8vIHRoaXMgZnVuY3Rpb24gaXMgZm9yIHRoZSBzZWFyY2ggaW5wdXQgYXQgdGhlIHRvcCBvZiB0aGUgcGFnZS5cbi8vIG9ua2V5dXA9XCJmaWx0ZXJMaXN0cygpXCIgLS0+IGxvb2sgaW4gaHRtbFxuZnVuY3Rpb24gZmlsdGVyTGlzdHMoKSB7XG4gIGNvbnN0IGFsbExpRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VjdGlvbiBsaScpXG5cbiAgY29uc3QgdmFsdWVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2gnKS52YWx1ZS50b0xvd2VyQ2FzZSgpLnRyaW0oKVxuXG4gIGZvciAoY29uc3QgbGlFbGVtZW50IG9mIGFsbExpRWxlbWVudHMpIHtcbiAgICBjb25zdCBsaVZhbHVlID0gbGlFbGVtZW50LmlubmVyVGV4dC50b0xvd2VyQ2FzZSgpLnRyaW0oKVxuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVxZXFlcVxuICAgIGxpRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gbGlWYWx1ZS5zZWFyY2gobmV3IFJlZ0V4cCh2YWx1ZUlucHV0LnJlcGxhY2UoL1xccysvLCAnfCcpKSkgIT0gLTEgPyAnJyA6ICdub25lJ1xuICB9XG59XG5cbi8vIHdpbGwgYWN0aXZhdGUgd2hlbiB1c2VyIHByZXNzIHJpZ2h0IGNsaWNrIG9uIGEgdGFza1xuLy8gdGhpcyB3aWxsIGRpc3BsYXkgdGhlIGNvbnRleHQgbWVudS5cbmZ1bmN0aW9uIGNvbnRleHRDbGlja0hhbmRsZXIoZXZlbnQpIHtcbiAgY29uc3QgcHJldk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGV4dC1tZW51JylcbiAgaWYgKHByZXZNZW51KSBwcmV2TWVudS5yZW1vdmUoKVxuXG4gIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCdMSScpXG5cbiAgaWYgKCF0YXJnZXQpIHJldHVyblxuXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCkgLy8gdG8gcHJldmVudCB0aGUgYnJvd3NlciBkZWZhdWx0IGNvbnRleHQgbWVudS5cblxuICBjb25zdCBtZW51T3B0aW9uRGVsZXRlID0gY3JlYXRlTWVudU9wdGlvbignZGVsZXRlIHRhc2snLCByZW1vdmVUYXNrKVxuICBjb25zdCBjb250ZXh0TWVudSA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIFttZW51T3B0aW9uRGVsZXRlXSwgWydjb250ZXh0LW1lbnUnXSlcblxuICBmdW5jdGlvbiByZW1vdmVUYXNrKCkge1xuICAgIGNvbnN0IHRhc2tJZCA9IGdldExpVGFza0lkKHRhcmdldClcbiAgICBkZWxldGVUYXNrKHRhc2tJZClcbiAgfVxuXG4gIC8vIHRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgbWVudSBvcHRpb25zLiBmZWVsIGZyZWUgdG8gYWRkIG9uZSBvZiB5b3VyIG93biFcblxuICBjb250ZXh0TWVudS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSdcbiAgY29udGV4dE1lbnUuc3R5bGUuekluZGV4ID0gMTAwMFxuICBkb2N1bWVudC5ib2R5LmFwcGVuZChjb250ZXh0TWVudSlcblxuICBjb250ZXh0TWVudS5zdHlsZS5sZWZ0ID0gYCR7ZXZlbnQucGFnZVh9cHhgXG4gIGNvbnRleHRNZW51LnN0eWxlLnRvcCA9IGAke2V2ZW50LnBhZ2VZfXB4YFxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXhpdENvbnRleHRNZW51SGFuZGxlcilcblxuICBmdW5jdGlvbiBleGl0Q29udGV4dE1lbnVIYW5kbGVyKCkge1xuICAgIGNvbnRleHRNZW51LnJlbW92ZSgpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignb25jbGljaycsIGV4aXRDb250ZXh0TWVudUhhbmRsZXIpXG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlTWVudU9wdGlvbih0ZXh0LCBoYW5kbGVyKSB7XG4gIGNvbnN0IG1lbnVPcHRpb24gPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBbYCR7dGV4dH1gXSwgW2Ake3RleHQucmVwbGFjZSgvWycgJ10vZywgJy0nKX0tb3B0aW9uYF0pXG4gIG1lbnVPcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVyKVxuICByZXR1cm4gbWVudU9wdGlvblxufVxuXG4vLyB0aGlzIGlzIGEgZXZlbnQgZGVsZWdhdGlvbiBoYW5kbGVyIGZvciBsZWZ0IGNsaWNrIGV2ZW50cyBvbiBidXR0b25zXG5mdW5jdGlvbiBjbGlja0V2ZW50SGFuZGxlcihldmVudCkge1xuICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnQlVUVE9OJylcblxuICBpZiAoIXRhcmdldCkgcmV0dXJuXG5cbiAgLy8gRWFjaCBodG1sIGJ1dHRvbiBlbGVtZW50IGhhcyBhIGRhdGFzZXQgcm9sZS5cbiAgLy8gdGhpcyB3YXkgd2UgZGV0ZXJtaW5lIHRoZSBhY3Rpb24gdG8gZXhlY3V0ZS5cbiAgY29uc3QgdGFyZ2V0Um9sZSA9IHRhcmdldC5kYXRhc2V0LnJvbGVcblxuICBpZiAodGFyZ2V0Um9sZSA9PT0gJ2FkZGluZy10YXNrJykge1xuICAgIGNvbnN0IGlucHV0VmFsdWUgPSB0YXJnZXQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLnZhbHVlXG4gICAgaWYgKGlucHV0VmFsdWUgPT09ICcnKSB7XG4gICAgICBhbGVydCgnQ2FudCBhZGQgYW4gZW1wdHkgdGFzayEnKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCByZWxldmFudExpc3RJZCA9IGdldEFuY2VzdG9yU2VjdGlvbkxpc3RJZCh0YXJnZXQpXG4gICAgICBhZGRUYXNrKHJlbGV2YW50TGlzdElkLCBpbnB1dFZhbHVlKVxuICAgIH1cbiAgfSBlbHNlIGlmICh0YXJnZXRSb2xlID09PSAnYWRkaW5nLWxpc3QnKSB7XG4gICAgY29uc3QgaW5wdXRWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtbmV3LWxpc3QnKS52YWx1ZVxuICAgIGlmIChpbnB1dFZhbHVlID09PSAnJykge1xuICAgICAgYWxlcnQoJ0NhbnQgYWRkIGFuIGVtcHR5IHRhc2shJylcbiAgICB9IGVsc2Uge1xuICAgICAgYWRkTmV3TGlzdChpbnB1dFZhbHVlKVxuICAgIH1cbiAgfSBlbHNlIGlmICh0YXJnZXRSb2xlID09PSAnc2F2aW5nLWJvYXJkJykge1xuICAgIHB1dFRhc2tzVG9BcGkoZ2V0TG9jYWxTdG9yYWdlQm9hcmRUYXNrc0luTmF0aXZlRm9ybWF0KCkpXG4gICAgc3RhcnRMb2FkQW5pbWF0aW9uKClcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHJlbmRlckJvYXJkKClcbiAgICB9LCAxMDApXG4gIH0gZWxzZSBpZiAodGFyZ2V0Um9sZSA9PT0gJ2xvYWRpbmctYm9hcmQnKSB7XG4gICAgc3RhcnRMb2FkQW5pbWF0aW9uKClcblxuICAgIGdldFRhc2tzRnJvbUFwaSgpLnRoZW4oKHRhc2tzKSA9PiB7XG4gICAgICB1cGRhdGVMb2NhbFN0b3JhZ2VUYXNrc0luTmF0aXZlRm9ybWF0KHRhc2tzKVxuICAgICAgcmVuZGVyQm9hcmQoKVxuICAgIH0pXG4gIH0gZWxzZSBpZiAodGFyZ2V0Um9sZSA9PT0gJ2RlbGV0ZS1saXN0Jykge1xuICAgIGNvbnN0IHJlbGV2YW50TGlzdElkID0gZ2V0QW5jZXN0b3JTZWN0aW9uTGlzdElkKHRhcmdldClcbiAgICBkZWxldGVMaXN0KHJlbGV2YW50TGlzdElkKVxuICB9XG59XG5cbmxldCBtb3VzZUluVGFzayA9IG51bGwgLy8gdGhpcyBpcyBmb3IgbW9uaXRvcmluZyBpZiB0aGUgbW91c2UgaXMgcG9pbnRpbmcgYXQgdGhlIHRhc2tcblxuZnVuY3Rpb24gYWx0S2V5RG93bkV2ZW50SGFuZGxlcihldmVudCkge1xuICBjb25zdCBrZXlQcmVzc2VkID0gZXZlbnQua2V5XG5cbiAgaWYgKG1vdXNlSW5UYXNrICYmIGtleVByZXNzZWQgPT09ICdBbHQnKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG51bWJlcktleURvd25FdmVudEhhbmRsZXIpXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBhbHRLZXlVcEV2ZW50SGFuZGxlcilcbiAgfVxufVxuXG5mdW5jdGlvbiBudW1iZXJLZXlEb3duRXZlbnRIYW5kbGVyKGV2ZW50KSB7XG4gIGNvbnN0IGtleVByZXNzZWQgPSBldmVudC5rZXlcbiAgY29uc3QgbGlzdHNJZHNBcnJheSA9IGdldElkc0FycmF5RnJvbU9iakFycmF5KGJvYXJkLmxpc3RzKS5tYXAoKGlkKSA9PiBTdHJpbmcoaWQpKVxuICBpZiAobW91c2VJblRhc2sgJiYgbGlzdHNJZHNBcnJheS5pbmNsdWRlcyhrZXlQcmVzc2VkKSkge1xuICAgIGNvbnN0IHRhc2tJZCA9IGdldExpVGFza0lkKG1vdXNlSW5UYXNrKVxuICAgIGNvbnN0IG5ld0xpc3RJZCA9IE51bWJlcihrZXlQcmVzc2VkKVxuXG4gICAgbW92ZVRhc2sodGFza0lkLCBuZXdMaXN0SWQpXG4gICAgbW91c2VJblRhc2sgPSBudWxsIC8vIHRoZSB0YXNrIGhhcyBtb3ZlZCBzbyB0aGUgbW91c2UgaXMgbm8gbG9uZ2VyIGluc2lkZSBpdC5cbiAgfVxufVxuXG5mdW5jdGlvbiBhbHRLZXlVcEV2ZW50SGFuZGxlcihldmVudCkge1xuICBjb25zdCBrZXlMaWZ0ZWQgPSBldmVudC5rZXlcbiAgaWYgKGtleUxpZnRlZCA9PT0gJ0FsdCcpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgbnVtYmVyS2V5RG93bkV2ZW50SGFuZGxlcilcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIGFsdEtleVVwRXZlbnRIYW5kbGVyKVxuICB9XG59XG5cbi8qXG4gKlxuICogaGVyZSB3ZSBnZXQgdGhlIHRhc2sgd2UgYXJlIHBvaW50aW5nIGF0LlxuICpcbiAqL1xuXG5mdW5jdGlvbiBtb3VzZU92ZXJFdmVudEhhbmRsZXIoZXZlbnQpIHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50XG5cbiAgaWYgKHRhcmdldC50YWdOYW1lICE9PSAnTEknKSByZXR1cm5cbiAgbW91c2VJblRhc2sgPSB0YXJnZXRcbn1cblxuZnVuY3Rpb24gbW91c2VPdXRFdmVudEhhbmRsZXIoZXZlbnQpIHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50XG5cbiAgaWYgKHRhcmdldC50YWdOYW1lICE9PSAnTEknKSByZXR1cm5cblxuICBtb3VzZUluVGFzayA9IG51bGxcbn1cblxuLypcbiAqXG4gKiBkYmwgY2xpY2sgaGFuZGxlcnNcbiAqXG4gKi9cblxubGV0IGRibENsaWNrZWQgPSBmYWxzZSAvLyBsYXRlciB1c2VkIHRvIGRldGVybWluZSBpZiB0byBzdGFydCBkcmFnIGFuZCBkcm9wXG5sZXQgbW91c2VEb3duID0gZmFsc2UgLy8gbGF0ZXIgdXNlZCB0byBkZXRlcm1pbmUgaWYgdG8gc3RhcnQgZHJhZyBhbmQgZHJvcFxuXG5mdW5jdGlvbiBkYmxDbGlja0V2ZW50SGFuZGxlcihldmVudCkge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnRcblxuICBpZiAodGFyZ2V0LnRhZ05hbWUgIT09ICdMSScpIHJldHVyblxuXG4gIGRibENsaWNrZWQgPSB0cnVlXG5cbiAgdGFyZ2V0LnNldEF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJywgJ3RydWUnKVxuICB0YXJnZXQuZm9jdXMoKVxuXG4gIC8vIGEgZnVuY3Rpb24gdG8gc2VsZWN0IGFsbCB0aGUgaW5zaWRlIG9mZiB0aGUgdGFzay5cbiAgZnVuY3Rpb24gc2VsZWN0RWxlbWVudENvbnRlbnRzKGVsKSB7XG4gICAgY29uc3QgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpXG4gICAgcmFuZ2Uuc2VsZWN0Tm9kZUNvbnRlbnRzKGVsKVxuICAgIGNvbnN0IHNlbCA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKVxuICAgIHNlbC5yZW1vdmVBbGxSYW5nZXMoKVxuICAgIHNlbC5hZGRSYW5nZShyYW5nZSlcbiAgfVxuXG4gIHNlbGVjdEVsZW1lbnRDb250ZW50cyh0YXJnZXQpXG59XG5cbmZ1bmN0aW9uIGZvY3VzT3V0RXZlbnRIYW5kbGVyKGV2ZW50KSB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudFxuXG4gIGlmICh0YXJnZXQudGFnTmFtZSAhPT0gJ0xJJykgcmV0dXJuXG5cbiAgLy8gV2Ugd2lsbCB1c2UgdGhpcyBsYXRlciB3aGVuIHdlIGRvIHRoZSBkcmFnIGFuZCBkcm9wXG4gIC8vIHRvIGtub3cgaWYgdG8gc3RhcnQgdGhlIGRyYWcgb3Igbm90LlxuICBkYmxDbGlja2VkID0gZmFsc2VcblxuICB0YXJnZXQuc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCAnZmFsc2UnKVxuXG4gIC8vIHVwZGF0ZSB0aGUgdGFzayB0ZXh0IHRvIG1hY2ggdGhlIG5ldyBvbmVcbiAgY29uc3QgdGFzayA9IGdldFRhc2tGcm9tTGkodGFyZ2V0KVxuICB0YXNrLnRleHQgPSB0YXJnZXQuaW5uZXJUZXh0XG5cbiAgdXBkYXRlTG9jYWxTdG9yYWdlVGFza3MoKVxufVxuXG5mdW5jdGlvbiBnZXRBbmNlc3RvclNlY3Rpb25MaXN0SWQobGlFbGVtZW50KSB7XG4gIHJldHVybiBOdW1iZXIobGlFbGVtZW50LmNsb3Nlc3QoJ3NlY3Rpb24nKS5kYXRhc2V0Lm9yaWdpbmFsTGlzdElkKVxufVxuXG5mdW5jdGlvbiBnZXRMaVRhc2tJZChsaUVsZW1lbnQpIHtcbiAgcmV0dXJuIE51bWJlcihsaUVsZW1lbnQuZGF0YXNldC5vcmlnaW5hbFRhc2tJZClcbn1cblxuZnVuY3Rpb24gZ2V0VGFza0Zyb21MaShsaUVsZW1lbnQpIHtcbiAgY29uc3QgdGFza0lkID0gZ2V0TGlUYXNrSWQobGlFbGVtZW50KVxuXG4gIHJldHVybiBib2FyZC5nZXRUYXNrKHRhc2tJZClcbn1cblxuLypcbiAqXG4gKiBkcmFnIGFuZCBkcm9wIGhhbmRsZXJzXG4gKlxuICogSU1QT1JUQU5UISAtIHRoZXNlIGZ1bmN0aW9ucyBnbyBvbiB0aGUgSFRNTCBlbGVtZW50IGl0c2VsZlxuICogaW4gcmVuZGVyTGlzdCgpIHdlIGNyZWF0ZSB0YXNrcyB3aXRoIGFuXG4gKiBcIm9uY2xpY2tcIiA9IFwiY2xpY2tEcnVnQW5kRHJvcEhhbmRsZXIoZXZlbnQpXCIgYW5kXG4gKiBcIm9uZHJhZ3N0YXJ0XCIgPSBcIm9uRHJhZ1N0YXJ0KClcIiBhdHRyaWJ1dGVzLlxuICpcbiAqL1xuXG4vLyB0byBwcmV2ZW50IHRoZSBicm93c2VyIGRlZmF1bHQgYWN0aW9uXG5mdW5jdGlvbiBvbkRyYWdTdGFydCgpIHtcbiAgcmV0dXJuIGZhbHNlXG59XG5cbmZ1bmN0aW9uIGNsaWNrRHJ1Z0FuZERyb3BIYW5kbGVyKGV2ZW50KSB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudFxuXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCkgLy8gdG8gcHJldmVudCB0aGUgc2VsZWN0aW5nIGFjdGlvbiBvZiBjbGlja1xuXG4gIG1vdXNlRG93biA9IHRydWVcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Nb3VzZVVwKVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zaGFkb3dcbiAgZnVuY3Rpb24gb25Nb3VzZVVwKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gdGFyZ2V0KSB7XG4gICAgICBtb3VzZURvd24gPSBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIC8vIHRoZSBtYWluIGRyYWcgYW5kIGRyb3Agc2VjdGlvbiFcbiAgLy8gd2Ugc2V0IGEgdGltZSBvdXQgc28gdGhlIHVzZXIgY2FuIG1ha2UgYSBkYmxjbGljayB3aXRob3V0IHN0YXJ0aW5nIHRvIGRyYWdcbiAgLy8gSSBmb3VuZCB0aGF0IHRoZSBiZXN0IHRpbWUgaXMgMzAwIG1zLiBtaWNyb3NvZnQgc2F5cyBpdHMgNTAwIG1zIDspXG4gIGNvbnN0IFRJTUVfRk9SX1VTRVJfVE9fREJMX0NMSUNLID0gMzAwXG5cbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgaWYgKGRibENsaWNrZWQgPT09IHRydWUgfHwgbW91c2VEb3duID09PSBmYWxzZSkgcmV0dXJuXG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZCgnbW92aW5nLXRhc2snKVxuXG4gICAgY29uc3Qgc2hpZnRYID0gZXZlbnQuY2xpZW50WCAtIHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0XG4gICAgY29uc3Qgc2hpZnRZID0gZXZlbnQuY2xpZW50WSAtIHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3BcblxuICAgIHRhcmdldC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSdcbiAgICB0YXJnZXQuc3R5bGUuekluZGV4ID0gMTAwMFxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKHRhcmdldClcblxuICAgIG1vdmVBdChldmVudC5wYWdlWCwgZXZlbnQucGFnZVkpXG5cbiAgICAvLyBtb3ZlcyB0aGUgdGFzayBhdCAocGFnZVgsIHBhZ2VZKSBjb29yZGluYXRlc1xuICAgIC8vIHRha2luZyBpbml0aWFsIHNoaWZ0cyBpbnRvIGFjY291bnRcbiAgICBmdW5jdGlvbiBtb3ZlQXQocGFnZVgsIHBhZ2VZKSB7XG4gICAgICB0YXJnZXQuc3R5bGUubGVmdCA9IGAke3BhZ2VYIC0gc2hpZnRYfXB4YFxuICAgICAgdGFyZ2V0LnN0eWxlLnRvcCA9IGAke3BhZ2VZIC0gc2hpZnRZIC0gNX1weGAgLy8gc21hbGwgYWRqdXN0bWVudCBmb3IgYmV0dGVyIHBlcmZvcm1hbmNlXG4gICAgfVxuXG4gICAgbGV0IGN1cnJlbnREcm9wcGFibGUgPSBudWxsXG5cbiAgICBmdW5jdGlvbiBvbk1vdXNlTW92ZShldmVudCkge1xuICAgICAgbW92ZUF0KGV2ZW50LnBhZ2VYLCBldmVudC5wYWdlWSlcblxuICAgICAgdGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgIGNvbnN0IGVsZW1CZWxvdyA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQoZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSlcbiAgICAgIHRhcmdldC5zdHlsZS5kaXNwbGF5ID0gJydcblxuICAgICAgLy8gbW91c2Vtb3ZlIGV2ZW50cyBtYXkgdHJpZ2dlciBvdXQgb2YgdGhlIHdpbmRvdyAod2hlbiB0aGUgYmFsbCBpcyBkcmFnZ2VkIG9mZi1zY3JlZW4pXG4gICAgICAvLyBpZiBjbGllbnRYL2NsaWVudFkgYXJlIG91dCBvZiB0aGUgd2luZG93LCB0aGVuIGVsZW1lbnRGcm9tUG9pbnQgcmV0dXJucyBudWxsXG4gICAgICBpZiAoIWVsZW1CZWxvdykgcmV0dXJuXG5cbiAgICAgIC8vIHBvdGVudGlhbCBkcm9wcGFibGUgYXJlIGxhYmVsZWQgd2l0aCB0aGUgY2xhc3MgXCJkcm9wcGFibGVcIiAoY2FuIGJlIG90aGVyIGxvZ2ljKVxuICAgICAgY29uc3QgZHJvcHBhYmxlQmVsb3cgPSBlbGVtQmVsb3cuY2xvc2VzdCgnLmRyb3BwYWJsZScpXG5cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcWVxZXFcbiAgICAgIGlmIChjdXJyZW50RHJvcHBhYmxlICE9IGRyb3BwYWJsZUJlbG93KSB7XG4gICAgICAgIC8vIHdlJ3JlIGZseWluZyBpbiBvciBvdXQuLi5cbiAgICAgICAgLy8gbm90ZTogYm90aCB2YWx1ZXMgY2FuIGJlIG51bGxcbiAgICAgICAgLy8gICBjdXJyZW50RHJvcHBhYmxlPW51bGwgaWYgd2Ugd2VyZSBub3Qgb3ZlciBhIGRyb3BwYWJsZSBiZWZvcmUgdGhpcyBldmVudCAoZS5nIG92ZXIgYW4gZW1wdHkgc3BhY2UpXG4gICAgICAgIC8vICAgZHJvcHBhYmxlQmVsb3c9bnVsbCBpZiB3ZSdyZSBub3Qgb3ZlciBhIGRyb3BwYWJsZSBub3csIGR1cmluZyB0aGlzIGV2ZW50XG5cbiAgICAgICAgaWYgKGN1cnJlbnREcm9wcGFibGUpIHtcbiAgICAgICAgICAvLyB0aGUgbG9naWMgdG8gcHJvY2VzcyBcImZseWluZyBvdXRcIiBvZiB0aGUgZHJvcHBhYmxlIChyZW1vdmUgaGlnaGxpZ2h0KVxuICAgICAgICAgIGxlYXZlRHJvcHBhYmxlKGN1cnJlbnREcm9wcGFibGUpXG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudERyb3BwYWJsZSA9IGRyb3BwYWJsZUJlbG93XG4gICAgICAgIGlmIChjdXJyZW50RHJvcHBhYmxlKSB7XG4gICAgICAgICAgLy8gdGhlIGxvZ2ljIHRvIHByb2Nlc3MgXCJmbHlpbmcgaW5cIiBvZiB0aGUgZHJvcHBhYmxlXG4gICAgICAgICAgZW50ZXJEcm9wcGFibGUoY3VycmVudERyb3BwYWJsZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIG1vdmUgdGhlIHRhc2sgb24gbW91c2Vtb3ZlXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpXG5cbiAgICAvLyBkcm9wIHRoZSB0YXNrLCByZW1vdmUgdW5uZWVkZWQgaGFuZGxlcnNcbiAgICB0YXJnZXQub25tb3VzZXVwID0gZnVuY3Rpb24gYmFyKCkge1xuICAgICAgaWYgKGFib3ZlRHJvcHBhYmxlKSB7XG4gICAgICAgIGlmIChjdXJyZW50RHJvcHBhYmxlLnRhZ05hbWUgPT09ICdMSScpIHtcbiAgICAgICAgICBjb25zdCBuZXdMaXN0SWQgPSBnZXRBbmNlc3RvclNlY3Rpb25MaXN0SWQoY3VycmVudERyb3BwYWJsZSlcbiAgICAgICAgICBjb25zdCB0YXNrSWQgPSBOdW1iZXIodGFyZ2V0LmRhdGFzZXQub3JpZ2luYWxUYXNrSWQpXG4gICAgICAgICAgY29uc3QgZHJvcHBhYmxlVGFza0lkID0gZ2V0VGFza0Zyb21MaShjdXJyZW50RHJvcHBhYmxlKS5pZFxuICAgICAgICAgIGNvbnN0IGRyb3BwYWJsZUluZGV4ID0gYm9hcmQuZ2V0VGFza0luZGV4KGRyb3BwYWJsZVRhc2tJZClcblxuICAgICAgICAgIG1vdmVUYXNrKHRhc2tJZCwgbmV3TGlzdElkLCBkcm9wcGFibGVJbmRleCArIDEpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgbmV3TGlzdElkID0gZ2V0QW5jZXN0b3JTZWN0aW9uTGlzdElkKGN1cnJlbnREcm9wcGFibGUpXG4gICAgICAgICAgY29uc3QgdGFza0lkID0gTnVtYmVyKHRhcmdldC5kYXRhc2V0Lm9yaWdpbmFsVGFza0lkKVxuXG4gICAgICAgICAgbW92ZVRhc2sodGFza0lkLCBuZXdMaXN0SWQpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpXG4gICAgICB0YXJnZXQub25tb3VzZXVwID0gbnVsbFxuICAgICAgdGFyZ2V0LnJlbW92ZSgpXG4gICAgICByZW5kZXJCb2FyZCgpXG4gICAgfVxuICB9LCBUSU1FX0ZPUl9VU0VSX1RPX0RCTF9DTElDSylcbn1cblxubGV0IGFib3ZlRHJvcHBhYmxlID0gZmFsc2VcblxuZnVuY3Rpb24gZW50ZXJEcm9wcGFibGUoZHJvcHBhYmxlRWxlbWVudCkge1xuICBhYm92ZURyb3BwYWJsZSA9IHRydWVcblxuICBpZiAoZHJvcHBhYmxlRWxlbWVudC50YWdOYW1lID09PSAnTEknKSB7XG4gICAgZHJvcHBhYmxlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdiZWxvdy1kcmFnJylcbiAgfVxufVxuXG5mdW5jdGlvbiBsZWF2ZURyb3BwYWJsZShkcm9wcGFibGVFbGVtZW50KSB7XG4gIGFib3ZlRHJvcHBhYmxlID0gZmFsc2VcblxuICBpZiAoZHJvcHBhYmxlRWxlbWVudC50YWdOYW1lID09PSAnTEknKSB7XG4gICAgZHJvcHBhYmxlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdiZWxvdy1kcmFnJylcbiAgfVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tXG5cbi8vIGFkZGluZyB0aGUgZXZlbnQgbGlzdGVuZXJzOlxuXG5MSVNUU19ESVYuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGFsdEtleURvd25FdmVudEhhbmRsZXIpXG5MSVNUU19ESVYuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgbW91c2VPdmVyRXZlbnRIYW5kbGVyKVxuTElTVFNfRElWLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgbW91c2VPdXRFdmVudEhhbmRsZXIpXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tFdmVudEhhbmRsZXIpXG5MSVNUU19ESVYuYWRkRXZlbnRMaXN0ZW5lcignY29udGV4dG1lbnUnLCBjb250ZXh0Q2xpY2tIYW5kbGVyKVxuXG5MSVNUU19ESVYuYWRkRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCBkYmxDbGlja0V2ZW50SGFuZGxlcilcblxuTElTVFNfRElWLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0JywgZm9jdXNPdXRFdmVudEhhbmRsZXIpXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLypcbiAqXG4gKlxuICogbG9jYWwgc3RvcmFnZSBtYW5hZ2VtZW50IGZ1bmN0aW9ucy5cbiAqXG4gKiB0aGlzIGlzIGFuIGFwaSBmb3Igd29ya2luZyB3aXRoIHRoZSBsb2NhbCBzdG9yYWdlIGZvcm1hdC5cbiAqIHRoZSBmb3JtYXQ6XG4gKiB7XG4gKiAgICAndG9kbycgOiBbXSxcbiAqICAgICdpbi1wcm9ncmVzczogW10sXG4gKiAgICAnZG9uZSc6IFtdLFxuICogfVxuICovXG5cbmZ1bmN0aW9uIHVwZGF0ZUxvY2FsU3RvcmFnZVRhc2tzKCkge1xuICBjb25zdCB0YXNrcyA9IHtcbiAgICB0b2RvOiBbXSxcbiAgICAnaW4tcHJvZ3Jlc3MnOiBbXSxcbiAgICBkb25lOiBbXSxcbiAgfVxuXG4gIC8vIHRoZSBmb3JtYXQgcmVxdWlyZXMgJ3RvZG8nIGFuZCBub3QgJ3RvLWRvJyBzbyB3ZSBoYW5kbGUgdGhpcyBoZXJlLlxuICBmb3IgKGNvbnN0IGxpc3Qgb2YgYm9hcmQubGlzdHMpIHtcbiAgICBpZiAobGlzdC5uYW1lID09PSAndG8tZG8nKSB7XG4gICAgICB0YXNrcy50b2RvID0gbGlzdC50YXNrcy5tYXAoKHRhc2spID0+IHRhc2sudGV4dClcbiAgICB9IGVsc2Uge1xuICAgICAgdGFza3NbbGlzdC5uYW1lXSA9IGxpc3QudGFza3MubWFwKCh0YXNrKSA9PiB0YXNrLnRleHQpXG4gICAgfVxuICB9XG5cbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodGFza3MpKVxufVxuXG5mdW5jdGlvbiBnZXRMb2NhbFN0b3JhZ2VCb2FyZFRhc2tzKCkge1xuICBjb25zdCBsb2NhbFN0b3JhZ2VUYXNrcyA9IGdldExvY2FsU3RvcmFnZUJvYXJkVGFza3NJbk5hdGl2ZUZvcm1hdCgpXG5cbiAgLy8gd2UgcmVwbGFjZSB0aGUgcHJvcGVydHkga2V5OiAndG9kbycgd2l0aCB0aGUga2V5ICd0by1kbycsXG4gIC8vIHNvIG91ciBCb2FyZCBjbGFzcyBjYW4gaGFuZGxlIGl0IHByb3Blcmx5LlxuICBkZWxldGUgT2JqZWN0LmFzc2lnbihsb2NhbFN0b3JhZ2VUYXNrcywgeyAndG8tZG8nOiBsb2NhbFN0b3JhZ2VUYXNrcy50b2RvIH0pLnRvZG9cbiAgcmV0dXJuIGxvY2FsU3RvcmFnZVRhc2tzXG59XG5cbi8vIHRoaXMgZnVuY3Rpb25zIHdpbGwgaGVscCB1cyBpbiBtYW5hZ2luZyB0aGUgc2V2ZXIgYXBpLlxuZnVuY3Rpb24gZ2V0TG9jYWxTdG9yYWdlQm9hcmRUYXNrc0luTmF0aXZlRm9ybWF0KCkge1xuICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSlcbn1cblxuZnVuY3Rpb24gdXBkYXRlTG9jYWxTdG9yYWdlVGFza3NJbk5hdGl2ZUZvcm1hdChuZXdUYXNrcykge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeShuZXdUYXNrcykpXG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS1cbi8qXG4gKlxuICpcbiAqIHNlcnZlciBhcGkgbWV0aG9kcy5cbiAqXG4gKiBoZXJlIHdlIHVzZSBmZXRjaCB0byBzZW5kIHJlcXVlc3RzIHRvIHRoZSBzZXJ2ZXIuXG4gKiBpbXBvcnRhbnQgLSBpZiB3ZSBnZXQgYW4gZXJyb3Igd2UgYWxlcnQgdGhlIHVzZXIgYW5kIHJ1biB0aGUgZnVuY3Rpb24gYWdhaW4uXG4gKlxuICovXG5cbmNvbnN0IFRBU0tTX0FQSV9VUkwgPSAnaHR0cHM6Ly9qc29uLWJpbnMuaGVyb2t1YXBwLmNvbS9iaW4vNjE0YWY3YjI0MDIxYWMwZTZjMDgwY2JkJ1xuXG5hc3luYyBmdW5jdGlvbiByZXF1ZXN0KG1ldGhvZCA9ICcnLCBkYXRhID0gbnVsbCkge1xuICBjb25zdCBvcHRpb25zID0ge1xuICAgIG1ldGhvZCxcbiAgICBoZWFkZXJzOiB7XG4gICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgfVxuXG4gIGlmIChkYXRhKSB7XG4gICAgb3B0aW9ucy5ib2R5ID0gSlNPTi5zdHJpbmdpZnkoZGF0YSlcbiAgfVxuXG4gIHRyeSB7XG4gICAgcmV0dXJuIGF3YWl0IGZldGNoKFRBU0tTX0FQSV9VUkwsIG9wdGlvbnMpLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gIH0gY2F0Y2gge1xuICAgIGFsZXJ0KCdzZXJ2ZXIgZXJyb3IgLSB0cnlpbmcgYWdhaW4nKVxuICAgIHJlcXVlc3QobWV0aG9kLCBkYXRhKVxuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFRhc2tzRnJvbUFwaSgpIHtcbiAgY29uc3QgbG9hZGVkID0gYXdhaXQgcmVxdWVzdCgnR0VUJylcbiAgcmV0dXJuIGxvYWRlZC50YXNrc1xufVxuXG5hc3luYyBmdW5jdGlvbiBwdXRUYXNrc1RvQXBpKHRhc2tzKSB7XG4gIGF3YWl0IHJlcXVlc3QoJ1BVVCcsIHsgdGFza3MgfSlcbn1cblxuLypcbiAqXG4gKiBsb2FkaW5nIGFuaW1hdGlvbi5cbiAqIHJlbmRlcnMgYSBjb29sIGFuaW1hdGlvbiB0byB0aGUgTElTVFNfRElWXG4gKlxuICovXG5cbmZ1bmN0aW9uIHN0YXJ0TG9hZEFuaW1hdGlvbigpIHtcbiAgY29uc3QgaGVpZ2h0ID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoTElTVFNfRElWKS5nZXRQcm9wZXJ0eVZhbHVlKCdoZWlnaHQnKVxuXG4gIHJlbW92ZUFsbENoaWxkTm9kZXMoTElTVFNfRElWKVxuXG4gIExJU1RTX0RJVi5zdHlsZS5oZWlnaHQgPSBoZWlnaHRcblxuICBjb25zdCBiYXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBiYXJEaXYuY2xhc3NMaXN0LmFkZCgnYmFyJywgJ2xvYWRlcicpXG5cbiAgY29uc3QgY2lyY2xlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgY2lyY2xlRGl2LmNsYXNzTGlzdC5hZGQoJ2NpcmNsZScpXG5cbiAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICBwLmlubmVySFRNTCA9ICdMb2FkaW5nJ1xuICBwLmNsYXNzTGlzdC5hZGQoJ2xvYWRpbmctcCcpXG5cbiAgYmFyRGl2LmFwcGVuZChjaXJjbGVEaXYsIHApXG4gIExJU1RTX0RJVi5hcHBlbmQoYmFyRGl2KVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tXG4vKlxuICpcbiAqIGhlbHAgZnVuY3Rpb25zXG4gKlxuICovXG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBET00gZWxlbWVudC5cbiAqXG4gKiBFeGFtcGxlIHVzYWdlOlxuICogY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJqdXN0IHRleHRcIiwgY3JlYXRlRWxlbWVudCguLi4pXSwgW1wibmFuYVwiLCBcImJhbmFuYVwiXSwge2lkOiBcImJsYVwifSlcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdGFnTmFtZSAtIHRoZSB0eXBlIG9mIHRoZSBlbGVtZW50XG4gKiBAcGFyYW0ge0FycmF5fSBjaGlsZHJlbiAtIHRoZSBjaGlsZCBlbGVtZW50cyBmb3IgdGhlIG5ldyBlbGVtZW50LlxuICogICAgICAgICAgICAgICAgICAgICAgICAgICBFYWNoIGNoaWxkIGNhbiBiZSBhIERPTSBlbGVtZW50LCBvciBhIHN0cmluZyAoaWYgeW91IGp1c3Qgd2FudCBhIHRleHQgZWxlbWVudCkuXG4gKiBAcGFyYW0ge0FycmF5fSBjbGFzc2VzIC0gdGhlIGNsYXNzIGxpc3Qgb2YgdGhlIG5ldyBlbGVtZW50XG4gKiBAcGFyYW0ge09iamVjdH0gYXR0cmlidXRlcyAtIHRoZSBhdHRyaWJ1dGVzIGZvciB0aGUgbmV3IGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0YWdOYW1lLCBjaGlsZHJlbiA9IFtdLCBjbGFzc2VzID0gW10sIGF0dHJpYnV0ZXMgPSB7fSkge1xuICBjb25zdCBtYWluRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSlcbiAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiBtYWluRWxlbWVudC5hcHBlbmQoY2hpbGRFbGVtZW50KSlcbiAgbWFpbkVsZW1lbnQuY2xhc3NMaXN0LmFkZCguLi5jbGFzc2VzKVxuXG4gIGZvciAoY29uc3QgYXR0cmlidXRlIGluIGF0dHJpYnV0ZXMpIHtcbiAgICBpZiAoYXR0cmlidXRlcy5oYXNPd25Qcm9wZXJ0eShhdHRyaWJ1dGUpKSB7XG4gICAgICBtYWluRWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCBhdHRyaWJ1dGVzW2F0dHJpYnV0ZV0pXG4gICAgfVxuICB9XG4gIHJldHVybiBtYWluRWxlbWVudFxufVxuXG5mdW5jdGlvbiByZW1vdmVBbGxDaGlsZE5vZGVzKHBhcmVudCkge1xuICB3aGlsZSAocGFyZW50LmZpcnN0Q2hpbGQpIHtcbiAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50LmZpcnN0Q2hpbGQpXG4gIH1cbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVOZXdJZEluQXJyYXlPZk9iamVjdHMob2JqZWN0QXJyKSB7XG4gIC8qIEdldHMgdGhlIGxhcmdlc3QgaWQgYW5kIHJldHVybnMgaXQgKyAxLiBcbiAgICBpLmUgdGhlIHJldHVybmluZyBpZCBkb2VzIG5vdCBleGlzdHMgaW4gdGhlXG4gICAgYXJyYXkgYW5kIGlzIHVuaXF1ZS5cbiAgICAqL1xuXG4gIGlmIChvYmplY3RBcnIubGVuZ3RoID09PSAwKSByZXR1cm4gMVxuICBjb25zdCBpZEFycmF5ID0gZ2V0SWRzQXJyYXlGcm9tT2JqQXJyYXkob2JqZWN0QXJyKVxuICByZXR1cm4gTWF0aC5tYXgoLi4uaWRBcnJheSkgKyAxXG59XG5cbmZ1bmN0aW9uIGdldE9iamVjdEZyb21BcnJheShvYmplY3RJZCwgb2JqZWN0QXJyKSB7XG4gIC8vIHRocm93cyBFcnJvciBpZiBPYmplY3QgZG9lcyBub3QgZXhpc3RzLlxuICBjb25zdCByZXF1ZXN0ZWRPYmplY3QgPSBvYmplY3RBcnIuZmluZCgob2JqKSA9PiBvYmouaWQgPT09IG9iamVjdElkKVxuICBpZiAocmVxdWVzdGVkT2JqZWN0ID09PSB1bmRlZmluZWQpIHRocm93IG5ldyBFcnJvcignbm8gc3VjaCBvYmplY3QgZXhpc3RzJylcbiAgcmV0dXJuIHJlcXVlc3RlZE9iamVjdFxufVxuXG5mdW5jdGlvbiBnZXRJZHNBcnJheUZyb21PYmpBcnJheShvYmplY3RBcnIpIHtcbiAgcmV0dXJuIG9iamVjdEFyci5tYXAoKG9iaikgPT4gb2JqLmlkKVxufVxuXG5mdW5jdGlvbiBjaGVja0lmT2JqZWN0SWRUYWtlbihpZCwgZ2V0RnVuY3Rpb24pIHtcbiAgLy8gZ2V0RnVuY3Rpb24gaXMgYSBmdW5jdGlvbiBleHByZXNzaW9uLiB3ZSB3aWxsIGtub3cgd2hlcmUgdG8gc2VhcmNoIGRlcGVuZGluZyBvbiB0aGUgZnVuY3Rpb25cbiAgdHJ5IHtcbiAgICBnZXRGdW5jdGlvbihpZCkgLy8gcmVtZW1iZXI6IGdldEZ1bmN0aW9uIGNhbiBiZTogW2dldExpc3RdIGFuZCB0aHJvd3MgRXJyb3IgaWYgbm8gbGlzdCB3YXMgZm91bmQuXG4gICAgdGhyb3cgbmV3IEVycm9yKCdpZCBhbHJlYWR5IGV4aXN0JylcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAvKiBcbiAgICAgIE9ubHkgaWYgdGhlIGVycm9yIGlzIGJlY2F1c2Ugb2YgXCJmaW5kaW5nXCIgdGhlIG9iamVjdFxuICAgICAgdGhlbiB3ZSBjb250aW51ZSBhbmQgdGhyb3cgYW4gRXJyb3IuXG4gICAgICAqL1xuICAgIGlmIChlcnJvci5tZXNzYWdlID09PSAnaWQgYWxyZWFkeSBleGlzdCcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignaWQgYWxyZWFkeSBleGlzdCcpXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGRlZXBDb3B5T2JqKG9iaikge1xuICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvYmopKVxufVxuXG4vKlxuICpcbiAqIHZhbGlkYXRpb24gZnVuY3Rpb25zXG4gKlxuICovXG5cbmZ1bmN0aW9uIHZhbGlkYXRlVGFzayh0YXNrKSB7XG4gIGlmICh0eXBlb2YgdGFzayA9PT0gJ29iamVjdCcgJiYgdGFzay50ZXh0Lmxlbmd0aCkge1xuICAgIHJldHVybiB0YXNrXG4gIH1cblxuICB0aHJvdyBFcnJvcignSW52YWxpZCB0YXNrJylcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5vbkVudGVyaW5nU2l0ZSgpXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==