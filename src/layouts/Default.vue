<template>
  <div>
    <Header/>
    <Hero/>
    <main>
      <slot/>
    </main>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Header from '~/components/Header.vue'
import Hero from '~/components/Hero.vue'

export default {
  components: {
    Header,
    Hero
  }
}
</script>

<style lang="scss">
body {
  position: relative;
  font-family: var(--font-family);
  font-size: var(--font-size);
  background-color: var(--white-color);
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

* {
  box-sizing: inherit;
}

p {
  line-height: 1.5;
}
</style>
