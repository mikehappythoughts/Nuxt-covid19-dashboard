<template>
  <div class="w-full lg:max-w-7xl mx-auto debug-screens">
    <!-- header -->
    <header>
      <TheHero>
        <div class="w-full absolute px-8 lg:px-32">
          <HeadingBase
            class="text-white-ud uppercase text-6xl md:text-7xl lg:text-9xl font-serif leading-none"
          >
            covid uk
          </HeadingBase>
          <TextBase
            class="font-sans font-normal text-white-ud text-base md:text-1xl lg:text-2xl"
          >
            Use this tool to find out the latest stats for Coronavirus in the UK
          </TextBase>
        </div>
        <div class="absolute bottom-0 w-full flex justify-center h-12 mb-2">
          <IconBase
            class="fill-current text-darkGrey-50-ud"
            name="arrow-down"
          ></IconBase>
        </div>
      </TheHero>
    </header>
    <!-- content -->
    <Nuxt />
    <!-- footer -->
    <section>
      <TheFooter class="w-full">
        <template #credit>An RCCO development challenge by Mike Oscar</template>
        <template #source>Data source: Gov.uk</template>
        <template #title>covid uk</template>
      </TheFooter>
    </section>
  </div>
</template>

<script>
import TheFooter from '../components/dashboard/TheFooter.vue'
import TheHero from '../components/dashboard/TheHero.vue'
export default {
  components: { TheFooter, TheHero },
}
</script>

<style>
html {
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

body,
html {
  min-height: 100vh;
}

body {
  width: 100%;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
