<template>
  <div>    
    <section class="container">
        <div class="center-container" :style="{ backgroundImage: `url(${require('~/../static/images/background-heli.svg')})`}">
            <h1>Test contact Info</h1>
            <g-image :src="`url(${require('~/../static/images/background-heli.svg')})`"/>
        </div>
    </section>  
    <ModuleHeadlineForm
      :content="form.content"
    />
  </div>
</template>

<script>
import Button from '~/components/Button.vue'
import ModuleHeadlineForm from '~/components/ModuleHeadlineForm.vue'

export default {
  metaInfo: {
    title: 'XLaero - Contact'
  },
  components: {
    Button,
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