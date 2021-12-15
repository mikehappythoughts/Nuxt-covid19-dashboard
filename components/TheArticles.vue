<template>
  <section v-if="isDataReady" class="c-article">
    <div class="container">
      <div class="row">
        <article
          v-for="({ heading, description }, index) in articles"
          :key="index"
          class="col-12 col-md-4 c-article__item"
        >
          <h3>{{ heading }}</h3>
          <p>{{ description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent, ref } from '@nuxtjs/composition-api'
import useState from '../composables/useState'

export default defineComponent({
  name: 'TheArticles',
  setup() {
    const { isDataReady } = useState()

    const articles = ref([
      {
        heading: 'WASH HANDS',
        description: 'Keep washing your hands regularly',
      },
      {
        heading: 'COVER FACE',
        description: 'Wear a face covering in enclosed spaces',
      },
      {
        heading: 'MAKE SPACE',
        description: 'Stay at least 2 metres apart, wear face covering',
      },
    ])

    return {
      isDataReady,
      articles,
    }
  },
})
</script>
