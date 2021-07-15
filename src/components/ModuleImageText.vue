<template>
    <section class="container">
        <div class="card-container">
            <Card v-for="(container, i) in cards" :key="i" :modifiers="['card--no-border', 'card--single', modifiers]">
                
                <div class="card__image">
                    <slider animation="fade" height="100%">
                        <slider-item>
                            <img :src="pictures[0].pic1">
                        </slider-item>
                        <slider-item>
                            <img :src="pictures[1].pic2">
                        </slider-item>
                        <slider-item>
                            <img :src="pictures[2].pic3">
                        </slider-item>
                        <slider-item>
                            <img :src="pictures[3].pic4">
                        </slider-item>
                        <slider-item>
                            <img :src="pictures[4].pic5">
                        </slider-item>
                        <slider-item>
                            <img :src="pictures[5].pic6">
                        </slider-item>
                        <slider-item>
                            <img :src="pictures[6].pic7">
                        </slider-item>
                    </slider>
                </div>

                <div class="card__content" :style="{ backgroundImage: `url(${require('~/../static/images/background-dots.svg')})` }">
                    <h3>{{ container.headline }}</h3>
                    <div v-html="container.text"></div>
                    <div class="button1">
                        <Button :src="container.button.url">{{ container.button.label }}</Button>
                    </div>
                </div>
            </Card>
        </div>
    </section>
</template>

<script>

import Button from '~/components/Button.vue'
import Card from '~/components/Card.vue'
import { Slider, SliderItem } from 'vue-easy-slider'


export default {
    name: "ModuleImageText",
    props: ['cards', 'modifiers', 'pictures'],
    components: {
        Button,
        Card,
        Slider,
        SliderItem
    },
    methods: {
        changeLocation(url) {
            window.location = url;
            window.location.reload(true)
        },
        hi() {
            console.log(this.pictures);
        }
    },
    data() {
        return {
            list: [
                { backgroundColor: '#3f51b5'},
                { backgroundColor: '#eee'},
                { backgroundColor: '#f44336'},
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    .card-container {
        width: 100%;
    }

    .button1 {
        margin-top: 200px;
    }

    img {
        width: 100%;
    }

</style>