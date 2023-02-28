<script setup lang="ts">
import { PropType, defineComponent } from 'vue'
import Card from "./Card.vue"
import Button from "./Button.vue"
import type CardType from "../types/Card"
</script>

<script lang="ts">
export default defineComponent({
    name: 'CampusSection',
    components: {
        Card
    },
    props: {
        cards: Array as PropType<CardType[]>,
    }
})
</script>

<template>
    <div class="flex flex-col items-center justify-center gap-12">
        <h3 class="font-bold text-mds-blue text-center mt-36 text-2xl">PLUSIEURS SPÉCIALITÉS</h3>
        <h2 class="font-bold text-mds-black text-center -mt-8 text-4xl">Les domaines les plus <br> demandés dans le digital</h2>
        <div class="flex flex-row justify-evenly items-center mt-8">
            <Card v-for="card in cards" :icon="card.icon" :title="card.title" :description="card.description"
                :link="card.link" />
        </div>
        <Button class="mt-10">Téléchargez le programme</Button>
    </div>
</template>
