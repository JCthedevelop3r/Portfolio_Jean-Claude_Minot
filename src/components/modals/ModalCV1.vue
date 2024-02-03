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

    width: 1400px;
    height: 800px;
    position: absolute;

} 

.modal {

    width: 695px;
    height: 420px;
    border-radius: 5px;
    position: relative;
    top: 20%;
    left: 50%;
    background: white;
    border: 2px solid red;

}
</style>