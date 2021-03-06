/* eslint-disable linebreak-style */
// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// eslint-disable-next-line import/no-unresolved
import DefaultLayout from '~/layouts/Default.vue'
import Vue from 'vue'
import EasySlider from 'vue-easy-slider'


export default function (Vue, { head }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
  Vue.use(EasySlider)


  // Using CDN Fonts (Typekit, Google Fonts, etc). See https://gridsome.org/docs/assets-fonts/
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap',
  });
}
