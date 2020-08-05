<template>
    <section class="hero">
        <div class="hero__body">
            <Header />
            <div class="hero__content">
                <div class="hero-headline">
                    <h1>XLaero - Rotating exellence</h1>
                    <p>Beginnen Sie noch heute damit, Ihre Vision mit der Echtzeit-3D-Entwicklungsplattform Unity zum Leben zu erwecken.</p>
                </div>
                <nav class="nav" :class="activeItem != null ? 'active' : ''">
                    <div class="nav__item" v-for="(navItem, i) in navigation" :class="activeItem === i ? 'active' : ''" :style="activeItem === i ? { transform: `translateX(-${i * 60}%)` } : null" :key="i" @click="activeItem = i" @mouseover="rotateItem = i">
                        <g-link :to="navItem.url" class="nav__link">
                            <h5 class="nav__heading">{{ navItem.label }}</h5>
                            <p>We will get your Repair Development & Certificates as well as Reverse Engineering & PMAs over the finish line. No Aircraft Modification is to complex for us.</p>
                            <Button>More Info</Button>
                        </g-link>
                    </div>
                </nav>
            </div>
        </div>
        <div class="bg">
            <g-image 
                class="logo-rotate" 
                src="~/../static/images/xlaero-logo-flat.svg"
                :style="{ 
                    transform: `
                        matrix3d(1,0,0.00,0.000,0.00,1.0,0.64,-0.001,0,-0.64,0.77,0,0,0,0,1) 
                        rotateX(32deg) 
                        rotateY(20deg) 
                        rotateZ(${rotateItem * 60}deg)
                    ` 
                }"
            />
        </div>
    </section>
</template>

<script>
import Header from '~/components/Header.vue'
import Button from '~/components/Button.vue'

export default {
    name: "Hero",
    components: {
        Header,
        Button
    },
    mounted() {
        this.$root.$on('openMenu', data => {
            this.activeItem = null;
        });
    },
    data() {
        return {
            activeItem: null,
            openItem: null,
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
                    url: "/tool-and-test-equipment",
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
    overflow: hidden;
    background: radial-gradient(circle at bottom, var(--secondary-color-lighten-2) 0%, var(--secondary-color) 70%);

    &__body {
        position: relative;
        z-index: 1;
        min-height: 100vh;
        padding: var(--spacing-15);
        display: flex;
        justify-content: space-between;
        flex-direction: column;
    }

    &__content {
        flex-grow: 1;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
    }
}

.hero-headline {
    width: 50%;
    
    p {
        color: var(--white-color);
    }
}

.bg {
    position: absolute;
    z-index: 0;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
}

.logo-rotate {
    width: 56vw;
    position: absolute;
    //animation: rotate 13s ease infinite alternate;
    bottom: -15%;
    right: 0%;
    transform-origin: center;
    transition: calc(var(--duration) * 4) var(--timing);
    opacity: 0.75;
}

// @keyframes rotate {
//     from { transform: scale(1) matrix3d(1,0,0.00,0.000,0.00,1.0,0.64,-0.001,0,-0.64,0.77,0,0,0,0,1) rotateX(32deg) rotateY(20deg) rotateZ(0deg) }
//     to { transform: scale(1) matrix3d(1,0,0.00,0.000,0.00,1.0,0.64,-0.001,0,-0.64,0.77,0,0,0,0,1) rotateX(32deg) rotateY(20deg) rotateZ(200deg) }
// }

.nav {
    min-height: 320px;
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    transition: var(--duration) var(--timing);

    &.active {
        .nav__item {
            opacity: 0;

            &.active {
                opacity: 1;
                flex-grow: 2;

                p, .button {
                    height: auto;
                }
            }
        }
    }
    
    &__item {
        transition: var(--duration) var(--timing);
        padding-right: var(--spacing-5);
        flex: 1;

        p, .button {
            opacity: 0;
            height: 0;
            transition: var(--duration) var(--timing);
        }

        &.active {
            
            .nav__link {
                background-color: var(--basic-color-lighten-7);
            }

            p, .button {
                opacity: 1;
            }
        }
    }

    &__link {
        position: relative;
        display: block;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.2);
        padding: var(--spacing-10);
        color: var(--secondary-color);
        text-decoration: none;
    }

    &__heading {
        margin: 0;
    }

}
</style>