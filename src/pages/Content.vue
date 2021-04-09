<template>
  <div v-if="content">
    {{ content }}
  </div>
  <div v-else>
    Loading...
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, inject, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import State from '../lib/state'

export default defineComponent({
  setup() {
    const state = inject<State>('state')
    const route = useRoute()
    const id = computed(() => route.params.id as string)

    const content = ref<string>()
    const update = async () => {
      console.log(state)
      content.value = await state?.page(id.value)
    }
    watch(id, update)
    onMounted(update)

    return { id, content }
  }
})
</script>
