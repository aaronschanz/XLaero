<!-- test> -->
<template>
  <div>
    <!--<div class="container-arrow">
      <a data-scroll href="#contact">
        <div class="arrow"></div>
      </a>
    </div>-->
    <IndexHeadline
      :content="header.content"
    />  
    <section class="container" id="contact" style="display: none">
      <h1>Here is all the contact info you'll need.</h1>
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
    <!-- potential strapi data
      <section>
      <div class="post" v-for="post in $page.posts.edges" :key="post.node.id">
        <g-image class="post__img" :src="`http://localhost:1337${post.node.image.url}`" :title="post.node.image.caption" />
        <g-link :to="`/blog/${post.node.id}`" class="post__info">
          <div>{{ post.node.article }}</div>
        </g-link>
      </div>
    </section> -->
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

export default {
  metaInfo: {
    title: 'XLaero'
  },
  components: {
    IndexHeadline,
    Hero
  },
  data() {
    return {
      header: {
        content:
          {
            headline: "Every part makes a system work well. That's us.",
            img: {
              src: "https://images.unsplash.com/photo-1546277963-e15afef0454a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGFpcnBsYW5lJTIwaW4lMjB0aGUlMjBza3l8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
              caption: ""
            }
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
