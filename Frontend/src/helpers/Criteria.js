const criteria = (originalArray, newArray) => {
  let resultArray = []
  newArray.forEach((element) => {
    if(originalArray.findIndex((e) => {
      return e === element
    }) < 0){
      resultArray.push(false);
    } else{
      resultArray.push(element);
    }
  })
  return resultArray;
}

module.exports = criteria;
