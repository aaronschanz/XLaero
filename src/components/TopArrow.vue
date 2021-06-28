<template>
    <div>
        <button id="scroll-to-top" @click = handleClick();>Scroll To Top </button>
    </div>
</template>

<script>
const scrollBtn = document.getElementById("scroll-to-top");

function scrollFunction() {
    const scrollBtn = document.getElementById("scroll-to-top");
        if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
            scrollBtn.style.display = "block";
        } else {
            scrollBtn.style.display = "none";
        }
    }

window.onscroll = function() {scrollFunction()};

export default {
    name: 'TopArrow',
    methods: {
    handleClick() {
        document.documentElement.scrollTo({
            top: 700,
            behavior: "smooth"
        })
    }
    }
    
}
</script>

<style lang="scss" scoped>
    #scroll-to-top {
        background: radial-gradient(circle at bottom, var(--secondary-color-lighten-2) 0%, var(--secondary-color) 70%);
        font-weight: bold;
        font-family: var(--font-family);
        color: white;
        position: fixed;
        border-radius: 50%;
        bottom: 10px;
        right: 10px;
        width: 100px;
        height: 100px;
    }
    #scroll-to-top:hover {
        cursor: pointer;
    }
</style>