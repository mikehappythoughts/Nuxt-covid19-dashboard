import { ref, computed, readonly } from '@nuxtjs/composition-api'

const state = ref({
  covidData: {},
  data: {},
})

const isDataLoaded = ref(false)

export default function useState() {
  const setStateData = ({ covidData }) => {
    state.value.covidData = covidData
    isDataLoaded.value = true
  }

  return {
    setStateData,
    isDataReady: computed(() => isDataLoaded.value),
    storeState: computed(() => readonly(state.value)),
    covidData: computed(() => readonly(state.value.covidData.data)),
  }
}
