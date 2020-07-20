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
        display: block;
        width: 100%;
        height:  calc(32vw - var(--spacing-10) * 3);
        min-height: 360px;
        object-fit: cover;
    }

    &__content {
        padding: var(--spacing-10);
        background-position: right;
        background-repeat: no-repeat;
        
        h3 {
            margin-top: 0;
        }
    }

    // equals .card--no-border
    &--no-border {
        border: 0;
        padding: 0;
    }

    // equals .card--full-size
    // TODO: Probably replaced by grid-template-columns property in .card-container 
    // &--full-size {
    //     width: 50%;
    //     height: 100%;
    // }

    // equals .card--single-big-image
    &--single {
        display: grid;
        grid-template-columns: 1fr 1fr;
        min-height: 100vh;

    }

    &--thin-image {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(unquote("min(480px, 100%)"), 1fr));
    }

    .card__image {
        max-height: 100vh;

        img {
            object-fit: cover;
            width: 100%;
            height: 100%;
        }
    }
}
</style>