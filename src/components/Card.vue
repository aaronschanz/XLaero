<template>
    <div class="card">
        <slot/>
    </div>
</template>

<script>
export default {
  name: 'Card'
}
</script>

<style lang="scss" scoped>
.card {
    display: inline-block;
    border: var(--border-width) solid var(--basic-color-lighten-4);
    padding: var(--spacing-10);
}
</style>