<script setup lang="ts">
import { PropType, defineComponent } from 'vue'
import Campus from './Campus.vue';
</script>

<script lang="ts">
export default defineComponent({
  name: 'CampusSection',
  components: {
    Campus
  },
  props: {
    campusFrance: Array as PropType<{ path: string; studentsNumber: number }[]>,
  }
})
</script>

<template>
    <h3 class="font-bold text-mds-blue text-center mt-24 text-2xl">Des campus partout en France</h3>
    <Campus :campus-france="campusFrance" />
</template>
