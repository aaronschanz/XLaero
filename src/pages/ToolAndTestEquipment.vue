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
        <div class="imgcarousel1">
          <carousel>
            <carousel-slide v-for="(slide,index) in slides" 
              :key="slide" 
              :index="index"
              :visibleSlide="visibleSlide">
              <img :src="slide" />
            </carousel-slide>
          </carousel>
        </div>
      </div>
      <div class="clear"></div>
      <div class="bottomtool">
        <h1 id="toolingheader">Tooling </h1>
        <p id ="bottomtext"><pre style="font-family: var(--font-family)">
          
          XL Aero has developed a range of fixtures and tooling 
          to support the inspection of PT6T, PT6C and PW200 nozzle 
          configurations using the model F1 Fuel Nozzle Test Stand. 
          The innovative design allows toolless installation of 
          nozzles without the use of tools. This improvement saves 
          several hours of labour for each engine overhaul.

          XL Aero manufactures a range of calibration fixtures 
          that ensure the accuracy of test equipment on a daily 
          basis.

          Fixtures may be developed to support any product line, 
          including those developed by alternate manufacturers.

        </pre></p>
        <div class="imgcarousel2">
          <img src="http://xlaero.ca/new/images/PT6T Fixture 1.png" alt="Unsplash" id="bottompic">
        </div>
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
import Carousel from '~/components/Carousel.vue'
import CarouselSlide from '~/components/CarouselSlide.vue'


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
    TopArrow,
    Carousel,
    CarouselSlide
  },
  data() {
    return {
      slides: [
        "http://xlaero.ca/new/images/FNTS.png",
        "http://xlaero.ca/new/images/Nozzle Spray Pattern 1.png",
        "http://xlaero.ca/new/images/Test Stand in Operation with Digital Protractor 1.png"
      ],
      visibleSlide: 0,
    }
  }
}
</script>

<style>
.clear {clear: both;}

#toolcaps {
  text-align: right;
  margin-bottom: -5%;
  width: 70%;
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

#toolingheader {
  text-align: right;
  width: 60%;
  margin-bottom: -3%;
}

#bottomtext {
  float: right;
  margin-right: 17%;
}

#bottompic {
  width: 45%;
}

#FNTStext {
  float: left;
}


.home-links a {
  margin-right: 1rem;
}

figure {
  margin: 0;
}
</style>