<template>
  <main>
    <TheStatistics />
    <TheChart />
    <TheArticles />
  </main>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import useActions from '../composables/useActions'
import TheArticles from '../components/TheArticles.vue'
import TheStatistics from '../components/TheStatistics.vue'

export default defineComponent({
  components: { TheStatistics, TheArticles },

  setup() {
    const { fetch } = useActions()

    fetch()

    return {}
  },
})
</script>
