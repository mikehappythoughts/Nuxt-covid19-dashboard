<template>
  <svg class="feather">
    <use
      v-bind="{
        'xlink:href': require('~/assets/feather-sprite.svg') + `#${name}`,
      }"
    />
  </svg>
</template>
<script>
export default {
  name: 'IconBase',
  components: {},
  props: {
    name: {
      type: String,
      default: 'box',
    },
  },
  data: () => {
    return {}
  },
  computed: {
    path() {
      return this.$getSvgIcon(this.name).paths
    },
    viewBox() {
      return this.$getSvgIcon(this.name).viewbox
    },
  },
}
</script>
<style>
.feather {
  width: 100%;
  height: 100%;
  stroke: currentColor;
  stroke-width: 1;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
}
</style>
