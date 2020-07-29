<template>
    <div>
        <header class="header">
            <g-link to="/" class="logo" @click.native="$root.$emit('openMenu');">
                <g-image src="~/../static/images/xlaero-logo.svg" alt="XLaero aerospace engineering" />
            </g-link>
            <div class="menu" @click="$root.$emit('openMenu');">Menu</div>
        </header>
    </div>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style lang="scss" scoped>
    .header {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: var(--spacing-10);

        position: absolute;
        left: 0;
        top: 0;
        z-index: 3;
    }

    .logo {
        display: block;
        width: 220px;
    }

    .menu {
        display: inline-block;
        padding: var(--spacing-4) var(--spacing-6);
        background-color: var(--secondary-color);
        color: var(--white-color);
        cursor: pointer;
        // border-radius: var(--border-radius);
    }
</style>