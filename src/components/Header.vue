<script setup lang="ts">
import { defineComponent } from 'vue';
import Nav from './Nav.vue'
import Link from '../types/Link';
import Button from './Button.vue'
</script>

<script lang="ts">
export default defineComponent({
    data() {
        return {
            links: [
                {
                    name: 'Accueil',
                    path: '/',
                    selected: true
                },
                {
                    name: 'Les programmes',
                    path: '/programmes',
                    selected: false

                },
                {
                    name: 'Notre Blog',
                    path: '/blog',
                    selected: false
                }
            ] as Link[]
        }
    },
    components: {
        Nav
    },
})
</script>

<template>
    <div class="flex flex-row items-center justify-between">
        <img src="/logo-mds.svg" alt="">
        <Nav :links="this.links"></Nav>
        <div class=" border-l-mds-gray border-solid border-l-2 pl-96"><Button>M'inscrire</Button></div>
    </div>
</template>


