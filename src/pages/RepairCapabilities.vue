<template>
  <div>
    <ModuleHeadlineCta
      :content="headline.content"
    />
    <ModuleHeadline2Cards
      :headline="card2Module.headline"
      :subheading="card2Module.subheading"
      :cards="card2Module.cardsContent"
    />   
    <ModuleHeadlineForm
      :content="form.content"
    />
  </div>
</template>

<script>

import Button from '~/components/Button.vue'
import Card from '~/components/Card.vue'
import ModuleHeadlineImage from '~/components/ModuleHeadlineImage.vue'
import ModuleHeadlineCta from '~/components/ModuleHeadlineCta.vue'
import ModuleHeadline2Cards from '~/components/ModuleHeadline2Cards.vue'
import ModuleHeadlineForm from '~/components/ModuleHeadlineForm.vue'

export default {
  metaInfo: {
    title: 'XLaero - Repair Capabilities'
  },
  components: {
    Button,
    Card,
    ModuleHeadlineCta,
    ModuleHeadlineForm,
    ModuleHeadline2Cards
  },
  data() {
    return {
      header: {
        content:
          {
            headline: "Specialized Tool & Test Equipment to keep your aircraft running.",
            img: {
              src: "http://xlaero.ca/new/images/FNTS.png",
              caption: "test caption"
            }
          }
      },
      headline: {
        content:
          {
            headline: "Jinn amidala antilles wookiee sidious darth hutt hutt lars.",
            button: {
              label: "Get in touch",
              url: "#contact-form"
            } 
          }
      },
      card2Module: {
        headline: "We have a vast collection of developed part repairs",
        subheading: "These are repairs we have developed and executed on many different parts. If you can’t find the repair you are looking for, contact us and we will discern with you the best way moving forward to develope and certify the a repair on your part.",
        cardsContent: [
          {
            headline: "S-61 Rotor Brake Housing",
            img: {
              src: "http://xlaero.ca/new/images/S-61-Rotor-Brake-Housing.JPG",
              caption: "Fuel Nozzel Test Stand"
            },
            text: "<p>Lucas ipsum dolor sit amet drall fey'lya nute klivian bren er'kit x1 mayagil antonio solo. Bib geonosis marek til whiphid. Sulorine jan mimbanite vima-da-boda whitesun.</p>",
            button: {
              label: "Request a Quote",
              url: "#contact-form"
            } 
          },
          {
            headline: "PT6T AGB Housing",
            img: {
              src: "http://xlaero.ca/new/images/PT6T-housing.png",
              caption: "Custom Tool & Test Equipment"
            },
            text: "Lucas ipsum dolor sit amet drall fey'lya nute klivian bren er'kit x1 mayagil antonio solo. Bib geonosis marek til whiphid. Sulorine jan mimbanite vima-da-boda whitesun.",
            button: {
              label: "Request a Quote",
              url: "#contact-form"
            } 
          }
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
.home-links a {
  margin-right: 1rem;
}

figure {
  margin: 0;
}
</style>