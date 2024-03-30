<script setup lang="ts">
import 'github-markdown-css/github-markdown.css'
definePageMeta({ layout: 'page' })
</script>
<template>
  <main class="markdown-body">
    <div class="w-full flex justify-center">
      <div class="max-w-[1240px]">
        <ContentDoc />
      </div>
    </div>
  </main>
</template>
