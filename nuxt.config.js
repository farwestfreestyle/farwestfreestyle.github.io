import colors from 'vuetify/es5/util/colors';
import webpack from 'webpack';
import moment from 'moment';
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:400,800|Titillium+Web:400,600,900&display=swap' },
      { rel: 'apple-touch-icon-precomposed', sizes: '57x57', href: 'favicon-144.png' },
      { rel: 'apple-touch-icon-precomposed', sizes: '72x72', href: 'favicon-144.png' },
      { rel: 'apple-touch-icon-precomposed', sizes: '114x114', href: 'favicon-144.png' },
      { rel: 'apple-touch-icon-precomposed', sizes: '144x144', href: 'favicon-144.png' },
      { rel: 'icon', type: 'image/vnd.microsoft.icon', sizes: '32x32 48x48', href: 'favicon.ico' },
      { rel: 'icon', sizes: '128x128', href: 'favicon.icns' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
    ]
  },
  store: 'Modules',
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/vuelidate'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    //'@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
  },
  /*
  ** Build configuration
  */
  build: {
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          'foo': '"bar"'
        }
      })
    ],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
