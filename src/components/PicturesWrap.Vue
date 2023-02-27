<script setup lang="ts">
import { PropType, defineComponent } from 'vue'
import Picture from './Picture.vue'
</script>

<script lang="ts">
export default defineComponent({
    name: 'PicturesWrap',
    props: {
        pictures: {
            type: Array as PropType<{ path: string; alt: string }[]>
        },
    }
})
</script>

<template>
    <div>
        <div class="flex flex-row gap-6">
            <Picture v-for="(picture, index) in pictures" :src="picture.path" :alt="picture.alt" class="w-1/3"
                :class="index == 0 || index == 3 ? 'mt-4' : ''"><Picture />
        </div>
    </div>
</template>
