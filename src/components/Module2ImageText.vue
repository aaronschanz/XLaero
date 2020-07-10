<template>
    <section class="container">
        <div class="card-container">
            <Card v-for="(container, i) in cards" :key="i" :modifiers="['card--no-border', 'card--full-size']">
                    <img :src="container.img.src" :alt="container.img.caption">
                    <div class="card__content">
                        <h3>{{ container.headline }}</h3>
                        <div v-html="container.text"></div>
                        <Button :src="container.button.url">{{ container.button.label }}</Button>
                    </div>
            </Card>
        </div>
    </section>
</template>

<script>
import Button from '~/components/Button.vue'
import Card from '~/components/Card.vue'

export default {
    name: "Module2ImageText",
    props: ['cards', 'modifiers'],
    components: {
        Button,
        Card
    }
}
</script>

<style lang="scss" scoped>
    .card-container {
        width: 100%;
        height: 100vh;
        display: flex;
    }
</style>