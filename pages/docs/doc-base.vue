<script setup>
definePageMeta({ layout: 'page' })
</script>
<template>
  <div class="w-full flex flex-col items-center">
    <div class="flex justify-center w-full background-grid background-grid--fade-in pt-20 pb-20">
      <div class="content-wrapper mt-20">
        <p class="text-accent-700 font-bold">Side project</p>
        <h1 class="py-5 text-7xl font-black text-slate-700">Ecommerce v2</h1>
        <p class="mt-5 text-2xl text-slate-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
          <br />
          Quisquam, voluptatum.
        </p>
        <div class="mt-14 flex gap-5">
          <div
            to="/docs/superbad-ecommerce"
            class="block w-fit text-accent-600 font-bold text-sm bg-accent-100 hover:bg-accent-200 px-5 py-3 mt-5 rounded-3xl"
          >
            Ecommerce
            <Icon name="fluent:triangle-right-32-filled" size="10" class="ml-2" />
          </div>
          <div
            to="/docs/superbad-ecommerce"
            class="block w-fit text-accent-600 font-bold text-sm bg-accent-100 hover:bg-accent-200 px-5 py-3 mt-5 rounded-3xl"
          >
            VueJs 3
            <Icon name="fluent:triangle-right-32-filled" size="10" class="ml-2" />
          </div>
          <div
            to="/docs/superbad-ecommerce"
            class="block w-fit text-accent-600 font-bold text-sm bg-accent-100 hover:bg-accent-200 px-5 py-3 mt-5 rounded-3xl"
          >
            TailwindCSS
            <Icon name="fluent:triangle-right-32-filled" size="10" class="ml-2" />
          </div>
        </div>
      </div>
    </div>
    <div class="content-wrapper border-l pl-20">
      <div class="flex flex-col gap-10">
        <div class="flex flex-col gap-5">
          <h2 class="text-4xl font-bold text-slate-700">Overview</h2>
          <p class="text-base text-slate-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
            <br />
            Quisquam, voluptatum.
          </p>
        </div>
        <div class="flex flex-col gap-5">
          <h2 class="text-4xl font-bold text-slate-700">Features</h2>
          <p class="text-base text-slate-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
            <br />
            Quisquam, voluptatum.
          </p>
        </div>
        <div class="flex flex-col gap-5">
          <h2 class="text-4xl font-bold text-slate-700">Tech stack</h2>
          <p class="text-base text-slate-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
            <br />
            Quisquam, voluptatum.
          </p>
        </div>
        <div class="flex flex-col gap-5">
          <h2 class="text-4xl font-bold text-slate-700">Demo</h2>
          <p class="text-base text-slate-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
            <br />
            Quisquam, voluptatum.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
