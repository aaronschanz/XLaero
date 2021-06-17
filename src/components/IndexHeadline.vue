<template>
    <section class="container">
        <div class="center-container" :style="{ backgroundImage: `url(${require('~/../static/images/indexbackground.png')})`}">
            <h1><pre><span class="h1" style="font-family: var(--font-family)">{{ content.headline }}</span></pre></h1>
        </div>
        <div class="buttoncontainer">
            <Button src="about-us#info">Learn More</Button> 
        </div>
    </section>
</template>

<script>

import Button from '~/components/Button.vue'

export default {
    name: "ModuleHeadlineForm",
    props: ['content'],
    components: {
        Button
    }
}
</script>

<style lang="scss" scoped>
    .center-container {
        margin-top: -100px;
        margin-left: -100px;
        margin-right: -100px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        display: flex;
        float: center;
        h1 {
            position: relative; 
            color: white;
            font-weight: bold;
            height: 1100px;
            left: 100px;
            right: 0px;
            top: 800px;
        }
    }
    .buttoncontainer {
        margin-top: -80px;
        width: max-content;
        color: white;
        position: relative;
        top: -80px;
    }
</style>