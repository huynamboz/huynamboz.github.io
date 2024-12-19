<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import type { RealtimeChannel } from '@supabase/supabase-js'

definePageMeta({ layout: 'page' })

const client = useSupabaseClient()

let realtimeChannel: RealtimeChannel

interface Collaborator {
  id: string
  description: string
  price: number
  created_at: string
  new?: boolean
}

// Fetch collaborators and get the refresh method provided by useAsyncData
const { data: collaborators, refresh: refreshCollaborators } = await useAsyncData(
  'collaborators',
  async () => {
    const { data } = await client.from('payments').select('*')
    return data ? (data.reverse() as Collaborator[]) : []
  },
)

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
  url.value = `https://img.vietqr.io/image/VietCapitalBank-9021307147503-compact2.jpg?amount=${amount.value}&addInfo=${addInfo.value}&accountName=Quy%20Vac%20Xin%20Covid`
}

const url = ref<string>('')
</script>

<template>
  <div class="pt-20 px-5">
    <!-- Form for amount input and create button -->
    <div class="flex flex-col items-center text-center border rounded-2xl p-5">
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
        <img
          :src="`https://img.vietqr.io/image/VietCapitalBank-0984619309-compact2.jpg?amount=${amount}&addInfo=${addInfo}`"
          alt="VietQR Payment Image"
          class="w-full max-w-xs"
        />
        <p>
          Description: <span class="font-bold">{{ addInfo }}</span>
        </p>
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
              <div class="text-sm text-gray-900">{{ collaborator.price }}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">
                {{ new Date(collaborator.created_at).toLocaleString() }}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
