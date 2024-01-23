<script setup lang="ts">
// import 'highlight.js/styles/stackoverflow-light.css'
useHead({
  title: 'Vue-drag-scroller document',
  meta: [{ name: 'description', content: 'A document website for package npm vue-drag-scroller' }],
})
useSeoMeta({
  title: 'Vue-drag-scroller document',
  ogTitle: 'Vue-drag-scroller document',
  description: 'A document website for package npm vue-drag-scroller',
  ogDescription: 'A document website for package npm vue-drag-scroller',
  ogImage: '/public/thumbnail.png',
})
definePageMeta({ layout: 'page' })
const toTop = (): void => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>
<template>
  <div class="w-full flex flex-col items-center">
    <div class="flex justify-center w-full background-grid background-grid--fade-in pt-20 pb-20">
      <div class="content-wrapper mt-20">
        <div class="flex flex-col gap-5 lg:gap-10">
          <p class="text-2xl text-accent-700 font-bold">Open source project</p>
          <h1
            v-motion
            :initial="{ opacity: 0, x: -100 }"
            :enter="{ opacity: 1, x: 0, scale: 1 }"
            :delay="100"
            class="text-4xl lg:text-7xl font-black text-slate-700"
          >
            Vue-drag-scroller
          </h1>
          <p
            v-motion
            :initial="{ opacity: 0, x: -100 }"
            :enter="{ opacity: 1, x: 0, scale: 1 }"
            :delay="200"
            class="text-base lg:text-2xl text-slate-600"
          >
            A VueJs directive <strong>package</strong> that can make any element scrollable
            <br />
            by drag and move mouse created by
            <a href="https://github.com/huynamboz" class="text-blue-500">@huynamboz</a>.
          </p>
        </div>
        <div class="mt-14 flex flex-wrap gap-2 lg:gap-5">
          <div
            to="/docs/superbad-ecommerce"
            class="block w-fit text-accent-600 font-bold text-sm bg-accent-100 hover:bg-accent-200 px-5 py-3 rounded-3xl"
          >
            NPM Package
            <Icon name="fluent:triangle-right-32-filled" size="10" class="ml-2" />
          </div>
          <div
            to="/docs/superbad-ecommerce"
            class="block w-fit text-accent-600 font-bold text-sm bg-accent-100 hover:bg-accent-200 px-5 py-3 rounded-3xl"
          >
            VueJs 3
            <Icon name="fluent:triangle-right-32-filled" size="10" class="ml-2" />
          </div>
          <div
            to="/docs/superbad-ecommerce"
            class="block w-fit text-accent-600 font-bold text-sm bg-accent-100 hover:bg-accent-200 px-5 py-3 rounded-3xl"
          >
            Vue directive
            <Icon name="fluent:triangle-right-32-filled" size="10" class="ml-2" />
          </div>
        </div>
      </div>
    </div>
    <div
      class="max-lg:flex-wrap max-md:flex-col-reverse content-wrapper max-w-[1440px] max-sm:p-5 px-10 flex gap-10"
    >
      <!-- content -->
      <div class="border-l pl-5 lg:pl-20 flex-auto w-full">
        <div class="flex flex-col gap-10 w-full">
          <!-- overview -->
          <DocsVuedragscrollerOverview />
          <!-- installation -->
          <DocsVuedragscrollerInstallation />
          <!-- feature -->
          <DocsVuedragscrollerFeature />
        </div>
      </div>
      <!-- end content -->
      <!-- section -->
      <div
        class="max-md:relative max-md:w-full sticky rounded-2xl md:top-32 lg:min-w-[330px] w-[300px] h-fit border md:-mt-44"
      >
        <div class="flex justify-between w-full border-b py-4 px-6">
          <div class="font-bold">Table of contents</div>
          <div
            class="hover:bg-slate-100 cursor-pointer border rounded-2xl px-2 text-sm text-accent-600"
            @click="toTop"
          >
            scroll to top
          </div>
        </div>
        <div class="text-sm text-slate-600 p-5 px-0 flex flex-col gap-2">
          <a href="#overview" class="hover:bg-slate-100 cursor-pointer">
            <p class="px-5 py-2 font-bold bg-slate-100">Overview</p>
            <p class="ml-10">Overview about project</p>
            <p class="ml-10 mt-1">Source code</p>
          </a>
          <a href="#install" class="block hover:bg-slate-100 cursor-pointer">
            <p class="px-5 py-2 font-bold">Installation</p>
            <p class="ml-10">How to install package</p>
          </a>
          <div v-drag-scroller class="cursor-pointer max-h-[150px] overflow-y-auto">
            <p class="px-5 py-2 font-bold">Features</p>
            <a href="#feat-1" class="block hover:bg-slate-100 py-1 px-10 ml-0"
              >1. Register global (Vue3 app)</a
            >
            <a href="#feat-2" class="block hover:bg-slate-100 py-1 px-10 ml-0"
              >2. Register global (Nuxt3 app)</a
            >
            <a href="#feat-3" class="block hover:bg-slate-100 py-1 px-10 ml-0">3. Options</a>
            <a href="#feat-4" class="block hover:bg-slate-100 py-1 px-10 ml-0">
              4. Drag scroll except all child (disable child)
            </a>
            <a href="#feat-5" class="block hover:bg-slate-100 py-1 px-10 ml-0">
              5. Drag scroll except particular child
            </a>
            <a href="#feat-6" class="block hover:bg-slate-100 py-1 px-10 ml-0">
              6. Drag only in X axis
            </a>
            <a href="#feat-7" class="block hover:bg-slate-100 py-1 px-10 ml-0">
              7. Drag only in Y axis
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
