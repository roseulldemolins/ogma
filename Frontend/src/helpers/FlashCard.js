const learnedCardFilter = (state) => {
  const onlyFalse = state.filter((questionData) => {
    return questionData.learned === false;
  });
}

module.exports = learnedCardFilter;
