<script setup>

import ModalCV1 from '@/components/modals/ModalCV1.vue';

import ModalCDC1 from '@/components/modals/ModalCDC1.vue';

import ModalEspaceCommentaire1 from '@/components/modals/ModalEspaceCommentaire1.vue';

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

//Code pour la ModalCDC1
const isModalOpenCDC1 = ref(false);

const openModalCDC1 = () => {
    isModalOpenCDC1.value = true;
};

const closeModalCDC1 = () => {
    isModalOpenCDC1.value = false;
};

//Code pour la ModalCDC2
const isModalOpenCDC2 = ref(false);

const openModalCDC2 = () => {
    isModalOpenCDC2.value = true;
};

const closeModalCDC2 = () => {
    isModalOpenCDC2.value = false;
};

//Code pour la ModalEspCom1
const isModalOpenEspCom1 = ref(false);

const openModalEspCom1 = () => {
    isModalOpenEspCom1.value = true;
};

const closeModalEspCom1 = () => {
    isModalOpenEspCom1.value = false;
};

//Code pour la ModalEspCom2
const isModalOpenEspCom2 = ref(false);

const openModalEspCom2 = () => {
    isModalOpenEspCom2.value = true;
};

const closeModalEspCom2 = () => {
    isModalOpenEspCom2.value = false;
};

</script>

