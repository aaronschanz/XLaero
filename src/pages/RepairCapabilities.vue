<template>
  <div>
    <section class="container" :style="{ backgroundImage: `url(${require('~/../static/images/background-heli.svg')})`}">
    <!-- <ModuleHeadline2Cards
      :headline="card2Module.headline"
      :subheading="card2Module.subheading"
      :cards="card2Module.cardsContent"
    />   -->
      <div class="top">
        <p id='intro'><pre style="font-family: var(--font-family)">
            Introductory paragraph that explains the section to be 
            drafted by Tim. Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit, sed do eiusmod tempor incididunt ut labore 
            et dolore magna aliqua. Ut enim ad minim veniam, quis 
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
            commodo consequat. Duis aute irure dolor in reprehenderit 
            in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in 
            culpa qui officia deserunt mollit anim id est laborum.
        </pre></p>
        <img src="../../static/images/repairintro.jpg" alt="Unsplash" id="intropic">
      </div>
      <div class="middle">
        <h1><a id="h1">XL Aero Repair Capabilities</a></h1>
        <RepairCard
          :cards="repairCard1.cardsContent"
        />
      </div>
    </section>
  </div>
</template>

<script>

import Button from '~/components/Button.vue'
import Card from '~/components/Card.vue'
import ModuleHeadlineImage from '~/components/ModuleHeadlineImage.vue'
import ModuleHeadlineCta from '~/components/ModuleHeadlineCta.vue'
import ModuleHeadline2Cards from '~/components/ModuleHeadline2Cards.vue'
import ModuleHeadlineForm from '~/components/ModuleHeadlineForm.vue'
import RepairCard from '~/components/RepairCard.vue'

export default {
  metaInfo: {
    title: 'XLaero - Repair Capabilities'
  },
  components: {
    Button,
    Card,
    ModuleHeadlineCta,
    ModuleHeadlineForm,
    ModuleHeadline2Cards,
    ModuleHeadlineImage,
    RepairCard
  },
  data() {
    return {
      repairCard1: {
        cardsContent: [
          {
            headline: "P&WC PT6T",
            name: "HOUSING, ACCESSORY GEARBOX",
            TCCA: "TCCA RDA#: P-RE16-016",
            Numbers: "3016115, 3024437, 3019744, 3024431",
            img: {
              src: "http://xlaero.ca/new/images/S-61-Rotor-Brake-Housing.JPG",
              caption: "Fuel Nozzel Test Stand"
            },
            text: "<p><em>Cold Spray repair removes corrosion</em></p>",
            button: {
              label: "Request a Quote",
              url: "../contact#info"
            } 
          },
        ],
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

.top {
  display: grid;
  grid-template-areas: 
    "para . pic"
    "para . pic"
}

#intro {
  padding-top: 10%;
  padding-left: 10%;
  grid-area: para;
}

#intropic {
  grid-area: pic;
  height: auto;
  width: 60%;
  margin-left: 20%;
  margin-top: 3%;
  object-fit: cover;
}

#h1 {
  margin-top: 10%;
  padding-left: 5%;
}
</style>