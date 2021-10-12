export function formatName(listName) {
  return listName
    .split('-')
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ')
}

export function formatListName(name) {
  return name.replace(/[' ']/g, '-')
}

export function formatListClassName(listName) {
  return `${formatListName(listName)}-tasks`
}