<template>

    <main>

        <!-- courte présentation -->
        <p id="presentation">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eros nisl, fringilla ut neque id, pharetra semper urna. 
            Proin consectetur, tortor at faucibus convallis, lorem nulla iaculis turpis, eget interdum est felis quis libero. 
            Proin blandit fermentum est eu condimentum.
        </p>
        <!-- courte présentation -->

        <!-- fenêtres modales du CV -->
        <ModalCV1 v-if="isModalOpenCV1">
            <button class="close-button-modals" @click="closeModalCV1">X</button>
            <h1>Voici du contenu</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eros nisl, fringilla ut neque id, pharetra semper urna. 
            </p>
            <button class="close-modal-cv-1" @click="closeModalCV1">fermer</button>
        </ModalCV1>

        <div class="modal-container-cv" v-if="isModalOpenCV2">
            <div class="overlay-cv" @click="closeModalCV2">
                <div class="modal-cv">
                    <button @click="closeModal" class="close-button-modals">X</button>
                    <h1>Voici du contenu</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eros nisl, fringilla ut neque id, pharetra semper urna. 
                    </p>
                </div>
            </div>
        </div>
        <!-- fenêtres modales du CV -->
        
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

            <!-- fenêtres modales du cahier des charges -->
            <ModalCDC1 v-if="isModalOpenCDC1">
                <button class="close-button-modals" @click="closeModalCDC1">X</button>
                <h1>Voici du contenu</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eros nisl, fringilla ut neque id, pharetra semper urna. 
                </p>
                <button class="close-modal-cdc-1" @click="closeModalCDC1">fermer</button>
            </ModalCDC1>

            <div class="modal-container-cdc" v-if="isModalOpenCDC2">
                <div class="overlay-cdc" @click="closeModalCDC2">
                    <div class="modal-cdc">
                        <button @click="closeModal" class="close-button-modals">X</button>
                        <h1>Voici du contenu</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eros nisl, fringilla ut neque id, pharetra semper urna. 
                        </p>
                    </div>
                </div>
            </div>
            <!-- fenêtres modales du cahier des charges -->

            <article class="section__article2">
                <h2 class="article2__h2">Cahier des charges "La Socketterie"</h2>
                <div class="article2__div">
                    <figure class="article2__figure1">
                        <img src="../assets/images/Screen_Devoir_Cahier_des_Charges.png" alt="Cahier des charges" class="article2__cdc" @click="openModalCDC1"/>
                    </figure>
                    <figure class="article2__figure2">
                        <img src="../assets/images/Pdp_moi.jpg" alt="Jeune homme brun au teint mate" class="article2__logo"/>
                    </figure>
                </div>
                <button @click="openModalCDC2">En savoir plus</button>
            </article>

            <!-- fenêtres modales de l'espace commentaire -->
            <ModalEspaceCommentaire1 v-if="isModalOpenEspCom1">
                <button class="close-button-modals" @click="closeModalEspCom1">X</button>
                <h1>Voici du contenu</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eros nisl, fringilla ut neque id, pharetra semper urna. 
                </p>
                <button class="close-modal-esp-com-1" @click="closeModalEspCom1">fermer</button>
            </ModalEspaceCommentaire1>

            <div class="modal-container-esp-com" v-if="isModalOpenEspCom2">
                <div class="overlay-esp-com" @click="closeModalEspCom2">
                    <div class="modal-esp-com">
                        <button @click="closeModal" class="close-button-modals">X</button>
                        <h1>Voici du contenu</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eros nisl, fringilla ut neque id, pharetra semper urna. 
                        </p>
                    </div>
                </div>
            </div>
            <!-- fenêtres modales de l'espace commentaire -->

            <article class="section__article3">
                <h2 class="article3__h2">Dynamiser un espace commentaire</h2>
                <div class="article3__div">
                    <figure class="article3__figure1">
                        <img src="../assets/images/Screen_Devoir_Dynamiser_Espace_commentaire.png" alt="Espace commentaire d'un site web" class="article3__esp-com" @click="openModalEspCom1"/>
                    </figure>
                    <figure class="article3__figure2">
                        <img src="../assets/images/Pdp_moi.jpg" alt="Jeune homme brun au teint mate" class="article3__logo"/>
                    </figure>
                </div>
                <button @click="openModalEspCom2">En savoir plus</button>
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

    /*STYLE DE LA SECTION 1*/
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
    border: 2px solid red;
    
    }

    .article2__figure1 {

    width: 600px;
    height: 750px;
    
    }
    
    .article2__cdc  {
    
        height: 100%;
        width: 100%;
        object-fit: cover;
        border: 2px solid red;
    
    }

    .article3__figure1 {

    width: 600px;
    height: 750px;
    
    }

    .article3__esp-com {
    
        height: 100%;
        width: 100%;
        object-fit: cover;
        border: 2px solid red;
    
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
    /*STYLE DE LA SECTION 1*/

    /*STYLE DE LA SECTION 2*/
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
    /*STYLE DE LA SECTION 2*/

    /*STYLE DE LA FENETRE MODALE "EN SAVOIR PLUS" DU CV*/

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

    /*STYLE DE LA FENETRE MODALE "EN SAVOIR PLUS" DU CV*/

    /*STYLE DE LA FENETRE MODALE "EN SAVOIR PLUS" DU CAHIER DES CHARGES*/

    .modal-container-cdc {

    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;

    } 

    .overlay-cdc {

    position: absolute;
    width: 100vw;
    height: 100vh;
    background: #333333d3;

    }

    .modal-cdc {

    width: 450px;
    height: 250px;
    border-radius: 5px;
    position: absolute;
    top: 25%;
    left: 39%;
    background: white;
    border: 2px solid red;

    }

    /*STYLE DE LA FENETRE MODALE "EN SAVOIR PLUS" DU CAHIER DES CHARGES*/

    /*STYLE DE LA FENETRE MODALE "EN SAVOIR PLUS" DE L'ESPACE COMMENTAIRE*/

    .modal-container-esp-com {

    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;

    } 

    .overlay-esp-com {

    position: absolute;
    width: 100vw;
    height: 100vh;
    background: #333333d3;

    }

    .modal-esp-com {

    width: 450px;
    height: 250px;
    border-radius: 5px;
    position: absolute;
    top: 25%;
    left: 39%;
    background: white;
    border: 2px solid red;

    }

    /*STYLE DE LA FENETRE MODALE "EN SAVOIR PLUS" DE L'ESPACE COMMENTAIRE*/
    
    .close-button-modals {
    
        width: 30px;
        height: 30px;
        border: none;
        border-radius: 5px;
        position: absolute;
        top: 10px;
        right: 10px;

    }
    
    .close-modal-cv-1 {
    
    height: 752px;
    width: 555px;
    position: absolute;
    top: -97%;
    left: -150%;
    opacity: 0;
    
    }

    .close-modal-cdc-1 {
    
    height: 752px;
    width: 600px;
    position: absolute;
    top: -100%;
    left: -155%;
    opacity: 0;

    }

    .close-modal-esp-com-1 {
    
    height: 752px;
    width: 600px;
    position: absolute;
    top: -95%;
    left: -155%;
    opacity: 0;

    }

    #presentation {
    
        font-family: 'Bohemian Soul', serif;
    
    }
</style>
