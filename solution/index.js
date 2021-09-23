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
        this.getListByName(newTaskListName).tasks = tasks[newTaskListName]
      } else {
        this.addNewList(newTaskListName, tasks[newTaskListName], formatListClassName(newTaskListName))
      }
    }
  }

  addTask(listId, task) {
    this.getList(listId).tasks.push(task)
  }

  getList(listId) {
    return getObjectFromArray(listId, this.lists)
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
const baseTasksLists = ['todo', 'in-progress', 'done']
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
    tasks.push(createElement('li', [task], ['task']))
  }

  const tasksList = createElement('ul', tasks, [list.styleClass])
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

function addNewList(listName, tasks) {
  board.addNewList(listName, tasks, formatListClassName(listName))
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

document.addEventListener('click', eventDelegationClickHandler)

// -------------------

/*
 *
 *
 * local storage management functions.
 *
 */

function updateLocalStorageTasks() {
  const tasks = {}
  for (let list of board.lists) {
    tasks[list.name] = list.tasks
  }
  if (tasks['to-do']) {
    const todoValue = deepCopyObj(tasks['to-do'])
    delete tasks['to-do']
    tasks.todo = todoValue
  }

  localStorage.setItem('tasks', JSON.stringify(tasks))
}

function clearLocalStorageBoarLists() {
  localStorage.removeItem('tasks')
}

function getLocalStorageBoardTasks() {
  return JSON.parse(localStorage.getItem('tasks'))
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
  const idArray = objectArr.map((obj) => obj.id)
  return Math.max(...idArray) + 1
}

function getObjectFromArray(objectId, objectArr) {
  // throws Error if Object does not exists.
  const requestedObject = objectArr.find((obj) => obj.id === objectId)
  if (requestedObject === undefined) throw new Error('so such object exists')
  return requestedObject
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
