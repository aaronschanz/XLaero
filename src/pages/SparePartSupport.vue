<template>
  <div>
    <section class="container" :style="{ backgroundImage: `url(${require('~/../static/images/background-heli.svg')})`}">
      <div class="toppart">
        <p id="part"></p>
          <p id='intropart'><pre style="font-family: var(--font-family)">
            We offer a comprehesive support program on 
            entire CT700 engine platforms. We include 
            servicable parts with the goal to optimize 
            your overhaul costs. Get in touch with us 
            for a list of available spare parts. 
          </pre></p>
        <img src="http://xlaero.ca/new/images/20190327_201413527_iOS 1.png" alt="Unsplash" id="intropicpart">
        <Button id="partbutton" src="../contact#info">Contact us</Button>
      </div>
      <div class="clear"></div>
      <div class="middlepart">
        <h1>Spare Part Gallery</h1>
        <img id ="sparepart1" src="http://xlaero.ca/new/images/sparepart1.png">
        <img id ="sparepart2" src="http://xlaero.ca/new/images/sparepart2.png">
        <img id ="sparepart3" src="http://xlaero.ca/new/images/sparepart3.png">
        <img id ="sparepart4" src="http://xlaero.ca/new/images/spareparts3.png">
        <img id ="sparepart5" src="http://xlaero.ca/new/images/sparepart5.png">
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
.clear { clear:both; }

#partbutton {
  float: left;
  margin-left: 25%;
}

#h1part {
  margin-left: 5%;
  margin-top: 5%;
}

.middlepart {
  margin-left: 5%;
  display: inline-block;
}

#sparepart1, #sparepart2 {
  width: 48%;
  height: auto;
}

#sparepart5 {
  width: 40%;
  height: auto;
}

#sparepart1, #sparepart2, #sparepart3, #sparepart4, #sparepart5 {
  padding: 10px;
}

.toppart {
  width: 90vw;
  margin: 0 auto;
}

#intropart {
  font-size: 120%;
  float: left;
}

#intropicpart {
  width: 50%;
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