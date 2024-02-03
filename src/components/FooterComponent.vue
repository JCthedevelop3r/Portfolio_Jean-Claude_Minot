<script setup>
/*import { RouterLink, RouterView } from 'vue-router'*/

</script>

<template>
    <footer>
   <!--Penser à remplir le dernier href-->
    <section>
         <a href="https://github.com/" target="_blank:"><img src="../assets/images/signe-github.png" alt="logo de Github"/></a>
         <a href="https://twitter.com/JCthedevelop3r" target="_blank:"><img src="../assets/images/twitter.png" alt="logo de Twitter"/></a>
         <a href="" target="_blank:"><img src="../assets/images/linkedin.png" alt="logo de linkedin"/></a>
    </section>
    <small><time datetime="" >Dernière mise à jour du site le xx xxxxxx xxxx</time></small>
 </footer>
</template>

<style scoped>

footer {

display: flex;
justify-content: space-between;


}

img {

width: 50px

}

small {

align-self: end

}

</style>
