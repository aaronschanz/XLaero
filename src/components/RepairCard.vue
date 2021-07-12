<template>
    <section class="container">
      <div class="card-container">
        <Card v-for="(card, i) in cards" :key="i" >
            <p class="pic" :style="{ backgroundImage: `url(${card.img.src})`}">
            <h5 id="headline">{{ card.headline }}</h5>
            <p id="name">{{ card.name }}</p>
            <p id="TCCA">{{ card.TCCA }}</p>
            <p id="numbers">{{ card.Numbers}}</p>
            <div id ="description" v-html="card.text"></div>
            <Button id="button" :src="card.button.url" >{{ card.button.label }}</Button> 
        </Card>
      </div>
    </section>
</template>

<script>

import Button from '~/components/Button.vue'
import Card from '~/components/Card.vue'

export default {
    name: "RepairCard",
    props: ['cards'],
    components: {
        Button,
        Card
    },
    data: {
        subject: ""
    }
}
</script>

<style lang="scss" scoped>
    .container {
        padding: var(--spacing-5);
        display: grid;
    }

    .card-container {
        display: grid;
    }

    .pic {
        grid-area: pic;
        background-size: cover;
        margin-left: -15%;
        width: 45%;
        height: auto;
        margin-top: -1%; margin-bottom: -1%;
    }

    #headline {
        grid-area: headline;
        margin-left: 40%;
        margin-top: 0%;
    }
    #name {
        grid-area: item;
        margin-left: 40%;
        margin-top: 5%;
    }
    #TCCA {
        grid-area: TCCA;
        margin-left: 40%;
        margin-top: 15%;
        font-size: 70%;
    }
    #numbers {
        grid-area: nums;
        margin-left: 70%;
        margin-top: 0%;
    }
    #description {
        grid-area: description;
        margin-left: 40%;
        margin-top: 8%;
    } 
    #button {
        grid-area: button;
        height: 20%;
        margin-top: 15%;
    }
</style>