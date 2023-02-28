<script setup lang="ts">
import { defineComponent } from 'vue'
import Title from './Title.vue';
import Button from './Button.vue';
</script>

<script lang="ts">
export default defineComponent({
  name: 'TitleSection',
  components: {
    Title,
    Button
  }
})
</script>

<template>
    <Title>La meilleure école des <br> métiers du digital</Title>
    <Button class="font-bold">Appelez-nous</Button>
</template>
