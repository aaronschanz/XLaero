<template>
    <section class="container">
        <div class="center-container" :style="{ backgroundImage: `url(${require('~/../static/images/indexbackground.png')})`}">
            <h1>{{ content.headline }}</h1>
        </div>
    </section>
</template>

<script>
export default {
    name: "ModuleHeadlineForm",
    props: ['content'],
}
</script>

<style lang="scss" scoped>
    .center-container {
        
        width: 1400px;
        height: 1000px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        display: flex;

        h1 {
            align-items: center;
            text-align: center;
            line-height: 2000%; 
            color: white;
            text-shadow: 2px 2px black;
            font-weight: bold;
            // width: auto;
            // max-width: 600px;
            // margin-left: var(--spacing-25);
        }
        img {        
            margin-top: 0px; 
        }
    }
</style>