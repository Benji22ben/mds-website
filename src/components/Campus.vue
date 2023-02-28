<script setup lang="ts">
import { PropType, defineComponent } from 'vue'
</script>

<script lang="ts">
export default defineComponent({
    name: 'Picture',
    props: {
        campusFrance: Array as PropType<{ path: string; studentsNumber: number }[]>,
    },
})
</script>

<template>
    <div class="grid grid-rows-2 grid-cols-4 grid-flow-row gap-x-12 gap-y-0 justify-center items-center">
        <img class=" w-36 block m-auto" v-for="campus in campusFrance" :src="campus.path">
        <p v-for="campus in campusFrance" class="text-md text-mds-midGray text-center py-0 text-lg font-bold">{{ campus.studentsNumber }} étudiants</p>
    </div>
</template>
