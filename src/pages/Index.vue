<template>
  <div v-if="index">
    <span v-for="i, k of index.default" :key="k">
      <page-link :name="i"></page-link>
    </span>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, inject } from 'vue'
import PageLink from './components/PageLink.vue'
import State from '../lib/state'

export default defineComponent({
  components: { PageLink },
  setup() {
    const state = inject<State>('state')
    const index = computed(() => state?._index)
    state?.index()
    return { index }
  }
})
</script>
