<template>
    <section class="container">
        <div class="center-container" :style="{ backgroundImage: `url(${require('~/../static/images/background-heli.svg')})`}">
            <h1>{{ content.headline }}</h1>
            <g-image :src="content.img.src" :alt="content.img.caption"/>
        </div>
    </section>
</template>

<script>
export default {
    name: "ModuleHeadlineForm",
    props: ['content'],
}
</script>

<style lang="scss" scoped>
    .center-container {
        background-position: top left;
        background-repeat: no-repeat;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: var(--spacing-10) var(--spacing-25);

        h1 {
            width: auto;
            max-width: 600px;
            margin-left: var(--spacing-25);
        }
        img {        
            padding: var(--spacing-10) var(--spacing-10);
            object-fit: cover;
            display: block;
            width: 50%;
            height: calc(32vw - var(--spacing-10) * 3);
            min-height: 400px
        }
    }
</style>