<template>
    <section class="container">
      <div class="card-container">
        <Card v-for="(card, i) in cards" :key="i">
            <img id="pic" :src="card.img.src" :alt="card.img.caption">
            <h5 id="headline">{{ card.headline }}</h5>
            <p id="name">{{ card.name }}</p>
            <p id="TCCA"{{ card.TCCA }}</p>
            <p id="numbers">{{ card.Numbers}}</p>
            <div id ="description" v-html="card.text"></div>
            <Button :src="card.button.url">{{ card.button.label }}</Button>
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
        padding: var(--spacing-20);
        margin-top: -var(--spacing-20);
    }

    .card-container {
        display: grid;
        grid-template-areas: 
            "pic headline "
            "pic name"
            "pic description"
            'pic TCCA'
    }

    #pic {
        grid-area: pic;
    }
    #headline {
        grid-area: headline;
    }
    #name {
        grid-area: name;
    }
    #TCCA {
        grid-area: TCCA;
    }
    #numbers {
        grid-area: nums;
    }
    #description {
        grid-area: description;
    } 
</style>