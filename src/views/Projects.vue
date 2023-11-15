<template>
   <div class="p-12 bg-rose-500 m-6 rounded-lg ">
                <h2 id="projektek" class="font-mono font-bold text-3xl mb-5 text-slate-100">Projektek</h2>
                <div class="flex gap-12 flex-wrap items-center lg:justify-normal justify-center">
                    <div v-for="project in projects" :key="project.title">
                        <Project
                            :title="project.title"
                            :image="project.image"
                            :desc="project.desc"
                        />
                    </div>
                </div>
            </div>
</template>

<script setup>
    import Project from '../components/Project.vue';
    const projects = [
        {
            title: 'Számológép',
            image: 'calculator.png',
            desc: 'Egy számológép Javascriptben csinálva.',
        },
    ]
</script>

<style>

</style>