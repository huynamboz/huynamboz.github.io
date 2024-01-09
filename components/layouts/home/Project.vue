<script setup>

const projects = ref([
  {
    title: 'Ecommerce v2',
    description: 'A website help connect people with the best local experts. This is a side project that I built to practice my skills.',
    link: '/docs/superbad-ecommerce',
    github: 'https://github.com/huynamboz/huynamboz.github.io',
    repo: 'superbad-store_frontend',
    owner: 'superbadteam',
    ownerLink: 'https://github.com/superbadteam',
    img: 'ecommerce-v2/thumb.png',
    tags: ['Ecommerce', 'VueJs 3', 'TailwindCSS'],
  },
  {
    title: 'My Portfolio',
    description: 'An open source portfolio template for developers. This is a side project that I built to practice my skills.',
    link: 'https://github.com/huynamboz/huynamboz.github.io',
    github: 'https://github.com/huynamboz/huynamboz.github.io',
    ownerLink: 'https://github.com/huynamboz',
    owner: 'huynamboz',
    repo: 'huynamboz.github.io',
    img: 'portfolio/preview.png',
    tags: ['Ecommerce', 'VueJs 3', 'TailwindCSS'],
  },
])

const currentProject = ref(projects.value[0])
onMounted(() => {
  console.log(currentProject)
})
</script>
<template>
  <div class="mt-20 w-full flex flex-col items-center">
    <!-- header -->
    <div class="content-wrapper">
      <p class="text-accent-700 font-bold text-sm">My impressive project</p>
      <h2 class="text-4xl text-slate-700 font-bold">Project</h2>
      <p class="text-base text-slate-700 mt-5">
        My side project that I built to practice my skills. Let discover it!
      </p>
      <div class="mt-5 ">
        <NuxtLink to="https://github.com/huynamboz" target="blank"
        class="text-accent-600 font-bold text-sm  bg-accent-100 hover:bg-accent-200 px-5 py-3 rounded-3xl"
      >
        learn more
        <Icon name="fluent:triangle-right-32-filled" size="10" class="ml-2" />
      </NuxtLink>
      </div>
    </div>
    <!-- end header -->
    <!-- list project -->
    <div class="flex justify-center background-grid border-t-[1px] mt-20 w-full">
      <div class="max-md:flex-col max-md:gap-10 content-wrapper mt-8 flex gap-20">
        <div class="flex flex-col gap-3">
          <div
            v-motion
            :initial="{ opacity: 0, x: -100 }"
            :visibleOnce="{ opacity: 1, x: 0, scale: 1 }"
            :delay="100 * index"
            @click="currentProject = project"
            class="opacity-0 border-[1px] w-fit bg-white p-5 rounded-2xl md:max-w-[350px] lg:max-w-[500px] cursor-pointer"
            :class="{'border-accent-600  text-accent-600': currentProject?.link === project.link}"
            v-for="(project, index) in projects"
            :key="project.title"
          >
            <NuxtLink
              :to="project.link"
              class="hover:underline text-sm font-bold"
              >{{ project.title }}</NuxtLink
            >
            <p class="text-sm mt-2 text-slate-700">
              {{ project.description }}
            </p>
          </div>
          <LayoutsPageReactBox />
        </div>
        <div class="flex-auto max-w-[800px] lg:-mt-20">
          <AtomVCodeMockup :project="currentProject"/>
        </div>
      </div>
    </div>
  </div>
</template>
