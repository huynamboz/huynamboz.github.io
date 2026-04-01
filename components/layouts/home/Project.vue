<script lang="ts" setup>
const projects = [
  {
    title: 'Mindrawer',
    description: 'Impressive whiteboard for sketching anything you want. Built with Nuxt 3, Vue 3, and TailwindCSS.',
    image: 'https://raw.githubusercontent.com/huynamboz/mindrawer/main/docs/images/1.png',
    github: 'https://github.com/huynamboz/mindrawer',
    demo: 'https://mindrawer.pages.dev',
    tags: ['Nuxt 3', 'Vue 3', 'TailwindCSS'],
    type: 'github',
    owner: 'huynamboz',
    repo: 'mindrawer',
  },
  {
    title: 'Vue Drag Scroller',
    description: 'A Vue directive that makes any element draggable and scrollable by mouse. Available as an npm package.',
    image: 'https://github.com/huynamboz/vue-drag-scroller/assets/38585889/57cc7cf2-1273-4416-8fcb-df8262a4af49',
    github: 'https://github.com/huynamboz/vue-drag-scroller',
    demo: 'https://www.npmjs.com/package/vue-drag-scroller',
    tags: ['Vue 2/3', 'npm', 'Directive'],
    type: 'npm',
    owner: 'huynamboz',
    repo: 'vue-drag-scroller',
    pkg: 'vue-drag-scroller',
  },
]

const { data: stats } = await useAsyncData('project-section-stats', async () => {
  return Promise.all(projects.map(async (p) => {
    if (p.type === 'github') {
      try {
        const res = await $fetch<{ stargazers_count: number; forks_count: number }>(
          `https://api.github.com/repos/${p.owner}/${p.repo}`,
          { headers: { Accept: 'application/vnd.github+json' } }
        )
        return { stars: res.stargazers_count, forks: res.forks_count }
      } catch { return { stars: null, forks: null } }
    }
    if (p.type === 'npm') {
      try {
        const [info, dl] = await Promise.all([
          $fetch<{ version: string }>(`https://registry.npmjs.org/${p.pkg}/latest`),
          $fetch<{ downloads: number }>(`https://api.npmjs.org/downloads/point/last-month/${p.pkg}`),
        ])
        return { version: info.version, downloads: dl.downloads }
      } catch { return { version: null, downloads: null } }
    }
    return {}
  }))
})
</script>

<template>
  <div class="mt-20 w-full flex flex-col items-center">
    <div class="content-wrapper">
      <p class="text-accent-700 font-bold text-sm">My impressive project</p>
      <h2 class="text-4xl text-slate-700 font-bold">Featured Projects</h2>
      <p class="text-base text-slate-500 mt-3">Side projects I built and maintain.</p>
    </div>

    <div class="content-wrapper mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div
        v-for="(project, index) in projects"
        :key="project.title"
        v-motion
        :initial="{ opacity: 0, y: 40 }"
        :visibleOnce="{ opacity: 1, y: 0 }"
        :delay="150 * index"
        class="opacity-0 group flex flex-col rounded-2xl border bg-white overflow-hidden hover:shadow-xl transition-shadow duration-300"
      >
        <!-- image -->
        <div class="overflow-hidden h-52 bg-slate-100">
          <img
            :src="project.image"
            :alt="project.title"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        <!-- content -->
        <div class="p-6 flex flex-col flex-1">
          <div class="flex items-start justify-between gap-2">
            <h3 class="text-lg font-bold text-slate-800">{{ project.title }}</h3>
            <div class="flex gap-2 shrink-0">
              <NuxtLink :to="project.github" target="_blank" class="text-slate-400 hover:text-slate-700 transition-colors">
                <Icon name="uiw:github" size="20" />
              </NuxtLink>
              <NuxtLink :to="project.demo" target="_blank" class="text-slate-400 hover:text-accent-600 transition-colors">
                <Icon :name="project.type === 'npm' ? 'carbon:logo-npm' : 'ph:arrow-square-out'" size="20" />
              </NuxtLink>
            </div>
          </div>

          <p class="text-sm text-slate-500 mt-2 flex-1">{{ project.description }}</p>

          <!-- tags -->
          <div class="flex flex-wrap gap-2 mt-4">
            <span
              v-for="tag in project.tags"
              :key="tag"
              class="text-xs bg-accent-50 text-accent-600 border border-accent-200 px-2 py-0.5 rounded-full"
            >{{ tag }}</span>
          </div>

          <!-- stats + view button -->
          <div class="flex items-center justify-between gap-2 mt-4 border-t pt-4">
            <div class="flex gap-4 text-xs text-slate-400">
              <template v-if="project.type === 'github'">
                <span class="flex items-center gap-1">
                  <Icon name="ph:star" size="14" /> {{ stats?.[index]?.stars ?? '–' }}
                </span>
                <span class="flex items-center gap-1">
                  <Icon name="ph:git-fork" size="14" /> {{ stats?.[index]?.forks ?? '–' }}
                </span>
              </template>
              <template v-if="project.type === 'npm'">
                <span class="flex items-center gap-1 text-red-500">
                  <Icon name="carbon:logo-npm" size="14" /> v{{ stats?.[index]?.version ?? '–' }}
                </span>
                <span class="flex items-center gap-1">
                  <Icon name="ph:download-simple" size="14" /> {{ stats?.[index]?.downloads?.toLocaleString() ?? '–' }}/month
                </span>
              </template>
            </div>
            <NuxtLink
              :to="project.demo"
              target="_blank"
              class="flex items-center gap-1 text-xs font-semibold text-accent-600 bg-accent-50 hover:bg-accent-100 border border-accent-200 px-3 py-1.5 rounded-full transition-colors shrink-0"
            >
              View project
              <Icon name="ph:arrow-up-right" size="13" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
