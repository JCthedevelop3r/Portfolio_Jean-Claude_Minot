<script setup>


</script>

<template>
    <main>
        <!-- courte présentation -->
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eros nisl, fringilla ut neque id, pharetra semper urna. 
            Proin consectetur, tortor at faucibus convallis, lorem nulla iaculis turpis, eget interdum est felis quis libero. 
            Proin blandit fermentum est eu condimentum.
        </p>
        <section class="main__section1">
            <article class="section__article1">
                <h2 class="article1__h2">Mon CV</h2>
                <div>
                    <figure class="article1__figure1">
                        <img src="../assets/images/Screen_Devoir_CV.png" alt="Curriculum vitae d'un développeur web junior" class="article1__cv"/>
                    </figure>
                    <figure class="article1__figure2">
                        <img src="../assets/images/Pdp_moi.jpg" alt="Jeune homme brun au teint mate" class="article1__logo"/>
                    </figure>
                </div>
                <button>En savoir plus</button>
            </article>

            <article class="section__article2">
                <h2 class="article2__h2">Cahier des charges "La Socketterie"</h2>
                <div>
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
                <div>
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

        <section class="main__section2">

            <!--texte de remerciements-->
            <p class="section2__p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eros nisl, fringilla ut neque id, pharetra semper urna. 
                Proin consectetur, tortor at faucibus convallis, lorem nulla iaculis turpis, eget interdum est felis quis libero. 
                Proin blandit fermentum est eu condimentum.
            </p>

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

    div {
    
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
    height: 850px; 
    
    }

    .section2__p {
    
        width: 656.5px;
    
    }

    form {
    
        width: 656.5px;
    
    }
</style>
