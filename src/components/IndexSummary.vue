<!-- ADD CONTACT US BUTTON -->


<template>
    <section class="container">
        <div class="center-container" :style="{ backgroundImage: `url(${require('~/../static/images/background-circle.svg')})`}">
            <g-image class="logo" src="~/../static/images/xlaero-logo-green.svg" alt="XLaero aerospace engineering" />
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
        position: relative;
        background-repeat: no-repeat;
        background-color: var(--secondary-color);
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: -200px;
        margin-left: -100px;
        margin-right: -100px;
        margin-bottom: -100px;
        h1 {
            position: sticky; 
            color: white;
            font-weight: bold;
            height: 1000px;
            left: 100px;
            right: 0px;
            top: 800px;
            bottom: 00px;
        }
    }
    .logo {
        display: block;
        width: 180px;
        margin-left: 60px;
        margin-bottom: 880px;
    }
</style>