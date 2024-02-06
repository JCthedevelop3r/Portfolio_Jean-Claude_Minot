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
    height: 720px;
    position: absolute;

} 

.modal {

    width: 695px;
    height: 420px;
    border-radius: 10px;
    position: relative;
    top: 23%;
    left: 50%;
    background: black;
    border: 1px solid #31fffbff;
    color: #31fffbff;
    overflow-y: scroll;
    
}
</style>