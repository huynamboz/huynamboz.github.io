<template>
  <div class="flex flex-col gap-5">
    <h2 class="max-md:text-2xl text-4xl font-bold text-slate-700">Installation</h2>
    <p class="text-base text-slate-600">Clone project and intall dependencies</p>
    <!-- code -->
    <div class="border border-slate-200 rounded-xl p-3">
      <div class="flex w-full justify-between">
        <div class="flex border rounded-md">
          <div class="flex items-center gap-1 text-sm px-3 h-8 hover:bg-slate-100 cursor-pointer">
            <Icon name="logos:npm-icon" size="15" class="text-slate-600" />
            npm
          </div>
          <div class="flex items-center gap-1 text-sm px-3 h-8 hover:bg-slate-100 cursor-pointer">
            <Icon name="vscode-icons:file-type-yarn" size="15" class="text-slate-600" />
            yarn
          </div>
        </div>
        <div class="h-6 rounded-md border text-sm px-2 cursor-pointer hover:bg-slate-200">copy</div>
      </div>
      <div class="bg-slate-100 block mt-5 p-5 rounded-md text-slate-600">
        <span class="flex gap-2 before:content-['$']"
          ><span class="token function"> npm install</span>
        </span>
      </div>
    </div>
    <p class="text-base text-slate-600">Run project</p>
    <div class="border border-slate-200 rounded-xl p-3">
      <div class="flex w-full justify-between">
        <div class="flex border rounded-md">
          <div class="flex items-center gap-1 text-sm px-3 h-8 hover:bg-slate-100 cursor-pointer">
            <Icon name="logos:npm-icon" size="15" class="text-slate-600" />
            npm
          </div>
          <div class="flex items-center gap-1 text-sm px-3 h-8 hover:bg-slate-100 cursor-pointer">
            <Icon name="vscode-icons:file-type-yarn" size="15" class="text-slate-600" />
            yarn
          </div>
        </div>
        <div class="h-6 rounded-md border text-sm px-2 cursor-pointer hover:bg-slate-200">copy</div>
      </div>
      <div class="bg-slate-100 block mt-5 p-5 rounded-md text-slate-600">
        <span class="flex gap-2 before:content-['$']"
          ><span class="token function"> npm run dev</span>
        </span>
      </div>
    </div>
  </div>
</template>
