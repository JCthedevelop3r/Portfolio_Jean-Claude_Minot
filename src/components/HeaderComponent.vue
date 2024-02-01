<script setup>

import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
    <div id="header-ancre"></div>
    <header>
            <a href="#header-ancre"><img src="../assets/images/../images/Logo_Cascade_JCthedevelop3r.png" alt="Logo turquoise en forme de cascade"/></a>
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

#header-ancre {

    height: 10px;
    width: 10px;
    position: absolute;
    top: 0;

}

header {

    display: flex;
    position: sticky;
    top: 0;
    background-color: #ecdcc5ff;

}

img {

    height: 60px;
    padding: 10px;

}

.menu {

    width: 1183px;

}

ul {

    display: flex;
    justify-content: space-between;

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
    color: #ca9f6afe;
    

}

li:hover{

    
    text-decoration: underline;

}
</style>
