<template>
  <div>
    <ModuleHeadlineImage
      :content="header.content"
    />
    <ModuleHeadline2Cards
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
import ModuleHeadline2Cards from '~/components/ModuleHeadline2Cards.vue'
import ModuleHeadlineForm from '~/components/ModuleHeadlineForm.vue'

export default {
  metaInfo: {
    title: 'XLaero - Tool & Test Equipment'
  },
  components: {
    Button,
    Card,
    ModuleHeadlineImage,
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
      card2Module: {
        headline: "Every part makes a system work well. That’s us.",
        subheading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
        cardsContent: [
          {
            headline: "Portable Fuel Nozzel Test Stand",
            img: {
              src: "http://xlaero.ca/new/images/FNTS2.jpg",
              caption: "Fuel Nozzel Test Stand"
            },
            text: "<p>•Temperature Control <br/>•2 Fuel + 1 Air Circuits<br/>•Digital Camera – Spray Angle</p>",
            button: {
              label: "Request a Quote",
              url: "#contact-form"
            } 
          },
          {
            headline: "Custom Tool & Test Equipment",
            img: {
              src: "http://xlaero.ca/new/images/tools.png",
              caption: "Custom Tool & Test Equipment"
            },
            text: "We’d love to hear about your needs and develope your specialized Tool & Test Equipment.",
            button: {
              label: "Contact us",
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