<template>
    <div>
        <section class="container" :style="{ backgroundImage: `url(${require('~/../static/images/background-heli.svg')})`}">
            <h1 id="landing">Thank You!</h1>
            <p>Your email has been received and we will be in contact shortly.</p>
            <img src="http://xlaero.ca/new/images/xlaero-logo-green.svg">
            <TopArrow/>
        </section>
    </div>
</template>

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
    }

</style>

