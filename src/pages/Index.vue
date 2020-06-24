<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" />

    <h1>Hello, world!</h1>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores
    </p>
    <Card>
      <img width="600" src="https://images.unsplash.com/photo-1593004543863-3899599aec9d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1974&q=80" alt="">
      <h5>Hallo</h5>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores
      </p>
      <Button>Contact us</Button>
    </Card>
    <h1>the brown fox jumps over the whatever h1</h1>
    <h2>title big 2</h2>
    <h3>title big 2</h3>
    <h4>title big 2</h4>
    <h5>title big 2</h5>
    <h6>title big 2</h6>


    <!-- potential strapi data
      <section>
      <div class="post" v-for="post in $page.posts.edges" :key="post.node.id">
        <g-image class="post__img" :src="`http://localhost:1337${post.node.image.url}`" :title="post.node.image.caption" />
        <g-link :to="`/blog/${post.node.id}`" class="post__info">
          <div>{{ post.node.article }}</div>
        </g-link>
      </div>
    </section> -->

    <p class="home-links">
      <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p>

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

export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  components: {
    Button,
    Card
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
