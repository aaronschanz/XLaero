// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: '@gridsome/source-ghost',
      options: {
        baseUrl: 'http://localhost:2368',
        contentKey: '59fa8c775bbee3f1cb348b7416',
        routes: {
          post: '/:slug',
          page: '/:slug'
        }
      }
    }
  ]
}
