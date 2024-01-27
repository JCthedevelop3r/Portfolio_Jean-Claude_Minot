<script setup>

import ModalCV1 from '@/components/modals/ModalCV1.vue';

import { ref } from 'vue';

//Code pour la ModalCV1
const isModalOpenCV1 = ref(false);

const openModalCV1 = () => {
    isModalOpenCV1.value = true;
};

const closeModalCV1 = () => {
    isModalOpenCV1.value = false;
};

//Code pour la ModalCV2
const isModalOpenCV2 = ref(false);

const openModalCV2 = () => {
    isModalOpenCV2.value = true;
};

const closeModalCV2 = () => {
    isModalOpenCV2.value = false;
};

</script>

<template>

    <main>

        <!-- courte présentation -->
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eros nisl, fringilla ut neque id, pharetra semper urna. 
            Proin consectetur, tortor at faucibus convallis, lorem nulla iaculis turpis, eget interdum est felis quis libero. 
            Proin blandit fermentum est eu condimentum.
        </p>
        
        <ModalCV1 v-if="isModalOpenCV1">
            <button class="close-button-modal-cv" @click="closeModalCV1">X</button>
            <h1>Voici du contenu</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eros nisl, fringilla ut neque id, pharetra semper urna. 
            </p>
            <button class="close-modal-cv-1" @click="closeModalCV1">fermer</button>
        </ModalCV1>

        <div class="modal-container-cv" v-if="isModalOpenCV2">
            <div class="overlay-cv" @click="closeModalCV2">
                <div class="modal-cv">
                    <button @click="closeModal" class="close-button-modal-cv">X</button>
                    <h1>Voici du contenu</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eros nisl, fringilla ut neque id, pharetra semper urna. 
                    </p>
                </div>
            </div>
        </div>
        
        
        <section class="main__section1">
            <article class="section__article1">
                <h2 class="article1__h2">Mon CV</h2>
                <div class="article1__div">
                    <figure class="article1__figure1">
                        <img src="../assets/images/Screen_Devoir_CV.png" alt="Curriculum vitae d'un développeur web junior" class="article1__cv" @click="openModalCV1"/>
                    </figure>
                    
                    <figure class="article1__figure2">
                        <img src="../assets/images/Pdp_moi.jpg" alt="Jeune homme brun au teint mate" class="article1__logo"/>
                    </figure>
                </div>
                <button @click="openModalCV2">En savoir plus</button>
            </article>

            <article class="section__article2">
                <h2 class="article2__h2">Cahier des charges "La Socketterie"</h2>
                <div class="article2__div">
                    <figure class="article2__figure1">
                        <img src="../assets/images/Screen_Devoir_Cahier_des_Charges.png" alt="Cahier des charges" class="article2__cdc"/>
                    </figure>
                    <figure class="article2__figure2">
                        <img src="../assets/images/Pdp_moi.jpg" alt="Jeune homme brun au teint mate" class="article2__logo"/>
                    </figure>
                </div>
                <button>En savoir plus</button>
            </article>

            <article class="section__article3">
                <h2 class="article3__h2">Dynamiser un espace commentaire</h2>
                <div class="article3__div">
                    <figure class="article3__figure1">
                        <img src="../assets/images/Screen_Devoir_Dynamiser_Espace_commentaire.png" alt="Espace commentaire d'un site web" class="article3__esp-com"/>
                    </figure>
                    <figure class="article3__figure2">
                        <img src="../assets/images/Pdp_moi.jpg" alt="Jeune homme brun au teint mate" class="article3__logo"/>
                    </figure>
                </div>
                <button>En savoir plus</button>
            </article>

        </section>

        <h2 class="contact">Me contacter</h2>

        <section class="main__section2">

            <!--texte de remerciements-->
            <p class="section2__p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eros nisl, fringilla ut neque id, pharetra semper urna. 
                Proin consectetur, tortor at faucibus convallis, lorem nulla iaculis turpis, eget interdum est felis quis libero. 
                Proin blandit fermentum est eu condimentum.
            </p>

            

            <form action="#" method="post">

                <div>
                    <label for="firstname">Prénom : </label>
                    <input type="text" name="firsname" id="firstname">
                </div>

                <div>
                    <label for="lastname" id="label-lastname">Nom : </label>
                    <input type="text" name="lastname" id="lastname">
                </div>

                <div>
                    <label for="object" id="label-object">Objet :</label>
                    <input type="text" name="object" id="object">
                </div>

                <textarea placeholder="Bonjour, je suis intéressé par votre profil..."></textarea>

                <input type="submit" name="submit-button" id="submit-button">
    
            </form>
        </section>
    </main>
