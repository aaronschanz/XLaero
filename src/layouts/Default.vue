<template>
  <div>
    <Header/>
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

export default {
  components: {
    Header
  }
}
</script>

<style lang="scss">
body {
  position: relative;
  font-family: var(--font-family);
  background-color: var(--white-color);
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

* {
  box-sizing: inherit;
}
</style>
