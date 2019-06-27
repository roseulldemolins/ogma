
const filterMultiCData = (state) => {
  const onlyQuestions = state.filter((question) => {
    return question.type === "multi_choice";
  });
  return getRandomElements(onlyQuestions)
}

let getRandomElements = function(onlyQuestions) {
  if (!onlyQuestions.length) {
      return;
    }
  let results = [];
  while (results.length < 8) {
    let newNumber = Math.floor(Math.random()*onlyQuestions.length);
    if (results.indexOf(onlyQuestions[newNumber]) < 0) {
      results.push(onlyQuestions[newNumber]);
    }
  }
  const answerArray = makeAnswerArray(results);
  const questionArray = makeQuestionArray(results);
  const merge = answerArray.concat(questionArray)
  return merge.sort(() => Math.random() - 0.5)
}

const makeAnswerArray = (array) => {
  const answerArray = array.map((question, index) => ({
    text: question.answer_text,
    matchingID: index
  }))
  return answerArray
}

const makeQuestionArray = (array) => {
  const questionArray = array.map((question, index) => ({
    text: question.question_text,
    matchingID: index
  }))
  return questionArray
}

module.exports = filterMultiCData;
