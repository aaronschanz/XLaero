<!-- test> -->
<template>
  <div>
    <div id='home'>
      <IndexHeadline
        :content="header.content"
      /> </div>  
    
    <IndexSummary
      :content="header2.content" 
    />                          
  </div>
</template>

<script>


import Button from '~/components/Button.vue'
import Card from '~/components/Card.vue'
import ModuleHeadline2Cards from '~/components/ModuleHeadline2Cards.vue'
import ModuleHeadline3Cards from '~/components/ModuleHeadline3Cards.vue'
import Module2ImageText from '~/components/Module2ImageText.vue'
import ModuleImageText from '~/components/ModuleImageText.vue'
import ModuleHeadlineForm from '~/components/ModuleHeadlineForm.vue'
import ModuleHeadlineImage from '~/components/ModuleHeadlineImage.vue'
import IndexHeadline from '~/components/IndexHeadline.vue'
import Hero from '~/components/Hero.vue'
import IndexSummary from '~/components/IndexSummary.vue'

export default {
  metaInfo: {
    title: 'XLaero'
  },
  components: {
    IndexHeadline,
    Hero,
    IndexSummary,
    Button
  },
  data() {
    return {
      header: {
        content:
          {
            headline: "Every part makes a system" +"\n" + "work well. That's us.",
          }
      },
      header2: {
        content:
          {
            headline: "XLaero - No problem too large",
            header1: "Engineering Services",
            header2: "Repair Capabilites",
            header3: "Manufacturing Capabilites",
            header4: "Tool & Test Equipment",
            body1: "XL Aero develops your RDAs, STCs and general engineering projects" + "\n" + "with unrivaled levels of details and over 20 years of bottom line" + "\n" + "improvement expertise. We provide full Legacy Aircraft" + "\n" + "support for all your engineering needs and are TCCA certified. ",
            body2: "XL Aero has extensive professional experience in developing and" + "\n" + "executing repairs for all sorts of different parts. Visit our Repair" + "\n" + "Capabilities index to find out more about the some of the projects" + "\n" + "we have undertaken.",
            body3: "CAR 561 certified, XL Aero is capable and prepared to undertake" + "\n" + "all your manufacturing needs. We follow a rigorous production" + "\n" + "control system in order to provide you with service that exceed" + "\n" + "expectations according to the AS9100.",
            body4: "XL Aero offers an impressive history of specialized tool & test" + "\n" + "equipment development for aviation and customers’ engineering" + "\n" + "needs. Please visit our Tool & Test Equipment index to discover" + "\n" + "more on the subject."
          }
      }
    }
  }
}
//smoothScroll.init();
</script>

<style lang="scss" scoped>
.home-links a {
  margin-right: 1rem;
}

figure {
  margin: 0;
}
.container {
    padding: var(--spacing-25);
}

.card-container {
    width: 100%;
    margin-top: var(--spacing-25);
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(unquote("min(600px, 100%)"),1fr));
    grid-gap: var(--spacing-10); 
}
.contact-info {
    text-align: center;
    h1 {
      font-size: 2rem;
    }
}

//arrow test stuff
.arrow {
  box-sizing: border-box;
  height: 2.5vw;
  width: 2.5vw;
  border-style: solid;
  border-color: white;
  border-width: 0px 1px 1px 0px;
  transform: rotate(45deg);
  transition: border-width 150ms ease-in-out;
}

.arrow:hover {
  border-bottom-width: 4px;
  border-right-width: 4px;
}

.container-arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--secondary-color);
  min-height: 100px;
}
</style>
