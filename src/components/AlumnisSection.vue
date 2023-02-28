<script setup lang="ts">
import { defineComponent } from 'vue'
import AlumnisCard from './AlumnisCard.vue';
</script>

<script lang="ts">
export default defineComponent({
    name: 'AlumnisSection',
    data() {
        return {
            students: [
                {
                    alumniPic: '/old_student1.png',
                    comment: 'J’ai passé clairement mes 2 meilleurs années scolaires à MyDigitalSchool. L’ambiance, les intervenants et les locaux m’ont permis de m’épanouir, gros big up pour la connexion internet ! ❤️',
                    postDate: 'Mars 2022',
                    studentYear: '2015',
                    studentName: 'Melanie',
                    gender: 'F'
                },
                {
                    alumniPic: '/old_student2.png',
                    comment: 'J’ai passé clairement mes 2 meilleurs années scolaires à MyDigitalSchool. L’ambiance, les intervenants et les locaux m’ont permis de m’épanouir, gros big up pour la connexion internet ! ❤️',
                    postDate: 'Juin 2017',
                    studentYear: '2015',
                    studentName: 'Léo',
                    gender: 'M'
                }
            ]
        }
    }
})
</script>

<template>
    <div class="w-full flex flex-col gap-12">
        <div class="w-full flex flex-row justify-between items-center">
            <h2 class="font-bold text-mds-black text-left -mt-8 text-4xl">Qu’est-ce que nos <br> alumnis en pensent ?</h2>
            <div class="flex flex-row gap-6">
                <img class="rounded-full p-5 border-mds-blue border-solid border w-16 h-16" src="/arrow-blue.svg" alt="">
                <img class="rounded-full p-5 bg-mds-blue w-16 h-16" src="/arrow.svg" alt="">
            </div>
        </div>
        <div class="flex flex-row gap-24 justify-between items-center">
            <AlumnisCard v-for="alumni in students" :alumni-pic="alumni.alumniPic" :comment="alumni.comment"
                :student-year="alumni.studentYear" :student-name="alumni.studentName" :post-date="alumni.postDate"
                :gender="alumni.gender" />
        </div>
    </div>
</template>
