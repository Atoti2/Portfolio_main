<template>
    <div class="hover:scale-105 transition-all h-80 w-80 bg-slate-100 rounded-md cursor-pointer">
        <h3 class=" text-xl font-bold text-center mb-5">{{ title }}</h3>
        <img class="bg-cover rounded-md h-52 w-52 m-auto" :src="getImageUrl()" alt="">
        <p class="font-mono text-center rounded-tr rounded-br">{{ desc }}</p>
    </div>
</template>

<script setup>
import {defineProps} from "vue";
    const props =  defineProps({
      title: String,
      image: String,
      desc: String
   })

function getImageUrl() {
    return new URL(`../assets/${props.image}`, import.meta.url)
}
</script>
<style>

</style>