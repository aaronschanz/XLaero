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
            height: 1000px;
            left: 100px;
            right: 0px;
            top: 800px;
        }
    }
</style>