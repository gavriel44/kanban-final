'use strict'

class Board {
  constructor(tasks) {
    this.lists = []
    for (let taskArrayName in tasks) {
      this.creatNewList(taskArrayName, tasks[taskArrayName], taskArrayName + '-tasks')
    }
  }

  addTask(listId, task) {
    this.getList(listId).tasks.push(task)
  }

  getList(listId) {
    return getObjectFromArray(listId, this.lists)
  }

  creatNewList(name, tasks, styleClass, id = generateNewIdInArrayOfObjects(this.lists)) {
    checkIfObjectIdTaken(id, this.getList)

    this.lists.push({
      id,
      name,
      tasks,
      styleClass,
    })
  }
}

function createBrandNewBoard() {
  return new Board({ todo: [], 'in-progress': [], done: [] })
  //     {
  //       id: 1,
  //       name: 'To do tasks',
  //       tasks: ['sdasd', 'sdasd'],
  //       styleClass: 'to-do-tasks',
  //     },
  //     {
  //       id: 2,
  //       name: 'In progress tasks',
  //       tasks: [],
  //       styleClass: 'in-progress-tasks',
  //     },
  //     {
  //       id: 3,
  //       name: 'Done tasks',
  //       tasks: [],
  //       styleClass: 'done-tasks',
  //     },
  //   ])
}

const boardDiv = document.getElementById('board-div')
let board

function onEnteringSite() {
  if (!!localStorage.getItem('tasks')) {
    board = new Board(getLocalStorageBoardTasks())
  } else {
    board = createBrandNewBoard()
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
  const listsDiv = createElement('div', [], ['lists-div'], { id: 'lists-div' })
  boardDiv.append(listsDiv)
  renderLists(listsDiv)
}

function renderLists(fatherDiv) {
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
  removeAllChildNodes(listsDiv)

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
    getFunction(id) // remember: getFunction can be: [getSong or getPlaylist] and throws Error if no song was found.
    throw new Error('id already exist')
  } catch (error) {
    /* 
      Only if the error is because of "finding" the song
      then we continue and throw an Error.
      */
    if (error.message === 'id already exist') {
      throw new Error('id already exist')
    }
  }
}

// -------------------

onEnteringSite()
