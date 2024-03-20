<!-- eslint-disable no-useless-escape -->
<script setup lang="ts">
const value = `import  { createApp }  from  'vue'
import VueDragScroller from  'vue-drag-scroller'
       
import App from  './App.vue'

const app  =  createApp(App)
app.use(VueDragScroller)
app.mount('#app')
`
const value2 = `<template>
	<div v-drag-scroller>
	</div>
</template>`
const vueDragScrollerTs = `import VueDragScroller from 'vue-drag-scroller'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueDragScroller)
})
`
const nuxtConfig = `export default defineNuxtConfig({
  plugins: ['~/plugins/vue-drag-scroller.ts'],
})`

const bindingOptions = `
<script setup>
const options = {
  speed: 1,
  startScroll: () => {
    console.log('start scroll')
  },
  endScroll: () => {
    console.log('end scroll')
  },
  onScrolling: () => {
    console.log('scrolling')
  },
}
<\/script>
<template>
  <div v-drag-scroller="options">
  </div>
</template>`

const exceptChild = `<template>
  <div v-drag-scroller.disablechild >
    <div class="child"></div>
    <div class="child"></div>
    <div class="child"></div>
    <div class="child"></div>
  </div>
</template>`
const particularChild = `<template>
  <div v-drag-scroller >
    <div class="child" drag-scroller-disable></div>
    <div class="child" drag-scroller-disable></div>
    <div class="child"></div>
    <div class="child"></div>
  </div>
</template>`
const onlyX = `<template>
  <div v-drag-scroller.onlyX >
    <img
      src="https://picsum.photos/seed/picsum/800/800"
      width="800"
      class="max-w-[800px]"
      alt=""
    />
  </div>
</template>`
const onlyY = `<template>
  <div v-drag-scroller.onlyY >
    <img
      src="https://picsum.photos/seed/picsum/800/800"
      width="800"
      class="max-w-[800px]"
      alt=""
    />
  </div>
</template>`
</script>
<template>
  <div class="flex flex-col gap-5 w-full">
    <h2 class="max-md:text-2xl text-4xl font-bold text-slate-700">Features</h2>
    <p class="text-base text-slate-600">
      You can easy custom your option, if you have idea for new feature, please
      <a class="text-blue-500" href="https://github.com/huynamboz/vue-drag-scroller/pulls"
        >Pull request</a
      >
    </p>
    <!-- install in vue app -->
    <span id="feat-1" class="font-bold pt-20">1. Register global (Vue3 app)</span>
    <div class="flex gap-5 max-md:flex-wrap relative z-10 w-full">
      <div class="w-full">
        <p>App.vue</p>
        <div class="w-full overflow-x-auto">
          <highlightjs language="js" :code="value" />
        </div>
        <p class="mt-5">In component</p>
        <div class="w-full overflow-x-auto">
          <highlightjs autodetect :code="value2" />
        </div>
      </div>
      <div
        v-drag-scroller
        class="w-full h-[368px] bg-slate-300 rounded-md p-5 overflow-y-auto flex flex-col gap-5"
      >
        <div class="w-[100px] min-h-[100px] bg-slate-500"></div>
        <div class="w-[100px] min-h-[100px] bg-slate-500"></div>
        <div class="w-[100px] min-h-[100px] bg-slate-500"></div>
        <div class="w-[100px] min-h-[100px] bg-slate-500"></div>
      </div>
    </div>
    <!-- install in nuxt app -->
    <span id="feat-2" class="font-bold pt-20">2. Register global (Nuxt3 app)</span>
    <div class="flex gap-5 max-md:flex-wrap relative z-10 w-full">
      <div class="w-full">
        <p>plugins/vue-drag-scroller.ts</p>
        <div class="w-full overflow-x-auto">
          <highlightjs language="js" :code="vueDragScrollerTs" />
        </div>
        <p class="mt-5">nuxt.config.ts</p>
        <div class="w-full overflow-x-auto">
          <highlightjs language="js" :code="nuxtConfig" />
        </div>
      </div>
    </div>
    <div id="feat-3" class="pt-20 relative z-10">
      <span class="font-bold">3. Options</span>
      <div class="w-full">
        <p class="mt-2">You can bind option to directive like</p>
        <div class="w-full overflow-x-auto">
          <highlightjs language="html" :code="bindingOptions" />
        </div>
      </div>
      <table class="mt-5 w-[100px] hidden">
        <thead>
          <tr class="border">
            <th class="text-left min-w-[100px] border px-3 py-2">Option</th>
            <th class="text-left min-w-[100px] border px-3 py-2">Type</th>
            <th class="text-left min-w-[100px] border px-3 py-2">Default</th>
            <th class="text-left min-w-[100px] border px-3 py-2">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border">
            <td class="text-left border px-3 py-2">speed</td>
            <td class="text-left border px-3 py-2">number</td>
            <td class="text-left border px-3 py-2">1</td>
            <td class="text-left border px-3 py-2">The speed of scrolling</td>
          </tr>
          <tr class="border">
            <td class="text-left border px-3 py-2">startScroll</td>
            <td class="text-left border px-3 py-2">function</td>
            <td class="text-left border px-3 py-2">null</td>
            <td class="text-left border px-3 py-2">Trigger when start scroll</td>
          </tr>
          <tr class="border">
            <td class="text-left border px-3 py-2">endScroll</td>
            <td class="text-left border px-3 py-2">function</td>
            <td class="text-left border px-3 py-2">null</td>
            <td class="text-left border px-3 py-2">Trigger when end scroll</td>
          </tr>
          <tr class="border">
            <td class="text-left border px-3 py-2">onScrolling</td>
            <td class="text-left border px-3 py-2">function</td>
            <td class="text-left border px-3 py-2">null</td>
            <td class="text-left border px-3 py-2">Trigger when scrolling</td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- drag except all child -->
    <span id="feat-4" class="pt-20 font-bold">4. Drag scroll except all child (disable child)</span>
    <div class="flex gap-5 max-md:flex-wrap relative z-10 w-full">
      <div class="w-full">
        <p>Code:</p>
        <div class="w-full overflow-x-auto">
          <highlightjs language="html" :code="exceptChild" />
        </div>
      </div>
      <div
        v-drag-scroller.disablechild
        class="w-full h-[250px] bg-slate-300 rounded-md p-5 overflow-y-auto flex flex-col gap-5"
      >
        <div
          class="w-[100px] min-h-[100px] bg-slate-500 text-white flex items-center justify-center"
        >
          child
        </div>
        <div
          class="w-[100px] min-h-[100px] bg-slate-500 text-white flex items-center justify-center"
        >
          child
        </div>
        <div
          class="w-[100px] min-h-[100px] bg-slate-500 text-white flex items-center justify-center"
        >
          child
        </div>
        <div
          class="w-[100px] min-h-[100px] bg-slate-500 text-white flex items-center justify-center"
        >
          child
        </div>
      </div>
    </div>
    <!-- drag except particular child -->
    <span id="feat-5" class="pt-20 font-bold">5. Drag scroll except particular child</span>
    <div class="flex gap-5 max-md:flex-wrap relative z-10 w-full">
      <div class="w-full">
        <p>Code:</p>
        <div class="w-full overflow-x-auto">
          <highlightjs language="html" :code="particularChild" />
        </div>
      </div>
      <div
        v-drag-scroller
        class="w-full h-[250px] bg-slate-300 rounded-md p-5 overflow-y-auto flex flex-col gap-5"
      >
        <div
          drag-scroller-disable
          class="w-[130px] min-h-[100px] bg-slate-500 text-white flex items-center justify-center"
        >
          child disabled
        </div>
        <div
          drag-scroller-disable
          class="w-[130px] min-h-[100px] bg-slate-500 text-white flex items-center justify-center"
        >
          child disabled
        </div>
        <div
          class="w-[150px] min-h-[100px] bg-slate-500 text-white flex items-center justify-center"
        >
          child&nbsp; <strong> not disabled</strong>
        </div>
        <div
          class="w-[150px] min-h-[100px] bg-slate-500 text-white flex items-center justify-center"
        >
          child&nbsp; <strong> not disabled</strong>
        </div>
      </div>
    </div>
    <!-- drag only X axis -->
    <span id="feat-6" class="pt-20 font-bold">6. Drag only in X axis</span>
    <div class="flex gap-5 max-md:flex-wrap relative z-10 w-full">
      <div class="w-full">
        <p>Code:</p>
        <div class="w-full overflow-x-auto">
          <highlightjs language="html" :code="onlyX" />
        </div>
      </div>
      <div
        v-drag-scroller.onlyX
        class="w-full h-[290px] max-w-[300px] bg-slate-300 rounded-md p-5 overflow-auto flex flex-col gap-5"
      >
        <img
          src="https://picsum.photos/seed/picsum/800/800"
          width="800"
          class="max-w-[800px]"
          alt=""
        />
      </div>
    </div>
    <!-- drag only Y axis -->
    <span id="feat-7" class="pt-20 font-bold">7. Drag only in Y axis</span>
    <div class="flex gap-5 max-md:flex-wrap relative z-10 w-full">
      <div class="w-full">
        <p>Code:</p>
        <div class="w-full overflow-x-auto">
          <highlightjs language="html" :code="onlyY" />
        </div>
      </div>
      <div
        v-drag-scroller.onlyY
        class="max-md:max-w-full w-full h-[290px] max-w-[300px] bg-slate-300 rounded-md p-5 overflow-auto flex flex-col gap-5"
      >
        <img
          src="https://picsum.photos/seed/picsum/800/800"
          width="800"
          class="max-w-[800px]"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
