<script setup lang="ts">
import { defineComponent } from 'vue';
import Title from './Title.vue';
import Button from './Button.vue';
import PicturesWrap from './PicturesWrap.Vue';
</script>

<script lang="ts">
export default defineComponent({
    data() {
        return {
            pictures: [
                {
                    path: '/eleve1.png',
                    alt: 'digital marketing'
                },
                {
                    path: '/eleve2.png',
                    alt: 'digital marketing'
                },
                {
                    path: '/eleve3.png',
                    alt: 'digital marketing'
                },
                {
                    path: '/eleve4.png',
                    alt: 'digital marketing'
                }
            ]
        }
    }
})
</script>

<template>
    <div class="flex flex-col items-center justify-center gap-12">
        <Title>La meilleure école des <br> métiers du digital</Title>
        <Button class="font-bold">Appelez-nous</Button>
        <PicturesWrap :pictures="pictures" />
    </div>
</template>


