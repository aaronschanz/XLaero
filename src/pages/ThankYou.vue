<template>
    <div>
        <section class="container" :style="{ backgroundImage: `url(${require('~/../static/images/background-heli.svg')})`}">
            <img src="http://xlaero.ca/new/images/xlaero-logo-green.svg">
            <h1 id="landing">Thank You!</h1>
            <p>Your email has been received and we will be in contact shortly.</p>
            <img src="http://xlaero.ca/new/images/xlaero-logo-green.svg">
            <Button id="thankyouhome" src="/">Home</Button>
        </section>
    </div>
</template>

<script>

import Button from '~/components/Button.vue'

export default {
    name: "ThankYou",
    components: {
        Button
    }
}
</script>

<style scoped>
    .container {
        text-align: center;
    }
    h1 {
        font-size: 200%;
    }

    p {
        font-size: 120%;
    }
    img {
        width: 30%;
        padding-top: 2%;
    }

    #thankyouhome {
        background: radial-gradient(circle at bottom, var(--secondary-color-lighten-2) 0%, var(--secondary-color) 70%);
        font-weight: bold;
        font-family: var(--font-family);
        color: white;
        position: fixed;
        bottom: 10px;
        right: 10px;
        width: 100px;
        height: 50px;
    }

</style>

