<script setup lang="ts">
// Get all authors
const { data: authors } = await useAsyncData('projects', () => {
  return queryCollection('projects').where('stem', '=', 'git/projects').first()
})
console.log(authors.value?.meta.body)
const projects = computed(() => authors.value?.meta.body)
</script>
<template>
  <div class="px-5 mt-20 w-full flex flex-col items-center">
    <!-- header -->
    <div class="content-wrapper flex flex-col items-center">
      <h2 class="text-4xl text-slate-700 font-bold">See all projects</h2>
      <p class="text-base text-slate-700 mt-5">
        Discover our projects, showcasing our skills in web development.
      </p>
    </div>

    <!-- list -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
      <div class="border p-3 rounded-xl w-full" v-for="(project, index) in projects" :key="index">
        <img class="w-full h-[250px] object-cover" :src="project.image" alt="">
        <p>
          <NuxtLink :to="project.link" class="text-accent-600 font-bold text-sm hover:underline">
            {{ project.title }}
          </NuxtLink>
        </p>
      </div>
    </div>
  </div>
</template>
