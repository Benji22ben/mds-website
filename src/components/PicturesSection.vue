<script setup lang="ts">
import { defineComponent, PropType } from 'vue';
import Picture from './Picture.vue';
</script>

<script lang="ts">
export default defineComponent({
    name: 'PicturesSection',
    components: {
        Picture
    },
    props: {
        pictures: {
            type: Array as PropType<{ path: string; alt: string }[]>
        },
    }
})
</script>

<template>
    <div class="flex flex-row gap-10 justify-center items-center">
        <Picture v-for="(picture, index) in pictures" :src="picture.path" :alt="picture.alt" class=" w-48"
            :class="index == 1 || index == 2 ? ' mt-32' : ''" />
    </div>
</template>