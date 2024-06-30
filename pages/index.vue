<script setup>
useHead({
  htmlAttrs: { lang: 'en' },
  title: 'Huynamboz - impressive personal website',
  meta: [{ name: 'description', content: 'An impressive personal website about huynamboz' }],
})

useSeoMeta({
  charset: 'utf-8',
  author: 'huynamboz',
  title: 'Huynamboz - impressive personal website',
  ogTitle: 'Huynamboz - impressive personal website',
  description: 'An impressive personal website about huynamboz',
  ogDescription: 'An impressive personal website about huynamboz',
  ogImage: '/public/images/thumbnail.png',
})

definePageMeta({ layout: 'page' })
</script>
<template>
  <div class="flex flex-col w-full items-center pb-20 z-0 bg-white">
    <section id="hero" class="background-grid w-full flex justify-center pt-20">
      <LayoutsHomeHero />
    </section>
    <section id="quote" class="flex w-full justify-center">
      <LayoutsHomeQuote />
    </section>
    <section id="project" class="flex w-full justify-center">
      <LayoutsHomeProject />
    </section>
  </div>
</template>

<style lang="scss" scoped></style>
