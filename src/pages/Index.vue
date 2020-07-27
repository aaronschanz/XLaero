<template>
  <div>
    <ModuleHeadline2Cards 
      :headline="card2Module.headline" 
      :subheading="card2Module.subheading"
      :cards="card2Module.cardsContent"
    />
    <ModuleHeadline3Cards 
      :headline="card3Module.headline" 
      :subheading="card3Module.subheading"
      :cards="card3Module.cardsContent"
    />
    <Module2ImageText 
      :cards="container2cModule.containerContent"
    />
    <ModuleImageText 
      :modifiers="imageThin.modifiers"
      :cards="imageThin.content"
    />
    <ModuleImageText 
      :modifiers="imageBig.modifiers"
      :cards="imageBig.content"
    />
    <ModuleHeadlineForm
      :content="form.content"
    />
    <ModuleHeadlineImage
      :content="headline.content"
    />
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
</script>

<style>
.home-links a {
  margin-right: 1rem;
}

figure {
  margin: 0;
}

img {
  max-width: 100%;
}
</style>
