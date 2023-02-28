<script setup lang="ts">
import { defineComponent } from 'vue';
import Header from './components/Header.vue'
import Body from './components/Body.vue'
</script>

<script lang="ts">
export default defineComponent({
  components: {
    Header,
    Body
  },
})
</script>

<template>
  <main class="flex flex-col justify-center gap-36">
    <Header class="p-20" />

    <Body />
  </main>
</template>