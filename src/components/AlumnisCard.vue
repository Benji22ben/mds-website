<script setup lang="ts">
import { PropType, defineComponent } from 'vue'
import Link from '../types/Link';
</script>

<script lang="ts">
export default defineComponent({
    name: 'Card',
    props: {
        alumniPic: {
            type: String as PropType<string>,
            required: true,
        },
        comment: {
            type: String as PropType<string>,
            required: true,
        },
        postDate: {
            type: String as PropType<string>,
            required: true,
        },
        studentYear: {
            type: String as PropType<string>,
            required: true,
        },
        studentName: {
            type: String as PropType<string>,
            required: true,
        },
        gender: {
            type: String as PropType<string>,
            required: true,
        },
    },
})
</script>

<template>
    <div style="box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);" class="w-full flex flex-col p-8 gap-8 rounded-3xl">
        <div class="flex flex-row gap-2">
            <img class="w-10 h-10" :src="alumniPic">
            <div class="flex flex-col items-start justify-center">
                <span class="font-bold text-mds-navyBlue text-sm">{{ studentName }}</span>
                <span class="text-mds-gray text-sm">Etudiant{{ gender == "M" ? "" : "e" }} en {{ studentYear }}</span>
            </div>
        </div>
        <p class="leading-6">{{ comment }}</p>
        <span class="font-bold text-mds-navyBlue">{{ postDate }}</span>
    </div>
</template>
