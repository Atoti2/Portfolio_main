<template>
    <main>
            <div id="aboutMe" class="flex flex-col sm:flex-row items-center justify-center min-h-[88vh]">
                <div class="mb-5 ml-5">
                    <img class="bg-rose-500 a" src="src\assets\profile_picture.png" alt="picture of me">
                </div>
        
                <div class="flex flex-col items-center justify-center m-auto">
                    <h1 class="text-7xl font-mono text-center">Szia,<br><span class="text-rose-500 font-semibold">Kristóf</span> vagyok</h1>
                    <a href="#about"><svg class="h-10 w-10 m-5 cursor-pointer hover:-translate-y-1 transition-all" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>arrow-down-thin</title><path d="M7.03 13.92H11.03V5L13.04 4.97V13.92H17.03L12.03 18.92Z" /></svg></a> 
                </div>
                
            </div>
            <section id="about" class="text-center">
                <p class="text-2xl mb-10 font-mono"><span class="font-bold">Tóth Kristóf</span> vagyok <span class="font-bold">19</span> éves és az iskolában tanulok informatikát 4 éve bár szoktam magamtól is tanulni otthon webfejlesztést. <br><span class="text-rose-500 font-bold">HTML5, CSS3 és Javascript</span>-ben kódolok.</p>
            </section>
        </main>
</template>

<script>
export default {
    
}
</script>

<style>
.a{
border-radius: 30% 70% 70% 40% / 30% 30% 70% 70% !important;
}
</style>