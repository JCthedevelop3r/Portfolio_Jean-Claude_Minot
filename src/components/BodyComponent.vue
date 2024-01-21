<script setup>


</script>

<template>
    <!-- courte présentation -->
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eros nisl, fringilla ut neque id, pharetra semper urna. 
    Proin consectetur, tortor at faucibus convallis, lorem nulla iaculis turpis, eget interdum est felis quis libero. 
    Proin blandit fermentum est eu condimentum.</p>

    <h2>Mon CV</h2>

    <img src="../assets/images/Screen_Devoir_CV.png" alt="Curriculum vitae d'un développeur web junior"/>
    <button>En savoir plus</button>

    <h2>Cahier des charges "La Socketterie"</h2>

    <img src="../assets/images/Screen_Devoir_Cahier_des_Charges.png" alt="Cahier des charges"/>
    <button>En savoir plus</button>

    <h2>Dynamiser un espace commentaire</h2>

    <img src="../assets/images/Screen_Devoir_Dynamiser_Espace_commentaire.png" alt="Espace commentaire d'un site web"/>
    <button>En savoir plus</button>

    <form action="#" method="post">

        <label for="name">Prénom : </label>
        <input type="text" name="firsname" id="firstname">

        <label for="name">Nom : </label>
        <input type="text" name="lastname" id="lastname">

        <label for="object">Objet :</label>
        <input type="text" name="object" id="object">

        <textarea placeholder="Bonjour, je suis intéressé par votre profil..."></textarea>

        <input type="submit" name="submit-button" id="submit-button">
    
    </form>

</template>

<style scoped>

</style>
