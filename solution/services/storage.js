/* eslint-disable no-restricted-syntax */
export function updateLocalStorageTasks(board) {
  const tasks = {
    todo: [],
    'in-progress': [],
    done: [],
  }

  // the format requires 'todo' and not 'to-do' so we handle this here.
  for (const list of board.lists) {
    if (list.name === 'to-do') {
      tasks.todo = list.tasks.map((task) => task.text)
    } else {
      tasks[list.name] = list.tasks.map((task) => task.text)
    }
  }

  localStorage.setItem('tasks', JSON.stringify(tasks))
}

// this functions will help us in managing the sever api.
export function getLocalStorageBoardTasksInNativeFormat() {
  return JSON.parse(localStorage.getItem('tasks'))
}

export function getLocalStorageBoardTasks() {
  const localStorageTasks = getLocalStorageBoardTasksInNativeFormat()

  // we replace the property key: 'todo' with the key 'to-do',
  // so our Board class can handle it properly.
  delete Object.assign(localStorageTasks, { 'to-do': localStorageTasks.todo }).todo
  return localStorageTasks
}

export function updateLocalStorageTasksInNativeFormat(newTasks) {
  localStorage.setItem('tasks', JSON.stringify(newTasks))
}

export function setDefaultLocalStorageTasks() {
  localStorage.setItem('tasks', JSON.stringify({ todo: [], 'in-progress': [], done: [] }))
}
