<template>
  <section>
    <section
      class="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 grid-rows-2 gap-6 md:p-24 lg:p-28"
    >
      <stat-panel
        v-for="(
          {
            containerClasses,
            iconClasses,
            headingClasses,
            bodyClasses,
            iconName,
            headingText,
            bodyText,
          },
          index
        ) in stats"
        :key="headingText"
        :class="containerClasses"
      >
        <div class="w-24 md:w-24 lg:mr-10">
          <IconBase :class="iconClasses" :name="iconName"></IconBase>
          <p v-if="index === 0" class="mt-0 mb-4 text-center text-roseRed-ud">
            {{ alertIconText }}
          </p>
        </div>

        <div>
          <HeadingBase :class="headingClasses">
            {{ headingText }}
          </HeadingBase>

          <TextBase :class="bodyClasses">
            {{ bodyText }}
          </TextBase>
        </div>
      </stat-panel>
    </section>
    <!-- chart -->
    <section class="px-6 bg-lightGrey-100-ud py-6 flex justify-center">
      <div v-if="isChartDataReady" class="container">
        <TheChart
          :content="chartData"
          title="Cases per day (last 7 days)"
          type="line"
          color="#bb1515"
        ></TheChart>
        <div class="pt-6 w-full flex justify-center">
          <ButtonBase
            class="md:text-base cursor-pointer hover:bg-black-ud hover:text-white-ud rounded-md py-2 px-6 border-solid border-2 border-black-ud"
            @clicked="goToUrl"
            >view in detail</ButtonBase
          >
        </div>
      </div>
    </section>
    <!-- text panels -->
    <section class="flex justify-center py-10 md:py-28 lg:py-28">
      <div class="flex flex-col md:flex-row lg:flex-row">
        <TextPanel
          v-for="{ title, copy } in textPanelContent"
          :key="title"
          class="flex flex-col justify-center text-center px-10 py-4 md:py-20 lg:py-20"
        >
          <template #title>
            <HeadingBase
              class="text-black-ud uppercase text-3xl font-serif leading-normal"
            >
              {{ title }}
            </HeadingBase>
          </template>
          <template #copy>
            <TextBase
              class="text-darkGrey-50-ud md:text-1xl lg:text-1xl font-sans leading-normal"
            >
              {{ copy }}
            </TextBase>
          </template>
        </TextPanel>
      </div>
    </section>
  </section>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
import TextBase from '../components/shared/text/TextBase.vue'
import HeadingBase from '../components/shared/heading/HeadingBase.vue'
import TheChart from '../components/dashboard/TheChart.vue'
import StatPanel from '../components/dashboard/StatPanel.vue'

export default {
  components: { TextBase, HeadingBase, TheChart, StatPanel },
  async asyncData({ store }) {
    try {
      const res = await fetch(
        'https://api.coronavirus.data.gov.uk/v1/data?filters=areaType=nation;areaName=england&structure={"date":"date","newCases":"newCasesByPublishDate"}'
      )
        .then((res) => res.json())
        .then((data) => data.data)

      store.commit('content/setCovidData', res)
    } catch (error) {
      throw new Error(error)
    }
  },
  data: () => {
    return {
      chartData: {},
      stats: [],
      newCovidCases: '',
      textPanelContent: [],
      alertIconText: '',
    }
  },
  computed: {
    ...mapState('content', ['isStoreReady', 'isChartDataReady']),

    ...mapGetters('content', [
      'getCovidData',
      'getTextContent',
      'getStatContent',
      'getNewCovidCasesYesterday',
      'getSevenDayAverage',
      'getIncreaseFromPeviousDay',
    ]),
  },
  created() {
    this.createChartData()
    this.getTextPanelContent()
    this.getStatPanelContent()
    this.setIsChartDataReady(true)
  },
  methods: {
    ...mapMutations('content', ['setIsChartDataReady']),
    goToUrl() {
      window.location.href = 'https://www.gov.uk/coronavirus'
    },
    getTextPanelContent() {
      this.textPanelContent = this.getTextContent
    },
    getStatPanelContent() {
      const data = this.getStatContent

      const newCovidCasesYesterday = this.getNewCovidCasesYesterday
      const sevenDayAverage = this.getSevenDayAverage
      const {
        increaseSubText,
        formatedIncreaseText,
      } = this.getIncreaseFromPeviousDay

      // new covid cases yesterday
      data[0].headingText = this.formatNumber(newCovidCasesYesterday)
      // % increase from yesterday
      data[1].headingText = formatedIncreaseText
      // last 7 day average
      data[2].headingText = this.formatNumber(sevenDayAverage)

      // alert icon sub text
      this.alertIconText =
        newCovidCasesYesterday > sevenDayAverage
          ? 'Above average'
          : 'Below average'
      // increase or decrease from previous day text
      data[1].bodyText = increaseSubText

      // add the amended data into the statcontent data var
      this.stats = data
    },
    formatNumber(num) {
      return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    },
    createChartData() {
      const covidData = {
        labels: [],
        data: [{ values: [] }],
      }

      // add the labels and data into our object
      const sourceData = this.getCovidData
      const newDataSource = sourceData.slice(0, 7)

      newDataSource.forEach((item) => {
        covidData.labels.push(this.formatDate(item.date))
        covidData.data[0].values.push(item.newCases)
      })

      this.chartData = covidData
    },

    formatDate(dateStr) {
      const dArr = dateStr.split('-') // ex input "2010-01-18"
      return `${dArr[2]}/${dArr[1]}`
    },
  },
}
</script>
<style></style>
