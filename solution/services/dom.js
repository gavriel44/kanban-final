/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-syntax */
import createElement from '../helpF/createElement'
import { formatName } from '../helpF/formatting'
import { removeAllChildNodes } from '../helpF/help'
// eslint-disable-next-line import/no-cycle
import { clickDrugAndDropHandler, onDragStart } from '../eventHandling/clickDragAndDropHandler'

window.clickDrugAndDropHandler = clickDrugAndDropHandler
window.onDragStart = onDragStart
// eslint-disable-next-line no-unused-vars
/*
 *
 * renderList - creates each task and insert it into ul
 * then renders to the LISTS_DIV
 *
 */

export function createTasksFromList(list) {
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

export function renderList(list, fatherDiv) {
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

export function renderLists(fatherDiv, lists) {
  removeAllChildNodes(fatherDiv)
  for (const list of lists) {
    renderList(list, fatherDiv)
  }
}

export function renderBoard(fatherDiv, board) {
  renderLists(fatherDiv, board.lists)
  // renderCalender(calenderDiv)
}
