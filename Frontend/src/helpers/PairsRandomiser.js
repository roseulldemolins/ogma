const filterQuestionsData = (state) => {
  const onlyQuestions = state.filter((question) => {
    return question.type === "q_and_a";
  });
  const onlyNotLearned = onlyQuestions.filter((question) => {
    return question.learned === false
  });
  return getRandomElements(onlyNotLearned)
}

let getRandomElements = function(onlyNotQuestions) {
  let pairLength = 8;
  if (!onlyNotQuestions.length) {
      return;
    }
  if(onlyNotQuestions.length < pairLength){
    pairLength = onlyNotQuestions.length
  }
  let results = [];
  while (results.length < pairLength) {
    let newNumber = Math.floor(Math.random()*onlyNotQuestions.length);
    if (results.indexOf(onlyNotQuestions[newNumber]) < 0) {
      results.push(onlyNotQuestions[newNumber]);
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

module.exports = filterQuestionsData;
