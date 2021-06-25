<template>
    <section class="container">
      <div class="card-container">
        <Card v-for="(card, i) in cards" :key="i" >
            <img id="engpic" :src="card.img.src" :alt="card.img.caption">
            <img id="engpic2" :src="card.img2.src" :alt="card.img2.caption">
            <h5 id="headlineeng">{{ card.headline }}</h5>
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
    .card-container {
        display: grid;
        grid-template-areas: 
            "headertext pic1 pic2"
            "bodytext pic1 pic2"
    }

    #headlineeng {
        grid-area: headertext;
    }
    #description {
        grid-area: bodytext;
    }
    #engpic {
        grid-area: pic1;
    }
    #engpic2 {
        grid-area: pic2;
    }
</style>