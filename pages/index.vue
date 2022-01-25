<template>
  <main v-if="isLoading">
    <TheStatistics />
    <TheChart />
    <TheArticles />
  </main>
</template>

<script>
import { defineComponent, onMounted, ref } from '@nuxtjs/composition-api'
import useActions from '../composables/useActions'
import TheArticles from '../components/TheArticles.vue'
import TheStatistics from '../components/TheStatistics.vue'

export default defineComponent({
  components: { TheStatistics, TheArticles },

  setup() {
    const { fetch } = useActions()

    const isLoading = ref(false)

    fetch()

    onMounted(() => {
      isLoading.value = !isLoading.value
    })

    return {
      isLoading,
    }
  },
})
</script>
