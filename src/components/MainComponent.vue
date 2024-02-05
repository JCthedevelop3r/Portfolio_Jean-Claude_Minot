<script setup>

import { RouterLink, RouterView } from 'vue-router';

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

    <div id="presentation"></div>
    <main>

        <!-- courte présentation -->
        <p class="presentation">
            Bonjour,<br/><br/> Je suis Jean-Claude Minot,<br/><br/> Développeur Web Junior.
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
                    <h1>Mon CV</h1>
                    <ul>
                        <li>Date de création : <time datetime="2023-11-16">16 novembre 2023</time>.</li>
                        <li>Technologies utilisées : HTML 5 - CSS 3 - Github pour le versioning.</li>
                        <li>Voir le projet : <a href="https://github.com/JCthedevelop3r/Devoir_CV" target="_blank">Un lien</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- fenêtres modales du CV -->
        
        <div id="cv"></div>
        <section class="main__section1">
            <article class="section__article1">
                <h2 class="article1__h2">Mon CV</h2>
                <div class="article1__div">
                    <figure class="article1__figure1">
                        <img src="../assets/images/Screen_Devoir_CV.png" alt="Curriculum vitae d'un développeur web junior" class="article1__cv" @click="openModalCV1"/>
                    </figure>
                    
                    <figure class="article1__figure2">
                        <img src="../assets/images/Logo_Cascade_JCthedevelop3r.png" alt="Logo turquoise en forme de cascade" class="article1__logo"/>
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
                        <h1>Cahier des charges</h1>
                        <ul>
                            <li>Date de création : <time datetime="2023-12-01">1er décembre 2023</time>.</li>
                            <li>Technologies utilisées : OpenOffice Writer.</li>
                            <li>Voir le projet : <router-link to="../assets/projects/Cahier_des_Charges_La_Socketterie.pdf" target="_blank">Un lien</router-link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- fenêtres modales du cahier des charges -->
            <div id="cdc"></div>
            <article class="section__article2">
                <h2 class="article2__h2">Cahier des charges "La Socketterie"</h2>
                <div class="article2__div">
                    <figure class="article2__figure1">
                        <img src="../assets/images/Screen_Devoir_Cahier_des_Charges.png" alt="Cahier des charges" class="article2__cdc" @click="openModalCDC1"/>
                    </figure>
                    <figure class="article2__figure2">
                        <img src="../assets/images/Logo_Cascade_JCthedevelop3r.png" alt="Logo en forme de cascade turquoise" class="article2__logo"/>
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
                        <h1>Dynamiser un espace commentaire</h1>
                        <ul>
                            <li>Date de création : <time datetime="2023-12-25">25 décembre 2023</time>.</li>
                            <li>Technologies utilisées : JavaScript - HTML 5 - Github pour le versioning.</li>
                            <li>Voir le projet : <a href="https://github.com/JCthedevelop3r/Devoir_Dynamiser_un_Espace_Commentaire" target="_blank">Un lien</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- fenêtres modales de l'espace commentaire -->

            <div id="esp-com"></div>
            <article class="section__article3">
                <h2 class="article3__h2">Dynamiser un espace commentaire</h2>
                <div class="article3__div">
                    <figure class="article3__figure1">
                        <img src="../assets/images/Screen_Devoir_Dynamiser_Espace_commentaire.png" alt="Espace commentaire d'un site web" class="article3__esp-com" @click="openModalEspCom1"/>
                    </figure>
                    <figure class="article3__figure2">
                        <img src="../assets/images/Logo_Cascade_JCthedevelop3r.png" alt="Logo en forme de cascade turquoise" class="article3__logo"/>
                    </figure>
                </div>
                <button @click="openModalEspCom2">En savoir plus</button>
            </article>

        </section>

        <h2 id="contact">Me contacter</h2>

        <section class="main__section2">

            <!--texte de remerciements-->
            <p class="section2__p">
                Merci de l'attention que vous avez porté à mes travaux.
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

    #presentation {
    
        position: relative;
        top: -100px;

    }

    #cv {
    
        position: relative;
        top: -110px;
    
    }

    #cdc {
    
        position: relative;
        top: -60px;
    
    }

    #esp-com {
    
        position: relative;
        top: -60px;
    
    }

    .presentation {
    
        font-family: 'Bohemian Soul', serif;
        font-size: 4rem;
        height: 670px;
    
    }

    /*STYLE DE LA SECTION 1*/

    /*TITRES DES TRAVAUX*/
    .article1__h2 {
    
        padding-left: 183px;
        margin: 0;
        font-family: 'Arial', 'sans-serif';
        font-weight: 900;
        font-size: 2rem;
        color: black;
    
    }

    .article2__h2 {
    
        padding: 40px 0 10px 0px;
        margin: 0;
        font-family: 'Arial', 'sans-serif';
        font-weight: 900;
        font-size: 2rem;
        color: black;
    
    }

    .article3__h2 {
    
       padding: 40px 0 10px 0px;
        margin: 0;
        font-family: 'Arial', 'sans-serif';
        font-weight: 900;
        font-size: 2rem;
        color: black;
    
    }

    /*TITRES DES TRAVAUX*/

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

        width: 555px;
        height: 670px;
        margin: 0 0 15px 0;
    }

    .article1__cv {
    
        height: 100%;
        width: 89%;
        object-fit: contain;
        padding: 5px 5px 5px 0;
        border-radius: 25px;
    
    }

    .article2__figure1 {

        width: 555px;
        height: 670px;
        margin: 0 0 15px 0;
    
    }
    
    .article2__cdc  {
    
        height: 100%;
        width: 89%;
        object-fit: cover;
        border-radius: 25px;
    
    }

    .article3__figure1 {

    width: 555px;
    height: 670px;
    margin: 0 0 15px 0;
    
    }

    .article3__esp-com {
    
        height: 100%;
        width: 89%;
        object-fit: cover;
        border-radius: 25px;
    
    }

    .article1__figure2  {
    
        height: 150px;
        width: 100px;
        margin-left: 440px;
        margin-right: 240px;
        align-self: center;
    
    }

    .article2__figure2 {
    
        height: 150px;
        width: 100px;
        margin-left: 440px;
        margin-right: 240px;
        align-self: center;
    }

    .article3__figure2 {
    
        height: 150px;
        width: 100px;
        margin-left: 440px;
        margin-right: 240px;
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
    
    width: 495px;
    height: 40px;
    border: none;
    border-radius: 10px;
    font-family: 'Helvetica', 'sans-serif';
    font-weight: bold;
    color: black;
    background-color: #31fffbff;
    
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
    
    
    }

    .section2__p {
    
        width: 400px;
        height: 500px;
        align-self: center;
        font-family: 'Bohemian Soul', 'serif';
        font-size: 3.8rem;
        line-height: 1.84;
        position: relative;
        top: -28px;
    
    }

    form {
    
        width: 400px;
        height: 500px;
        display: flex;
        flex-direction: column;
        align-self: center;
        font-family: 'Helvetica', 'sans-serif';
        font-weight: bold;
        
    }

    #firstname {
    
        width: 305px;
        height: 25px;
        position: relative;
        left: 18px;
        border: none;
        border-radius: 8px;
        background-color: black;
        font-family: 'Helvetica', 'sans-serif';
        font-weight: bold;
        color: #31fffbff;
        text-align: center;
    
    }

    #lastname {
    
        width: 305px;
        height: 25px;
        position: relative;
        left: 42px;
        border: none;
        border-radius: 8px;
        background-color: black;
        font-family: 'Helvetica', 'sans-serif';
        font-weight: bold;
        color: #31fffbff;
        text-align: center;
    }

    #object {
    
        width: 305px;
        height: 25px;
        position: relative;
        left: 41px;
        border: none;
        border-radius: 8px;
        background-color: black;
        font-family: 'Helvetica', 'sans-serif';
        font-weight: bold;
        color: #31fffbff;
        text-align: center;
    
    }

    form div {
    
        margin-bottom: 20px;
    
    }

    textarea {
    
        height: 320px;
        margin-bottom: 10px;
        border: none;
        border-radius: 8px;
        background-color: black;
        font-family: 'Helvetica', 'sans-serif';
        font-weight: bold;
        color: #31fffbff;
        padding: 10px;
    
    }

    #submit-button {
    
        height: 40px;
        background: #31fffbff;
        border: none;
        border-radius: 10px;
        font-family: 'Helvetica', 'sans-serif';
        font-weight: bold;
        
    }

    #contact {
    
        position: absolute;
        top: 3380px;
        left: 1160px;
        font-family: 'Arial', 'sans-serif';
        font-weight: 900;
    
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
        border-radius: 10px;
        position: absolute;
        top: 25%;
        left: 39%;
        background: black;
        border: 1px solid #31fffbff;
        color: #31fffbff;
        padding: 5px 30px 0 10px;

    }

    .modal-cv h1 {
    
        font-family: 'Arial', 'sans-serif';
        padding-left: 20px;
    
    }

    .modal-cv ul {
    
        line-height: 2;
        font-family: 'Helvetica', 'sans-serif';
        font-weight: bold;
    
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
    background: black;
    border: 1px solid #31fffbff;
    color: #31fffbff;
    padding: 5px 30px 0 10px;

    }

    .modal-cdc h1 {
    
        font-family: 'Arial', 'sans-serif';
        padding-left: 20px;
    
    }

    .modal-cdc ul {
    
        line-height: 2;
        font-family: 'Helvetica', 'sans-serif';
        font-weight: bold;
    
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
    background: black;
    border: 1px solid #31fffbff;
    color: #31fffbff;
    padding: 5px 30px 0 10px;

    }

    .modal-esp-com h1 {
    
        font-family: 'Arial', 'sans-serif';
        padding-left: 20px;
    
    }

    .modal-esp-com ul {
    
        line-height: 2;
        font-family: 'Helvetica', 'sans-serif';
        font-weight: bold;
    
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
    
    height: 667px;
    width: 492px;
    position: absolute;
    top: -28%;
    left: -101%;
    opacity: 0;
    }

    .close-modal-cdc-1 {
    
    height: 675px;
    width: 500px;
    position: absolute;
    top: -29%;
    left: -101%;
    opacity: 0;

    }

    .close-modal-esp-com-1 {
    
    height: 675px;
    width: 500px;
    position: absolute;
    top: -29%;
    left: -101%;
    opacity: 0;

    }

</style>
