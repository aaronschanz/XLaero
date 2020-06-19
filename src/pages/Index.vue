<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" />

    <h1>Hello, world!</h1>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores
    </p>
    <DefaultButton>Contact us</DefaultButton>

    <section>
      <div class="post" v-for="post in $page.posts.edges" :key="post.node.id">
        <g-image class="post__img" :src="`http://localhost:1337${post.node.image.url}`" :title="post.node.image.caption" />
        <g-link :to="`/blog/${post.node.id}`" class="post__info">
          <h2 class="post__title">{{ post.node.title }}</h2>
          <h4 class="post__subtitle">{{ post.node.subtitle }}</h4>
        </g-link>
      </div>
    </section>

    <p class="home-links">
      <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p>

  </Layout>
</template>

<page-query>
query {
  posts: allStrapiPost {
    edges {
      node {
          id
          title
          subtitle
          article
          image {
            url
            caption
          }
      }
    }
  }
}
</page-query>

<script>
import DefaultButton from '~/components/DefaultButton.vue'

export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  components: {
    DefaultButton
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
