<template>
  <div class="mt-20 w-full flex flex-col items-center">
    <!-- header -->
    <div class="content-wrapper">
      <p class="text-accent-700 font-bold text-sm">My impressive project</p>
      <h2 class="text-4xl text-slate-700 font-bold">Project</h2>
      <p class="text-base text-slate-700 mt-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
      </p>
      <button
        class="text-accent-600 font-bold text-sm bg-accent-100 hover:bg-accent-200 px-5 py-3 mt-5 rounded-3xl"
      >
        learn more
        <Icon name="fluent:triangle-right-32-filled" size="10" class="ml-2" />
      </button>
    </div>
    <!-- end header -->
    <!-- list project -->
    <div class="flex justify-center background-grid border-t-[1px] mt-20 w-full">
      <div class="max-md:flex-col max-md:gap-10 content-wrapper mt-8 flex gap-20">
        <div class="flex flex-col gap-3">
          <div
            class="border-[1px] w-fit bg-white p-5 rounded-2xl md:max-w-[350px] lg:max-w-[500px]"
          >
            <p class="text-sm font-bold text-accent-600">Ecommerce build with Vite + vue3</p>
            <p class="text-sm mt-2 text-slate-700">
              Available on orem ipsum dolor sitisicing elit. Quisquam, voluptatum.
            </p>
          </div>
          <div
            class="border-[1px] w-fit bg-white p-5 rounded-2xl md:max-w-[350px] lg:max-w-[500px]"
          >
            <p class="text-sm font-bold text-accent-600">Ecommerce build with Vite + vue3</p>
            <p class="text-sm mt-2 text-slate-700">
              Available on orem ipsum dolor sitisicing elit. Quisquam, voluptatum.
            </p>
          </div>
        </div>
        <div class="flex-auto max-w-[800px] lg:-mt-20">
          <AtomVCodeMockup />
        </div>
      </div>
    </div>
  </div>
</template>
