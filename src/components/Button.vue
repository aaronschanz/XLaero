<template>
    <div class="button">
        <slot/>
    </div>
</template>

<script>
export default {
  name: 'Button',
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
    display: inline-block;
    border: var(--border);
    padding: var(--spacing-2) var(--spacing-3);
    
    font-weight: bold;
    text-transform: uppercase;
    color: var(--secondary-color-darken-1);
    letter-spacing: 0.5px;
}
</style>