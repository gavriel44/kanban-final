'use strict'

const board = {
  lists: [
    // these are basically the lists on the board
    {
      id: 1,
      name: 'To do tasks',
      tasks: ['sdasd'],
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
  ],
}

const boardDiv = document.getElementById('board-div')

function onEnteringSite() {
    if (localStorage.getItem('board')) {
        board = JSON.parse(localStorage.getItem('board'))
    }
    renderBoard(boardDiv);
}

function renderBoard(fatherDiv) {
  for (let list of board.lists) {
    renderList(list, fatherDiv)
  }
}

function renderList(list, fatherDiv) {
  const listHeader = createElement('h2', [list.name], ['list-header'])
  const input = createElement('input', [], [], { id: `add-${list.styleClass.slice(0, -1)}` })
  const addButton = createElement('button', ['Add'], [], {
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
