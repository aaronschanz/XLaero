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
        />
        <ModuleImageText 
          :modifiers="reverse.modifiers"
          :cards="reverse.content"
        />
        <ModuleImageText 
          :modifiers="PDA.modifiers"
          :cards="PDA.content"
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
    TopArrow
  },
  data() {
    return {
      STCcard: {
        cardsContent: [
          {
            headline: "STCs",
            img: {
              src: "http://xlaero.ca/new/images/CHP.JPG",
              caption: "S61 Housing, Accessory Gearbox"
            },
            text: "<p>XL Aero offers full engineering services to enhance the utility of your aircraft. Using a variety of engineering analysis and design tools, we can develop a complete design package that meets all airworthiness standards. Our modification experience includes:​ <li>Composite fairings​</li><li>Bubble windows​</li><li>Engine conversions​</li><li>External Cargo (HEC/NHEC)​</li><li>Firefighting belly tanks</li>​<li>Interiors</li></p>",
            button: {
              label: "Request a Quote",
              url: "../contact#info"
            } 
          },
        ],
      },
      RDAcard: {
        cardsContent: [
          {
            headline: "RDAs",
            img: {
              src: "http://xlaero.ca/new/images/CHP.JPG",
              caption: "S61 Housing, Accessory Gearbox"
            },
            text: "<p>XL Aero develops repairs covering products from all the major OEMs (Bell, Airbus, Leonardo). Our focus is on increasing aircraft readiness by providing cost effective repair solutions. Our repair capabilities include:<li>Critical rotating components</li>​<li>Engines</li><li>Cold Spray of Housings​</li><li>Structures​</li><li>Rotor Blade Repairs</li><li>Hydraulic Servoactuators</li></p>",
            button: {
              label: "Request a Quote",
              url: "../contact#info"
            } 
          },
        ],
      },
      PDAcard: {
        cardsContent: [
          {
            headline: "PDAs/PMAs",
            img: {
              src: "http://xlaero.ca/new/images/CHP.JPG",
              caption: "S61 Housing, Accessory Gearbox"
            },
            text: "<p>XL Aero can develop and manufacture replacement parts that meet all the fit, form, and function requirements of the original design. We regularly conduct extensive reverse engineering using the latest 3D scanning, machining, and rapid prototyping technologies. We can also provide first article inspection/conformity and volume production control. Our PDA experience includes:​ <li>Turbine blades</li><li> Engine and transmission components​</li></li>Flight critical/life-limited components</li></p>",
            button: {
              label: "Request a Quote",
              url: "../contact#info"
            } 
          },
        ],
      },
      repair: {
        modifiers:  "card--image--left",
        content: [
          {
            img: {
              src: "https://images.unsplash.com/photo-1541510549862-50ded4acbde8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80",
              caption: "test caption"
            },
            headline: "Repair Development & Certificates (RDAs)",
            text: "<p>XL Aero develops repairs covering products from all the major OEMs (Bell, Airbus, Leonardo). Our focus is on increasing aircraft readiness by providing cost effective repair solutions. Our repair capabilities include:<li>​Critical rotating components <li>​Engines <li>Cold Spray of Housings <li>Structures <li>Rotor Blade Repairs <li>Hydraulic Servoactuators</p>",
            button: {
              url: "/repair-capabilities#repa",
              label: "Repair Capabilities"
            },
            button2: {
              url: "/engineering-services#RDAs",
              label: "See Gallery"
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
            headline: "Modifications (STCs)",
            text: "<p>XL Aero offers full engineering services to enhance the utility of your aircraft. Using a variety of engineering analysis and design tools, we can develop a complete design package that meets all airworthiness standards. Our modification experience include: <li>Composite fairings <li>Bubble windows <li>Engine conversions <li>External Cargo (HEC/NHEC) <li>Firefighting belly tanks <li>Interiors</p>",
            button: {
              url: "/contact#contact-form",
              label: "Contact Us"
            },
            button2: {
              url: "/engineering-services#STCs",
              label: "See Gallery"
            }
          },
        ]
      },
      PDA: {
        modifiers:  "card--image-left",
        content: [
          {
            img: {
              src: "https://images.unsplash.com/photo-1547497126-6e02a28ff877?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=680&q=80",
              caption: "test caption"
            },
            headline: "Replacement Parts (PDA/PMA)",
            text: "<p>XL Aero can develop and manufacture replacement parts that meet all the fit, form, and function requirements of the original design. We regularly conduct extensive reverse engineering using the latest 3D scanning, machining, and rapid prototyping technologies. We can also provide first article inspection/conformity and volume production control. Our PDA experience includes: <li>Turbine blades <li>Engine and transmission components <li>Flight critical/life-limited components</p>",
            button: {
              url: "/contact#contact-form",
              label: "Contact Us"
            },
            button2: {
              url: "/engineering-services#STCs",
              label: "See Gallery"
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
  text-align: center;
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
