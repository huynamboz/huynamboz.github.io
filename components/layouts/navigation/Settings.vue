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
    class="fixed top-0 left-0 w-full h-full bg-slate-200/[.95]"
    @click="$emit('close')"
  >
    This is setting
  </div>
</template>
