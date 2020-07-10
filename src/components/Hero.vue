<template>
    <section class="hero">
        <div class="columns">
            <div v-for="i in 4" :key="i" class="column"></div>
        </div>
        <div class="bg">
            <g-image src="~/assets/images/hero-xlaero-logo.png"/>
        </div>
        <nav class="nav">
            <div v-for="(item, i) in navigation" :key="i" class="nav__item">
                <g-link :to="item.url" class="nav__link">{{ item.label }}</g-link>
            </div>
        </nav>
    </section>
</template>

<script>
export default {
    name: "Hero",
    data() {
        return {
            navigation: [
                {
                    url: "/engineering-and-certificate-capabilities",
                    label: "Engineering & Certificate Capabilities"
                },
                {
                    url: "/repair-capabilities",
                    label: "Repair Capabilities"
                },
                {
                    url: "/cost-reduction",
                    label: "Cost Reduction"
                },
                {
                    url: "/tool-and-test-equipement",
                    label: "Tool & Test Equipment"
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.hero {
    position: relative;
    width: 100%;
    min-height: 100vh; 
}

.columns {
    display: flex;
    height: 100vh;
    background-position: bottom left;
}

.column {
    flex-grow: 1;
    flex-basis: 0;
    height: 100%;
    background: linear-gradient(90deg, var(--basic-color-lighten-6) 0%, var(--white-color) 100%);
}

.bg {
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 0;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;

    > img {
        transform: scale(0.8);
        transform-origin: left bottom;
    }
}

.nav {
    position: absolute;
    top: 0;
    width: 100%;
    display: flex;
    height: 100vh;

    &__item {
        display: flex;
        align-items: flex-end;
        padding-top: var(--spacing-30);
        padding-bottom: var(--spacing-20);
        flex-grow: 1;
        flex-basis: 0;
        height: 100%;
        transition: var(--duration) var(--timing);

        // &:hover {
        //     background: var(--basic-color-lighten-5);
        // }
    }

    &__link {
        display: block;
        background-color: var(--primary-color-lighten-2);
        padding: var(--spacing-4) var(--spacing-6);
        color: var(--secondary-color);
        width: calc(100% - var(--spacing-4));
        min-height: calc(2.875rem + 2rem);
        text-decoration: none;
        font-size: 1.2rem;
    }
}
</style>