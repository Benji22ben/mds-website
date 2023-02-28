<script setup lang="ts">
import { defineComponent } from 'vue';
import Link from '../types/Link'
import PicturesSection from './PicturesSection.vue';
import TitleSection from  './TitleSection.vue'
import CampusSection from './CampusSection.vue';
import CardsSection from './CardsSection.vue';
</script>

<script lang="ts">
export default defineComponent({
    components: {
        TitleSection,
        PicturesSection,
        CampusSection,
        CardsSection,
    },
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
            ],
            campusFrance: [
                {
                    path: '/campus1.png',
                    studentsNumber: 2000
                },
                {
                    path: '/campus2.png',
                    studentsNumber: 2000
                },
                {
                    path: '/campus3.png',
                    studentsNumber: 2000
                },
                {
                    path: '/campus4.png',
                    studentsNumber: 2000
                }
            ],
            cards: [
                {
                    icon: "/cardIcon.svg",
                    title: "Webmarketing",
                    description: "Classée la 2ème meilleure école de France dans ce domaine, le marketing digital est la spécialité de MyDigitalSchool",
                    link:
                        {
                            path: "/discover",
                            name: "Découvrir",
                            selected: false
                        } as Link
                },
                {
                    icon: "/cardIcon.svg",
                    title: "UI & UX Design",
                    description: "Classée la 2ème meilleure école de France dans ce domaine, le marketing digital est la spécialité de MyDigitalSchool",
                    link:
                        {
                            path: "/discover",
                            name: "Découvrir",
                            selected: false
                        } as Link
                },
                {
                    icon: "/cardIcon.svg",
                    title: "Programmation",
                    description: "Classée la 2ème meilleure école de France dans ce domaine, le marketing digital est la spécialité de MyDigitalSchool",
                    link:
                        {
                            path: "/discover",
                            name: "Découvrir",
                            selected: false
                        } as Link
                },
                {
                    icon: "/cardIcon.svg",
                    title: "Communication",
                    description: "Classée la 2ème meilleure école de France dans ce domaine, le marketing digital est la spécialité de MyDigitalSchool",
                    link:
                        {
                            path: "/discover",
                            name: "Découvrir",
                            selected: false
                        } as Link
                }
            ]
        }
    }
})
</script>

<template>
    <div class="flex flex-col items-center justify-center gap-12">
        <TitleSection />
        <PicturesSection :pictures="pictures" />
        <CampusSection :campus-france="campusFrance" />
        <CardsSection :cards="cards" />
    </div>
</template>


