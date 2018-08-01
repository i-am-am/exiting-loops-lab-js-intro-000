function breakOut(array, changeValue, stopValue){
  for (i = 0; i < array.length; i++){
    if (array[i] === stopValue){
      break
    }
    array[i] = changeValue
  }
  return array
}

function keepGoing(array, changeValue, skipValue){
  for (i = 0; i < array.length; i++){
    if (array[i] === skipValue){
      continue
    }
    array[i] = changeValue
  }
  return array
}

function findBy(array, findFn){
  var found
  for (i = 0; i < array.length; i++){
    if (array[i] === findFn()){
      found = array[i]
    }
  }
  return found
}
