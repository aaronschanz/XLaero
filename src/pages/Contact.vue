<template>
  <div>    
    <section class="container">
      <h1><a id="info">Here is all the contact info you'll need.</a></h1>
      <!-- <h6>{{ subheading }}</h6> -->
      <div class="card-container">
        <Card>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2615.849840017946!2d-122.80306818414189!3d49.032462896387955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485c348f0fe3629%3A0x5042a143e698710c!2sXL%20Aero!5e0!3m2!1sen!2sca!4v1596052554539!5m2!1sen!2sca" frameborder="1" style="border: 1px solid #18C386;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            <h5 class="contact-info">Shipping & Mailing Address</h5>
            <div class="contact-info">
              <h1>XLaero Inc.</h1>
              <p>17289 2 Ave<br>
              Surrey, BC<br>
              V3Z9P9, Canada</p>
            </div>
        </Card>
        <Card>
            <img src="http://xlaero.ca/new/images/contact.jpeg">
            <h5 class="contact-info">Contact Info</h5>
            <div class="contact-info">
                <p>Email: tim@xlaero.ca</p>
                <p>Tel.: 778-988-1545</p>
            </div>
            <Button src="#contact-form">Contact Form</Button>
        </Card>
      </div>
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