<template>
  <div
    class="fixed bottom-20 z-[99] border left-[50%] -translate-x-[50%] h-[100px] w-[360px] rounded-xl bg-white/70 backdrop-blur dark:bg-slate-900/80"
  >
    <div class="flex w-full h-full justify-between items-center">
      <div class="flex p-2 pl-4 gap-4">
        <div class="flex flex-col items-center">
          <img
            src="@Assets/emoji/clapping-hands-animated.png"
            class="w-10 hover:scale-150 transition-all cursor-pointer duration-300"
            alt=""
          />
          <div
            class="mt-2 flex flex-col text-sm w-fit px-3 h-6 rounded-xl bg-slate-200 font-bold text-slate-600 dark:text-slate-300"
          >
            <span class="font-bold"> 1120 </span>
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
            <span class="font-bold"> 1120 </span>
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
            <span class="font-bold"> 1120 </span>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
