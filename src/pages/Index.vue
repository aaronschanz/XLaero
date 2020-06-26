<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <!-- <g-image alt="Example image" src="~/favicon.png" width="135" /> -->

    <ModuleHeadline2Cards 
      headline="Every part makes a system work well. That’s us." 
      subheading="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
      :cards="cardsContent"
    />
    <ModuleHeadline3Cards 
      headline="Showing 3 cards here" 
      subheading="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
      :cards="cards3Content"
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

  </Layout>
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

export default {
  metaInfo: {
    title: 'XLaero'
  },
  components: {
    Button,
    Card,
    ModuleHeadline2Cards,
    ModuleHeadline3Cards
  },
  data() {
    return {
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
      cards3Content: [
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
