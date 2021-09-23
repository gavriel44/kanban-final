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
    listTasks.push({ text: taskText, id: generateNewIdInArrayOfObjects(listTasks) })
  }

  getList(listId) {
    return getObjectFromArray(listId, this.lists)
  }

  getTask(listId, taskId) {
    return getObjectFromArray(taskId, this.getList(listId).tasks)
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

const boardDiv = document.getElementById('board-div')
const listsDiv = createElement('div', [], ['lists-div'], { id: 'lists-div' })
const baseTasksLists = ['to-do', 'in-progress', 'done']
let board

function createBrandNewBoard() {
  return new Board(baseTasksLists)
}

function onEnteringSite() {
  if (!!localStorage.getItem('tasks')) {
    board = new Board(baseTasksLists, getLocalStorageBoardTasks())
  } else {
    board = createBrandNewBoard()
    updateLocalStorageTasks()
  }
  renderBoard(boardDiv)
}

/*
 *
 * The main rendering functions
 *
 *
 */

function renderBoard(fatherDiv) {
  boardDiv.append(listsDiv)
  renderLists(listsDiv)
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
    tasks.push(createElement('li', [task.text], ['task'], { 'data-original-task-id': task.id,  contenteditable: 'true' }))
  }

  const tasksList = createElement('ul', tasks, [list.styleClass, 'task-list'])
  const section = createElement('section', [listHeader, tasksList, input, addButton], ['section'], {
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
  return listName + '-tasks'
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

function addNewList(listName, tasks=[]) {
  board.addNewList(listName, tasks, formatListClassName(listName))
  updateLocalStorageTasks()
  renderLists(listsDiv)
}

function moveTask(listId, taskId, newListId, newIndex = 0) {
  const task = board.getTask(listId, taskId)
  const oldList = board.getList(listId)
  const newList = board.getList(newListId)

  oldList.tasks.splice(oldList.tasks.indexOf(task), 1)
  newList.tasks.splice(newIndex, 0, task)

  updateLocalStorageTasks()
  renderLists(listsDiv)
}

// -------------------

/*
 *
 *
 * event handling functions.
 *
 */

function eventDelegationClickHandler(event) {
  const target = event.target

  if (target.dataset.role === 'adding-task') {
    let inputValue = target.parentElement.querySelector('input').value
    if (inputValue === '') {
      alert('Cant add an empty task!')
    } else {
      let relevantListId = Number(target.parentElement.dataset.originalListId)
      addTask(relevantListId, inputValue)
    }
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
    console.log(liMouseIsIn);
    const listId = getAncestorSectionListId(liMouseIsIn)
    const taskId = getLiTaskId(liMouseIsIn)
    const newListId = Number(keyPressed)

    moveTask(listId, taskId, newListId)
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

  const task = getTaskFromLi(target)

  task.text = target.innerHTML

  updateLocalStorageTasks()

}

function getAncestorSectionListId(liElement) {
  return Number(liElement.closest('section').dataset.originalListId)
}

function getLiTaskId(liElement) {
  return Number(liElement.dataset.originalTaskId)
}

function getTaskFromLi(liElement) {
  const relevantListId = getAncestorSectionListId(liElement)
  const taskId = getLiTaskId(liElement)

  return board.getTask(relevantListId, taskId)
}

document.addEventListener('keydown', altKeyDownEventHandler)
document.addEventListener('mouseover', mouseOverEventHandler)
document.addEventListener('mouseout', mouseOutEventHandler)

document.addEventListener('click', eventDelegationClickHandler)

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
      tasks['todo'] = list.tasks.map(task => task.text)
    } else {
      tasks[list.name] = list.tasks.map(task => task.text)

    }
  }
  function formatTasks(tasks) {
    return tasks.map(task => {})
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

// -------------------

onEnteringSite()
