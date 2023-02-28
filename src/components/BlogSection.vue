<script setup lang="ts">
import { PropType, defineComponent } from 'vue'
import Title from './Title.vue';
</script>

<script lang="ts">
export default defineComponent({
  name: 'BlogSection',
})
</script>

<template>
    <div class="bg-mds-navyBlue w-full p-20">
        <h2 class="font-bold text-white text-center text-4xl">MyDigitalSchool, c’est aussi <br> un blog avec des conseils</h2>
    </div>
</template>
