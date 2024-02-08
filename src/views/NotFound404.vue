<script setup>
import { RouterLink, RouterView } from 'vue-router'

import HeaderComponent from '../components/HeaderComponent.vue'

import FooterComponent from '../components/FooterComponent.vue'
</script>

<template>
    <HeaderComponent></HeaderComponent>
        <h1>Page introuvable</h1>
        <section>
            <p>Erreur 404</p>
            <img src="../assets/images/Oops!.png" alt="Dessin d'un bonhomme confus"/>
            <button><router-link to="/">Retourner à l'accueil</router-link></button>
        </section>
    <FooterComponent></FooterComponent>
</template>

<style scoped>

    h1 {
    
        font-family: 'Arial', 'sans-serif';
        font-weight: 900;

    }

    section {
    
        display: flex;
        flex-direction: column;
        margin-bottom: 216px;
    
    }

    p {
    
        font-family: 'Helvetica', 'sens-serif';
        font-weight: bold;
    
    }
    img {
    
        height: 359px;
        width: 479px;
        align-self: center;

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

    }

    

</style>

