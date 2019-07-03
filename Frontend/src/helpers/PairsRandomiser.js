const filterQuestionsData = (state) => {
  const onlyQuestions = state.filter((question) => {
    return question.type === "q_and_a";
  });
  return getRandomElements(onlyQuestions)
}

let getRandomElements = function(onlyQuestions) {
  let pairLength = 8;
  if (!onlyQuestions.length) {
      return;
    }
  if(onlyQuestions.length < pairLength){
    pairLength = onlyQuestions.length
  }
  let results = [];
  while (results.length < pairLength) {
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

module.exports = filterQuestionsData;

const testArray = [
  {
    _id: "5d134a076f2b8a45cf172d91",
    study_note_text: "Note to self - add more study notes",
    type: "study_note",
    topic: "coding"
  },
  {
    _id: "5d134a076f2b8a45cf172d96",
    question_text: "What does TDD stand for?",
    answer_text: "Test Driven Development",
    sub_topic: "Programming",
    type: "q_and_a",
    topic: "coding"
    },
  {
    "_id": "5d134a076f2b8a45cf172d97",
    question_text: "What does HTML stand for?",
    answer_text: "Hypertext Markup Language",
    sub_topic: "HTML",
    type: "q_and_a",
    topic: "coding"
  }
]

console.log(filterQuestionsData(testArray));
