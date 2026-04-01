<script setup lang="ts">
const { data: authors } = await useAsyncData('projects', () => {
  return queryCollection('projects').where('stem', '=', 'git/projects').first()
})
const projects = computed(() => authors.value?.meta.body)

function getGithubRepo(url: string): { owner: string; repo: string } | null {
  const match = url?.match(/github\.com\/([^/]+)\/([^/]+)/)
  if (!match) return null
  return { owner: match[1], repo: match[2] }
}

function getNpmPackage(url: string): string | null {
  const match = url?.match(/npmjs\.com\/package\/([^/]+)/)
  return match ? match[1] : null
}

const langColorMap: Record<string, string> = {
  TypeScript: 'bg-blue-50 text-blue-600 border-blue-200',
  JavaScript: 'bg-yellow-50 text-yellow-600 border-yellow-200',
  Vue: 'bg-emerald-50 text-emerald-600 border-emerald-200',
  Python: 'bg-sky-50 text-sky-600 border-sky-200',
  Dart: 'bg-cyan-50 text-cyan-600 border-cyan-200',
  Swift: 'bg-orange-50 text-orange-600 border-orange-200',
  Kotlin: 'bg-purple-50 text-purple-600 border-purple-200',
  Go: 'bg-teal-50 text-teal-600 border-teal-200',
  Rust: 'bg-amber-50 text-amber-700 border-amber-200',
}
const defaultLangColor = 'bg-slate-100 text-slate-600 border-slate-200'

const { data: stats } = await useAsyncData('project-stats', async () => {
  const list = projects.value ?? []
  const results = await Promise.all(
    list.map(async (project: any) => {
      const gh = getGithubRepo(project.github ?? project.url)
      if (gh) {
        try {
          const res = await $fetch<{
            stargazers_count: number
            forks_count: number
            language: string | null
            topics: string[]
          }>(`https://api.github.com/repos/${gh.owner}/${gh.repo}`, {
            headers: { Accept: 'application/vnd.github+json' },
          })
          return {
            type: 'github',
            stars: res.stargazers_count,
            forks: res.forks_count,
            language: res.language,
            topics: res.topics?.slice(0, 3) ?? [],
          }
        } catch {
          return { type: 'github', stars: null, forks: null, language: null, topics: [] }
        }
      }

      const pkg = getNpmPackage(project.url)
      if (pkg) {
        try {
          const [info, downloads] = await Promise.all([
            $fetch<{ 'dist-tags': { latest: string } }>(`https://registry.npmjs.org/${pkg}/latest`),
            $fetch<{ downloads: number }>(`https://api.npmjs.org/downloads/point/last-month/${pkg}`),
          ])
          return { type: 'npm', version: info['dist-tags']?.latest ?? info.version, downloads: downloads.downloads }
        } catch {
          return { type: 'npm', version: null, downloads: null }
        }
      }

      return { type: 'unknown' }
    })
  )
  return results
})
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
      <NuxtLink
        :to="project.url"
        target="_blank"
        class="border p-3 rounded-xl w-full hover:shadow-lg transition-shadow flex flex-col"
        v-for="(project, index) in projects"
        :key="index"
      >
        <img class="w-full h-[200px] object-cover rounded-lg" :src="project.image" alt="" />
        <p class="mt-3 text-accent-600 font-bold text-sm hover:underline">
          {{ project.title }}
        </p>
        <p class="text-sm text-slate-500 mt-1 flex-1">{{ project.description }}</p>

        <!-- GitHub stats -->
        <div v-if="stats?.[index]?.type === 'github'" class="mt-3 flex flex-col gap-2">
          <div class="flex gap-2 flex-wrap">
            <span
              v-if="stats[index].language"
              class="flex items-center gap-1 text-xs border px-2 py-0.5 rounded-full"
              :class="langColorMap[stats[index].language] ?? defaultLangColor"
            >
              <Icon name="ph:circle-fill" size="8" />
              {{ stats[index].language }}
            </span>
            <span
              v-for="topic in stats[index].topics"
              :key="topic"
              class="text-xs bg-accent-50 text-accent-600 border border-accent-200 px-2 py-0.5 rounded-full"
            >
              {{ topic }}
            </span>
          </div>
          <div class="flex gap-4 text-xs text-slate-500">
            <span v-if="stats[index].stars !== null" class="flex items-center gap-1">
              <Icon name="ph:star" size="14" />
              {{ stats[index].stars }}
            </span>
            <span v-if="stats[index].forks !== null" class="flex items-center gap-1">
              <Icon name="ph:git-fork" size="14" />
              {{ stats[index].forks }}
            </span>
          </div>
        </div>

        <!-- npm stats -->
        <div v-if="stats?.[index]?.type === 'npm'" class="flex gap-2 mt-3 flex-wrap">
          <span
            v-if="stats[index].version"
            class="flex items-center gap-1 text-xs bg-red-50 text-red-600 border border-red-200 px-2 py-0.5 rounded-full"
          >
            <Icon name="carbon:logo-npm" size="14" />
            v{{ stats[index].version }}
          </span>
          <span
            v-if="stats[index].downloads !== null"
            class="flex items-center gap-1 text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full"
          >
            <Icon name="ph:download-simple" size="14" />
            {{ stats[index].downloads?.toLocaleString() }}/month
          </span>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
