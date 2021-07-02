<template>
    <section class="container">
      <div class="card-container">
        <Card v-for="(card, i) in cards" :key="i" >
            <div class="engpictures">
                <img id="engpic" :src="card.img.src" :alt="card.img.caption">
                <h5 id="headlineeng">{{ card.headline }}</h5>
                <div id ="descriptioneng" v-html="card.text"></div>
            </div>
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
    }
    
    .card-container {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(unquote("min(600px, 100%)"),1fr));
        grid-gap: var(--spacing-10); 
    }

    #engpic {
        width: 45%;
        height: 100%;
        float: right;
        padding: 2% 1% 0% 1%;
    }

</style>