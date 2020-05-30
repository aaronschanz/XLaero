<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" />

    <h1>Hello, world!</h1>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores
    </p>

    <div v-for="entry in $page.allStrapiService.edges" :key="entry.id">
      <h2>{{ entry.node.name }}</h2>
      <p>{{ entry.node.description }}</p>
      <figure>
        <img 
          :src="`http://localhost:1337${entry.node.image.url}`" 
          :alt="entry.node.image.caption" 
          :title="entry.node.image.caption">
        <figcaption>{{ entry.node.image.caption }}</figcaption>
      </figure>
    </div>

    <p class="home-links">
      <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p>

  </Layout>
</template>

<page-query>
query {
  allStrapiService {
    edges {
      node {
          name
          id
          description
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
export default {
  metaInfo: {
    title: 'Hello, world!'
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
