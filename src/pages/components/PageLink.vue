<template>
  <router-link :to="`/p/${name}`">{{ name }}</router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    // TODO: url_encode
    name: String,
  }
})
</script>
