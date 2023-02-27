<script setup lang="ts">
import { defineComponent } from 'vue'
</script>

<script lang="ts">
export default defineComponent({
    name: 'Button',
})
</script>

<template>
    <button class="shadow-md bg-mds-blue text-mds-white px-8 py-4 rounded-full">
        <slot></slot>
    </button>
</template>
