<template>
  <div class="content-wrapper container relative pt-20 pb-10">
    <div class="flex flex-col h-full">
      <!-- title content -->
      <div>
        <p class="text-4xl text-slate-600">hi! ✌️</p>
        <span class="text-slate-700 dark:text-slate-300">
          <ClientOnly>
            <div
              v-motion
              :initial="{ opacity: 0, x: -100 }"
              :enter="{ opacity: 1, x: 0, scale: 1 }"
              class="opacity-0 max-md:w-[50%] mb-4 block text-[2.5rem] font-[1000] leading-none md:mb-6 md:text-7xl"
              style="opacity: 1; transform: none"
            >
              I'm
              <strong class="relative text-accent-600 dark:text-accent-500">Huy</strong>
              Namboz,
            </div>
          </ClientOnly>
          <ClientOnly>
            <div
              v-motion
              :initial="{ opacity: 0, x: -100 }"
              :enter="{ opacity: 1, x: 0, scale: 1 }"
              :delay="100"
              class="opacity-0 block text-base text-slate-600 md:text-xl dark:text-slate-400"
              style="opacity: 1; transform: none"
            >
              <span class="lowercase">A </span>
              <strong class="font-bold lowercase text-slate-700 dark:text-slate-300"
                >Front-End Developer</strong
              >
              who loves intuitive,
              <span class="block">clean and modern UI design.</span>
            </div>
          </ClientOnly>
        </span>
        <div
          v-motion
          :initial="{ opacity: 0, x: -100 }"
          :enter="{ opacity: 1, x: 0, scale: 1 }"
          :delay="200"
          class="opacity-0 flex items-center mt-8 gap-5"
        >
          <NuxtLink to="/about">
            <button
              class="px-8 py-3 text-base font-semibold text-white transition duration-200 ease-in-out transform bg-accent-600 rounded-xl hover:bg-accent-500 hover:scale-105"
            >
              About me
            </button>
          </NuxtLink>
          <NuxtLink to="/contact">
            <button class="font-bold text-sm text-slate-700">
              <span class="mr-1 text-xl">👋</span>
              CONTACT
            </button>
          </NuxtLink>
        </div>
      </div>
      <!-- end title content -->
      <!-- list icon tech -->
      <div
        v-motion
        :initial="{ opacity: 0, x: -100 }"
        :enter="{ opacity: 1, x: 0, scale: 1 }"
        :delay="300"
        class="opacity-0 mt-32 flex flex-col text-sm gap-2 font-medium text-slate-500"
      >
        <p>My favorite tech stack & tools:</p>
        <div class="flex gap-4">
          <div title="VueJS">
            <Icon class="hover:text-[#52b983]" name="ri:vuejs-fill" size="26" />
          </div>
          <div title="Vite">
            <Icon name="file-icons:vite" size="24" />
          </div>
          <div title="TailwindCSS">
            <Icon class="hover:text-[#5dbbf8]" name="teenyicons:tailwind-solid" size="26" />
          </div>
          <div title="Typescript">
            <Icon class="hover:text-[#4975c6]" name="mdi:language-typescript" size="26" />
          </div>
          <!-- separate -->
          <div class="h-[25px] border-r-[1px]"></div>
          <!-- end separate -->
          <div title="Postman">
            <Icon class="hover:text-[#f46d38]" name="cib:postman" size="24" />
          </div>
          <div title="Git">
            <Icon class="hover:text-[#d34d35]" name="cib:git" size="24" />
          </div>
        </div>
      </div>
      <!-- end list icon tech -->
    </div>
    <img
      src="@Assets/images/hero.png"
      alt="hero"
      class="absolute top-0 right-0 w-[46%] md:w-[43%] lg:w-[46%] md:top-0 xl:w-[49%]"
    />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
