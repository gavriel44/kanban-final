'use strict'

class Board {
  constructor(lists) {
    this.lists = lists
  }

  addTask(listId, task) {
    this.getList(listId).tasks.push(task)
  }

  getList(listId) {
    return this.getObjectFromArray(listId, this.lists)
  }

  getObjectFromArray(objectId, objectArr) {
    // throws Error if Object does not exists.
    const requestedObject = objectArr.find((obj) => obj.id === objectId)
    if (requestedObject === undefined) throw new Error('so such object exists')
    return requestedObject
  }
}

function createBrandNewBoard() {
  return new Board([
    {
      id: 1,
      name: 'To do tasks',
      tasks: ['sdasd', 'sdasd'],
      styleClass: 'to-do-tasks',
    },
    {
      id: 2,
      name: 'In progress tasks',
      tasks: [],
      styleClass: 'in-progress-tasks',
    },
    {
      id: 3,
      name: 'Done tasks',
      tasks: [],
      styleClass: 'in-progress-tasks',
    },
  ])
}

const boardDiv = document.getElementById('board-div')
let board

function onEnteringSite() {
  if (!!localStorage.getItem('myBoardLists')) {
    board = new Board(getLocalStorageBoardLists())
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
  const listHeader = createElement('h2', [list.name], ['list-header'])
  const input = createElement('input', [], ['add-input'], {
    id: `add-${list.styleClass.slice(0, -1)}`,
    placeholder: 'new task',
  })
  const addButton = createElement('button', ['Add'], ['add-button'], {
    id: `submit-add-${list.styleClass.slice(0, list.styleClass.indexOf('-tasks'))}`,
  })

  const tasks = []

  for (let task of list.tasks) {
    tasks.push(createElement('li', [task], ['task']))
  }

  const tasksList = createElement('ul', tasks, [list.styleClass])
  const section = createElement('section', [listHeader, tasksList, input, addButton], ['section'])

  fatherDiv.append(section)
}

function addTask(listId, task) {
  board.addTask(listId, task)
  updateLocalStorageBoardLists()

  const listsDiv = document.getElementById('lists-div')
  removeAllChildNodes(listsDiv)

  renderLists(listsDiv)
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild)
  }
}

function updateLocalStorageBoardLists() {
  localStorage.setItem('myBoardLists', JSON.stringify(board.lists))
}

function clearLocalStorageBoarLists() {
    localStorage.removeItem('myBoardLists')
}

function getLocalStorageBoardLists() {
  return JSON.parse(localStorage.getItem('myBoardLists'))
}

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

onEnteringSite()
