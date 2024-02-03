<script setup>

import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
    <div id="header-anchor-receptor"></div>
    <header>
            <a href="#header-anchor-receptor" class="header-anchor"><img src="../assets/images/../images/Logo_Cascade_JCthedevelop3r.png" alt="Logo turquoise en forme de cascade"/></a>
            <nav class="menu">
                <ul>
                    <a href="#"><li>À propos de moi</li></a>
                    <a href="#"><li>Mon CV</li></a>
                    <a href="#"><li>Cahier des charges</li></a>
                    <a href="#"><li>Espace commentaire</li></a>
                    <a href="#"><li>Me contacter</li></a>
                </ul>
            </nav>
    </header>
</template>

<style scoped>

#header-anchor-receptor {

    height: 10px;
    width: 10px;
    position: absolute;
    top: 0;

}

.header-anchor {

    height: 80px;

}

header {

    display: flex;
    position: sticky;
    top: 0;
    background-color: #ecdcc5ff;
    

}

img {

    height: 60px;
    padding: 12px 0 12px 0;

}

.menu {

    width: 1366px;

}

ul {

    display: flex;
    justify-content: space-between;
    height: 40px;
    width: 720px;
    padding: 0;
    margin: 22px 0 22px 0;
    position: relative;
    left: 655px;

}

a {

    /*display: flex;
    justify-content: center;
    width: 170.5px;*/
}

li {

    display: inline-block;
    padding: 10px;
    font-family: 'Helvetica', 'sans-serif';
    font-weight: bold;
    color: black;
    

}

li:hover{

    
    text-decoration: underline #31fffbff;
    text-decoration-thickness: 8px;

}
</style>
