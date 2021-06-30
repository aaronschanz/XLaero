<template>
  <div>    
    <section class="container" :style="{ backgroundImage: `url(${require('~/../static/images/background-heli.svg')})`}">
      <h1><a id="info">Here is all the contact info you'll need.</a></h1>
      <!-- <h6>{{ subheading }}</h6> -->
      <div class="card-container">
        <Card>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d578.0629415341444!2d-122.79823519668675!3d49.06340659677623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485c4b601e6b86f%3A0x9c5dc0da2f8c3a8b!2s221-3388%20Rosemary%20Heights%20Crescent%2C%20Surrey%2C%20BC%20V3S%200K7!5e0!3m2!1sen!2sca!4v1623169130172!5m2!1sen!2sca" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            <h5 class="contact-info">Shipping & Mailing Address</h5>
            <div class="contact-info">
              <h1>XL Aero Inc.</h1>
              <p> #221 - 3388 Rosemary Heights Crescent<br>
              Surrey, BC<br>
              V3S 0K7, Canada</p>
            </div>
        </Card>
        <Card>
            <img src="http://xlaero.ca/new/images/tim.jpg">
            <h5 class="contact-info">Contact Info</h5>
            <div class="contact-info">
                <h1>Tim Blaskovich</h1>
                <p>Email: tim@xlaero.ca</p>
                <p>Tel.: 778-988-1545</p>
            </div>
        </Card> 
      </div>
      <TopArrow/>
    </section>  
    <ModuleHeadlineForm id="form"
      :content="form.content"
    />
  </div>
</template>

<script>

import Button from '~/components/Button.vue'
import Card from '~/components/Card.vue'
import ModuleHeadlineForm from '~/components/ModuleHeadlineForm.vue'
import TopArrow from "~/components/TopArrow.vue"
import queryString from 'querystring'

export default {
  metaInfo: {
    title: 'XLaero - Contact'
  },
  components: {
    Button,
    Card,
    ModuleHeadlineForm,
    TopArrow
  }, 
  beforeCreate() {
    const [hash, params] = window.location.href.split('#')[1].split('?');
    const paramsObj = Object.fromEntries(new URLSearchParams(params).entries());

    const string = JSON.stringify(paramsObj);
    this.subject = string.substr(12, string.length-14);
  },

  data() {
    return {
      form: {
        content: [
          {
            headline: "Do not hesitate to get in touch with us.",
            subject: this.subject,
            button: {
              url: "",
              label: "Send"
            }
          }
        ]
      }
    }
  },
}
</script>
<style lang="scss" scoped>
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