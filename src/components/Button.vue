<template>
    <a v-if="src" :href="src" class="button">
        <slot/>
    </a>
    <div v-else class="button">
        <slot/>
    </div>
</template>

<script>
export default {
  name: 'Button',
  props: ['src']
}
</script>

<style lang="scss" scoped>
.button {
    width: max-content;
    border: var(--border);
    padding: var(--spacing-2) var(--spacing-3);
    
    font-weight: bold;
    text-transform: uppercase;
    color: var(--secondary-color-darken-1);
    letter-spacing: 0.5px;
    text-decoration: none;

    margin-top: var(--spacing-5);
    margin-left: auto;
    margin-right: 0;
    display: inherit;

    cursor: pointer;

    transition: var(--duration) var(--timing);

    &:hover {
        background-color: var(--secondary-color-lighten-5);
    }
}
</style>