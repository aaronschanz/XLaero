<template>
    <div class="carousel">
        <slot></slot>

        <button @click ="next" class="next"> > </button>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        next() {
            this.$emit('next')
        }
    } 
}
</script>

<style scoped>
    .carousel {
        margin-left: 10%;
        display: flex;
    }

    button {
        display: flex;
        align-items: center;
        width: 20%;
        width: 50px;
        font-size: 300%;
        background-color: rgb(168, 168, 168);
        opacity: 50%;
        border: none;
    }

    button:hover {
        cursor: pointer;
    }
</style>