</template>

<style scoped>

    .article1__h2 {
    
    padding-left: 295px;
    
    }

    .article2__h2 {
    
    padding-left: 170px;
    
    }

    .article3__h2 {
    
    padding-left: 170px;
    
    }

    .article1__div {
    
    display: flex;
    
    }

    .article2__div {
    
    display: flex;
    
    }

    .article3__div {
    
    display: flex;
    
    }
    
    .article1__figure1 {

    width: 600px;
    height: 750px;
    
    }

    .article1__cv {
    
    height: 100%;
    width: 100%;
    object-fit: contain;
    
    }

    .article2__figure1 {

    width: 600px;
    height: 750px;
    
    }
    
    .article2__cdc  {
    
        height: 100%;
        width: 100%;
        object-fit: cover;
    
    }

    .article3__figure1 {

    width: 600px;
    height: 750px;
    
    }

    .article3__esp-com {
    
        height: 100%;
        width: 100%;
        object-fit: cover;
    
    }

    .article1__figure2  {
    
        height: 200px;
        width: 150px;
        margin-left: 241.47px;
        margin-right: 241.47px;
        align-self: center;
    
    }

    .article2__figure2 {
    
        height: 200px;
        width: 150px;
        margin-left: 241.47px;
        margin-right: 241.47px;
        align-self: center;
    }

    .article3__figure2 {
    
        height: 200px;
        width: 150px;
        margin-left: 241.47px;
        margin-right: 241.47px;
        align-self: center;
    }

    .article1__logo   {
    
        height: 100%;
        width: 100%;
    
    }
    .article2__logo {
    
        height: 100%;
        width: 100%;
    
    }

    .article3__logo {
    
        height: 100%;
        width: 100%;
    
    }

    button {
    
    width: 600px;
    height: 40px;
    
    }

    .main__section1 {
    
    display: flex;
    flex-direction: column;
    
    }

    .main__section2 {
    
    display: flex;
    justify-content: space-evenly;
    height: 800px; 
    border: 2px solid blue;
    
    }

    .section2__p {
    
        width: 400px;
        height: 500px;
        align-self: center;
        border: 2px solid red;
    
    }

    form {
    
        width: 400px;
        height: 500px;
        display: flex;
        flex-direction: column;
        align-self: center;
        border: 2px solid red;
    }

    #firstname {
    
    margin: 0 0 0 20px;
    width: 313px;
    
    }

    #lastname {
    
    width: 313px;
    
    }

    #object {
    
    width: 313px;
    
    }

    #label-lastname {
    
        margin-right: 38px;
    
    }

    #label-object {
    
        margin-right: 34px;
    
    }

    form div {
    
        margin-bottom: 20px;
    
    }

    textarea {
    
        height: 320px;
        margin-bottom: 10px;
    
    }

    #submit-button {
    
        height: 40px;
    
    }

    .contact {
    
        margin: 10px 0 10px 0;
        padding-left: 735px;
    
    }

    .close-button-modal-cv {
    
        width: 30px;
        height: 30px;
        border: none;
        border-radius: 5px;
        position: absolute;
        top: 10px;
        right: 10px;

    }

    /*Style des fenêtres modales "En savoir plus".*/

    .modal-container-cv {

    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;

    } 

    .overlay-cv {

    position: absolute;
    width: 100vw;
    height: 100vh;
    background: #333333d3;

    }

    .modal-cv {

    width: 450px;
    height: 250px;
    border-radius: 5px;
    position: absolute;
    top: 25%;
    left: 39%;
    background: white;
    border: 2px solid red;

    }

    .close-modal-cv-1 {
    
    height: 752px;
    width: 555px;
    position: absolute;
    top: -97%;
    left: -150%;
    opacity: 0;
    
    }
</style>
