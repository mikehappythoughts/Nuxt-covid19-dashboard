import { useFetch, computed, useContext } from '@nuxtjs/composition-api'
import useState from './useState'

export default function useActions() {
  const { $axios, $config } = useContext()
  const { setStateData } = useState()

  const { fetch, fetchState } = useFetch(async () => {
    await $axios.$get(`${$config.covidURL}`).then((res) => {
      setStateData({
        covidData: res,
      })
    })
  })

  // Manually trigger a refetch
  fetch()

  return {
    fetch,
    fetchErrors: computed(() => fetchState.error),
  }
}
