<template>
  <div>
    <section class="container" :style="{ backgroundImage: `url(${require('~/../static/images/background-heli.svg')})`}">
      <div class="toppart">
        <p id="part"></p>
          <p id='intropart'><pre style="font-family: var(--font-family)">
            Just a paragraph to be written by Tim that 
            highlights that we have this capability and 
            are open for business. Lorem 
            ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad 
            minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo 
            consequat. 
          </pre></p>
        <img src="../../static/images/thumb.jpg" alt="Unsplash" id="intropicpart">
      </div>
      <div class="middlemanu">
        <h1><a id="h1part">Spare Part Gallery</a></h1>
        <img src="../../static/images/projectplaceholder.jpg" alt="Unsplash" id="project1">
        <img src="../../static/images/projectplaceholder.jpg" alt="Unsplash" id="project1">
        <img src="../../static/images/projectplaceholder.jpg" alt="Unsplash" id="project1">
        <img src="../../static/images/projectplaceholder.jpg" alt="Unsplash" id="project1">
        <img src="../../static/images/projectplaceholder.jpg" alt="Unsplash" id="project1">
        <img src="../../static/images/projectplaceholder.jpg" alt="Unsplash" id="project1">
      </div>
      <div id="scrollTop">    
        <TopArrow/>
      </div>
    </section>
  </div>
</template>

<script>


import Button from '~/components/Button.vue'
import Card from '~/components/Card.vue'
import ModuleHeadlineImage from '~/components/ModuleHeadlineImage.vue'
import ModuleHeadline2Cards from '~/components/ModuleHeadline2Cards.vue'
import ModuleHeadlineForm from '~/components/ModuleHeadlineForm.vue'
import TopArrow from '~/components/TopArrow.vue'

export default {
  metaInfo: {
    title: 'XLaero - Manufacturing Capabilities'
  },
  components: {
    Button,
    Card,
    ModuleHeadlineImage,
    ModuleHeadlineForm,
    ModuleHeadline2Cards,
    TopArrow
  },
  
  methods: {
    getHeight() {
      var x = document.getElementById("intromanu");
      console.log(x);
      return x.scrollHeight;
    }
  },

  data() {
    return {
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
#h1part {
  margin-left: 5%;
}

#project1 {
  margin: 2% 2% 2% 14%
}

.toppart {
  width: 80vw;
  margin: 0 auto;
}

#intropart {
  width: 45%;
  float: left;
}

#intropicpart {
  border: 2px solid black;
  width: 45%;
  height: auto;
  float: right;
}

.home-links a {
  margin-right: 1rem;
}

figure {
  margin: 0;
}
</style>