<template>
    <section class="container">
        <Container2c v-for="(container, i) in containers2c" :key="i">
                <img :src="container.img.src" :alt="container.img.caption">
                <h3>{{ container.headline }}</h3>
                <div v-html="container.text"></div>
                <Button :src="container.button.url">{{ container.button.label }}</Button>
        </Container2c>
    </section>
</template>

<script>
import Button from '~/components/Button.vue'
import Container2c from '~/components/Container2c.vue'

export default {
    name: "ModuleImageThinText",
    props: ['containers2c'],
    components: {
        Button,
        Container2c
    }
}
</script>

<style lang="scss" scoped>
    .container {
        padding: var(--spacing-25);
    }

    .container2c-container {
        width: 50%;
        margin-top: var(--spacing-25);
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(600px,1fr));
        grid-gap: var(--spacing-10); 
    }
</style>