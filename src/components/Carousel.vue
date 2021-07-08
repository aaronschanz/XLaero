<template>
    <div class="carousel">
        <slot></slot>

        <button class="next">Next</button>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    } 
}
</script>

<style scoped>
    .carousel {
        position: relative;
        width: 50%;
        height: 40%;
        float: right;
        overflow: hidden;
        margin-right: 5%;
    }
    button {
        height: 40px;
        width: 50px;
        top: calc(50%-20px);
        position: relative;
    }
</style>