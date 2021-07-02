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
            text: "<p>Paragraph to be drafted by Tim regarding the engineering services we offer in regards to Repairs. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, su culpa qui officia deserunt mollit anim id est laborum.</p>",
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
            text: "<p>We offer full engineering support for completing  supplemental type certificate (STC) projects. Using a variety of engineering analysis tools, we develop the data and reports to ensure that your project meets all airworthiness standards. Previously completed STC projects include an Airbus AS332 sponson and  MAKILA 1A1 engine replacements. More examples of STC projects can be see in our gallery.</p>",
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
            text: "<p>Paragraph to be drafted by Tim regarding the engineering services we offer in regards to STCs and general engineering. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
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
