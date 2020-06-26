<template>
    <section class="container">
      <h1>{{ headline }}</h1>
      <h6>{{ subheading }}</h6>
      <div class="card-container">
        <Card v-for="(card, i) in cards" :key="i">
            <h5>{{ card.headline }}</h5>
            <p>{{ card.text }}</p>
            <Button :src="card.button.url">{{ card.button.label }}</Button>
        </Card>
      </div>
    </section>
</template>

<script>
import Button from '~/components/Button.vue'
import Card from '~/components/Card.vue'

export default {
    name: "ModuleHeadline3Cards",
    props: ['headline', 'subheading', 'cards'],
    components: {
        Button,
        Card
    }
}
</script>

<style lang="scss" scoped>
    .container {
        padding: var(--spacing-25);
    }

    .card-container {
        width: 100%;
        margin-top: var(--spacing-25);
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(400px,1fr));
        grid-gap: var(--spacing-10); 
    }
</style>