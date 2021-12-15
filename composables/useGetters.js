import { computed } from '@nuxtjs/composition-api'

import useState from './useState'

export default function useAction() {
  const { covidData } = useState()

  const getCovidData = () => {
    const copy = [...covidData.value]
    return copy.slice(0, 7)
  }

  const getNewCovidCasesYesterday = computed(() => covidData.value[1].newCases)

  return {
    getCovidData,
    getNewCovidCasesYesterday,
  }
}
