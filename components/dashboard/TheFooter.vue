<template>
  <footer>
    <div
      class="flex p-8 bg-nileBlue-ud rounded-t-lg justify-between flex-col md:flex-row lg:flex-row"
    >
      <div>
        <p class="text-white-ud md:text-1xl lg:text-1xl">
          <slot name="credit" />
        </p>
        <p class="text-white-ud md:text-1xl lg:text-1xl">
          <slot name="source" />
        </p>
      </div>

      <div class="">
        <p
          class="text-white-ud md:text-2xl lg:text-2xl font-serif font-bold uppercase mt-4 md:mt-0"
        >
          <slot name="title" />
        </p>
      </div>
    </div>
  </footer>
</template>
<script>
export default {}
</script>
<style></style>
