<template>
  <div class="error-404">
    <h1 class="font-bold uppercase mb-2">Oh Man! You got a 404 Error</h1>
    <p>The link you clicked on may be broken or no longer exist.</p>
    <p class="mt-4">
      <nuxt-link to="/">Go to home page</nuxt-link>
    </p>
  </div>
</template>
<script>
export default {
  name: 'Error404',
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
