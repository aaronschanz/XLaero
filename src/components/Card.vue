<template>
    <div :class="`card ${ modifiers.join(' ') }`">
        <slot/>
    </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
      modifiers: {
          type: Array,
          default: () => []
      }
  }
}
</script>

<style lang="scss" scoped>
.card {
    display: inline-block;
    border: var(--border-width) solid var(--basic-color-lighten-4);
    padding: var(--spacing-10);

    img {
        // aspect-ratio: 16 / 9;
        width: 100%;
        height:  calc(32vw - var(--spacing-10) * 3);
        min-height: 360px;
        object-fit: cover;
    }

    &__content {
        padding-left: var(--spacing-10);
        padding-right: var(--spacing-10);
    }

    // equals .card--no-border
    &--no-border {
        border: 0;
        padding: 0;
    }

    // equals .card--full-size
    &--full-size {
        width: 50%;
        height: 100%;
    }
}
</style>