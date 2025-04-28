<script setup lang="ts">
definePageMeta({ layout: 'empty' })
const prompt = ref<string>('')
const apiKey = ref<string>('')
const jobId = ref<string>('')
const intervalId = ref<number | null>(null)
const imageUrl = ref<string>('')
const route = useRoute()

onBeforeMount(() => {
  if (route.query.apikey) {
    apiKey.value = route.query.apikey as string
  }
})

async function generate() {
  try {
    if (!prompt.value || !apiKey.value) {
      useNuxtApp().$toast.error('Please enter a prompt and API key.')
      return
    }

    const response = await $fetch('https://quizzfly.site/generate-image', {
      method: 'POST',
      body: {
        prompt: prompt.value,
      },
      headers: {
        'x-api-key': apiKey.value,
      },
    })
    jobId.value = response.job_id
    imageUrl.value = ''
    if (intervalId.value) {
      clearInterval(intervalId.value)
    }
    intervalId.value = setInterval(intervalCheck, 2000)
    console.log('Response:', response)
  } catch (error) {
    useNuxtApp().$toast.error('Invalid API key or prompt.')
    console.error('Error:', error)

  }
}

function intervalCheck() {
  if (jobId.value) {
    $fetch(`https://quizzfly.site/result/${jobId.value}`, {
      method: 'GET',
      headers: {
        'x-api-key': apiKey.value,
      },
    })
      .then((response) => {
        if (response.status === 'done') {
          clearInterval(intervalId.value!)
          intervalId.value = null
          console.log('Image URL:', response.image_url)
          imageUrl.value = response.image_url
          useNuxtApp().$toast.success('Image generated successfully!')
        } else {
          console.log('Still processing...')
        }
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }
}
</script>
<template>
  <div class="pt-20 px-5">
    <div class="border p-5 rounded-xl">
      <div class="flex gap-5 flex-col justify-center items-center">
        <div class="min-w-[400px] max-w-[500px]">
          <h2 class="text-lg font-bold">API key:</h2>
          <input v-model="apiKey" type="text" class="text-sm outline-none w-full border p-2 py-1 rounded-lg"
            placeholder="API key here: xxxx-xxxx-xxxx" />
        </div>
        <div class="min-w-[400px] max-w-[500px]">
          <h2 class="text-lg font-bold">Prompt:</h2>
          <div class="flex gap-2 w-full">
            <input v-model="prompt" type="text" class="text-sm outline-none w-full border p-2 py-1 rounded-lg"
              placeholder="Enter your prompt here" />
            <button class="bg-accent-600 text-white px-5 py-1 text-xs rounded-lg" @click="generate">
              {{ intervalId ? 'Generating...' : 'Generate' }}</button>
          </div>
        </div>
      </div>

      <div class="border min-h-[300px] rounded-xl mt-5 p-5">
        <div v-if="intervalId" class="flex justify-center items-center gap-5">
          <Icon name="svg-spinners:bars-rotate-fade" class="w-5 h-5 animate-spin" />
          <p class="text-sm font-semibold">Generating image...</p>
        </div>
        <div v-else-if="imageUrl" class="flex justify-center items-center">
          <img :src="imageUrl" alt="Generated Image" class="rounded-xl max-w-full" />
        </div>
      </div>
    </div>
  </div>
</template>
