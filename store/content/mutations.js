const mutations = {
  setCovidData(state, data) {
    state.covidData = data
    state.isStoreReady = true
  },
  setIsChartDataReady(state, val) {
    state.isChartDataReady = val
  },
  setAppReady(state, val) {
    state.isAppReady = val
  },
}

export default mutations
