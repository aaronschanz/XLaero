<template>
  <div>
    <section class="container" :style="{ backgroundImage: `url(${require('~/../static/images/background-heli.svg')})`}">
      <div class="toptool">
          <p id='introtool'><pre style="font-family: var(--font-family)">
              This will be a small introductory paragraph talking 
              about about our Tool & Testing equipment capabilities
              We can mention things about the FNTS and other projects 
              of this category that we’ve worked on and let customers 
              know we’re open for business in this category. Lorem 
              ipsum dolor sit amet, consectetur adipiscing elit, sed 
              do eiusmod tempor incididunt ut labore et dolore magna 
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore 
              magna aliqua. Ut enim ad
          </pre></p>
        <img src="../../static/images/toolandtest.jpg" alt="Unsplash" id="intropictool">
      </div>
      <div class="middletool">
        <h1><a id="FNTSheader">Fuel Nozzle Test Stand</a></h1>
        <p id ="FNTStext"><pre style="font-family: var(--font-family)">
          Tim to write a paragraph detailing XL Aero’s experience
          and ability with the development of the Fuel Nozzle
          Test Stand. Lorem ipsum dolor sit amet, consectetur 
          adipiscing elit, sed do eiusmod temporincididunt ut labore 
          et dolore magna aliqua. Ut enim ad minim veniam, quis 
          nostrud exercitationullamco laboris nisi ut aliquip ex ea 
          commodo consequat. Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. 
        </pre></p>
        <img src="../../static/images/FNTS.png" alt="Unsplash" id="FNTSpic">
      </div>
      <div class="bottomtool">
        <img src="../../static/images/FNTSmarketing.jpg" alt="Unsplash" id="FNTSmarketing">
        <img src="../../static/images/FNTS2.jpg" alt="Unsplash" id="FNTS2">
        <img src="../../static/images/FNTSmarketing2.jpg" alt="Unsplash" id="FNTSmarketing2">
      </div>
      <TopArrow/>
    </section>
  </div>
</template>

<script>

import Button from '~/components/Button.vue'
import Card from '~/components/Card.vue'
import ModuleHeadlineImage from '~/components/ModuleHeadlineImage.vue'
import ModuleHeadline2Cards from '~/components/ModuleHeadline2Cards.vue'
import ModuleHeadlineForm from '~/components/ModuleHeadlineForm.vue'
import TopArrow from '~/components/TopArrow.vue'

export default {
  metaInfo: {
    title: 'XLaero - Tool & Test Equipment'
  },
  components: {
    Button,
    Card,
    ModuleHeadlineImage,
    ModuleHeadlineForm,
    ModuleHeadline2Cards,
    TopArrow
  },
}
</script>

<style>

.toptool {
  display: inline;
}

#introtool {
  float: right;
  margin-top: 5%;
  margin-right: 5%;
}

#intropictool {
  width: 40%;
  margin-left: 5%;
  margin-top: 5%;
}

.middletool {
  margin-left: 5%;
  display: grid;
  grid-template-areas:
    "FNTSheader . ."
    "FNTStext . FNTSpic"
}

#FNTSpic {
  width: 60%;
  grid-area: FNTSpic;
  margin-left: 20%;
  margin-top: -20%;
}

#FNTStext {
  grid-area: FNTStext;
}

#FNTSheader {
  grid-area: FNTSheader;
}

.bottomtool {
  margin-top: 5%;
  display: grid;
  grid-template-areas:
    "FNTSmarketing FNTS2"
    "FNTSmarketing FNTSmarketing2"
    ". ."
}

#FNTS2 {
  max-width: 60%;
  height: auto;
  grid-area: FNTS2;
  margin-left: 25%;
}

#FNTSmarketing {
  grid-area: FNTSmarketing;
  width: 100%;
  height: auto;
  margin-left: 10%;
}

#FNTSmarketing2 {
  grid-area: FNTSmarketing2;
  max-width: 60%;
  height: auto;
  margin-left: 25%;
  margin-top: 5%;
}

.home-links a {
  margin-right: 1rem;
}

figure {
  margin: 0;
}
</style>