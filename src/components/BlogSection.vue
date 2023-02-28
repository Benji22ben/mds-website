<script setup lang="ts">
import { defineComponent } from 'vue'
import BlogCard from './BlogCard.vue';
</script>

<script lang="ts">
export default defineComponent({
    name: 'BlogSection',
    components: {
        BlogCard
    },
    data() {
        return {
            blogs: [
                {
                    title: "Comment devenir développeur web ?",
                    date: "Posté le 4 mars",
                    image: "/blog3.png"
                },
                {
                    title: "UX vs UI Design, quelle est la différence ?",
                    date: "Posté le 5 avril",
                    image: "blog2.png"
                },
                {
                    title: "Top 10 des métiers du digital en 2023",
                    date: "Posté le 9 avril ",
                    image: "blog1.png"
                },
                {
                    title: "Comment devenir développeur web ?",
                    date: "Posté le 4 mars",
                    image: "blog3.png"
                }
            ]
        }
    }
})
</script>

<template>
    <div class="bg-mds-navyBlue w-full flex flex-col justify-center items-center gap-20">
        <h2 class="font-bold text-white text-center text-4xl">MyDigitalSchool, c’est aussi <br> un blog avec des conseils
        </h2>
        <div class="flex flex-row gap-8">
            <BlogCard class="grow basis-0" v-for="blog in blogs" :image="blog.image" :title="blog.title"
                :date="blog.date" />
        </div>
    </div>
</template>
