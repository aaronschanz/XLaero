<template>
    <div class="container">
        <div id="text"><pre style="font-family: var(--font-family)"><strong>TCCA Emergency Line:</strong> 1-877-992-6853                                                             <strong>TCCA General Inquiries:</strong> 1-866-995-9737</pre></div>
        <!-- <div class="button">
            <g-link to="/" class="button" @click.native="$root.$emit('openHome');">Home</g-link>
        </div> -->
        <Button src="/">Home</Button>
    </div>
</template>

<script>
import Button from '~/components/Button.vue'

export default {
    name: 'Footer',
    components: {
        Button
    }
}
</script>

<style lang="scss" scoped>
    .container {
        position: absolute;
        background: var(--secondary-color-lighten-2);
        width: 100%;
        height: 300px;
    }

    .button {
        color: white;
        cursor: pointer;
        float: right;
        //margin-right: 20px;
    }

    #text {
        color: white;
        //text-align: center;
    }

</style>