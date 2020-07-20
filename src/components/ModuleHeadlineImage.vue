<template>
    <section class="container">
        <div v-for="(content, i) in content" :key="i" class="center-container" :style="{ backgroundImage: `url(${require('~/assets/images/background-dots2.svg')})`}">
            <h1>{{ content.headline }}</h1>
            <img src="https://images.unsplash.com/photo-1522548234746-ff8a206aa0b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=635&q=80">
        </div>
    </section>
</template>

<script>
import Button from '~/components/Button.vue'

export default {
    name: "ModuleHeadlineForm",
    props: ['content'],
    components: {
        Button
    }
}
</script>

<style lang="scss" scoped>
    .form-container {
        background-position: top left;
        background-repeat: no-repeat;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: var(--spacing-25);

        h1 {
            width: auto;
            max-width: 600px;
            margin-left: var(--spacing-25);
        }
    }
    .contact-form {        
        border: var(--border-width) solid var(--secondary-color);
        padding: var(--spacing-10);
        min-width: unquote("min(700px, 100%)");
        // margin: var(--spacing-15) var(--spacing-50);
        
        form {
            display: grid;
            grid-template-areas:
            "firstName lastName"
            "email email"
            "message message"
            "button button";
            grid-gap: var(--spacing-5);
        }
        
        input, textarea{
            padding: var(--spacing-2);
            border: none;
            border-bottom: var(--border-width) solid var(--secondary-color);;
            font-family: var(--font-family);
            font-size: 1rem;
        }

        .firstName {
            grid-area: firstName;
        }

        .lastName {
            grid-area: lastName;
        }

        input[type=email] {
            grid-area: email;
        }

        .button {
            grid-area: button;
        }

        ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
            color: var(--secondary-color);
            font-weight: bold;
            opacity: 1; /* Firefox */
            }

        :-ms-input-placeholder { /* Internet Explorer 10-11 */
            color: var(--secondary-color);
            font-weight: bold;
        }

        ::-ms-input-placeholder { /* Microsoft Edge */
            color: var(--secondary-color);
            font-weight: bold;
        }
        textarea {
            grid-area: message;
            height: 200px;
            box-sizing: border-box;
            background-color: var(--basic-color-lighten-7);
            resize: none;
        }
    }
</style>