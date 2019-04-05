import pkg from './package'

export default {
    mode: 'universal',
    router: {
        base: process.env.NODE_ENV !== 'development' ? '/curiousnuxt/' : '/'
    },

    /*
     ** Headers of the page
     */
    head: {
        title: 'Curious - Solving Brand, Marketing & Product problems for small businesses',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' },
            { rel: 'stylesheet', href: '//brick.freetls.fastly.net/Source+Sans+Pro:300,400,600,700/Playfair+Display:400' }
            //{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700|Playfair+Display' }
        ]
    },

    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },

    /*
     ** Global CSS
     */
    css: [
        '@/assets/scss/normalize.scss',
        '@/assets/scss/style.scss'
    ],

    /*
     ** Plugins to load before mounting the App
     */
    plugins: [],

    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
    ],
    /*
     ** Axios module configuration
     */
    axios: {
        // See https://github.com/nuxt-community/axios-module#options
    },

    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {}
    }
}