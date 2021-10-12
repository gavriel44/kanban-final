/* eslint-disable import/prefer-default-export */
import './styles.css'
import Board from './board'
import { getLocalStorageBoardTasks, setDefaultLocalStorageTasks } from './services/storage'
import { renderBoard } from './services/dom'
// eslint-disable-next-line no-unused-vars
import { clickDrugAndDropHandler, onDragStart } from './eventHandling/clickDragAndDropHandler'

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

// constants for us to use.
const LISTS_DIV = document.getElementById('lists-div')
const BASE_TASKS_LISTS = ['to-do', 'in-progress', 'done']
window.BASE_TASKS_LISTS = BASE_TASKS_LISTS
window.LISTS_DIV = LISTS_DIV
// eslint-disable-next-line import/no-mutable-exports

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
  const board = new Board(BASE_TASKS_LISTS, getLocalStorageBoardTasks())
  board.LISTS_DIV = LISTS_DIV // TODO: should be in the constructor
  window.board = board
  console.log('test: ', board)

  renderBoard(LISTS_DIV, board)
}

onEnteringSite()

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

// -------------------
/*
 *
 *
 * board management functions.
 *
 *
 */

// -------------------
/*
 *
 *
 * event handling functions.
 *
 */

// this function is for the search input at the top of the page.
// onkeyup="filterLists()" --> look in html

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

/*
 *
 * loading animation.
 * renders a cool animation to the LISTS_DIV
 *
 */

// -------------------
/*
 *
 * help functions
 *
 */

/*
 *
 * validation functions
 *
 */

// -------------------

// -------------------
