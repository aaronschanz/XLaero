<template>
  <div> 
    <section class="container" :style="{ backgroundImage: `url(${require('~/../static/images/background-heli.svg')})`}">
      <div class="topeng">
        <ModuleHeadlineImage id="introeng"
          :content="header.content"
        />
        <ModuleImageText 
          :modifiers="repair.modifiers"
          :cards="repair.content"
        />
        <ModuleImageText 
          :modifiers="reverse.modifiers"
          :cards="reverse.content"
        />    
      </div>
      <div class="middleeng">
        <h1><a id="h1eng">Modifications (STCs) and Replacement Parts (PDA/PMA)</a></h1>
        <stcCard 
          :cards="stcCard1.cardsContent"
        />
      </div>
    </section>
  </div>
</template>

<script>

import Button from '~/components/Button.vue'
import Card from '~/components/Card.vue'
import ModuleImageText from '~/components/ModuleImageText.vue'
import ModuleHeadlineForm from '~/components/ModuleHeadlineForm.vue'
import ModuleHeadlineImage from '~/components/ModuleHeadlineImage.vue'
import stcCard from '~/components/stcCard.vue'

export default {
  metaInfo: {
    title: 'XLaero Engineering & Certificate Capabilities'
  },
  components: {
    Button,
    Card,
    ModuleImageText,
    ModuleHeadlineForm,
    ModuleHeadlineImage,
    stcCard
  },
  data() {
    return {
      stcCard1: {
        cardsContent: [
          {
            headline: "XL Aero’s Micro CHP Unit (Perhaps other project)",
            img: {
              src: "http://xlaero.ca/new/images/CHP.JPG",
              caption: "S61 Housing, Accessory Gearbox"
            },
            img2: {
              src: "http://xlaero.ca/new/images/CHP2.jpg",
              caption: "S61 Housing, Accessory Gearbox"
            },
            text: "<p>The North  American market lacks an off-the-shelf  (OTS)  micro-CHP system  that is  easily integrated  into  a home and  intelligently controls energy management. XL  Aero  is developing a micro-CHP system with  smart  controller  management. The  micro-CHP  system is  aimed  to be based on an in-house designed microturbine as the prime mover. The benefits of this microturbine system include fuel flexibility, reduced noise, and cleaner emissions.</p>",
            button: {
              label: "Request a Quote",
              url: "../contact#info"
            } 
          },
        ],
      },
      repair: {
        modifiers:  "card--thin-image",
        content: [
          {
            img: {
              src: "https://images.unsplash.com/photo-1541510549862-50ded4acbde8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80",
              caption: "test caption"
            },
            headline: "Repair Development & Certificates",
            text: "<p>Paragraph to be drafted by Tim regarding the engineering services we offer in regards to Repairs. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, su culpa qui officia deserunt mollit anim id est laborum.</p>",
            button: {
              url: "/repair-capabilities#introrepair",
              label: "Repair Capabilities"
            }
          },
        ]
      },
      reverse: {
        modifiers:  "card--image-right",
        content: [
          {
            img: {
              src: "https://images.unsplash.com/photo-1547497126-6e02a28ff877?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=680&q=80",
              caption: "test caption"
            },
            headline: "Modifications (STCs) and Replacement Parts (PDA/PMA)",
            text: "<p>Paragraph to be drafted by Tim regarding the engineering services we offer in regards to STCs and general engineering. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
            button: {
              url: "/contact#contact-form",
              label: "Contact Us"
            }
          },
        ]
      },
      header: {
        content:
          {
            headline: "We develop your RDAs and STCs and offer full Legacy Aircraft support",
            img: {
              src: "http://xlaero.ca/new/images/bubblewindows.png",
              caption: "test caption"
            }
          }
      }
    }
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}

figure {
  margin: 0;
}

#h1eng {
  margin-left: 5%;
}
</style>
