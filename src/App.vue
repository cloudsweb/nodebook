<template>
  <div>Hello Nodebook</div>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, provide, reactive } from 'vue'
import State from './lib/state'

export default defineComponent({
  setup() {
    const state = reactive(new State())
    provide('state', state)
  },
})
</script>
