const filteringMechanism = (array) => {
  const newArray = array.map((element) => {
    return element.sub_topic
  })
  const removedUndefined = newArray.filter((element) => {
    return element
  })
  const filteredArray = removedUndefined.filter((element, index, array) => {
    return array.findIndex(i => i === element) === index;
  });
  const sortedArray = filteredArray.sort()
  return sortedArray
}

module.exports = filteringMechanism;
