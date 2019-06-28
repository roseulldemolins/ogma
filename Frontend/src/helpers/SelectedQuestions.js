const selectedQuestions = (targetArray, criteriaArray) => {
  const filteredQuestions = targetArray.filter((element) => {
    return (criteriaArray.findIndex((criteria) => {
      return criteria === element.sub_topic
    }) > -1)
  })
  return filteredQuestions;
}

module.exports = selectedQuestions;
