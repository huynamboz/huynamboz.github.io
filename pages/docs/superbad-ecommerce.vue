<script setup>
definePageMeta({ layout: 'page' })
</script>
<template>
  <div class="w-full flex flex-col items-center">
    <div class="flex justify-center w-full background-grid background-grid--fade-in pt-20 pb-20">
      <div class="content-wrapper mt-20">
        <div class="flex flex-col sm:gap-5 lg:gap-10">
          <p class="text-accent-700 font-bold">Side project</p>
          <h1
            v-motion
            :initial="{ opacity: 0, x: -100 }"
            :enter="{ opacity: 1, x: 0, scale: 1 }"
            :delay="100"
            class="text-4xl lg:text-7xl font-black text-slate-700"
          >
            Ecommerce v2
          </h1>
          <p
            v-motion
            :initial="{ opacity: 0, x: -100 }"
            :enter="{ opacity: 1, x: 0, scale: 1 }"
            :delay="200"
            class="text-base lg:text-2xl text-slate-600"
          >
            A website help connect people with the best local experts.
            <br />
            This is a side project that I built to practice my skills.
          </p>
        </div>
        <div class="mt-14 flex flex-wrap gap-2 lg:gap-5">
          <div
            to="/docs/superbad-ecommerce"
            class="block w-fit text-accent-600 font-bold text-sm bg-accent-100 hover:bg-accent-200 px-5 py-3 rounded-3xl"
          >
            Ecommerce
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
            TailwindCSS
            <Icon name="fluent:triangle-right-32-filled" size="10" class="ml-2" />
          </div>
        </div>
      </div>
    </div>
    <div class="max-lg:flex-wrap max-md:flex-col-reverse content-wrapper flex gap-10">
      <!-- content -->
      <div class="border-l pl-5 lg:pl-20">
        <div class="flex flex-col gap-10">
          <!-- overview -->
          <DocsEcommerceOverview />
          <!-- installation -->
          <DocsEcommerceInstallation />
          <!-- feature -->
          <DocsEcommerceFeature />
          <!-- tech stack -->
          <DocsTech />
          <!-- demo -->
          <DocsDemo />
        </div>
      </div>
      <!-- end content -->
      <!-- section -->
      <div
        class="max-md:relative max-md:w-full sticky rounded-2xl md:top-32 lg:min-w-[330px] w-[300px] h-fit border"
      >
        <div class="flex justify-between w-full border-b py-4 px-6">
          <div class="font-bold">Table of contents</div>
          <div class="border rounded-2xl px-2 text-sm text-accent-600">scroll to top</div>
        </div>
        <div class="text-sm text-slate-600 p-5 px-0 flex flex-col gap-2">
          <div class="hover:bg-slate-100 cursor-pointer">
            <p class="px-5 py-2 font-bold bg-slate-100">Overview</p>
            <p class="ml-10">Overview about project</p>
            <p class="ml-10 mt-1">Source code</p>
          </div>
          <div class="hover:bg-slate-100 cursor-pointer">
            <p class="px-5 py-2 font-bold">Installation</p>
            <p class="ml-10">How to install and run project</p>
          </div>
          <div class="hover:bg-slate-100 cursor-pointer">
            <p class="px-5 py-2 font-bold">Features</p>
            <p class="ml-10">List feature of project</p>
          </div>
          <div class="hover:bg-slate-100 cursor-pointer">
            <p class="px-5 py-2 font-bold">Tech stack</p>
            <p class="ml-10">Overview about project</p>
          </div>
          <p class="px-5 py-2 font-bold">Demo</p>
        </div>
      </div>
    </div>
  </div>
</template>
