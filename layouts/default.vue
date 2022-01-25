<template>
  <div>
    <TheHeader v-if="isDataReady" />
    <Nuxt />
    <TheFooter v-if="isDataReady" />
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import useState from '../composables/useState'

export default defineComponent({
  setup() {
    const { isDataReady } = useState()

    return {
      isDataReady,
    }
  },
})
</script>
