<template>
    <div class="button">
        <slot/>
    </div>
</template>

<script>
export default {
  name: 'DefaultButton',
//   data () {
//     return {
//       message: 'Try change me!'
//     }
//   },
//   methods: {
//     onClick () {
//       this.message = 'Here you go :)'
//     }
//   }
}
</script>

<style lang="scss" scoped>
.button {
    border: var(--border)
}
</style>