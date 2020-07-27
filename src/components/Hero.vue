<template>
    <section class="hero">
        <div class="bg">
            <g-image 
                class="logo-rotate" 
                src="~/../static/images/xlaero-logo-flat.svg"
                :style="{ 
                    transform: `
                        scale(1.4) 
                        matrix3d(1,0,0.00,0.000,0.00,1.0,0.64,-0.001,0,-0.64,0.77,0,0,0,0,1) 
                        rotateX(32deg) 
                        rotateY(20deg) 
                        rotateZ(${rotateItem * 60}deg)
                    ` 
                }"
            />
            <g-image src="~/../static/images/hero-xlaero-logo.png" style="transform: translate(-870px, 10px) scale(0.7); display: none;"/>
        </div>
        <nav class="nav">
            <div v-for="(item, i) in navigation" :key="i" class="nav__item" :class="{'expand' : openItem}" @click="openItem">
                <div @mouseover="activeItem = i + 1; rotateItem = i + 1" @mouseleave="activeItem = null">
                    <g-link :to="item.url" class="nav__link">{{ item.label }}</g-link>
                </div>
            </div>
        </nav>
        <div class="columns">
            <div v-for="i in navigation.length" :key="i" class="column" :class="activeItem === i ? 'active' : ''" :ref="`column-${i}`"></div>
            <!-- :style="{ backgroundImage: `url(${require(`~/../static/images/hero-image-0${i}.jpg`)})` }" -->
        </div>
    </section>
</template>

<script>
export default {
    name: "Hero",
    data() {
        return {
            activeItem: null,
            openItem: false,
            rotateItem: 0,
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
    overflow: hidden;
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
    background: linear-gradient(90deg, var(--basic-color-lighten-6) 0%, var(--basic-color-lighten-5) 100%);
    background-size: cover;
    transition: calc(var(--duration) * 2) var(--timing);

    &.active {
        opacity: 0.2;
    }
}

.bg {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100vh;
    top: 0;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
}

.logo-rotate {
    position: relative;
    //animation: rotate 13s ease infinite alternate;
    bottom: -15%;
    left: -5%;
    transform-origin: center;
    transition: calc(var(--duration) * 4) var(--timing);
    opacity: 0.75;
}

// @keyframes rotate {
//     from { transform: scale(1) matrix3d(1,0,0.00,0.000,0.00,1.0,0.64,-0.001,0,-0.64,0.77,0,0,0,0,1) rotateX(32deg) rotateY(20deg) rotateZ(0deg) }
//     to { transform: scale(1) matrix3d(1,0,0.00,0.000,0.00,1.0,0.64,-0.001,0,-0.64,0.77,0,0,0,0,1) rotateX(32deg) rotateY(20deg) rotateZ(200deg) }
// }

.nav {
    position: absolute;
    top: 0;
    width: 100%;
    display: flex;
    height: 100vh;

    &__item {
        position: relative;
        z-index: 2;
        display: flex;
        align-items: flex-end;
        padding-top: var(--spacing-30);
        padding-bottom: var(--spacing-20);
        flex-grow: 1;
        flex-basis: 0;
        height: 100%;
    }

    &__link {
        display: block;
        z-index: 3;
        padding: var(--spacing-4) var(--spacing-6);
        width: calc(100% - var(--spacing-4));
        min-height: calc(2.875rem + 2rem);
        text-decoration: none;
        font-size: 1.2rem;

        background-color: var(--secondary-color);
        color: var(--primary-color-lighten-2);

        transition: var(--duration) var(--timing);

        &:hover {
            background-color: var(--primary-color-lighten-2);
            color: var(--secondary-color);
        }
    }
}
</style>