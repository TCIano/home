export function checkArray(key) {
  let arr = ['admin', 'test', 'exploit']
  let index = arr.indexOf(key)
  if (index > -1) {
    return true
  } else {
    return false
  }
}
