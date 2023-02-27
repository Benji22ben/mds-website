<script setup lang="ts">
import { defineComponent } from 'vue'
</script>

<script lang="ts">
export default defineComponent({
    name: 'Title',
})
</script>

<template>
    <h1 class="text-7xl text-mds-black font-bold text-center">
        <slot></slot>
    </h1>
</template>
