<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import type { RealtimeChannel } from '@supabase/supabase-js'

definePageMeta({ layout: 'page' })

const client = useSupabaseClient()

let realtimeChannel: RealtimeChannel
const isLoading = ref<boolean>(false)

interface Collaborator {
  id: string
  description: string
  price: number
  created_at: string
  new?: boolean
}
interface Webhook {
  id: string
  endpoint: string
  created_at: string
}

const webhooks = ref<Webhook[]>([])
// Fetch webhooks and get the refresh method provided by useAsyncData

const fetchWebhooks = async () => {
  const data = await $fetch<Webhook[]>('/api/webhooks')
  webhooks.value = data ? (data.reverse() as Webhook[]) : []
}

const collaborators = ref<Collaborator[]>([])

onBeforeMount(async () => {
  const data = await $fetch<Collaborator[]>('/api/payments/history')
  collaborators.value = data ? (data as Collaborator[]) : []

  fetchWebhooks()
})
// Real-time listener setup
onMounted(() => {
  realtimeChannel = client
    .channel('public:payments')
    .on('postgres_changes', { event: '*', schema: 'public', table: 'payments' }, (payload) => {
      console.log('Realtime event:', payload)
      // refreshCollaborators()
      if (payload.eventType === 'INSERT' && collaborators.value)
        collaborators.value.unshift({
          ...payload.new,
          new: true,
        } as Collaborator)
      useNuxtApp().$toast.success(`Have new payment ${payload.new.price}`)
    })
  realtimeChannel.subscribe()
  generateAddInfo()
})

onUnmounted(() => {
  client.removeChannel(realtimeChannel)
})

// Reactive state for amount and generated addInfo
const amount = ref<number | null>(2000)
const addInfo = ref<string>('')

const generateAddInfo = () => {
  // Generate a random addInfo string like "HD123"
  addInfo.value = 'HD' + Math.floor(Math.random() * 900 + 100).toString()
  url.value = `https://img.vietqr.io/image/VietCapitalBank-9021307147503-compact2.jpg?amount=${amount.value}&addInfo=${addInfo.value}`
}

const url = ref<string>('')

const payloadExample = ref<string>(
  JSON.stringify(
    {
      amount: 2000,
      description: 'HD123',
    },
    null,
    2,
  ),
)

const handleExecuteWebhook = async (id: string) => {
  isLoading.value = true
  try {
    const payloadJSON = JSON.parse(payloadExample.value)
    await $fetch(`/api/webhooks/execute`, {
      method: 'POST',
      body: {
        id,
        payload: payloadJSON,
      },
    })
    useNuxtApp().$toast.success('Webhook executed successfully')
  } catch (error) {
    console.error(error)
    useNuxtApp().$toast.error('Failed to execute webhook')
  }
  isLoading.value = false
}
const webhookEndpoint = ref<string>('')
const handleAddWebhook = async () => {
  isLoading.value = true
  try {
    if (!webhookEndpoint.value) {
      useNuxtApp().$toast.error('Webhook endpoint is required')
      return
    }
    await $fetch(`/api/webhooks/add`, {
      method: 'POST',
      body: {
        endpoint: webhookEndpoint.value,
      },
    })
    useNuxtApp().$toast.success('Webhook added successfully')
    fetchWebhooks()
  } catch (error) {
    console.error(error)
    useNuxtApp().$toast.error('Failed to add webhook')
  }
  isLoading.value = false
}

const handleDeleteWebhook = async (id: string) => {
  isLoading.value = true
  try {
    await $fetch(`/api/webhooks/delete`, {
      method: 'POST',
      body: {
        id,
      },
    })
    useNuxtApp().$toast.success('Webhook deleted successfully')
    fetchWebhooks()
  } catch (error) {
    console.error(error)
    useNuxtApp().$toast.error('Failed to delete webhook')
  }
  isLoading.value = false
}
</script>

