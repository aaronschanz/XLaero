<template>
    <section class="container">
        <div class="center-container">
            <h1>{{ content.headline }}</h1>
            <Button :src="content.button.url">{{ content.button.label }}</Button>
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
    .center-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: var(--spacing-10) var(--spacing-25);

        h1 {
            width: auto;
            max-width: 1000px;
            // margin-left: var(--spacing-25);
        }
    }
</style>