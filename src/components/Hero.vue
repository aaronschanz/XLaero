<template>
    <section class="hero" :class="activeItem != null ? 'active' : ''">
        <div class="hero__body">
            <Header />
            <div class="hero__content">
                <div class="hero-headline">
                    <h1>Engineering that fits</h1>
                    <p>20 years of bottom line improvement expertise gained from designing, certifying, supporting, and maintaining aircraft engines!</p>
                </div>
                <nav class="nav">
                    <div class="nav__item" v-for="(navItem, i) in navigation" :class="activeItem === i ? 'active' : ''" :style="activeItem === i ? { transform: `translateY(0%)` } : null" :key="i" @click="activeItem = i; changeText(i); changeLocation(navItem.url);" @mouseover="rotateItem = i">
                        <g-link :to="navItem.url" class="nav__link">
                            <h5 class="nav__heading">{{ navItem.label }}</h5>
                            <span id="boxtext">{{ navItem.subheading }}</span>
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
        <div class="intro">
            <div class="intro__inner">
                <h2 class="intro__headline">{{ introHeadline }}</h2>
                <p>{{ introText }}</p>
            </div>
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
        this.$root.$on('openHome', data => {
            this.activeItem = null;
        });
    },
    methods: {
        changeText(i) {
            console.log(`Change text of ${i}`);
            this.introHeadline = this.navigation[i].label;
            this.introText = this.navigation[i].subheading;
        },
        changeLocation(url) {
            window.location = url;
        }
    },
    data() {
        return {
            activeItem: null,
            openItem: null,
            rotateItem: 0,
            introHeadline: "",
            introText: "",
            navigation: [
                {
                    url: "/engineering-services#eng",
                    label: "Engineering Services",
                    subheading: "We develop your RDAs and STCs and offer full Legacy Aircraft Support. <br>Lucas ipsum dolor sit amet drall fey'lya nute klivian bren er'kit x1 mayagil antonio solo. Bib geonosis marek til whiphid. Sulorine jan mimbanite vima-da-boda whitesun."
                },
                {
                    url: "/repair-capabilities#repa",
                    label: "Repair Capabilities",
                    subheading: "These are various repairs we have developed into capabilities and executed. If you can’t find the repair you are looking for, contact us and we will discern with you the best way moving forward to develop and certify a repair you desire."
                },
                {
                    url: "/spare-part-support#part",
                    label: "Spare Part Support",
                    subheading: "sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                },
                {
                    url: "/tool-and-test-equipment#tool",
                    label: "Tool & Test Equipment",
                    subheading: "TEST TEST ETESTESTES SET SET SET "
                },
                {
                    url: "/manufacturing-capabilites#manu",
                    label: "Manufacturing Capabilities",
                    subheading: "TEST TEST STE STE EST EST SE TSET "
                },
            ],
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
    
    #boxtext {
        display: none;
    }

    .nav__item:hover {
        transition-duration: 0.2s;
        background-color: rgba(255, 255, 255, 0.096);
        opacity: 0.2;
        background-clip: content-box;
        filter: Alpha(opacity=50);
        margin-bottom: 10px;
        margin-top: -10px;
        object-fit: none;
        background-image: url(http://xlaero.ca/new/images/background-dots.svg);
        background-size: 120%;
        #boxtext {
            display: none; //CHANGE THIS IF YOU WANT TEXT TO APPEAR ON HOVER
            color: white;
            font-size: 90%;
        }
    }

   // &.active {

      //  .nav__item {
      //      position: absolute;
     //       opacity: 0;
            //transform: translateY(20%);

      //      &.active {
                //opacity: 1;
                //flex-grow: 2;
            
     //           .nav__link {    
      //              background-color: var(--basic-color-lighten-7);

     //               h5 {
   //                     color: var(--secondary-color);
     //               }
    //            }
    //        }
     //   }

     //   .intro__inner {
    //        transform: translateY(calc((320px + var(--spacing-15) * 0) * -1));
   //     }
    //}

    &__body {
        position: relative;
        z-index: 1;
        min-height: 100vh;
        padding: var(--spacing-15);
        display: flex;
        justify-content: space-between;
        flex-direction: column;

        transition: var(--duration) var(--timing);
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
    // animation: rotate 13s ease infinite alternate;
    bottom: -15%;
    right: 0%;
    transform-origin: center;
    transition: calc(var(--duration) * 4) var(--timing);
    opacity: 0.75;
}

.intro {
    position: absolute;
    width: 100%;
    background-color: var(--white-color);
    height: calc(50vh - 320px / 2 - var(--spacing-15) * 0);

    &__inner {
        position: relative;
        width: 60vw;
        height: 50vh;
        margin: 0 auto;
        padding: var(--spacing-15) var(--spacing-20);
        background-color: var(--basic-color-lighten-7);
        box-shadow: 0px var(--spacing-2) var(--spacing-20) calc(var(--spacing-6) * -1) var(--basic-color-lighten-3);

        transition: calc(var(--duration)) var(--timing);

        &__after {
            position: sticky; 
            bottom: 0;
            width: 100%; 
            height: 10px; 
            background: linear-gradient(transparent, hsl(158, 4%, 98%));
        }
    }

    // transform: translateY(100%);

    &__headline {
        margin-top: 0;
    }
}

.nav {
    min-height: 320px;
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    transition: var(--duration) var(--timing);
    
    &__item {
        transition: var(--duration) var(--timing);
        padding-right: var(--spacing-5);
        flex: 1;
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
        margin: 0px;
        color: var(--white-color);
    }

}

</style>