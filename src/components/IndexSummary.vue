<!-- ADD CONTACT US BUTTON -->

<template>
    <section class="container">
        <div class="center-container" :style="{ backgroundImage: `url(${require('~/../static/images/background-circle.svg')})`}">
            <g-image class="logo" src="~/../static/images/xlaero-logo-green.svg" alt="XLaero aerospace engineering" />
            <!-- <h1>{{ content.headline }}</h1> -->
        </div>
        <div class ="summaries">
            <div id ="engineering">
                <h3>{{ content.header1 }}</h3>
                <p><pre><span id="body1" style="font-family: var(--font-family)">{{ content.body1 }}</span></pre></p>
            </div>
            <div id="repair">
                <h3>{{ content.header2 }}</h3>
                <p><pre><span id="body2" style="font-family: var(--font-family)">{{ content.body2 }}</span></pre></p>
            </div>
            <div id="manufacturing">
                <h3>{{ content.header3 }}</h3>
                <p><pre><span id="body3" style="font-family: var(--font-family)">{{ content.body3 }}</span></pre></p>
            </div>
            <div id="tool">
                <h3>{{ content.header4 }}</h3>
                <p><pre><span id="body4" style="font-family: var(--font-family)">{{ content.body4 }}</span></pre></p>
            </div>
        </div>
        <div class="buttoncontainer">
            <Button>Get in Touch</Button> <!-- Add src to contact us section -->
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
        position: relative;
        background-repeat: no-repeat;
        background-color: var(--secondary-color);
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: -200px;
        margin-left: -100px;
        margin-right: -100px;
        margin-bottom: -300px;
        h1 {
            position: absolute;
            color: var(--primary-color);
            left: 60px;
            top: 140px;
            font-weight: normal;
            font-size: 3rem;
        }
    }
    .summaries {
        display: grid;
        position: relative;
        grid-template-areas:
        "item1 item1 item1 item1   item2 item2 "
        "item1 item1 item1 item1   item2 item2"
        "item1 item1 item1 item1   item2 item2"
        "item3 item3 item3 item3   item4 item4 "
        "item3 item3 item3 item3   item4 item4 ";
        margin-bottom: 00px;
        margin-top: -800px;
        
        #engineering {
            grid-area: item1;
            //background-color: red;
            display: grid;
            h3 {
                color: white;
            }   
            p {
                display: grid;
                color: white;
            }  
        }
        #repair {
            grid-area: item2;
            //background-color: blue;
            display: grid;
            h3 {
                color: white;
            }   
            p {
                display: grid;
                color: white;
            }
        }
        #manufacturing {
            grid-area: item3;
            //background-color: yellow;
            display: grid;
            h3 {
                color: white;
            }   
            p {
                display: grid;
                color: white;
            }
        }
        #tool {
            grid-area: item4;
            //background-color: green;
            display: grid;
            h3 {
                color: white;
            }   
            p {
                display: grid;
                color: white;
            }
        }
    }
    .logo {
        display: flex;
        width: 180px;
        height: 200px;
        margin-left: 60px;
        margin-bottom: 780px;
    }
    .buttoncontainer {
        width: max-content;
        color: white;
        position: relative;
        top: 100px;
        margin-bottom: -50px;
    }
</style>