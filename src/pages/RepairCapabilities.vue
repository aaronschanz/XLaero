<template>
  <div>
    <section class="container" :style="{ backgroundImage: `url(${require('~/../static/images/background-heli.svg')})`}">
      <div class="toprepair">
        <p id='repa'><pre style="font-family: var(--font-family)">
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
        <img src="../../static/images/repairintro.jpg" alt="Unsplash" id="intropicrepair">
      </div>
      <div class="middlerepair">
        <h1><a id="h1">XL Aero Repair Capabilities</a></h1>
        <RepairCard 
          :cards="repairCard1.cardsContent"
        />
        <RepairCard
          :cards="repairCard2.cardsContent"
        />
        <RepairCard
          :cards="repairCard3.cardsContent"
        />
        <RepairCard
          :cards="repairCard4.cardsContent"
        />
        <RepairCard
          :cards="repairCard5.cardsContent"
        />
        <RepairCard
          :cards="repairCard6.cardsContent"
        />
        <RepairCard
          :cards="repairCard7.cardsContent"
        />
        <RepairCard
          :cards="repairCard8.cardsContent"
        />
        <RepairCard
          :cards="repairCard9.cardsContent"
        />
        <RepairCard
          :cards="repairCard10.cardsContent"
        />
        <RepairCard
          :cards="repairCard11.cardsContent"
        />
        <RepairCard
          :cards="repairCard12.cardsContent"
        />
        <RepairCard
          :cards="repairCard13.cardsContent"
        />
        <RepairCard
          :cards="repairCard14.cardsContent"
        />
        <RepairCard
          :cards="repairCard15.cardsContent"
        />
        <RepairCard
          :cards="repairCard16.cardsContent"
        />
        <RepairCard
          :cards="repairCard17.cardsContent"
        />
        <RepairCard
          :cards="repairCard18.cardsContent"
        />
        <RepairCard
          :cards="repairCard19.cardsContent"
        />
        <RepairCard
          :cards="repairCard20.cardsContent"
        />

      </div>
      <TopArrow/>
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
import Footer from '~/components/Footer.vue'
import TopArrow from '~/components/TopArrow.vue'

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
    RepairCard,
    Footer,
    TopArrow
  },
  data() {
    return {
      repairCard1: {
        cardsContent: [
          {
            headline: "P&WC PT6T",
            name: "HOUSING, ACCESSORY GEARBOX",
            TCCA: "TCCA RDA#: P-RE16-016",
            Numbers: "Part Numbers: \n\n3016115, \n3024437, \n3019744, \n3024431",
            img: {
              src: "http://xlaero.ca/new/images/AGBhousing.JPG",
              caption: "S61 Housing, Accessory Gearbox"
            },
            text: "<p><em>Cold Spray repair of Flange \nand External Surfaces</em></p>",
            button: {
              label: "Request a Quote",
              url: "../contact#form?subject=P-RE16-016"
            } 
          },
        ],
      },
      repairCard2: {
        cardsContent: [
          {
            headline: "Sikorsky S-61L, S-61N",
            name: "HOUSING, BRAKE",
            TCCA: "TCCA RDA#: P-RH16-034",
            Numbers: "Part Numbers: \n\n9541339",
            img: {
              src: "http://xlaero.ca/new/images/IMG_2189 1.png",
              caption: "S61 Brake, Housing"
            },
            text: "<p><em>Cold Spray repair of corroded surfaces \n Restoration of damaged anvil</em></p>",
            button: {
              label: "Request a Quote",
              url: "../contact#form?subject=P-RH16-034"
            } 
          },
        ],
      },
      repairCard3: {
        cardsContent: [
          {
            headline: "P&WC PT6T",
            name: "SUPPORT ASSEMBLY, NO. 3 \n& NO. 4 BEARING HOUSING",
            TCCA: "TCCA RDA#: P-RH16-053",
            Numbers: "Part Numbers: \n\n3118877-01\n3016992\n3118166-01",
            img: {
              src: "http://xlaero.ca/new/images/image 9.png",
              caption: "Support Assembly"
            },
            text: "<p><em>Cold Spray repair of flanges and wear</em></p>",
            button: {
              label: "Request a Quote",
              url: "../contact#form?subject=P-RH16-053"
            } 
          },
        ],
      },
      repairCard4: {
        cardsContent: [
          {
            headline: "Bell 212, 412, 412CF, 412EP",
            name: "HOUSING ASSY, UPPER",
            TCCA: "TCCA RDA#: P-RH16-058",
            Numbers: "Part Numbers: \n\n41003203",
            img: {
              src: "http://xlaero.ca/new/images/image 11.png",
              caption: "Housing Assy, Upper"
            },
            text: "<p><em>Cold Spray repair of corroded parts</em></p>",
            button: {
              label: "Request a Quote",
              url: "../contact#form?subject=P-RH16-058"
            } 
          },
        ],
      },
      repairCard5: {
        cardsContent: [
          {
            headline: "Sikorksy S-61L, S-61N",
            name: "BRAKE HOUSING",
            TCCA: "TCCA RDA#: P-RH16-065",
            Numbers: "Part Numbers: \n\n9440273\n9440273-01\n9440274\n9440274-01",
            img: {
              src: "",
              caption: "Brake Housing"
            },
            text: "<p><em>Cold Spray repair of corroded surfaces \nsleeve repair of bolt holes</em></p>",
            button: {
              label: "Request a Quote",
              url: "../contact#form?subject=P-RH16-065"
            } 
          },
        ],
      },
      repairCard6: {
        cardsContent: [
          {
            headline: "Sikorksy S-61L, S-61N",
            name: "BRACKET, MOUNTING",
            TCCA: "TCCA RDA#: P-RH16-065",
            Numbers: "Part Numbers: \n\n9440344",
            img: {
              src: "",
              caption: "Mounting Bracket"
            },
            text: "<p><em>Cold Spray repair of corroded surfaces \nsleeve repair of bolt holes</em></p>",
            button: {
              label: "Request a Quote",
              url: "../contact#form?subject=P-RH16-065"
            } 
          },
        ],
      },
      repairCard7: {
        cardsContent: [
          {
            headline: "Bell 214ST",
            name: "HOUSING SET, COMBINING GEARBOX",
            TCCA: "TCCA RDA#: P-RH16-071",
            Numbers: "Part Numbers: \n\n214-040-991-101\n214-040-991-105\n214-040-991-107\n214-040-991-109",
            img: {
              src: "",
              caption: "Housing Set, Combining Gearbox"
            },
            text: "<p><em>Cold Spray repair of mounting flanges</em></p>",
            button: {
              label: "Request a Quote",
              url: "../contact#form?subject=P-RH16-071"
            } 
          },
        ],
      },
      repairCard8: {
        cardsContent: [
          {
            headline: "Bell 214ST",
            name: "CASE SET, COMBINING GEARBOX",
            TCCA: "TCCA RDA#: P-RH16-071",
            Numbers: "Part Numbers: \n\n214-040-991-101",
            img: {
              src: "",
              caption: "Case Set, Combining Gearbox"
            },
            text: "<p><em>Cold Spray repair removes damage \nand corrosion</em></p>",
            button: {
              label: "Request a Quote",
              url: "../contact#form?subject=P-RH16-071"
            } 
          },
        ],
      },
      repairCard9: {
        cardsContent: [
          {
            headline: "Bell 205A-1, 212",
            name: "CASE ASSY (Top Case)",
            TCCA: "TCCA RDA#: P-RH21-039/D",
            Numbers: "Part Numbers: \n\n204-040-359-001",
            img: {
              src: "",
              caption: "Case Assy"
            },
            text: "<p><em>Cold Spray repair removes damage \nand corrosion</em></p>",
            button: {
              label: "Request a Quote",
              url: "../contact#form?subject=P-RH21-039/D"
            } 
          },
        ],
      },
      repairCard10: {
        cardsContent: [
          {
            headline: "Bell 205A-1, 212, 412",
            name: "CASE ASSY (Main Case)",
            TCCA: "TCCA RDA#: P-RH21-039/D",
            Numbers: "Part Numbers: \n\n204-040-353-023\n212-040-053-009",
            img: {
              src: "",
              caption: "Case Assy"
            },
            text: "<p><em>Cold Spray repair removes damage \nand corrosion</em></p>",
            button: {
              label: "Request a Quote",
              url: "../contact#form?subject=P-RH21-039/D"
            } 
          },
        ],
      },
      repairCard11: {
        cardsContent: [
          {
            headline: "Bell 205A-1, 212, 412",
            name: "CASE ASSY (Main Support Case)",
            TCCA: "TCCA RDA#: P-RH21-039/D",
            Numbers: "Part Numbers: \n\n212-040-054-001\n212-040-054-005\n212-040-054-007\n212-040-054-013\n212-040-054-101\n212-040-054-105",
            img: {
              src: "",
              caption: "Case Assy"
            },
            text: "<p><em>Cold Spray repair removes damage \nand corrosion</em></p>",
            button: {
              label: "Request a Quote",
              url: "../contact#form?subject=P-RH21-039/D"
            } 
          },
        ],
      },
      repairCard12: {
        cardsContent: [
          {
            headline: "Bell 205A-1, 212, 412",
            name: "CASE ASSY (Sump Case)",
            TCCA: "TCCA RDA#: P-RH21-039/D",
            Numbers: "Part Numbers: \n\n204-040-355-005\n204-040-355-017",
            img: {
              src: "",
              caption: "Case Assy"
            },
            text: "<p><em>Cold Spray repair removes damage \nand corrosion</em></p>",
            button: {
              label: "Request a Quote",
              url: "../contact#form?subject=P-RH21-039/D"
            } 
          },
        ],
      },
      repairCard13: {
        cardsContent: [
          {
            headline: "Bell 205A-1, 212, 412, 412CF, 412EP",
            name: "CASE ASSY (Main Case)",
            TCCA: "P-RH21-042",
            Numbers: "Part Numbers: \n\n204-040-353-023\n212-040-053-009",
            img: {
              src: "",
              caption: "Case Assy"
            },
            text: "<p><em></em></p>",
            button: {
              label: "Request a Quote",
              url: "../contact#form?subject=P-RH21-042"
            } 
          },
        ],
      },
      repairCard14: {
        cardsContent: [
          {
            headline: "Bell 212",
            name: "CASE ASSY (Main Tail Rotor Gearbox)",
            TCCA: "TCCA RDA#: P-RH18-038/D",
            Numbers: "Part Numbers: \n\n212-040-468-001",
            img: {
              src: "",
              caption: "Case Assy"
            },
            text: "<p><em>Selective brush nickel plating repair \nremoves damage</em></p>",
            button: {
              label: "Request a Quote",
              url: "../contact#form?subject=P-RH18-038/D"
            } 
          },
        ],
      },
      repairCard15: {
        cardsContent: [
          {
            headline: "Bell 214B/B-1, 214ST",
            name: "CASE ASSY (Main Tail Rotor Gearbox)",
            TCCA: "TCCA RDA#: P-RH18-038/D",
            Numbers: "Part Numbers: \n\n214-040-409-109\n214-040-409-113\n214-040-409-121\n214-040-409-105\n214-040-409-001",
            img: {
              src: "",
              caption: "Case Assy"
            },
            text: "<p><em>Selective brush nickel plating repair \nremoves damage</em></p>",
            button: {
              label: "Request a Quote",
              url: "../contact#form?subject=P-RH18-038/D"
            } 
          },
        ],
      },
      repairCard16: {
        cardsContent: [
          {
            headline: "Bell 205A-1, 212, 412",
            name: "CASE ASSY (Main Input gear Quill Case)",
            TCCA: "TCCA RDA#: P-RH19-001/D",
            Numbers: "Part Numbers: \n\n204-040-386-001\n412-040-385-101",
            img: {
              src: "",
              caption: "Case Assy"
            },
            text: "<p><em>Cold Spray repair of Flange \nand O-fing Grooves</em></p>",
            button: {
              label: "Request a Quote",
              url: "../contact#form?subject=P-RH19-001/D"
            } 
          },
        ],
      },
      repairCard17: {
        cardsContent: [
          {
            headline: "Sikorsky S-61L, S-61N",
            name: "HOUSING ASSEMBLY, UPPER",
            TCCA: "TCCA RDA#: P-RH19-043/D",
            Numbers: "Part Numbers: \n\nS6135-20011-007\nS6135-20011-043",
            img: {
              src: "",
              caption: "Upper Housing Assembly"
            },
            text: "<p><em>Cold Spray repair of Flange</em></p>",
            button: {
              label: "Request a Quote",
              url: "../contact#form?subject=P-RH19-043/D"
            } 
          },
        ],
      },
      repairCard18: {
        cardsContent: [
          {
            headline: "Honeywell T5508D",
            name: "HOUSING ASSEMBLY, INLET",
            TCCA: "P-RE20-034/D",
            Numbers: "Part Numbers: \n\n2-060-000-21",
            img: {
              src: "",
              caption: "HOUSING ASSEMBLY, INLET"
            },
            text: "<p><em></em></p>",
            button: {
              label: "Request a Quote",
              url: "../contact#form?subject=P-RE20-034/D"
            } 
          },
        ],
      },
      repairCard19: {
        cardsContent: [
          {
            headline: "Bell 214B/B-1, 214ST",
            name: "SLEEVE ASSEMBLY, \nTAIL ROTOR GEARBOX, INPUT",
            TCCA: "P-RH20-040/D",
            Numbers: "Part Numbers: \n\n214-040-412-001",
            img: {
              src: "",
              caption: "HOUSING ASSEMBLY, INLET"
            },
            text: "<p><em></em></p>",
            button: {
              label: "Request a Quote",
              url: "../contact#form?subject=P-RH20-040/D"
            } 
          },
        ],
      },
      repairCard20: {
        cardsContent: [
          {
            headline: "Bell 206A, 206A-1, 206B, 206B-1",
            name: "CASE ASSY, MAIN TRANSMISSION",
            TCCA: "P-RH21-35/D",
            Numbers: "Part Numbers: \n\n206-040-150-001, \n206-040-150-029",
            img: {
              src: "",
              caption: ""
            },
            text: "<p><em></em></p>",
            button: {
              label: "Request a Quote",
              url: "../contact#form?subject=P-RH21-35/D"
            } 
          },
        ],
      },
      form: {
        content: [
          {
            headline: "Do not hesitate to get in touch with us.",
            button: {
              url: "",
              label: "Send"
            }
          },
        ]
      }
    }
  }
}
</script>

<style>
.Footer {
  margin-bottom: -90%;
}

.middlerepair {
  margin-top: 10%;
  white-space: pre-wrap;
}

.home-links a {
  margin-right: 1rem;
}

figure {
  margin: 0;
}

.toprepair {
  display: inline;
}

#repa {
  margin-left: 5%;
  padding-top: 5%;
}

#intropicrepair {
  width: 40%;
  height: auto;
  float: right;
  margin-top: -20%;
  margin-right: 5%;
}

#h1 {
  margin-top: 10%;
  padding-left: 5%;
}
</style>