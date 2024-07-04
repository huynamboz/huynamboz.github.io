<script setup lang="ts">
interface React {
  clap: number
  wow: number
  look: number
}

const animate = (elm: HTMLElement | null) => {
  if (!elm) return
  elm.classList.remove('animate')

  elm.classList.add('animate')

  setTimeout(() => {
    elm.classList.remove('animate')
  }, 700)
}

const fetchReact = async () => {
  try {
    const res = await $fetch('/api/reacts')
    data.value = res.data as any as React
  } catch (error) {
    console.error(error)
  }
}

const data = ref<React>({
  clap: 0,
  wow: 0,
  look: 0,
})

onMounted(() => {
  fetchReact()
})

const clapElm = ref<HTMLElement | null>(null)

const onClap = async () => {
  animate(clapElm.value)
  data.value.clap++
  await $fetch('/api/reacts/clap', { method: 'PUT' })
}

const onWow = async () => {
  animate(clapElm.value)
  data.value.wow++
  await $fetch('/api/reacts/wow', { method: 'PUT' })
}

const onLook = async () => {
  animate(clapElm.value)
  data.value.look++
  await $fetch('/api/reacts/look', { method: 'PUT' })
}
</script>
<template>
  <div
    class="fixed translate-x-[-50%] w-fit bottom-10 z-[999] border left-[50%] h-[100px] rounded-xl bg-white/70 backdrop-blur dark:bg-slate-900/80"
  >
    <!-- <button class="bubbly-button text-white font-bold text-lg" @click="onClap">React</button> -->
    <div
      v-if="data"
      ref="clapElm"
      class="bubbly-button flex w-full h-full justify-between items-center"
    >
      <div class="flex p-2 pl-4 gap-4">
        <div class="flex flex-col items-center">
          <div class="" @click="onClap">
            <img
              src="@Assets/emoji/clapping-hands-animated.png"
              class="w-10 hover:scale-150 transition-all cursor-pointer duration-300"
              alt=""
            />
          </div>
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
            @click="onWow"
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
            @click="onLook"
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

<style scoped>
.bubbly-button {
  display: inline-block;
  -webkit-appearance: none;
  appearance: none;
  position: relative;
  transition:
    transform ease-in 0.1s,
    box-shadow ease-in 0.25s;
}

.bubbly-button:focus {
  outline: 0;
}

.bubbly-button:before,
.bubbly-button:after {
  position: absolute;
  content: '';
  display: block;
  width: 140%;
  height: 100%;
  left: -20%;
  z-index: -1000;
  transition: all ease-in-out 0.5s;
  background-repeat: no-repeat;
}

.bubbly-button::before {
  display: none;
  top: -75%;
  background-image: radial-gradient(circle, #01dc82 20%, transparent 20%),
    radial-gradient(circle, transparent 20%, #01dc82 20%, transparent 30%),
    radial-gradient(circle, #01dc82 20%, transparent 20%),
    radial-gradient(circle, #01dc82 20%, transparent 20%),
    radial-gradient(circle, transparent 10%, #01dc82 15%, transparent 20%),
    radial-gradient(circle, #01dc82 20%, transparent 20%),
    radial-gradient(circle, #01dc82 20%, transparent 20%),
    radial-gradient(circle, #01dc82 20%, transparent 20%),
    radial-gradient(circle, #01dc82 20%, transparent 20%);
  background-size:
    10% 10%,
    20% 20%,
    15% 15%,
    20% 20%,
    18% 18%,
    10% 10%,
    15% 15%,
    10% 10%,
    18% 18%;
}

.bubbly-button::after {
  display: none;
  bottom: -75%;
  background-image: radial-gradient(circle, #01dc82 20%, transparent 20%),
    radial-gradient(circle, #01dc82 20%, transparent 20%),
    radial-gradient(circle, transparent 10%, #01dc82 15%, transparent 20%),
    radial-gradient(circle, #01dc82 20%, transparent 20%),
    radial-gradient(circle, #01dc82 20%, transparent 20%),
    radial-gradient(circle, #01dc82 20%, transparent 20%),
    radial-gradient(circle, #01dc82 20%, transparent 20%);
  background-size:
    15% 15%,
    20% 20%,
    18% 18%,
    20% 20%,
    15% 15%,
    10% 10%,
    20% 20%;
}

.bubbly-button:active {
  transform: scale(0.9);
}

.bubbly-button.animate:before {
  display: block;
  animation: topBubbles ease-in-out 0.75s forwards;
}

.bubbly-button.animate:after {
  display: block;
  animation: bottomBubbles ease-in-out 0.75s forwards;
}

@keyframes topBubbles {
  0% {
    background-position:
      5% 90%,
      10% 90%,
      10% 90%,
      15% 90%,
      25% 90%,
      25% 90%,
      40% 90%,
      55% 90%,
      70% 90%;
  }

  50% {
    background-position:
      0% 80%,
      0% 20%,
      10% 40%,
      20% 0%,
      30% 30%,
      22% 50%,
      50% 50%,
      65% 20%,
      90% 30%;
  }

  100% {
    background-position:
      0% 70%,
      0% 10%,
      10% 30%,
      20% -10%,
      30% 20%,
      22% 40%,
      50% 40%,
      65% 10%,
      90% 20%;
    background-size:
      0% 0%,
      0% 0%,
      0% 0%,
      0% 0%,
      0% 0%,
      0% 0%;
  }
}

@keyframes bottomBubbles {
  0% {
    background-position:
      10% -10%,
      30% 10%,
      55% -10%,
      70% -10%,
      85% -10%,
      70% -10%,
      70% 0%;
  }

  50% {
    background-position:
      0% 80%,
      20% 80%,
      45% 60%,
      60% 100%,
      75% 70%,
      95% 60%,
      105% 0%;
  }

  100% {
    background-position:
      0% 90%,
      20% 90%,
      45% 70%,
      60% 110%,
      75% 80%,
      95% 70%,
      110% 10%;
    background-size:
      0% 0%,
      0% 0%,
      0% 0%,
      0% 0%,
      0% 0%,
      0% 0%;
  }
}
</style>
