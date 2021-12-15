<template>
  <section v-show="isDataReady" class="c-chart">
    <div class="container c-chart__content">
      <div class="c-chart__graph" ref="chartElm"></div>
      <button
        class="c-chart__btn"
        @click="openCovidWebsite"
        @keydown.enter="openCovidWebsite"
      >
        view in detail
      </button>
    </div>
  </section>
</template>

<script>
import { defineComponent, ref, watch } from '@nuxtjs/composition-api'

import { Chart } from 'frappe-charts/dist/frappe-charts.esm.js'
import useState from '../composables/useState'
import useGetters from '../composables/useGetters'

export default defineComponent({
  name: 'TheChart',
  setup() {
    const { isDataReady } = useState()
    const { getChartData, getCovidData } = useGetters()

    const chartElm = ref(null)

    const chart = ref(null)

    const createChartData = () => {
      const chartData = ref({
        labels: [],
        datasets: [
          {
            name: 'New Cases',
            type: 'line',
            values: [],
          },
        ],
      })

      // add the labels and data into our object for the chart
      const newDataSource = getCovidData()
      newDataSource.forEach((item) => {
        chartData.value.labels.push(formatDate(item.date))
        chartData.value.datasets[0].values.push(item.newCases)
      })
      return chartData.value
    }

    const formatDate = (dateStr) => {
      const splitDate = dateStr.split('-') // ex input "2010-01-18"
      return `${splitDate[2]}/${splitDate[1]}`
    }

    const renderChart = () => {
      chart.value = new Chart(chartElm.value, {
        title: 'Cases per day (last 7 days)',
        data: createChartData(),
        type: 'line', // or 'bar', 'line', 'scatter', 'pie', 'percentage'
        height: 500,
        colors: ['#bb1515'],
      })
    }
    watch(isDataReady, (newValue) => {
      if (newValue === true) {
        renderChart()
      }
    })

    const openCovidWebsite = () => {
      window.location.href = 'https://www.gov.uk/coronavirus'
    }

    return {
      isDataReady,
      chartElm,
      getChartData,
      chart,
      openCovidWebsite,
    }
  },
})
</script>
