<script setup>
import { RouterLink, RouterView } from 'vue-router'

import HeaderComponent from '@/components/HeaderComponent.vue'

import FooterComponent from '@/components/FooterComponent.vue'
</script>

<template>
    <HeaderComponent></HeaderComponent>
    <button><router-link to="/">Retourner à l'accueil</router-link></button>
    <img src="../assets/images/CDC_Page_1.jpg" alt="Page de garde d'un cahier des charges"></img>
    <img src="../assets/images/CDC_Page_2.jpg" alt="Page de garde d'un cahier des charges"></img>
    <img src="../assets/images/CDC_Page_3.jpg" alt="Page de garde d'un cahier des charges"></img>
    <img src="../assets/images/CDC_Page_4.jpg" alt="Page de garde d'un cahier des charges"></img>
    <img src="../assets/images/CDC_Page_5.jpg" alt="Page de garde d'un cahier des charges"></img>
    <img src="../assets/images/CDC_Page_6.jpg" alt="Page de garde d'un cahier des charges"></img>
    <img src="../assets/images/CDC_Page_7.jpg" alt="Page de garde d'un cahier des charges"></img>
    <img src="../assets/images/CDC_Page_8.jpg" alt="Page de garde d'un cahier des charges"></img>
    <img src="../assets/images/CDC_Page_9.jpg" alt="Page de garde d'un cahier des charges"></img>
    <img src="../assets/images/CDC_Page_10.jpg" alt="Page de garde d'un cahier des charges"></img>
    <button id="last-home-button"><router-link to="/">Retourner à l'accueil</router-link></button>
    <FooterComponent></FooterComponent>
</template>

<style scoped>

    img {
    
        width: 540px;
        position: relative;
        left: 415px;
        display: block;
        padding-bottom: 10px;

    }

    button {
        
        width: 200px;
        height: 30px;
        display: block;
        background: #31fffbff;
        border: none;
        border-radius: 10px;
        font-family: 'Helvetica', 'sans-serif';
        font-weight: bold;
        align-self: center;
        text-decoration: underline;
        text-decoration-thickness: 0px;
        margin: 30px;

    }

    #last-home-button {
    
        position: relative;
        left: 1150px;
    
    }
</style>