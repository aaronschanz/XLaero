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
        <h1><a id="STCs" >Modifications (STCs) and Replacement Parts (PDA/PMA)</a></h1>
        <EngCardPicsRight 
          :cards="stcCard1.cardsContent"
        />
        <EngCardPicsLeft 
          :cards="stcCard2.cardsContent"
        />
        <EngCardPicsRight 
          :cards="stcCard3.cardsContent"
        />
        <EngCardPicsLeft 
          :cards="stcCard4.cardsContent"
        />
        <EngCardPicsRight 
          :cards="stcCard5.cardsContent"
        />
      </div>
      <div class="bottomeng">
        <h1><a id="RDAs">Repair Developments (RDAs)</a></h1>
        <EngCardPicsRight 
          :cards="stcCard6.cardsContent"
        />
        <EngCardPicsLeft 
          :cards="stcCard7.cardsContent"
        />
        <EngCardPicsRight 
          :cards="stcCard8.cardsContent"
        />
        <EngCardPicsLeft 
          :cards="stcCard9.cardsContent"
        />
        <EngCardPicsRight 
          :cards="stcCard10.cardsContent"
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
import EngCardPicsRight from '../components/EngCardPicsRight.vue'
import EngCardPicsLeft from '../components/EngCardPicsLeft.vue'


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
    EngCardPicsLeft
  },
  data() {
    return {
      stcCard1: {
        cardsContent: [
          {
            headline: "XL Aero’s Micro CHP Unit",
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
      stcCard2: {
        cardsContent: [
          {
            headline: "Eurocopter AS332 Vertical Reference Window",
            img: {
              src: "http://xlaero.ca/new/images/bubblewindows2.png",
              caption: "S61 Housing, Accessory Gearbox"
            },
            img2: {
              src: "http://xlaero.ca/new/images/bubblewindow.jpg",
              caption: "S61 Housing, Accessory Gearbox"
            },
            text: "<p>Coldstream Helicopters Ltd Vertical Reference Window(s) STC allows for the installation of a left-hand and/or right-hand bubble window(s). The modification and installation of the LH and RH Bubble Windows for AS332C, AS332C1, AS332L AS332L1 and the EC225LP helicopters, involves modifying the OEM Cabin Door assemblies, and creating new Bubble Window Assemblies  (LH and RH) which attach to the helicopter using OEM Hardware. </p>",
            button: {
              label: "Request a Quote",
              url: "../contact#info"
            } 
          },
        ],
      },
      stcCard3: {
        cardsContent: [
          {
            headline: "A332 Fire Tank",
            img: {
              src: "http://xlaero.ca/new/images/firetank.jpg",
              caption: "S61 Housing, Accessory Gearbox"
            },
            img2: {
              src: "http://xlaero.ca/new/images/firetank1.jpg",
              caption: "S61 Housing, Accessory Gearbox"
            },
            text: "<p>The fire suppression tank is secured to the belly of the helicopter. It has a self contained hydraulic system. Electrical power is provided by a 3 phase AC (400 Hz) connection to the aircraft electrical system, protected by a 50 amp (3Ø) circuit breaker. Filling and emptying functions are performed by the pilot or co-pilot using controls mounted to the collective  and the weight of the water tank is monitored using a load cell which displays on the instrument panel. As an option, a hand control pendant is also supplied for a third crew member to operate the tank if Operator procedures allow.</p>",
            button: {
              label: "Request a Quote",
              url: "../contact#info"
            } 
          },
        ],
      },
      stcCard4: {
        cardsContent: [
          {
            headline: "Project Number 4",
            img: {
              src: "http://xlaero.ca/new/images/projectplaceholder.jpg",
              caption: "S61 Housing, Accessory Gearbox"
            },
            img2: {
              src: "http://xlaero.ca/new/images/projectplaceholder.jpg",
              caption: "S61 Housing, Accessory Gearbox"
            },
            text: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
            button: {
              label: "Request a Quote",
              url: "../contact#info"
            } 
          },
        ],
      },
      stcCard5: {
        cardsContent: [
          {
            headline: "Project Number 5",
            img: {
              src: "http://xlaero.ca/new/images/projectplaceholder.jpg",
              caption: "S61 Housing, Accessory Gearbox"
            },
            img2: {
              src: "http://xlaero.ca/new/images/projectplaceholder.jpg",
              caption: "S61 Housing, Accessory Gearbox"
            },
            text: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
            button: {
              label: "Request a Quote",
              url: "../contact#info"
            } 
          },
        ],
      },
      stcCard6: {
        cardsContent: [
          {
            headline: "Repair Number 1",
            img: {
              src: "http://xlaero.ca/new/images/projectplaceholder.jpg",
              caption: "S61 Housing, Accessory Gearbox"
            },
            img2: {
              src: "http://xlaero.ca/new/images/projectplaceholder.jpg",
              caption: "S61 Housing, Accessory Gearbox"
            },
            text: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
            button: {
              label: "Request a Quote",
              url: "../contact#info"
            } 
          },
        ],
      },
      stcCard7: {
        cardsContent: [
          {
            headline: "Repair Number 2",
            img: {
              src: "http://xlaero.ca/new/images/projectplaceholder.jpg",
              caption: "S61 Housing, Accessory Gearbox"
            },
            img2: {
              src: "http://xlaero.ca/new/images/projectplaceholder.jpg",
              caption: "S61 Housing, Accessory Gearbox"
            },
            text: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
            button: {
              label: "Request a Quote",
              url: "../contact#info"
            } 
          },
        ],
      },
      stcCard8: {
        cardsContent: [
          {
            headline: "Repair Number 3",
            img: {
              src: "http://xlaero.ca/new/images/projectplaceholder.jpg",
              caption: "S61 Housing, Accessory Gearbox"
            },
            img2: {
              src: "http://xlaero.ca/new/images/projectplaceholder.jpg",
              caption: "S61 Housing, Accessory Gearbox"
            },
            text: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
            button: {
              label: "Request a Quote",
              url: "../contact#info"
            } 
          },
        ],
      },
      stcCard9: {
        cardsContent: [
          {
            headline: "Repair Number 4",
            img: {
              src: "http://xlaero.ca/new/images/projectplaceholder.jpg",
              caption: "S61 Housing, Accessory Gearbox"
            },
            img2: {
              src: "http://xlaero.ca/new/images/projectplaceholder.jpg",
              caption: "S61 Housing, Accessory Gearbox"
            },
            text: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
            button: {
              label: "Request a Quote",
              url: "../contact#info"
            } 
          },
        ],
      },
      stcCard10: {
        cardsContent: [
          {
            headline: "Repair Number 5",
            img: {
              src: "http://xlaero.ca/new/images/projectplaceholder.jpg",
              caption: "S61 Housing, Accessory Gearbox"
            },
            img2: {
              src: "http://xlaero.ca/new/images/projectplaceholder.jpg",
              caption: "S61 Housing, Accessory Gearbox"
            },
            text: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
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
            headline: "Modifications (STCs) and Replacement Parts (PDA/PMA)",
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
.home-links a {
  margin-right: 1rem;
}

figure {
  margin: 0;
}

#STCs, #RDAs {
  margin-left: 5%;
}
</style>
