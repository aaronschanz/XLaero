<!-- ADD CONTACT US BUTTON -->

<template>
    <section class="container">
        <div class="center-container" :style="{ backgroundImage: `url(${require('~/../static/images/background-circle.svg')})`}">
            <g-image class="logo" src="~/../static/images/xlaero-logo-green.svg" alt="XLaero aerospace engineering" />
            <!-- <h1>{{ content.headline }}</h1> -->
        </div>
        <div class ="summaries">
            <h3 id="capabilites">{{ content.text }}</h3>
            <h3 id="research">{{ content.text1 }}</h3>
            <h3 id="products">{{ content.text2 }}</h3>
            <h3 id="training">{{ content.text3 }}</h3>
        </div>
        <div class="buttoncontainer">
            <Button>Get in Touch</Button> <!-- Add src to contact us section -->
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
        margin-bottom: -120px;
        margin-top: -400px;
        #capabilites {
            position: relative;
            top: -350px;
            color: white;
            text-align: left;
            //TODO
        }
        #research {
            position: relative;
            color: white;
            top: -420px;
            text-align: right;
            //TODO    
        }
        #products {
            position: relative;
            color: white;
            top: -180px;
            text-align: left;
            //TODO
        }
        #training {
            position: relative;
            color: white;
            top: -250px;
            text-align: right;
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
    .buttoncontainer {
        //margin-top: -100px;
        width: max-content;
        color: white;
        position: relative;
        top: 100px;
        margin-bottom: -50px;
    }
</style>