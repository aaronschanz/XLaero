<template>
    <section class="container">
        <div v-for="(content, i) in content" :key="i" class="card-container">
            <h1>{{ content.headline }}</h1>
            <div class="contact-form">
                <form>
                    <input type="text" placeholder="First Name">
                    <input type="text" placeholder="Last Name">
                    <input type="email" placeholder="Email-Address">
                    <textarea placeholder="Message"></textarea>
                    <Button :src="content.button.url">{{ content.button.label }}</Button>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
import Button from '~/components/Button.vue'

export default {
    name: "ModuleHeadlineForm",
    props: ['content'],
    components: {
        Button
    }
}
</script>

<style lang="scss" scoped>
    .contact-form {
        display: flex;
        border: var(--border-width) solid var(--secondary-color);
    }
</style>