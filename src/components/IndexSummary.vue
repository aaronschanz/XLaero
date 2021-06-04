<!-- ADD CONTACT US BUTTON -->

<template>
    <section class="container">
        <div class="center-container" :style="{ backgroundImage: `url(${require('~/../static/images/background-circle.svg')})`}">
            <g-image class="logo" src="~/../static/images/xlaero-logo-green.svg" alt="XLaero aerospace engineering" />
            <h1>{{ content.headline }}</h1>
        </div>
        <div class ="summaries">
            <h3 id="capabilites">{{ content.text }}</h3>
            <h3 id="research">{{ content.text1 }}</h3>
            <h3 id="products">{{ content.text2 }}</h3>
            <h3 id="training">{{ content.text3 }}</h3>
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
        margin-bottom: -300px;
        h1 {
            position: absolute;
            color: var(--primary-color);
            left: 60px;
            top: 140px;
            font-weight: normal;
            font-size: 3rem;
        }
    }
    .summaries {
        #capabilites {
            position: absolute;
            color: white;
            //TODO
        }
        #research {
            position: absolute;
            color: white;
            //TODO    
        }
        #products {
            position: absolute;
            color: white;
            //TODO
        }
        #training {
            position: absolute;
            color: white;
            //TODO
        }
    }
    .logo {
        display: flex;
        width: 180px;
        height: 200px;
        margin-left: 60px;
        margin-bottom: 780px;
    }
</style>