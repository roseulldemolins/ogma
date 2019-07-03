const criteria = (originalArray, newArray) => {
  let resultArray = []
  newArray.forEach((element) => {
    if(originalArray.findIndex((e) => {
      return e === element
    }) < 0){
      resultArray = [...resultArray, false]
    } else{
      resultArray = [...resultArray, element]
    }
  })
  return resultArray;
}

module.exports = criteria;
