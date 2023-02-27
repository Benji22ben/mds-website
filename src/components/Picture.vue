<script setup lang="ts">
import { defineComponent } from 'vue'
</script>

<script lang="ts">
export default defineComponent({
  name: 'Picture',
  props: {
    path: String,
    alt: String,
  },
})
</script>

<template>
    <img :src="path" :alt="alt">
</template>
