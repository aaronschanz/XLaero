# xlaero

## 🚀 Setup Guide

### 1. Install Gridsome CLI tool if you don't have

```
npm install --global @gridsome/cli
```

### 2. Get the project running

1. `npm install` to install **/node_modules** folder with all npm packages.
2. `gridsome develop` to start a local dev server at `http://localhost:8080`
3. Happy coding 🎉🙌

### 3. Get Strapi running
1. Navigate to `xlaero-cms` (or different project name) root directory via the Terminal.
2. Start Strapi Admin Tool: `npm run develop`.

### 4. Quering data from Strapi in Gridsome
* Use the GraphQL Explorer by opening [http://localhost:8080/___graphql](http://localhost:8080/___graphql). It is helpful to test the output of queries or mutations you want to make.
* To query data from Strapi using GraphQL, use the prefixes `strapi` (single entry) and `allStrapi` (multiple entries). After that, add the API ID of the content type (e.g. `service` becomes `strapiService`).
* Given, you want to query the single entry with the `"id": 1` of the content type `service`, use: 
```
query {
  strapiService(id: 1) {
      name
      id
      description
      image {
        url
      }
  }
}
```
* Given, you want to query multiple/all entries of the content type `service`, use:
```
query {
  allStrapiService {
    edges {
      node {
          name
          id
          description
          image {
            url
          }
      }
    }
  }
}
```
* ⚠️ Be aware that changing data in the Strapi admin requires to re-run gridsome (`ctrl + c` (Mac) and `gridsome develop`).


## ✨ Initial Setup Guide 

### 1. Install Gridsome CLI tool if you don't have

```
npm install --global @gridsome/cli
```

### 2. Create a Gridsome project

1. `gridsome create my-gridsome-site` to create a new project.
2. `cd my-gridsome-site` to open folder.

### 3. Get the project running
* `gridsome develop` to start a local dev server at `http://localhost:8080`

### 4. Setup ESLint + AirBnB
⚠️ For a better developing experience you can install [ESLint VSCode Extension](https://github.com/Microsoft/vscode-eslint). 
1.Follow the [Getting Started Guide](https://eslint.org/docs/user-guide/getting-started) of ESLint to install and init ESLint locally.
2. Answer the questions as follows:
```
? How would you like to use ESLint? To check syntax, find problems, and enforce code style
? What type of modules does your project use? JavaScript modules (import/export)
? Which framework does your project use? React
? Does your project use TypeScript? No
? Where does your code run? Browser
? How would you like to define a style for your project? Use a popular style guide
? Which style guide do you want to follow? Airbnb: https://github.com/airbnb/javascript
? What format do you want your config file to be in? JavaScript
Checking peerDependencies of eslint-config-airbnb@latest
The config that you've selected requires the following dependencies:

eslint-plugin-react@^7.19.0 eslint-config-airbnb@latest eslint@^5.16.0 || ^6.8.0 eslint-plugin-import@^2.20.1 eslint-plugin-jsx-a11y@^6.2.3 eslint-plugin-react-hooks@^2.5.0 || ^1.7.0
? Would you like to install them now with npm? Yes
```
3. Now you should see file called `.eslintrc.js` in your root project folder.
4. Done

### 5. Setup Strapi CMS
1. Install the [@gridsome/source-strapi](https://gridsome.org/plugins/@gridsome/source-strapi) Plugin: `npm install @gridsome/source-strapi --save`
2. Add it to the config file:
```
export default {
  plugins: [
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: 'http://localhost:1337',
        queryLimit: 1000, // Defaults to 100
        contentTypes: ['article', 'user'],
        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
        loginData: {
          identifier: '',
          password: ''
        }
      }
    }
  ]
}
```
3. Install Strapi by following the [Get Started Guide](https://strapi.io/documentation/v3.x/getting-started/quick-start.html).
4. Install Strapi and create a new project: `npx create-strapi-app my-project --quickstart`.
5. Complete the form to create the first Administrator user.
6. If you use GraphQL instead of REST (default), install the GraphQL plugin: `npm run strapi install graphql`. To test, use the GraphQL Playground under [http://localhost:1337/graphql](http://localhost:1337/graphql).
7. Restart your server: `npm run develop`.

## Deployment
1. Use `gridsome build` to generate static files in a **/dist** folder
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

## Screendesign
[Figma Screendesign xlaero](https://www.figma.com/file/dguv204AYWZ4blSaBIGPfE/xlaero-ui?node-id=0%3A1)

## Design

### Lead Design
* [squarefoot](https://www.squarefoot.com/) For bordered boxes & Font Family.
* [Rivian](https://rivian.com) For structure of the website & page transition.
* [Interactive columns](https://uimovement.com/design/interactive-columns/) For 4 column hero section.
* [Google Fonts](https://fonts.google.com/specimen/Montserrat?query=mon#pairings) Montserrat Font

### Collections
* [Best Website Gallery](https://bestwebsite.gallery)
* [Marketing Inspo](https://www.marketinginspo.com/)
* [Muzli](https://medium.muz.li)
* [Daily Inspo](https://theinspirationgrid.com)
* [UI Movement](https://uimovement.com/tag/landing-page/)
* [App Screenshots](https://www.uisources.com/screenshots)

### Customers and Vendors
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
* [Unity](https://unity.com/de) 4 Boxes
* [Bewegen](https://bewegen.com/de) Lines, numbers and edgy boxes
* [Wordpress Themes](https://drfuri.com/intro/baroque/) Bold & Edgy
