export function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild)
  }
}

export function getIdsArrayFromObjArray(objectArr) {
  return objectArr.map((obj) => obj.id)
}

export function generateNewIdInArrayOfObjects(objectArr) {
  /* Gets the largest id and returns it + 1. 
      i.e the returning id does not exists in the
      array and is unique.
      */

  if (objectArr.length === 0) return 1
  const idArray = getIdsArrayFromObjArray(objectArr)
  return Math.max(...idArray) + 1
}

export function getObjectFromArray(objectId, objectArr) {
  // throws Error if Object does not exists.
  const requestedObject = objectArr.find((obj) => obj.id === objectId)
  if (requestedObject === undefined) throw new Error('no such object exists')
  return requestedObject
}

export function checkIfObjectIdTaken(id, getFunction) {
  // getFunction is a function expression. we will know where to search depending on the function
  try {
    getFunction(id) // remember: getFunction can be: [getList] and throws Error if no list was found.
    throw new Error('id already exist')
  } catch (error) {
    /* 
        Only if the error is because of "finding" the object
        then we continue and throw an Error.
        */
    if (error.message === 'id already exist') {
      throw new Error('id already exist')
    }
  }
}

export function deepCopyObj(obj) {
  return JSON.parse(JSON.stringify(obj))
}
