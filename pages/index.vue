<script setup>
useHead({
  title: 'Huynamboz - impressive personal website',
  meta: [{ name: 'description', content: 'An impressive personal website about huynamboz' }],
})
useSeoMeta({
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
    <div class="background-grid w-full flex justify-center pt-20">
      <LayoutsHomeHero />
    </div>
    <div class="flex w-full justify-center">
      <LayoutsHomeQuote />
    </div>
    <div class="flex w-full justify-center">
      <LayoutsHomeProject />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
