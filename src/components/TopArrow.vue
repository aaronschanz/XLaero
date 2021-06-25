<template>
    <div>
        <button class="scroll-to-top" @click = scrollTop();>Scroll to Top</button>
    </div>
</template>

<script>
// MAKE IT SO BUTTON ONLY APPEARS WHEN  YOU GO UNDER 700
export default {
    name: 'TopArrow',
    methods: {
        scrollTop() {
            const scrollBtn = document.querySelector(".scroll-to-top");
            document.documentElement.scrollTop = 700;
        }
    }
}
</script>

<style lang="scss" scoped>
    .scroll-to-top {
        position: fixed;
        bottom: 20px;
        right: 20px;
        border-radius: 50%;
        width: 100px;
        height: 100px;
    }
</style>