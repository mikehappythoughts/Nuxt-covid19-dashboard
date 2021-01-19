const getters = {
  getNewCovidCasesYesterday(state) {
    return state.covidData[1].newCases
  },
  getCovidData(state) {
    return state.covidData
  },
  getTextContent(state) {
    return state.textPanelText
  },
  getStatContent(state) {
    return JSON.parse(JSON.stringify(state.statContent))
  },
  getSevenDayAverage(state) {
    const { covidData } = state
    // grab the first seven days of newcases
    const newCasesNumberArr = covidData.slice(0, 7)
    // add all numbers in array together
    const totalSum = newCasesNumberArr.reduce((accumulator, newCases) => {
      return accumulator + newCases.newCases
    }, 0)

    const totalNums = newCasesNumberArr.length
    // return the average.
    return Math.trunc(totalSum / totalNums)
  },
  getIncreaseFromPeviousDay(state) {
    const { covidData } = state

    const increaseData = {
      increaseSubText: '',
      formatedIncreaseText: '',
    }
    const newCasesNum = covidData[0].newCases
    const oldCasesNum = covidData[1].newCases

    const totalSum = newCasesNum - oldCasesNum
    const increase = Math.trunc((totalSum / oldCasesNum) * 100)

    const symbol = newCasesNum < oldCasesNum ? '' : '+'

    // populate object with calculated values
    increaseData.increaseSubText =
      symbol === '+'
        ? 'increase from previous day'
        : 'decrease from previous day'
    increaseData.formatedIncreaseText = `${symbol}${increase}%`

    return increaseData
  },
}

export default getters
