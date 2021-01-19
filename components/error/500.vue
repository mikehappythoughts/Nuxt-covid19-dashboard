<template>
  <div>
    <h1 class="font-bold uppercase mb-2">Oh Man! You got an error</h1>
    <p>
      There was a problem fetching the app data.<br />Press refresh to try
      again.
    </p>
  </div>
</template>
<script>
export default {
  name: 'Error500',
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
