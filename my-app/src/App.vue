<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from './lib/supabaseClient'

const messages = ref([])

async function getMessages() {
  const { data } = await supabase.from('messages').select()
  messages.value = data
}

onMounted(() => {
  getMessages()
})
</script>

<template>
  <ul>
    <h2>Messages</h2>
    <li v-for="message in messages" :key="message.id">{{ message.name }} {{ message.nickname }} {{ message.message }}</li>
  </ul>
</template>