<script setup lang="ts">
import { PropType, defineComponent } from 'vue'
import Link from '../types/Link';
</script>

<script lang="ts">
export default defineComponent({
  name: 'Card',
  props: {
    icon: {
      type: String as PropType<string>,
      required: true,
    },
    title: {
        type: String as PropType<string>,
        required: true,
    },
    description: {
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
    <div style="box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);" class="flex flex-col justify-center items-start p-8 gap-2 w-1/5 rounded-3xl">
        <div class="bg-mds-blue rounded-xl w-16 h-16 flex justify-center items-center">
            <img :src="icon" class="w-8 h-8 block" />
        </div>
        <h3 class="text-mds-black font-bold text-2xl mt-4">{{ title }}</h3>
        <p class="text-mds-black font-regular text-base leading-5">{{ description }}</p>
        <router-link :to="link.path" class="text-mds-black text-lg font-bold hover:cursor-pointer mt-8">{{ link.name }}</router-link>
    </div>
</template>
