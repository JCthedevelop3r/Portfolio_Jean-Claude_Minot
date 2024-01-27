<script setup>

</script>

<template>

    <div class="modal-container">
        <div class="modal">
            <slot></slot>
        </div>
    </div>

</template>

<style scoped>

.modal-container {

    width: 1300px;
    height: 800px;
    position: absolute;
    top: 230%;
    border: 2px solid blue;

} 

.modal {

    width: 450px;
    height: 250px;
    border-radius: 5px;
    position: relative;
    top: 36%;
    left: 56%;
    background: white;
    border: 2px solid red;

}
</style>