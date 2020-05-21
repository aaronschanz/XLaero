# xlaero

## 🚀 Setup Guide

### 1. Install Gridsome CLI tool if you don't have

```
$ npm install --global @gridsome/cli
```

### 2. Get the project running

1. `$ npm install` to install **/node_modules** folder with all npm packages.
2. `$ gridsome develop` to start a local dev server at `http://localhost:8080`
3. Happy coding 🎉🙌

## ✨ Initial Setup Guide 

### 1. Install Gridsome CLI tool if you don't have

```
$ npm install --global @gridsome/cli
```

### 2. Create a Gridsome project

1. `$ gridsome create my-gridsome-site` to create a new project.
2. `$ cd my-gridsome-site` to open folder.

### 3. Get the project running
* `$ gridsome develop` to start a local dev server at `http://localhost:8080`

### 4. Setup ESLint + AirBnB
⚠️ For a better developing experience you can install [ESLint VSCode Extension](https://github.com/Microsoft/vscode-eslint). 
1. To install ESLint + AirBnB you can follow the [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb).
2. If you're using **npm 5+**, use this shortcut
```
$ npx install-peerdeps --dev eslint-config-airbnb
```

### 5. Setup GhostCMS
1. Install the [@gridsome/source-ghost](https://gridsome.org/plugins/@gridsome/source-ghost) plugin via `$ npm install @gridsome/source-ghost`.
2. Follow the guide: [How to install Ghost locally](https://ghost.org/docs/install/local/).
3. Install Ghost-CLI `$ npm install ghost-cli@latest -g`.
4. Install Ghost: In your terminal, `cd` into an empty directory and run the install command `ghost install local`
5. Start & Stop: `ghost start`, `ghost stop`, `ghost log` views logs and `ghost ls` to list all running Ghost blogs.

### 6. Connect to GhostCMS
1. To get started fetching the content from Ghost, install the official [Ghost source plugin](https://gridsome.org/plugins/@gridsome/source-ghost): `npm install @gridsome/source-ghost --save`.
2. Once installed, you'll need to add the plugin to the `gridsome.config.js` file:
```
plugins: [
    {
      use: '@gridsome/source-ghost',
      options: {
        baseUrl: 'http://localhost:2368',
        contentKey: process.env.GHOST_CONTENT_KEY,
        routes: {
          post: '/:slug',
          page: '/:slug'
        }
      }
    }
  ]
```
3. The `baseUrl` references to the Ghost admin interface (that you run with `ghost start`).
4. A key (`contentKey`) can be provided by creating an integration within the Ghost Admin. Navigate to Integrations and click "Add new integration". Name the integration, something related like "Gridsome", click create.
5. Copy the key and save it into the `.env`.

#### GhostCMS & Hubspot
Ghost integrates with Hubspot. See the [Hubspot + Ghost](https://ghost.org/integrations/hubspot/) page.

## Deployment
1. Use `$ gridsome build` to generate static files in a **/dist** folder
2. To deploy the project on Netlify read the [Deploy to Netlify Docs](https://gridsome.org/docs/deploy-to-netlify/).

## Roadmap
1. Inspiration (websites that Tim really likes)
2. Apply design patterns to [Figma web components](https://www.figma.com/file/GdIpDPOgIiYXmiQT2CQfVP/Wireframing-in-Figma?node-id=0%3A1)
3. Folder Structure
4. Start coding

## Tech Stack
* [Vue.js](https://vuejs.org/v2/guide/installation.html) + [Gridsome](https://gridsome.org)
* ESLint + AirBnB (We won't use Prettier since it doesn't play well with AirBnB's configs)
* [Storybook](https://storybook.js.org) + [Style Dictionary](https://amzn.github.io/style-dictionary/#/)
* [Vue Animation](https://vuejs.org/v2/guide/transitions.html#JavaScript-Hooks)
* Sass + [CSS Modules](https://vue-loader.vuejs.org/guide/css-modules.html#usage)
* CMS: [GhostCMS](https://ghost.org/marketplace/) & [Ghost + Gridsome API](https://ghost.org/docs/api/v3/gridsome/)

## Styleguide
* [Airbnb JavaScript Style Guide() {](https://github.com/airbnb/javascript) *(You will automatically follow this guide thanks to the already installed [eslint-config-airbnb Docs](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) package)*
* [Airbnb CSS / Sass Styleguide](https://github.com/airbnb/css)
* [Airbnb React/JSX Style Guide](https://github.com/airbnb/javascript/tree/master/react)
* [Airbnb CSS-in-JavaScript Style Guide](https://github.com/airbnb/javascript/tree/master/css-in-javascript)

## Design

### Collections
* [Best Website Gallery](https://bestwebsite.gallery)
* [Marketing Inspo](https://www.marketinginspo.com/)
* [Muzli](https://medium.muz.li)
* [Daily Inspo](https://theinspirationgrid.com)
* [UI Movement](https://uimovement.com/tag/landing-page/)
* [App Screenshots](https://www.uisources.com/screenshots)
#### Customers and Vendors
* [Talon Copters](http://www.taloncopters.com/)
* [meeker](https://meekeraviation.com/)
* [recoil](http://recoil-usa.com/)
* [Mustang](https://www.mustanghelicopters.com/)
* [ACS](https://acs-composites.com/)
* [Helicarrier](http://www.helicarrier.com/)
* [Optima](https://www.optima-aero.ca/)
* [McDermott](https://www.mcdermottaviation.com/)

### Inspiration
* [squarefoot](https://www.squarefoot.com/) simple lines design
* [visla](https://visla.co/) landing page without header image
* [Interactive columns](https://uimovement.com/design/interactive-columns/) maybe for columns instead of big header picture?
* [Rivian](https://rivian.com) Slightly rough look
* [Staune Haus](https://www.staune.haus/?ref=bestwebsite.gallery) Bold Fonts
* [Before After Slider](https://zurb.com/playground/twentytwenty)
