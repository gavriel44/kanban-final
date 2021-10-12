import { updateLocalStorageTasks } from '../services/storage'
import { renderLists } from '../services/dom'
import { formatListName, formatListClassName } from '../helpF/formatting'

export function addTask(listId, taskText, board) {
  board.addTask(listId, taskText)
  updateLocalStorageTasks(board)

  renderLists(board.LISTS_DIV, board.lists)
}

export function addNewList(listName, tasks = [], board) {
  board.addNewList(formatListName(listName), tasks, formatListClassName(listName))
  updateLocalStorageTasks(board)
  renderLists(board.LISTS_DIV, board.lists)
}

export function deleteList(listId, board) {
  board.deleteList(listId)
  updateLocalStorageTasks(board)
  renderLists(board.LISTS_DIV, board.lists)
}

export function deleteTask(taskId, board) {
  board.deleteTask(taskId)
  updateLocalStorageTasks(board)
  renderLists(board.LISTS_DIV, board.lists)
}

export function moveTask(taskId, newListId, newIndex = 0, board) {
  const task = board.getTask(taskId)
  const oldListId = board.getListIdFromTaskId(taskId)
  const oldList = board.getList(oldListId)
  const newList = board.getList(newListId)

  oldList.tasks.splice(oldList.tasks.indexOf(task), 1)
  newList.tasks.splice(newIndex, 0, task)

  updateLocalStorageTasks(board)
  renderLists(board.LISTS_DIV, board.lists)
}
