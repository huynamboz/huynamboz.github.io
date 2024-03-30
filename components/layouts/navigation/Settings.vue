<script setup lang="ts">
onMounted(() => {
  document.body.style.overflow = 'hidden'
})
onBeforeUnmount(() => {
  document.body.style.overflow = ''
})

const notifications = ref([
  {
    type: 'reaction',
    message: 'Blog post "How to build a personal website" has been published',
    time: '5 minutes',
  },
  {
    type: 'reaction',
    message: 'Blog post "How to build a personal website" has been published',
    time: '5 minutes',
  },
  {
    type: 'reaction',
    message: 'Blog post "How to build a personal website" has been published',
    time: '5 minutes',
  },
  {
    type: 'reaction',
    message: 'Blog post "How to build a personal website" has been published',
    time: '5 minutes',
  },
  {
    type: 'reaction',
    message: 'Blog post "How to build a personal website" has been published',
    time: '5 minutes',
  },
  {
    type: 'reaction',
    message: 'Blog post "How to build a personal website" has been published',
    time: '5 minutes',
  },
  {
    type: 'reaction',
    message: 'Blog post "How to build a personal website" has been published',
    time: '5 minutes',
  },
])
</script>
<template>
  <div
    v-motion
    :initial="{
      opacity: 0,
    }"
    :enter="{
      opacity: 1,
      transition: {
        duration: 100,
        ease: 'easeIn',
      },
    }"
    class="fixed z-50 top-0 left-0 w-screen h-screen bg-slate-200/[.95]"
    @click="$emit('close')"
  >
    <div class="w-full h-full flex justify-between">
      <div></div>
      <div class="flex flex-col h-full w-[360px] pt-20 px-5 pr-10">
        <p class="text-xl font-bold">Recent activities</p>
        <div class="gap-3 overflow-auto no-scrollbar mt-5">
          <div
            v-for="(item, index) in notifications"
            :key="index"
            v-motion
            :initial="{
              opacity: 0,
              y: -40,
            }"
            :delay="index * 40"
            :enter="{
              opacity: 1,
              y: 0,
              transition: {
                duration: 150,
                ease: 'easeInOut',
              },
            }"
            class="mt-3 w-full h-24 bg-white rounded-xl"
          >
            <div class="flex justify-between p-3 text-xs pb-2 text-slate-600">
              <p>REACTION</p>
              <p>5 minutes</p>
            </div>
            <div class="text-sm px-3">
              Blog post
              <span class="font-bold text-accent-600">"How to build a personal website"</span> has
              been published
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