<template>
  <div class="pt-20 px-5">
    <!-- Form for amount input and create button -->
    <div class="max-md:flex-col flex w-full items-stretch gap-5">
      <div class="flex-[2] max-h-[600px] overflow-hidden flex flex-col border rounded-2xl p-5 pt-2">
        <div class="flex justify-between items-center">
          <p class="flex-1 text-sm font-semibold">Webhooks</p>
          <div class="flex-1 flex gap-2">
            <input
              v-model="webhookEndpoint"
              type="text"
              class="text-xs outline-none w-full border p-2 py-1 rounded-lg"
              placeholder="ex: https://example.com/webhook"
            />
            <button
              class="bg-accent-600 text-white px-5 py-1 text-xs rounded-lg"
              @click="handleAddWebhook"
            >
              Add
            </button>
          </div>
        </div>
        <p class="text-sm mt-5">Payload</p>
        <textarea
          id=""
          v-model="payloadExample"
          class="min-h-[120px] border p-2 rounded-2xl w-full outline-none"
          name=""
        ></textarea>

        <p class="text-xs text-gray-500">
          <span class="font-semibold">Note:</span> This is an example payload that will be sent to
          your webhook URL when a new payment is made.
        </p>

        <div class="flex items-center gap-2 pt-4 pb-1">
          <p class="text-sm font-semibold">Webhook urls</p>
          <div v-if="isLoading" class="flex items-center gap-2">
            <Icon name="svg-spinners:bars-rotate-fade" class="w-5 h-5 animate-spin" />
            <p class="text-xs">Executing...</p>
          </div>
        </div>

        <!-- <p class="text-sm text-gray-500">No webhook urls added yet.</p> -->
        <ul class="flex flex-col gap-2 text-sm text-gray-500 overflow-y-auto">
          <li
            v-for="webhook in webhooks"
            :key="webhook.id"
            class="flex gap-2 justify-between border-b pb-2"
          >
            <div class="flex-1 overflow-hidden">
              <p class="text-gray-900 text-sm font-medium">{{ webhook.endpoint }}</p>
              <p class="text-xs text-gray-400">
                {{ new Date(webhook.created_at).toISOString().replace('T', ' - ').slice(0, -5) }}
              </p>
            </div>
            <button
              class="bg-accent-600 text-xs text-white h-6 flex items-center px-2 rounded-lg"
              @click="handleExecuteWebhook(webhook.id)"
            >
              Execute
            </button>
            <button
              class="bg-red-700 text-xs text-white h-6 flex items-center px-2 rounded-lg"
              @click="handleDeleteWebhook(webhook.id)"
            >
              delete
            </button>
          </li>
        </ul>
      </div>
      <div class="flex-1 flex flex-col items-center text-center border rounded-2xl p-5">
        <div class="mb-5">
          <label for="amount" class="block text-sm font-medium text-gray-700">Enter Amount</label>
          <input
            id="amount"
            v-model="amount"
            type="number"
            class="mt-2 p-2 border border-gray-300 rounded-md"
            placeholder="Enter amount"
            @input="generateAddInfo"
          />
        </div>

        <!-- QR code image display -->
        <div class="mt-5">
          <img :src="url" alt="VietQR Payment Image" class="w-full max-w-xs" />
          <p>
            Description: <span class="font-bold">{{ addInfo }}</span>
          </p>
        </div>
      </div>
    </div>

    <!-- Displaying the collaborators table -->
    <div class="flex items-center gap-1 mt-5 text-sm font-medium">
      <Icon name="svg-spinners:bars-rotate-fade" class="w-5 h-5 animate-spin" />
      <p>Waiting for collaborators to pay...</p>
    </div>
    <div class="relative min-w-[60%] mt-1 h-full max-h-[50vh] border rounded-xl overflow-y-auto">
      <table class="w-full divide-y table-auto">
        <thead class="sticky top-0 bg-gray-50">
          <tr class="border-b">
            <th
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Description
            </th>
            <th
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Amount
            </th>
            <th
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Time
            </th>
          </tr>
        </thead>
        <tbody class="bg-white h-72 max-h-72 overflow-y-auto divide-y divide-gray-200">
          <!-- Loop through collaborators -->
          <tr
            v-for="collaborator in collaborators"
            :key="collaborator.id"
            :class="{ 'bg-green-50': collaborator.new }"
          >
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900 truncate max-w-[40vw]">
                {{ collaborator.description }}
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">
                {{
                  collaborator.price?.toLocaleString('it-IT', {
                    style: 'currency',
                    currency: 'VND',
                  })
                }}
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">
                {{
                  new Date(collaborator.created_at).toISOString().replace('T', ' - ').slice(0, -5)
                }}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
