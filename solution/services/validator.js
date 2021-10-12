/* eslint-disable import/prefer-default-export */
export function validateTask(task) {
  if (typeof task === 'object' && task.text.length) {
    return task
  }

  throw Error('Invalid task')
}
