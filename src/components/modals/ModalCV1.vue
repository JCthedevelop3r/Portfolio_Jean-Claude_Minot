<script setup>

</script>

<template>

    <div class="modal-container">
        <div class="modal">
            <button class="close-modal modal-trigger">X</button>
            <h1>Voici du contenu</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eros nisl, fringilla ut neque id, pharetra semper urna. 
            </p>
        </div>
    </div>

</template>

<style scoped>

.modal-container {

    position: absolute;
    height: 900px;
    width: 1300px;
    border: 2px solid blue;

}

.modal {

    width: 95%;
    max-width: 500px;
    min-width: 300px;
    padding: 30px;
    background: #fff;
    border: 2px solid red;
    border-radius: 5px;
    position: absolute;
    top: 38%;
    left: 52%;

}



</style>