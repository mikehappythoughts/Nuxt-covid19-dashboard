<template>
  <section v-if="isDataReady" class="c-stats">
    <div class="container">
      <div class="c-stats__content">
        <div class="c-stats__left-content">
          <div>
            <svg
              aria-hidden="true"
              role="img"
              viewBox="0 0 24 24"
              class="feather feather-alert-circle c-stats__icon c-stats--fill-red"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
          </div>

          <div class="c-stats--color-red">{{ alertIconText }}</div>
          <div class="c-stats__heading c-stats--color-red">
            {{ formatNumber(yesterdaysNewCovidCases) }}
          </div>
          <div class="c-stats__description">New Cases Yesterday</div>
        </div>
        <div class="c-stats__right-content">
          <div class="c-stats__right-content__top">
            <!-- icon -->
            <div>
              <svg
                aria-hidden="true"
                role="img"
                viewBox="0 0 24 24"
                class="feather feather-trending-up c-stats__icon c-stats--margin-right"
              >
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                <polyline points="17 6 23 6 23 12"></polyline>
              </svg>
            </div>
            <div class="c-stats__text-item">
              <span class="c-stats__heading">{{
                getIncreaseFromPreviousDay.percentageText
              }}</span>
              <span class="c-stats__description">
                {{ getIncreaseFromPreviousDay.increaseSubText }}
              </span>
            </div>
          </div>

          <div class="c-stats__right-content__bottom">
            <!-- icon -->
            <div>
              <svg
                aria-hidden="true"
                role="img"
                viewBox="0 0 24 24"
                class="feather feather-calendar c-stats__icon c-stats--margin-right"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
            </div>
            <div class="c-stats__text-item">
              <span class="c-stats__heading">{{
                formatNumber(getCovidSevenDayAverage)
              }}</span>
              <span class="c-stats__description"> Average of last 7 days </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { computed, defineComponent } from '@nuxtjs/composition-api'

import useState from '../composables/useState'
import useGetters from '../composables/useGetters'

export default defineComponent({
  name: 'TheStatistics',
  setup() {
    const { isDataReady } = useState()
    const { getCovidData, getNewCovidCasesYesterday } = useGetters()

    const getCovidSevenDayAverage = computed(() => {
      const newCovidCasesArr = getCovidData()

      const totalSum = newCovidCasesArr.reduce((accumulator, cases) => {
        return accumulator + cases.newCases
      }, 0)

      const totalNums = newCovidCasesArr.length
      // return the average.
      return Math.trunc(totalSum / totalNums)
    })

    const getIncreaseFromPreviousDay = computed(() => {
      const increaseData = {
        increaseSubText: '',
        percentageText: '',
      }
      const newCasesNum = getCovidData()[0].newCases
      const oldCasesNum = getCovidData()[1].newCases

      const totalSum = newCasesNum - oldCasesNum
      const increase = Math.trunc((totalSum / oldCasesNum) * 100)

      const symbol = newCasesNum < oldCasesNum ? '' : '+'

      // populate object with calculated values
      increaseData.increaseSubText =
        symbol === '+'
          ? 'increase from previous day'
          : 'decrease from previous day'
      increaseData.percentageText = `${symbol}${increase}%`

      return increaseData
    })

    const yesterdaysNewCovidCases = computed(() => {
      return getNewCovidCasesYesterday.value
    })

    const alertIconText = computed(() => {
      return yesterdaysNewCovidCases.value > getCovidSevenDayAverage.value
        ? 'Above average'
        : 'Below average'
    })

    const formatNumber = (num) => {
      return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    return {
      isDataReady,
      getCovidSevenDayAverage,
      getIncreaseFromPreviousDay,
      yesterdaysNewCovidCases,
      alertIconText,
      formatNumber,
    }
  },
})
</script>
