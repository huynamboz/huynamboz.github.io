<template>
  <div class="w-full background-grid--fade-top background-grid pb-12 mt-20 pt-20">
    <div class="flex w-full px-14 justify-between">
      <!-- left -->
      <div class="text-sm max-w-[300px]">
        <p class="font-bold text-slate-600">About me</p>
        <p class="text-slate-700 mt-3">
          I'm huynamboz, a <strong>front-end developer</strong> from Viet Nam. I have rich
          experience in web site design and building and customization.
        </p>
        <div class="flex mt-5 gap-5">
          <NuxtLink to="https://github.com/huynamboz" target="_blank">
            <Icon name="uil:github" size="24" color="black" />
          </NuxtLink>
          <NuxtLink to="https://github.com/huynamboz" target="_blank">
            <Icon name="pajamas:linkedin" size="22" color="black" />
          </NuxtLink>
        </div>
      </div>
      <!-- right -->
      <div class="flex gap-20">
        <div class="text-sm">
          <p class="font-bold text-slate-500">Discovery</p>
          <div class="flex flex-col mt-4 gap-5">
            <NuxtLink
              to="/projects"
              class="flex items-center gap-2 text-sm font-bold text-slate-600"
            >
              <span>Projects</span>
            </NuxtLink>
            <NuxtLink to="/blog" class="flex items-center gap-2 text-sm font-bold text-slate-600">
              <span>Blog</span>
            </NuxtLink>
            <NuxtLink
              to="/contact"
              class="flex items-center gap-2 text-sm font-bold text-slate-600"
            >
              <span>Contact</span>
            </NuxtLink>
          </div>
        </div>
        <div class="text-sm">
          <p class="font-bold text-slate-500">This site</p>
          <div class="flex flex-col mt-4 gap-5">
            <NuxtLink
              to="/projects"
              class="flex items-center gap-2 text-sm font-bold text-slate-600"
            >
              <span>Source code</span>
            </NuxtLink>
            <NuxtLink to="/blog" class="flex items-center gap-2 text-sm font-bold text-slate-600">
              <span>My github</span>
            </NuxtLink>
            <NuxtLink
              to="/contact"
              class="flex items-center gap-2 text-sm font-bold text-slate-600"
            >
              <span>Design credit</span>
              <Icon name="material-symbols-light:open-in-new" size="16" color="black" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full flex justify-between px-14">
      <!-- copyright -->
      <div class="text-xs font-bold text-slate-500 mt-10">
        <span>© 2021 huynamboz</span>
      </div>
      <!-- theme -->
      <NuxtLink
        to="/contact"
        class="flex items-center gap-2 text-xs font-light text-slate-600 mt-10"
        >See recent update on github
      </NuxtLink>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
