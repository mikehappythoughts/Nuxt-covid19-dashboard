<template>
  <div class="relative bg-hero-image flex items-center">
    <slot />
  </div>
</template>
<script>
export default {}
</script>
<style>
.bg-hero-image {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('~assets/header-bkg-mobile.jpg');
  height: 63vh;
  background-position: right 0;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
