<template>
    <header>
        <nav class="flex sm:flex-row flex-col justify-between p-10 font-mono text-xl">
                <div class="mb-8">
                    <a href="#">LOGO</a>
                </div>
                <div>
                    <ul class="flex sm:flex-row flex-col sm:gap-20 gap-5 list-none">
                        <li class="navTag "><router-link to="/">&#60;Kezdőlap/&#62;</router-link></li>
                        <li class="navTag "><router-link to="/about">&#60;Rólam/&#62;</router-link></li>
                        <li class="navTag"><router-link to="/projects" href="#projektek">&#60;Projektek/&#62;</router-link></li>
                        <li class="navTag"><router-link to="/contact" href="#contact">&#60;Elérhetőség/&#62;</router-link></li>
                    </ul>
                </div>
                
        </nav>
        <router-view/>
    </header>
</template>

<script>
export default {

}
</script>