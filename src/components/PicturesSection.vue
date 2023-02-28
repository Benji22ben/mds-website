<script setup lang="ts">
import { defineComponent, PropType } from 'vue';
</script>

<script lang="ts">
export default defineComponent({
    name: 'PicturesSection',
    props: {
        pictures: {
            type: Array as PropType<{ path: string; alt: string }[]>
        },
    }
})
</script>

<template>
    <div class="flex flex-row gap-10 justify-center items-center">
        <img v-for="(picture, index) in pictures" :src="picture.path" :alt="picture.alt" class=" w-48"
            :class="index == 1 || index == 2 ? ' mt-32' : ''" />
    </div>
</template>