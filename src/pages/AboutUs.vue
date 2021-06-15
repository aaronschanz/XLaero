<template>
  <div>    
    <section class="container" :style="{ backgroundImage: `url(${require('~/../static/images/background-heli.svg')})`}">
      <h1><a id="info">Our Vision</a></h1>
      <h1><a id="info2">Our Mission</a></h1>
      <p id='vision'><pre>
        To be an original Equipment Manufacturer for the next generation of integrated hybrid turbo-electric 
        power and propulsion systems. 
        
        To be a highly capable engineering company that offers affordable and effective 
        solutions for Legacy Aircraft.</pre></p>

    </section>  
    <ModuleHeadlineForm
      :content="form.content"
    />
  </div>
</template>

<script>
import Button from '~/components/Button.vue'
import Card from '~/components/Card.vue'
import ModuleHeadlineForm from '~/components/ModuleHeadlineForm.vue'

export default {
  metaInfo: {
    title: 'XLaero - Contact'
  },
  components: {
    Button,
    Card,
    ModuleHeadlineForm
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
          }
        ]
      }
    }
  }
}
</script>
<style lang="scss" scoped>
    #info {
      display: flex;
      float: left;
      padding-left: 15vw;
    }
    
    #info2 {
      display: flex;
      float: right;
      padding-right: 15vw;
    }

    #vision {
      display: flex;
      padding-right: 55%;
      font-family: var(--font-family);
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
</style>