<template>
    <div>
        <header class="header">
            <g-link to="/" class="logo" @click.native="$root.$emit('openMenu');">
                <g-image src="~/../static/images/xlaero-logo-green.svg" alt="XLaero aerospace engineering" />
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
        //padding: var(--spacing-7) var(--spacing-10); Already set on .hero

        // position: absolute;
        // left: 0;
        // top: 0;
        // z-index: 3;
    }

    .logo {
        display: block;
        width: 180px;

        img {
            width: 100%;
        }
    }

    .menu {
        display: inline-block;
        padding: var(--spacing-4) var(--spacing-6);
        background-color: rgba(255, 255, 255, 0.2);
        color: var(--white-color);
        cursor: pointer;
        // border-radius: var(--border-radius);
    }
</style>