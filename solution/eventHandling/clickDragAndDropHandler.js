/* eslint-disable import/no-cycle */
/* eslint-disable no-alert */
/* eslint-disable no-shadow */
/* eslint-disable no-use-before-define */
/* eslint-disable eqeqeq */
/* eslint-disable no-restricted-syntax */
import createElement from '../helpF/createElement'
import { deleteTask, addTask, addNewList, deleteList, moveTask } from '../boardManagement/updateBoard'
import { putTasksToApi, getTasksFromApi } from '../network/tasks'
import {
  getLocalStorageBoardTasksInNativeFormat,
  updateLocalStorageTasksInNativeFormat,
  updateLocalStorageTasks,
  getLocalStorageBoardTasks,
} from '../services/storage'
import startLoadAnimation from '../services/animationLoader'
import { renderBoard } from '../services/dom'
import { getIdsArrayFromObjArray } from '../helpF/help'
import Board from '../board'
/* 

remember wen dous everthing loads and what is the timing this is why its not working.

*/

export default function getAncestorSectionListId(liElement) {
  return Number(liElement.closest('section').dataset.originalListId)
}

export function getLiTaskId(liElement) {
  return Number(liElement.dataset.originalTaskId)
}

export function getTaskFromLi(liElement) {
  const taskId = getLiTaskId(liElement)

  return window.board.getTask(taskId)
}

export function filterLists() {
  const allLiElements = document.querySelectorAll('.section li')

  const valueInput = document.querySelector('#search').value.toLowerCase().trim()

  for (const liElement of allLiElements) {
    const liValue = liElement.innerText.toLowerCase().trim()

    liElement.style.display = liValue.search(new RegExp(valueInput.replace(/\s+/, '|'))) != -1 ? '' : 'none'
  }
}

function createMenuOption(text, handler) {
  const menuOption = createElement('div', [`${text}`], [`${text.replace(/[' ']/g, '-')}-option`])
  menuOption.addEventListener('click', handler)
  return menuOption
}

// will activate when user press right click on a task
// this will display the context menu.
export function contextClickHandler(event) {
  const prevMenu = document.querySelector('.context-menu')
  if (prevMenu) prevMenu.remove()

  const target = event.target.closest('LI')

  if (!target) return

  event.preventDefault() // to prevent the browser default context menu.

  function removeTask() {
    const taskId = getLiTaskId(target)
    deleteTask(taskId, window.board)
  }

  const menuOptionDelete = createMenuOption('delete task', removeTask)
  const contextMenu = createElement('div', [menuOptionDelete], ['context-menu'])

  // this function is used to create menu options. feel free to add one of your own!

  contextMenu.style.position = 'absolute'
  contextMenu.style.zIndex = 1000
  document.body.append(contextMenu)

  contextMenu.style.left = `${event.pageX}px`
  contextMenu.style.top = `${event.pageY}px`

  function exitContextMenuHandler() {
    contextMenu.remove()
    document.removeEventListener('onclick', exitContextMenuHandler)
  }

  document.addEventListener('click', exitContextMenuHandler)
}

// this is a event delegation handler for left click events on buttons
export function clickEventHandler(event) {
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
      addTask(relevantListId, inputValue, window.board)
    }
  } else if (targetRole === 'adding-list') {
    const inputValue = document.getElementById('add-new-list').value
    if (inputValue === '') {
      alert('Cant add an empty task!')
    } else {
      addNewList(inputValue, window.board)
    }
  } else if (targetRole === 'saving-board') {
    putTasksToApi(getLocalStorageBoardTasksInNativeFormat())
    startLoadAnimation(window.board.LISTS_DIV)
    setTimeout(() => {
      renderBoard(window.board.LISTS_DIV, window.board)
    }, 100)
  } else if (targetRole === 'loading-board') {
    startLoadAnimation(window.board.LISTS_DIV)

    getTasksFromApi().then((tasks) => {
      updateLocalStorageTasksInNativeFormat(tasks)
      window.board = new Board(window.BASE_TASKS_LISTS, getLocalStorageBoardTasks())
      window.board.LISTS_DIV = window.LISTS_DIV // TODO: should be in the constructor
      renderBoard(window.board.LISTS_DIV, window.board)
    })
  } else if (targetRole === 'delete-list') {
    const relevantListId = getAncestorSectionListId(target)
    deleteList(relevantListId, window.board)
  }
}

let mouseInTask = null // this is for monitoring if the mouse is pointing at the task

export function altKeyDownEventHandler(event) {
  const keyPressed = event.key

  if (mouseInTask && keyPressed === 'Alt') {
    document.addEventListener('keydown', numberKeyDownEventHandler)
    document.addEventListener('keyup', altKeyUpEventHandler)
  }
}

export function numberKeyDownEventHandler(event) {
  const keyPressed = event.key
  const listsIdsArray = getIdsArrayFromObjArray(window.board.lists).map((id) => String(id))
  if (mouseInTask && listsIdsArray.includes(keyPressed)) {
    const taskId = getLiTaskId(mouseInTask)
    const newListId = Number(keyPressed)

    moveTask(taskId, newListId, window.board)
    mouseInTask = null // the task has moved so the mouse is no longer inside it.
  }
}

export function altKeyUpEventHandler(event) {
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

export function mouseOverEventHandler(event) {
  const { target } = event

  if (target.tagName !== 'LI') return
  mouseInTask = target
}

export function mouseOutEventHandler(event) {
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

export function dblClickEventHandler(event) {
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

export function focusOutEventHandler(event) {
  const { target } = event

  if (target.tagName !== 'LI') return

  // We will use this later when we do the drag and drop
  // to know if to start the drag or not.
  dblClicked = false

  target.setAttribute('contenteditable', 'false')

  // update the task text to mach the new one
  const task = getTaskFromLi(target)
  task.text = target.innerText

  updateLocalStorageTasks(window.board)
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
export function onDragStart() {
  return false
}

export function clickDrugAndDropHandler(event) {
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
          const droppableIndex = window.board.getTaskIndex(droppableTaskId)

          moveTask(taskId, newListId, droppableIndex + 1, window.board)
        } else {
          const newListId = getAncestorSectionListId(currentDroppable)
          const taskId = Number(target.dataset.originalTaskId)

          moveTask(taskId, newListId, 0, window.board)
        }
      }

      document.removeEventListener('mousemove', onMouseMove)
      target.onmouseup = null
      target.remove()
      renderBoard(window.board.LISTS_DIV, window.board)
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

document.addEventListener('keydown', altKeyDownEventHandler)
document.addEventListener('mouseover', mouseOverEventHandler)
document.addEventListener('mouseout', mouseOutEventHandler)

document.addEventListener('click', clickEventHandler)
document.addEventListener('contextmenu', contextClickHandler)

document.addEventListener('dblclick', dblClickEventHandler)

document.addEventListener('focusout', focusOutEventHandler)
