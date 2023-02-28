<script setup lang="ts">
import { PropType, defineComponent } from 'vue'
import Link from '../types/Link';
</script>

<script lang="ts">
export default defineComponent({
    name: 'Card',
    props: {
        image: {
            type: String as PropType<string>,
            required: true,
        },
        title: {
            type: String as PropType<string>,
            required: true,
        },
        date: {
            type: String as PropType<string>,
            required: true,
        },
        link: {
            type: Object as PropType<Link>,
        },
    },
})
</script>

<template>
    <router-link>
        <div
            class="bg-white flex flex-col justify-center items-start p-10 gap-6 rounded-3xl hover:shadow-mds-blue hover:shadow-md">
            <img class="w-56 block m-auto grow" :src="image">
            <span>{{ date }}</span>
            <h3 class="text-mds-black font-bold text-xl break-normal">{{ title }}</h3>
        </div>
    </router-link>
</template>
