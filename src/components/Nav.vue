<script setup lang="ts">
import { PropType, defineComponent } from 'vue'
import Link from '../types/Link';
</script>

<script lang="ts">
export default defineComponent({
  name: 'Nav',
  props: {
    links: {
      type: Array as PropType<Link[]>,
      required: true,
    }
  },
})
</script>

<template>
  <nav class="flex flex-row gap-6">
    <a :class="link.selected ? 'font-bold text-mds-black' : 'text-mds-gray'" class="text-small font-bold hover:cursor-pointer" v-for="link in links"><router-link
        :to="link.path">{{ link.name }}</router-link></a>
  </nav>
</template>
