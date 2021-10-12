/* eslint-disable no-restricted-syntax */
import { formatListClassName } from './helpF/formatting'
import { validateTask } from './services/validator'
import { getObjectFromArray, generateNewIdInArrayOfObjects, checkIfObjectIdTaken } from './helpF/help'

export default class Board {
  constructor(BASE_TASKS_LISTS, tasks = {}) {
    /*
      the first thing we do is to add the base lists so they always
      be in the same order when we render them. (todo, in-progress, done)
      The problem is this:
      when we save the board in the localStorage we
      cant keep the order, we save in object form, so we force the order off the first base lists.
  
      **tasks - the lists in the localStorage format. We keep the name for clarity,
      but for each property of the object, tasks, we create a new list.
  
      ~ tasks object example:
  
      tasks = {
        todo: [],
        'in-progress, ["im a task", "me to"]],
        done: [],
        'list-i-added': ["hello world"],
      }
      
      */
    this.BASE_TASKS_LISTS = BASE_TASKS_LISTS
    this.lists = []
    for (const listName of this.BASE_TASKS_LISTS) {
      this.addNewList(listName, [], formatListClassName(listName))
    }

    for (const newTaskListName in tasks) {
      if (this.BASE_TASKS_LISTS.includes(newTaskListName)) {
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
    const task = validateTask({ text: taskText, id: this.generateUniqueTaskId(listTasks) })
    listTasks.push(task)
  }

  getList(listId) {
    return getObjectFromArray(listId, this.lists)
  }

  deleteList(listId) {
    this.lists.splice(this.lists.indexOf(this.getList(listId)), 1)
  }

  deleteTask(taskId) {
    const listId = this.getListIdFromTaskId(taskId)
    const list = this.getList(listId)
    const task = this.getTask(taskId)

    list.tasks.splice(list.tasks.indexOf(task), 1)
  }

  generateUniqueTaskId() {
    const allTasks = []

    for (const list of this.lists) {
      allTasks.push(...list.tasks)
    }
    return generateNewIdInArrayOfObjects(allTasks)
  }

  getTask(taskId) {
    const allTasks = []

    for (const list of this.lists) {
      allTasks.push(...list.tasks)
    }

    return getObjectFromArray(taskId, allTasks)
  }

  getListIdFromTaskId(taskId) {
    for (const list of this.lists) {
      for (const task of list.tasks) {
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
