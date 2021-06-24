<template>
    <section class="container">
      <div class="card-container">
        <Card v-for="(card, i) in cards" :key="i" >
            <img id="pic" :src="card.img.src" :alt="card.img.caption">
            <h5 id="headline">{{ card.headline }}</h5>
            <p id="name">{{ card.name }}</p>
            <p id="TCCA">{{ card.TCCA }}</p>
            <p id="numbers">{{ card.Numbers}}</p>
            <div id ="description" v-html="card.text"></div>
            <Button id ="button" :src="card.button.url">{{ card.button.label }}</Button> 
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
    }
}
</script>

<style lang="scss" scoped>
    .container {
        padding: var(--spacing-10);
        margin-top: -var(--spacing-20);
        display: grid;
        //grid-template-columns: 33% 33% 33%;
        //grid-template-rows: 25% 25% 25% 25%;
        //grid-template-areas:
        //    "pic headline ."
        //    "pic name ."
        //    "pic description numbers"
        //    "pic TCCA button"
        
    }

    .card-container {
        display: grid;
    }

    #pic {
        grid-area: pic;
        width: 30%;
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
        margin-top: 20%;
        font-size: 70%;
    }
    #numbers {
        grid-area: nums;
        margin-left: 70%;
        margin-top: 5%;
    }
    #description {
        grid-area: description;
        margin-left: 40%;
        margin-top: 12%;
    } 
    #button {
        grid-area: button;
        height: 15%;
        margin-top: 25%;
    }
</style>