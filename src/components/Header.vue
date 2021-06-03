<template>
    <div>
        <header class="header">
            <g-link to="/" class="logo" @click.native="$root.$emit('openMenu');">
                <g-image src="~/../static/images/xlaero-logo-green.svg" alt="XLaero aerospace engineering" />
            </g-link>
            <div class="home" @click="$root.$emit('openMenu');">Home</div>
            <div class="news" @click="$root.$emit('openMenu');">News</div> 
            <div class="aboutus" @click="$root.$emit('openMenu');">About Us</div>
            <div class="resources" @click="$root.$emit('openMenu');">Resources</div>
            <div class="contactus" @click="$root.$emit('openMenu');">Contact Us</div>
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
        flex-wrap: wrap;
        align-items: center;
        justify-content: flex-end;
        //padding: var(--spacing-7) var(--spacing-10); Already set on .hero

        // position: absolute;
        // left: 0;
        // top: 0;
        // z-index: 3;
    }

    .logo {
        display: block;
        width: 180px;
        margin-right: auto;

        img {
            width: 100%;
        }
    }

    .home:hover, .news:hover, .aboutus:hover, .resources:hover, .contactus:hover {
        background-color: rgba(255, 255, 255, 0.096);
    }
    
    .home {
        display: inline-block;
        padding: var(--spacing-4) var(--spacing-6);
        background-color: rgba(255, 255, 255, 0.199);
        color: var(--white-color);
        cursor: pointer;
        // border-radius: var(--border-radius);
    }

    .news {
        display: inline-block;
        padding: var(--spacing-4) var(--spacing-6);
        background-color: rgba(255, 255, 255, 0.199);
        color: var(--white-color);
        cursor: pointer;
        // border-radius: var(--border-radius);
    }

    .aboutus {
        display: inline-block;
        padding: var(--spacing-4) var(--spacing-6);
        background-color: rgba(255, 255, 255, 0.199);
        color: var(--white-color);
        cursor: pointer;
        // border-radius: var(--border-radius);
    }

    .resources {
        display: inline-block;
        padding: var(--spacing-4) var(--spacing-6);
        background-color: rgba(255, 255, 255, 0.199);
        color: var(--white-color);
        cursor: pointer;
        // border-radius: var(--border-radius);
    }

    .contactus {
        display: inline-block;
        padding: var(--spacing-4) var(--spacing-6);
        background-color: rgba(255, 255, 255, 0.199);
        color: var(--white-color);
        cursor: pointer;
        // border-radius: var(--border-radius);
    }
    
</style>