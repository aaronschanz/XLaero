<template>
    <section class="container">
        <div class="card-container">
            <Card v-for="(container, i) in cards" :key="i" :modifiers="['card--no-border', 'card--single', modifiers]">
                <div class="card__image">
                    <img :src="container.img.src" :alt="container.img.caption">
                </div>
                <div class="card__content" :style="{ backgroundImage: `url(${require('~/../static/images/background-dots.svg')})` }">
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
    name: "ModuleImageText",
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
    }
</style>