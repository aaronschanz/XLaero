<!-- test> -->
<template>
  <div>
    <IndexHeadline
      :content="header.content"
    />  
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
            header1: "New Capabilites",
            header2: "Research & Development",
            header3: "Products",
            header4: "Training",
            body1: "capabilites",
            body2: "research",
            body3: "products ",
            body4: "training"
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
