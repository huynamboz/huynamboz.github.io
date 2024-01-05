<script setup>
definePageMeta({ layout: 'page' })
</script>
<template>
  <div class=" bg-hero-pattern">
    <NuxtLink to="/">Home</NuxtLink>
    <span class="text-slate-700 dark:text-slate-300"
      ><span
        class="mb-4 block text-[2.5rem] font-[1000] leading-none md:mb-6 md:text-7xl"
        style="opacity: 1; transform: none"
        >I'm
        <strong class="text-accent-600 dark:text-accent-500">Enji</strong>
        Kusnadi,
      </span>
      <h1
        class="block text-base text-slate-600 md:text-xl dark:text-slate-400"
        style="opacity: 1; transform: none"
      >
        <span class="lowercase">A</span>
        <strong class="font-bold lowercase text-slate-700 dark:text-slate-300"
          >Front-End Developer</strong
        >
        who loves intuitive,
        <span class="block">clean and modern UI design.</span>
      </h1></span
    >
    <NuxtLink to="/about">About</NuxtLink>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
