<script setup>
const props = defineProps(['project'])

</script>
<template>
  <div class="w-full h-full border-[1px] bg-white rounded-xl">
    <!-- header -->
    <div class="w-full flex gap-2 p-4 py-2 items-center border-b-[1px]">
      <div class="flex gap-2 flex-1">
        <div class="bg-red-300 w-3 h-3 rounded-full"></div>
        <div class="bg-amber-300 w-3 h-3 rounded-full"></div>
        <div class="bg-green-300 w-3 h-3 rounded-full"></div>
      </div>
      <div class="flex-1">
        <div class="w-fit px-2 pr-4 text-xs flex items-center bg-slate-200/80 h-6 rounded-lg">
          <p class="truncate">
            <Icon name="ri:github-fill" size="18" class="text-slate-700" />
            <span class="ml-1">{{ project.owner }}/{{ project.repo }}</span>
          </p>
        </div>
      </div>
      <div class="flex-1"></div>
    </div>
    <!-- end header -->
    <!-- body -->
    <div class="p-5 pb-0">
      <div class="flex gap-2 items-center">
        <div class="w-5 h-5 rounded-md bg-slate-200"></div>
        <span class="hover:underline cursor-pointer text-sm text-blue-600">
          <NuxtLink :to="project.ownerLink" target="blank">{{ project.owner }}</NuxtLink>
        </span>
        /
        <span class="hover:underline cursor-pointer text-sm text-blue-600 font-bold truncate">
          <NuxtLink :to="project.github">{{ project.repo }}</NuxtLink>
        </span>
        <span class="text-xs text-slate-600 border-[1px] px-3 leading-6 rounded-2xl">public</span>
      </div>
      <p class="text-sm font-light mt-3">
        {{ project.description }}
      </p>
      <div class="flex mt-4 gap-2">
        <div class="w-5 h-5 rounded-md bg-slate-200"></div>
        <span class="text-sm text-slate-600">MIT license</span>
      </div>
      <div class="flex mt-3">
        <div class="w-5 h-5 rounded-md bg-slate-200"></div>
        <div class="ml-2 w-10 h-5 rounded-md bg-slate-200"></div>
        <div class="ml-4 w-5 h-5 rounded-md bg-slate-200"></div>
        <div class="ml-2 w-10 h-5 rounded-md bg-slate-200"></div>
      </div>
      <!-- readme -->
    </div>
    <div class="p-5 h-full">
      <div class="w-full rounded-lg border-[1px]">
        <div class="p-2 border-b-[1px]">
          <p class="text-sm font-semibold text-slate-700">
            <Icon name="material-symbols:menu-book" size="18" class="text-slate-700" />
            README
          </p>
        </div>
        <div class="mt-5 p-2">
          <img :src="`/images/docs/${project.img}`" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
