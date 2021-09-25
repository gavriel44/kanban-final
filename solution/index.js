'use strict'

class Board {
  constructor(baseTasksLists, tasks = {}) {
    // the first thing we do is to add the base lists so they always be in the same order when we render them
    // the problem is this: when we save the board in the localStorage we
    // cant keep the order so we force the order off the first base lists
    this.baseTasksLists = baseTasksLists
    this.lists = []
    for (let listName of this.baseTasksLists) {
      this.addNewList(listName, [], formatListClassName(listName))
    }

    for (let newTaskListName in tasks) {
      if (this.baseTasksLists.includes(newTaskListName)) {
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

const MIN_LOADING_TIME = 2000

const boardDiv = document.getElementById('board-div')
const listsDiv = document.getElementById('lists-div')
const baseTasksLists = ['to-do', 'in-progress', 'done']
let board

function createBrandNewBoard() {
  return new Board(baseTasksLists)
}

function onEnteringSite() {
  if (!localStorage.getItem('tasks')) {
    localStorage.setItem('tasks', JSON.stringify({ todo: [], 'in-progress': [], done: [] }))
  }
  renderBoard(boardDiv)
}

// -------------------
/*
 *
 * The main rendering functions
 *
 *
 */

function renderBoard() {
  board = new Board(baseTasksLists, getLocalStorageBoardTasks())
  renderLists(listsDiv)
  listsDiv.style.height = ''
}

function renderLists(fatherDiv) {
  removeAllChildNodes(listsDiv)

  for (let list of board.lists) {
    renderList(list, fatherDiv)
  }
}

function renderList(list, fatherDiv) {
  const listHeader = createElement('h2', [formatName(list.name)], ['list-header'])
  const input = createElement('input', [], ['add-input'], {
    id: `add-${list.styleClass.slice(0, -1)}`,
    placeholder: 'new task',
  })
  const addButton = createElement('button', ['Add'], ['add-button'], {
    id: `submit-add-${list.styleClass.slice(0, list.styleClass.indexOf('-tasks'))}`,
    'data-role': 'adding-task',
  })

  const tasks = []

  for (let task of list.tasks) {
    tasks.push(
      createElement('li', [task.text], ['task', 'droppable'], {
        'data-original-task-id': task.id,
        onmousedown: 'clickDrugAndDropHandler(event)', // look down in handler functions
        ondragstart: '() => return false',
      })
    )
  }

  const tasksList = createElement('ul', tasks, [list.styleClass, 'task-list'])
  const section = createElement('section', [listHeader, tasksList, input, addButton], ['section', 'droppable'], {
    'data-original-list-id': list.id,
  })

  fatherDiv.append(section)
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

// -------------------
/*
 *
 *
 * board management functions.
 *
 *
 */

function addTask(listId, task) {
  board.addTask(listId, task)
  updateLocalStorageTasks()

  const listsDiv = document.getElementById('lists-div')

  renderLists(listsDiv)
}

function addNewList(listName, tasks = []) {
  board.addNewList(formatListName(listName), tasks, formatListClassName(listName))
  updateLocalStorageTasks()
  renderLists(listsDiv)
}

function formatListName(name) {
  return name.replace(/[' ']/g, '-')
}

function moveTask(taskId, newListId, newIndex = 0) {
  const task = board.getTask(taskId)
  const oldListId = board.getListIdFromTaskId(taskId)
  const oldList = board.getList(oldListId)
  const newList = board.getList(newListId)

  oldList.tasks.splice(oldList.tasks.indexOf(task), 1)
  newList.tasks.splice(newIndex, 0, task)

  updateLocalStorageTasks()
  renderLists(listsDiv)
}

function filterLists() {
  const allLiElements = document.querySelectorAll('.section li')

  const valueInput = document.querySelector('#search').value.toLowerCase().trim()

  for (let liElement of allLiElements) {
    const liValue = liElement.innerText.toLowerCase().trim()

    liElement.style.display = liValue.search(new RegExp(valueInput.replace(/\s+/, '|'))) != -1 ? '' : 'none'
  }
}

// -------------------

/*
 *
 *
 * event handling functions.
 *
 */

function clickEventHandler(event) {
  const target = event.target.closest('BUTTON')

  if (!target) return

  const targetRole = target.dataset.role

  if (targetRole === 'adding-task') {
    let inputValue = target.parentElement.querySelector('input').value
    if (inputValue === '') {
      alert('Cant add an empty task!')
    } else {
      let relevantListId = Number(target.parentElement.dataset.originalListId)
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
    console.log('test0')
    startLoadAnimation()
    putTasksToApi().then(
      setTimeout(() => {
        renderBoard()
      }, MIN_LOADING_TIME)
    )
  } else if (targetRole === 'loading-board') {
    console.log('pressed button load')

    startLoadAnimation()

    getTasksFromApi()
      .then((tasks) => {
        updateLocalStorageTasksInNativeFormat(tasks)
        renderBoard()
      })
      .catch((err) => console.log(err))
  }
}

let liMouseIsIn = null

function altKeyDownEventHandler(event) {
  const keyPressed = event.key

  if (liMouseIsIn && keyPressed === 'Alt') {
    document.addEventListener('keydown', numberKeyDownEventHandler)
    document.addEventListener('keyup', altKeyUpEventHandler)
  }
}

function numberKeyDownEventHandler(event) {
  const keyPressed = event.key
  const listsIdsArray = getIdsArrayFromObjArray(board.lists).map((id) => String(id))
  if (liMouseIsIn && listsIdsArray.includes(keyPressed)) {
    console.log(liMouseIsIn)
    const listId = getAncestorSectionListId(liMouseIsIn)
    const taskId = getLiTaskId(liMouseIsIn)
    const newListId = Number(keyPressed)

    moveTask(taskId, newListId)
    liMouseIsIn = null // the task has moved so the mouse is no longer inside it.
  }
}

function altKeyUpEventHandler(event) {
  const keyLifted = event.key
  if (keyLifted === 'Alt') {
    document.removeEventListener('keydown', numberKeyDownEventHandler)
    document.removeEventListener('keyup', altKeyUpEventHandler)
  }
}

function mouseOverEventHandler(event) {
  const target = event.target

  if (target.tagName !== 'LI') return
  liMouseIsIn = target
}

function mouseOutEventHandler(event) {
  const target = event.target

  if (target.tagName !== 'LI') return

  liMouseIsIn = null
}

function focusOutEventHandler(event) {
  const target = event.target

  if (target.tagName !== 'LI') return

  target.setAttribute('contenteditable', 'false')

  const task = getTaskFromLi(target)

  task.text = target.innerText

  updateLocalStorageTasks()
}

function dblClickEventHandler(event) {
  const target = event.target

  if (target.tagName !== 'LI') return

  target.setAttribute('contenteditable', 'true')
  target.focus()
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

// -------------

function clickDrugAndDropHandler(event) {
  const target = event.target

  target.classList.add('moving-task')

  let shiftX = event.clientX - target.getBoundingClientRect().left
  let shiftY = event.clientY - target.getBoundingClientRect().top

  target.style.position = 'absolute'
  target.style.zIndex = 1000
  document.body.append(target)

  moveAt(event.pageX, event.pageY)

  // moves the ball at (pageX, pageY) coordinates
  // taking initial shifts into account
  function moveAt(pageX, pageY) {
    target.style.left = pageX - shiftX + 'px'
    target.style.top = pageY - shiftY + 'px'
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

  // move the ball on mousemove
  document.addEventListener('mousemove', onMouseMove)

  // drop the ball, remove unneeded handlers
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

document.addEventListener('keydown', altKeyDownEventHandler)
document.addEventListener('mouseover', mouseOverEventHandler)
document.addEventListener('mouseout', mouseOutEventHandler)

document.addEventListener('click', clickEventHandler)

document.addEventListener('dblclick', dblClickEventHandler)

document.addEventListener('focusout', focusOutEventHandler)

// -------------------

/*
 *
 *
 * local storage management functions.
 * this is an api for working with the local storage format.
 * the format:
 * {
 *    'todo' : [],
 *    'in-progress: [],
 *    'done': [],
 * }
 */

function updateLocalStorageTasks() {
  const tasks = {}
  for (let list of board.lists) {
    if (list.name === 'to-do') {
      tasks['todo'] = list.tasks.map((task) => task.text)
    } else {
      tasks[list.name] = list.tasks.map((task) => task.text)
    }
  }

  localStorage.setItem('tasks', JSON.stringify(tasks))
}

function clearLocalStorageBoarLists() {
  localStorage.removeItem('tasks')
}

function getLocalStorageBoardTasks() {
  let localStorageTasks = JSON.parse(localStorage.getItem('tasks'))

  // we replace the property key: 'todo' with the key 'to-do',
  // so our Board class can handle it properly.
  delete Object.assign(localStorageTasks, { ['to-do']: localStorageTasks['todo'] })['todo']
  return localStorageTasks
}

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
 * api methods.
 *
 */

async function getTasksFromApi() {
  const response = await fetch('https://tinyurl.com/c3f3z268')
  console.log(response.status)
  if (response.ok) {
    let result = await response.json()
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(result.tasks)
      }, MIN_LOADING_TIME)
    })
  }
  console.log('get')
  await getTasksFromApi()
}

async function putTasksToApi() {
  const currentTasks = getLocalStorageBoardTasksInNativeFormat()

  let response = await fetch('https://tinyurl.com/c3f3z268', {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ tasks: currentTasks }),
  })

  if (response.ok) {
    let result = await response.json()
    return result.tasks
  }
  console.log('put')
  await putTasksToApi()
}

// -------------------

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

/*
 *
 *loading animation
 *
 */

function startLoadAnimation() {
  let height = window.getComputedStyle(listsDiv).getPropertyValue('height')

  removeAllChildNodes(listsDiv)

  listsDiv.style.height = height

  let barDiv = document.createElement('div')
  barDiv.classList.add('bar')

  let circleDiv = document.createElement('div')
  circleDiv.classList.add('circle')

  let p = document.createElement('p')
  p.innerHTML = 'Loading'
  p.classList.add('loading-p')

  barDiv.append(circleDiv, p)
  listsDiv.append(barDiv)
}

// -------------------

onEnteringSite()
