<script setup>
const navbar = ref(null)
onMounted(() => {
  const navbarOffsetBottomWithPadding = navbar.value.offsetHeight + 20
  const handleScroll = () => {
    const scrollY = window.scrollY
    if (scrollY > navbarOffsetBottomWithPadding) {
      navbar.value.classList.add(
        'bg-white/70',
        'border-b-[1px]',
        'dark:bg-slate-900/80',
        'backdrop-blur',
      )
    } else {
      navbar.value.classList.remove(
        'bg-white/70',
        'border-b-[1px]',
        'dark:bg-slate-900/80',
        'backdrop-blur',
      )
    }
  }

  window.addEventListener('scroll', handleScroll)
})
</script>
<template>
  <div
    ref="navbar"
    class="fixed transition-all duration-300 top-0 z-[90] flex justify-between items-center w-full p-5 py-4"
  >
    <div class="flex items-center">
      <!-- logo -->
      <NuxtLink to="/" class="flex gap-2 items-center">
        <div class="bg-accent-600 w-6 h-6 text-white rounded-lg text-center text-sm">/</div>
        <span class="font-bold text-xl">huynam<span class="text-accent-600">boz</span></span>
      </NuxtLink>
      <!-- menu -->
      <div class="max-md:hidden lg:flex mt-1 ml-5 gap-5">
        <NuxtLink to="/projects" class="flex items-center gap-2 text-sm font-bold text-accent-600">
          <span>Projects</span>
        </NuxtLink>
        <NuxtLink to="/blog" class="flex items-center gap-2 text-sm font-bold text-accent-600">
          <span>Blog</span>
        </NuxtLink>
        <NuxtLink to="/contact" class="flex items-center gap-2 text-sm font-bold text-accent-600">
          <span>Contact</span>
        </NuxtLink>
      </div>
      <div></div>
    </div>
    <div class="flex items-center gap-4">
      <NuxtLink to="https://github.com/huynamboz" target="_blank">
        <Icon name="uil:github" size="24" color="black" />
      </NuxtLink>
      <NuxtLink to="https://github.com/huynamboz" target="_blank">
        <Icon name="pajamas:linkedin" size="22" color="black" />
      </NuxtLink>
      <div
        class="ml-3 cursor-pointer hover:bg-slate-300/70 bg-slate-300/50 max-md:p-0 max-md:w-9 h-9 px-4 rounded-xl flex gap-2 text-sm font-bold text-slate-700 justify-center items-center"
      >
        <Icon name="gridicons:layout" size="19" color="black" />
        <span class="max-md:hidden">Quick access</span>
      </div>
    </div>
  </div>
</template>
