/* eslint-disable consistent-return */
const TASKS_API_URL = 'https://json-bins.herokuapp.com/bin/614af7b24021ac0e6c080cbd'

export async function request(method = '', data = null) {
  const options = {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }

  if (data) {
    options.body = JSON.stringify(data)
  }

  try {
    return await fetch(TASKS_API_URL, options).then((response) => response.json())
  } catch {
    // eslint-disable-next-line no-alert
    alert('server error - trying again')
    request(method, data)
  }
}

export async function getTasksFromApi() {
  const loaded = await request('GET')
  return loaded.tasks
}

export async function putTasksToApi(tasks) {
  await request('PUT', { tasks })
}
