<template>
    <section class="container" :style="{ backgroundImage: `url(${require('~/../static/images/background-heli.svg')})`}">
        <div v-for="(content, i) in content" :key="i" class="form-container" :style="{ backgroundImage: `url(${require('~/../static/images/background-circle.svg')})`}">
            <h1>{{ content.headline }}</h1>
            <div class="contact-form" id="contact-form">
                <form method="post" action="contact.php">
                    <input type="text" placeholder="First Name" class="firstName" required>
                    <input type="text" placeholder="Last Name" class="lastName" required>
                    <input type="email" placeholder="Email-Address" required>
                    <input type="text" placeholder="Subject" class="subject" required>
                    <textarea placeholder="Message"></textarea>
                    <Button :src="content.button.url">{{ content.button.label }}</Button> <!-- Figure out way to send email form -->
                </form>
            </div>
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
        background-color: var(--secondary-color);
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
            "email subject"
            "message message"
            "button button";
            grid-gap: var(--spacing-5);
        }
        
        input, textarea{
            color: white;
            padding: var(--spacing-2);
            border: none;
            border-bottom: var(--border-width) solid white;
            //border-bottom: var(--border-width) solid var(--secondary-color);
            font-family: var(--font-family);
            font-size: 1rem;
            background-color: var(--secondary-color);
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
            color: var(--primary-color);
        }

        ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
            color: white;
            //color: var(--secondary-color);
            font-weight: bold;
            opacity: 1; /* Firefox */
            }

        :-ms-input-placeholder { /* Internet Explorer 10-11 */
            color: white;
            //color: var(--secondary-color);
            font-weight: bold;
        }

        ::-ms-input-placeholder { /* Microsoft Edge */
            color: white;
            //color: var(--secondary-color);
            font-weight: bold;
        }
        textarea {
            grid-area: message;
            height: 200px;
            box-sizing: border-box;
            resize: none;
        }
    }
</style>