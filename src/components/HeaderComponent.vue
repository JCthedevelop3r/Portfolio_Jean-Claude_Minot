<script setup>

import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
    <header>
        <a href="#pdp"><img src="../assets/images/Pdp_moi.jpg" alt="Jeune homme brun au teint mate" class="pdp"/></a>
        <div class="name-and-menu">
            <h1>Minot Jean-Claude</h1>
            <div id="nav">
                <router-link to="/About">À propos de moi</router-link>
                <router-link to="/CV">CV</router-link>
                <router-link to="/CDC">Cahier des charges</router-link>
                <router-link to="/EspCom">Espace commentaire</router-link>
                <router-link to="/Form">Me contacter</router-link>
            </div>
        </div>
    </header>
</template>

<style scoped>

.pdp {

height: 200px;

}

header {

display: flex;

}

.name-and-menu {

display: flex;
flex-direction: column;

}

li {

display: inline-block;

}

</style>
