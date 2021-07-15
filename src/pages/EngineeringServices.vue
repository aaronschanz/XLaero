<template>
  <div> 
    <section class="container" :style="{ backgroundImage: `url(${require('~/../static/images/background-heli.svg')})`}">
      <div class="topeng">
        <div class="container">
          <img id="eng" src="http://xlaero.ca/new/images/Banner1_Wider.jpg">
          <h2 id="bannertext">XL AERO PROVIDES INNOVATIVE REPAIRS, MODIFICATIONS AND REPLACEMENT PARTS TO KEEP YOU FLYING</h2>
        </div>
        <ModuleImageText 
          :modifiers="repair.modifiers"
          :cards="repair.content"
          :pictures ="repair.pics"

        /> 
        <ModuleImageText 
          :modifiers="reverse.modifiers"
          :cards="reverse.content"
          :pictures ="reverse.pics"
        />
        <ModuleImageText 
          :modifiers="PDA.modifiers"
          :cards="PDA.content"
          :pictures ="PDA.pics"
        />     
      </div>

      <TopArrow/>
    </section>
  </div>
</template>

<script>

import Button from '~/components/Button.vue'
import Card from '~/components/Card.vue'
import ModuleImageText from '~/components/ModuleImageText.vue'
import ModuleHeadlineForm from '~/components/ModuleHeadlineForm.vue'
import ModuleHeadlineImage from '~/components/ModuleHeadlineImage.vue'
import EngCardPicsRight from '../components/EngCardPicsRight.vue'
import EngCardPicsLeft from '../components/EngCardPicsLeft.vue'
import TopArrow from '~/components/TopArrow.vue'

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
    EngCardPicsRight,
    EngCardPicsLeft,
    TopArrow,
  },
  data() {
    return {
      repair: {
        modifiers:  "card--image--left",
        pics: [
          
          {pic1: 'http://xlaero.ca/new/images/Module1/pict1.png'},
          {pic2: 'http://xlaero.ca/new/images/Module1/pict2.png'},
          {pic3: 'http://xlaero.ca/new/images/Module1/pict3.png'},
          {pic4: 'http://xlaero.ca/new/images/Module1/pict4.png'},
          {pic5: 'http://xlaero.ca/new/images/Module1/pict5.png'},
          {pic6: 'http://xlaero.ca/new/images/Module1/pict6.png'},
          {pic7: 'http://xlaero.ca/new/images/Module1/pict7.png'}
        
        ],
        content: [
          {
            headline: "Repair Development & Certificates (RDAs)",
            text: "<p>XL Aero develops repairs covering products from all the major OEMs (Bell, Airbus, Leonardo). Our focus is on increasing aircraft readiness by providing cost effective repair solutions. Our repair capabilities include:<li>​Critical rotating components <li>​Engines <li>Cold Spray of Housings <li>Structures <li>Rotor Blade Repairs <li>Hydraulic Servoactuators</p>",
            button: {
              url: "/repair-capabilities#repa",
              label: "Repair Capabilities"
            },
          },
        ]
      },
      reverse: {
        modifiers:  "card--image-right",
        pics: [

          {pic1: 'http://xlaero.ca/new/images/Module2/pict1.png'},
          {pic2: 'http://xlaero.ca/new/images/Module2/pict2.png'},
          {pic3: 'http://xlaero.ca/new/images/Module2/pict3.png'},
          {pic4: 'http://xlaero.ca/new/images/Module2/pict4.png'},
          {pic5: 'http://xlaero.ca/new/images/Module2/pict5.png'},
          {pic6: 'http://xlaero.ca/new/images/Module2/pict6.png'},
          {pic7: 'http://xlaero.ca/new/images/Module2/pict7.png'}

            ],
        content: [
          {
            headline: "Modifications (STCs)",
            text: "<p>XL Aero offers full engineering services to enhance the utility of your aircraft. Using a variety of engineering analysis and design tools, we can develop a complete design package that meets all airworthiness standards. Our modification experience include: <li>Composite fairings <li>Bubble windows <li>Engine conversions <li>External Cargo (HEC/NHEC) <li>Firefighting belly tanks <li>Interiors</p>",
            button: {
              url: "/contact#contact-form",
              label: "Contact Us"
            },
          },
        ]
      },
      PDA: {
        modifiers:  "card--image-left",
        pics: [

          {pic1: 'http://xlaero.ca/new/images/Mod3/pict1.png'},
          {pic2: 'http://xlaero.ca/new/images/Mod3/pict2.png'},
          {pic3: 'http://xlaero.ca/new/images/Mod3/pict3.png'},
          {pic4: 'http://xlaero.ca/new/images/Mod3/pict4.png'},
          {pic5: 'http://xlaero.ca/new/images/Mod3/pict5.png'},
          {pic6: 'http://xlaero.ca/new/images/Mod3/pict6.png'},
          {pic7: 'http://xlaero.ca/new/images/Mod3/pict7.png'}

            ],
        content: [
          {
            headline: "Replacement Parts (PDA/PMA)",
            text: "<p>XL Aero can develop and manufacture replacement parts that meet all the fit, form, and function requirements of the original design. We regularly conduct extensive reverse engineering using the latest 3D scanning, machining, and rapid prototyping technologies. We can also provide first article inspection/conformity and volume production control. Our PDA experience includes: <li>Turbine blades <li>Engine and transmission components <li>Flight critical/life-limited components</p>",
            button: {
              url: "/contact#contact-form",
              label: "Contact Us"
            },
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
#eng {
  width: 100%;
  height: 500px;
  opacity: 70%;
  margin-bottom: -5px;
}

#bannertext {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: black;
  font-family: var(--font-family);
}

.container {
  width: 100%;
  position: relative;
  text-align: left;
}

.home-links a {
  margin-right: 1rem;
}

figure {
  margin: 0;
}

#STCs, #RDAs, #PDAs {
  margin-left: 5%;
}
</style>
