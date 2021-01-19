<template>
  <vue-frappe
    v-if="isChartDataReady"
    id="test"
    :title="title"
    :type="type"
    :height="500"
    :labels="content.labels"
    :colors="[color]"
    :dataSets="content.data"
    :tooltipOptions="toolTipOptions"
  >
  </vue-frappe>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'TheChart',
  props: {
    content: {
      type: Object,
      required: false,
      default: () => {},
    },
    title: {
      type: String,
      required: false,
      default: '',
    },
    type: {
      type: String,
      required: false,
      default: 'line',
    },
    color: {
      type: String,
      required: false,
      default: '#1c4155',
    },
  },
  data() {
    return {
      toolTipOptions: {
        formatTooltipX: (d) => (d + '').toUpperCase(),
        formatTooltipY: (d) => d,
      },
    }
  },
  computed: {
    ...mapState('content', ['isChartDataReady']),
  },
}
</script>
<style>
.title {
  font-size: inherit;
}
</style>
