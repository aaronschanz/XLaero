<template>
  <div>
    <section class="container" :style="{ backgroundImage: `url(${require('~/../static/images/background-heli.svg')})`}">
      <div class="toptool">
          <h1 id="toolcaps"> Capabilities </h1>
          <p id='tool'><pre style="font-family: var(--font-family)">
              XL Aero offers tooling and testing equipment services based
              on quality, delivery, cost and reliability throughout the 
              full lifecycle of our products. We supply innovative and 
              flexible solutions in order to expand your capabilities, 
              reduce your process lead time, and increase the cost-effectiveness
              of your business.

              Our portfolio includes several industry-leading, customizable 
              solutions that may be built to order. If our existing product
              line does not fulfill your requirements, our engineering team 
              will work with you to design and manufacture exactly what your 
              business needs.

              We are committed to supporting our equipment throughout its 
              lifetime. We continue to provide  customers with aftermarket 
              solutions, which include technical assistance & support, 
              calibration, and provision of spare parts.
          </pre></p>
        <img src="../../static/images/toolandtest.jpg" alt="Unsplash" id="intropictool">
      </div>
      <div class="middletool">
        <h1><a id="FNTSheader">Model F1 Test Stand </a></h1>
        <p id ="FNTStext"><pre style="font-family: var(--font-family)">
          

         
          
          The model F1 Fuel Nozzle test stand is a revolutionary, 
          turn key design. Integrated thermo electric cooling 
          modules achieve temperature stabilization without the 
          need for a water connection. A closed system is currently 
          under development that will allow installation in a  without 
          external ventilation. 
          
          The technology is ready to be installed in a hanger or 
          shop with a connection to power and shop air.

          XL Aero offers full product support including:
            - On-site installation
            - Training
            - Spare Parts
            - Technical Support
            - Calibration

          Contact us today for a brochure or to see how we can 
          customize the modular design to suit your needs. 
 
        </pre></p>
        <img src="../../static/images/FNTS.png" alt="Unsplash" id="FNTSpic">
      </div>
      <div class="clear"></div>
      <div class="bottomtool">

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
.clear {clear: both;}

#toolcaps {
  text-align: right;
  margin-bottom: -5%;
  margin-right: 25%;
}

.toptool {
  display: inline;
}

#tool {
  float: right;
  margin-top: 5%;
  margin-right: 10%;
}

#intropictool {
  width: 40%;
  margin-left: 5%;
  margin-top: 5%;
}

.middletool {
  margin-left: 5%;

}

#FNTSpic {
  width: 45%;
  height: auto;
  float: right;
  margin-right: 10%;
}

#FNTStext {
  float: left;
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