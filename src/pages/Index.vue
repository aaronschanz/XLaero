<!-- test> -->
<template>
  <div>
    <!--<div class="container-arrow">
      <a data-scroll href="#contact">
        <div class="arrow"></div>
      </a>
    </div>-->
    <div class ="HeadlineImage">
        <ModuleHeadlineImage
        :content="header.content"
    />
    </div>
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
// potential strapi query
// <page-query>
// query {
//   posts: allStrapiPost {
//     edges {
//       node {
//           id
//           title
//           subtitle
//           article
//           image {
//             url
//             caption
//           }
//       }
//     }
//   }
// }
// </page-query>
// <ModuleHeadline2Cards 
//       :headline="card2Module.headline" 
//       :subheading="card2Module.subheading"
//       :cards="card2Module.cardsContent"
//     />
//     <ModuleHeadline3Cards 
//       :headline="card3Module.headline" 
//       :subheading="card3Module.subheading"
//       :cards="card3Module.cardsContent"
//     />
//     <Module2ImageText 
//       :cards="container2cModule.containerContent"
//     />
//     <ModuleImageText 
//       :modifiers="imageThin.modifiers"
//       :cards="imageThin.content"
//     />
//     <ModuleImageText 
//       :modifiers="imageBig.modifiers"
//       :cards="imageBig.content"
//     />
//     <ModuleHeadlineForm
//       :content="form.content"
//     />
//     <ModuleHeadlineImage
//       :content="headline.content"
//     />

import Button from '~/components/Button.vue'
import Card from '~/components/Card.vue'
import ModuleHeadline2Cards from '~/components/ModuleHeadline2Cards.vue'
import ModuleHeadline3Cards from '~/components/ModuleHeadline3Cards.vue'
import Module2ImageText from '~/components/Module2ImageText.vue'
import ModuleImageText from '~/components/ModuleImageText.vue'
import ModuleHeadlineForm from '~/components/ModuleHeadlineForm.vue'
import ModuleHeadlineImage from '~/components/ModuleHeadlineImage.vue'

export default {
  metaInfo: {
    title: 'XLaero'
  },
  components: {
    Button,
    Card,
    ModuleHeadline2Cards,
    ModuleHeadline3Cards,
    Module2ImageText,
    ModuleImageText,
    ModuleHeadlineForm,
    ModuleHeadlineImage
  },
  data() {
    return {
    // ['card--no-border', 'card--full-size', 'card--single']
      card2Module: {
        headline: "Every part makes a system work well. That’s us.",
        subheading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
        cardsContent: [
          {
            headline: "ASd asd 1.",
            img: {
              src: "https://images.unsplash.com/photo-1592330169142-b488cfd72b2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80",
              caption: "Some image caption"
            },
            text: "lorem ipsum dolor site amet.",
            button: {
              label: "Learn More",
              url: "http://xlaero.ca"
            } 
          },
          {
            headline: "ASd asd 2.",
            img: {
              src: "https://images.unsplash.com/photo-1504814532849-cff240bbc503?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1868&q=80",
              caption: "Some image caption"
            },
            text: "green leaves.",
            button: {
              label: "Learn More"
            } 
          },
          {
            headline: "ASd asd 2.",
            img: {
              src: "https://images.unsplash.com/photo-1552140498-f448ffb1301f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=761&q=80",
              caption: "Some image caption"
            },
            text: "green leaves.",
            button: {
              label: "Learn More"
            } 
          },
          {
            headline: "ASd asd 2.",
            img: {
              src: "https://images.unsplash.com/photo-1592330169142-b488cfd72b2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80",
              caption: "Some image caption"
            },
            text: "green leaves.",
            button: {
              label: "Learn More"
            } 
          }
        ],
      },
      card3Module: {
        headline: "Jonathan ist ein toller Mitarbeiter",
        subheading: "Lukas natürlich auch.",
        cardsContent: [
          {
            headline: "ASd asd 3.",
            text: "lorem ipsum dolor site amet.",
            button: {
              label: "Learn More",
              url: "http://xlaero.ca"
            } 
          },
          {
            headline: "ASd asd 4.",
            text: "green leaves.",
            button: {
              label: "Learn More"
            } 
          },
          {
            headline: "ASd asd 5.",
            text: "green leaves.",
            button: {
              label: "Learn More"
            } 
          }
        ]
      },
      container2cModule: {
        containerContent: [
          {
            img: {
              src: "https://images.unsplash.com/photo-1592330169142-b488cfd72b2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80",
              caption: "test caption"
            },
            headline: "was ein Spass",
            text: "<p>20 years of bottom line improvement expertise gained from designing, certifying, supporting, and maintaining aircraft engines! </br> 20 years of bottom line improvement expertise gained from designing, certifying, supporting, and maintaining aircraft engines!</p>",
            button: {
              url: "",
              label: "Learn More"
            }
          },
          {
            img: {
              src: "https://images.unsplash.com/photo-1522548234746-ff8a206aa0b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=635&q=80",
              caption: ""
            },
            headline: "was ein Spass2",
            text: "<p>20 years of bottom line improvement expertise gained from designing, certifying, supporting, and maintaining aircraft engines! </br> 20 years of bottom line improvement expertise gained from designing, certifying, supporting, and maintaining aircraft engines! </br> 20 years of bottom line improvement expertise gained from designing, certifying, supporting, and maintaining aircraft engines!</p>",
            button: {
              url: "",
              label: "Learn Even More"
            }
          }

        ]
      },
      imageThin: {
        modifiers: "card--thin-image",    
        content: [
          {
            img: {
              src: "https://images.unsplash.com/photo-1547497126-6e02a28ff877?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=680&q=80",
              caption: "test caption"
            },
            headline: "imageThin",
            text: "<p>20 years of bottom line improvement expertise gained from designing, certifying, supporting, and maintaining aircraft engines! </br> 20 years of bottom line improvement expertise gained from designing, certifying, supporting, and maintaining aircraft engines!</p>",
            button: {
              url: "",
              label: "Learn More"
            }
          },
        ]
      },
      imageBig: {
        modifiers: "card--image-right",
        content: [
          {
            img: {
              src: "https://images.unsplash.com/photo-1547497126-6e02a28ff877?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=680&q=80",
              caption: "test caption"
            },
            headline: "imageBig",
            text: "<p>20 years of bottom line improvement expertise gained from designing, certifying, supporting, and maintaining aircraft engines! </br> 20 years of bottom line improvement expertise gained from designing, certifying, supporting, and maintaining aircraft engines!</p>",
            button: {
              url: "",
              label: "Learn More"
            }
          },
        ]
      },
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
      },
      headline: {
        content: {
            headline: "Specialized Tool & Test Equipment to keep your aircraft running.",
            img: {
              src: "http://xlaero.ca/new/images/FNTS.png",
              caption: "test caption"
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
