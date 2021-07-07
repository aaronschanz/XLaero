<template>
  <div>
    <section class="container" :style="{ backgroundImage: `url(${require('~/../static/images/background-heli.svg')})`}">
      <div class="topmanu">
        <p id="manu"></p>
          <p id='intromanu'><pre style="font-family: var(--font-family)">
            XL Aero is a Transport Canada Approved CAR 561 
            Organization for the Manufacture and Certification of 
            Aeronautical Products. We are licensed to manufacture 
            both life-limited and critical parts, such as turbine 
            blades. Regardless of the complexity of the job, our 
            team will work with you to provide an engineering 
            solution that fulfills your business’s needs. 
          </pre></p>
          <img id="blades" src="http://xlaero.ca/new/images/20201224_194729887_iOS 1.png">
          <img id="carcert" src="http://xlaero.ca/new/images/CAR.jpg">
          <img id="manupic2" src="http://xlaero.ca/new/images/20190604_205053305_iOS 1.png">
          <img id="manupic1" src="http://xlaero.ca/new/images/daniel-smyth-8lRxZRFR7ig-unsplash 1.png">
          <div class="clear"></div>
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

#manupic1, #manupic2 {
  float: right;
  width: 30%;
  height: auto;
  padding: 10px 0px 10px 5px;
}

#carcert {
  width: 35%;
  height: auto;
  border: 2px solid black;
  float: left;
  margin-top: -2%;
  margin-bottom: 2%;
}

#blades {
  margin-top: 2%;
  width: 40%;
  height: auto;
  float: right;
}
.topmanu {
  width: 80vw;
  margin: 0 auto;
}

#intromanu {
  float: left;
  font-size: 120%;
}

.home-links a {
  margin-right: 1rem;
}

figure {
  margin: 0;
}
</style>