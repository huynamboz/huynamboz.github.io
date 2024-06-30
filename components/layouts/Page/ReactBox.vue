<script setup lang="ts">
interface React {
  clap: number
  wow: number
  look: number
}

const fetchReact = async () => {
  const res = await $fetch('/api/reacts')
  data.value = res.data
  console.log(data.value)
}

const data = ref<React | null>(null)

onMounted(() => {
  fetchReact()
})

const onClap = async () => {
  await $fetch('/api/reacts/clap', { method: 'PUT' })
  const res = await $fetch('/api/reacts')
  data.value = res.data
}
</script>
<template>
  <div
    class="fixed translate-x-[-50%] w-fit bottom-10 z-[999] border left-[50%] h-[100px] rounded-xl bg-white/70 backdrop-blur dark:bg-slate-900/80"
  >
    <div v-if="data" class="flex w-full h-full justify-between items-center">
      <div class="flex p-2 pl-4 gap-4">
        <div class="flex flex-col items-center">
          <img
            src="@Assets/emoji/clapping-hands-animated.png"
            class="w-10 hover:scale-150 transition-all cursor-pointer duration-300"
            alt=""
            @click="onClap"
          />
          <div
            class="mt-2 flex flex-col text-sm w-fit px-3 h-6 rounded-xl bg-slate-200 font-bold text-slate-600 dark:text-slate-300"
          >
            <span class="font-bold"> {{ data.clap }} </span>
          </div>
        </div>

        <div class="flex flex-col items-center">
          <img
            src="@Assets/emoji/astonished-face-animated.png"
            class="w-10 hover:scale-150 transition-all cursor-pointer duration-300"
            alt=""
          />
          <div
            class="mt-2 flex flex-col text-sm w-fit px-3 h-6 rounded-xl bg-slate-200 font-bold text-slate-600 dark:text-slate-300"
          >
            <span class="font-bold"> {{ data.wow }} </span>
          </div>
        </div>

        <div class="flex flex-col items-center">
          <img
            src="@Assets/emoji/face-with-monocle-animated.png"
            class="w-10 hover:scale-150 transition-all duration-300 cursor-pointer"
            alt=""
          />
          <div
            class="mt-2 flex flex-col text-sm w-fit px-3 h-6 rounded-xl bg-slate-200 font-bold text-slate-600 dark:text-slate-300"
          >
            <span class="font-bold"> {{ data.look }} </span>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
