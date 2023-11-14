<template>
    <div class="relative hover:scale-105 transition-all cursor-pointer h-80 w-80 p-5 ">
        <img class="bg-cover rounded-md" :src="getImageUrl()" alt="">
        <h3 class="absolute left-6 top-5 text-xl font-bold">{{ title }}</h3>
        <p class="absolute left-6 bottom-9 font-mono backdrop-blur-lg rounded-tr rounded-br w-3/4">{{ desc }}</p>
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