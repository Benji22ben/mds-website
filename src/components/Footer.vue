<script setup lang="ts">
import { defineComponent } from 'vue';
</script>

<script lang="ts">
export default defineComponent({
    name: 'Footer',
})
</script>

<template>
    <footer>
        <div class="flex justify-center items-center relative ">
            <img class="block m-auto" src="/footer_rectangle.svg">
            <div class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <h2 class="font-bold text-white text-center text-4xl -top-10">Entre ton e-mail pour recevoir le <br> programme de l’école
                </h2>
            </div>
        </div>
    </footer>
</template>


