function checkSet(arrToBeSet, checkValue){
  // Only change code below this line
  const newSet = new Set(arrToBeSet);
  return [newSet.has(checkValue), newSet.size]
  // Only change code above this line
}