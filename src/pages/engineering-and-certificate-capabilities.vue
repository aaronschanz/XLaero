<template>
  <Layout>
    <ModuleHeadlineImage
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
    <ModuleImageText 
      :modifiers="mods.modifiers"
      :cards="mods.content"
    />    
    <ModuleHeadlineForm
      :content="form.content"
    />
  </Layout>
</template>

<script>

import Button from '~/components/Button.vue'
import Card from '~/components/Card.vue'
import ModuleImageText from '~/components/ModuleImageText.vue'
import ModuleHeadlineForm from '~/components/ModuleHeadlineForm.vue'
import ModuleHeadlineImage from '~/components/ModuleHeadlineImage.vue'

export default {
  metaInfo: {
    title: 'XLaero Engineering & Certificate Capabilities'
  },
  components: {
    Button,
    Card,
    ModuleImageText,
    ModuleHeadlineForm,
    ModuleHeadlineImage
  },
  data() {
    return {
      repair: {
        modifiers:  "card--thin-image",
        content: [
          {
            img: {
              src: "https://images.unsplash.com/photo-1541510549862-50ded4acbde8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80",
              caption: "test caption"
            },
            headline: "Repair Development & Certificates",
            text: "<p>We devolpe your RDAs and STCs and offer full Legacy Aircraft Support. <br/> Lucas ipsum dolor sit amet drall fey'lya nute klivian bren er'kit x1 mayagil antonio solo. Bib geonosis marek til whiphid. Sulorine jan mimbanite vima-da-boda whitesun. Nas barriss felth hssis. Coruscant choka tython brak vulptereen. Danni rom hutt tarpals lumiya sunrider gran selkath lars. Billaba chagrian jek nomi geonosian md-5 talortai arkanian kenobi. Tof su kit windu. Ortolan gev gizka ackbar. Trianii snootles ssi-ruuk kowakian iridonian rhen iblis rune. Solo epicanthix onimi yoda winter nass skywalker cabasshite.</p>",
            button: {
              url: "",
              label: "Contact Us"
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
            headline: "Reverse Engineering & PMAs",
            text: `<p>
                      20 years of bottom line improvement expertise gained from designing, certifying, supporting, and maintaining aircraft engines! </br> 
                      We offer 
                      <ul>
                        <li>RDAs</li>
                        <li>STCs</li>
                        <li>Legacy Aircraft Support</li>
                      </ul>
                    </p>`,
            button: {
              url: "",
              label: "Contact Us"
            }
          },
        ]
      },
      mods: {
        modifiers:  "",
        content: [
          {
            img: {
              src: "https://images.unsplash.com/photo-1552140498-f448ffb1301f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=761&q=80",
              caption: "test caption"
            },
            headline: "Modifications",
            text: `<p>
                      20 years of bottom line improvement expertise gained from designing, certifying, supporting, and maintaining aircraft engines! </br> 
                      Mission Enhancement Support
                    </p>`,
            button: {
              url: "",
              label: "Contact Us"
            }
          },
        ]
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
      },
      header: {
        content:
          {
            headline: "Specialized Tool & Test Equipment to keep your aircraft running.",
            img: {
              src: "http://xlaero.ca/new/images/FNTS.png",
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

img {
  max-width: 100%;
}
</style>
