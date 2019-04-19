import pkg from './package'

export default {
    mode: 'universal',
    router: {

        scrollBehavior: async(to, from, savedPosition) => {
            if (savedPosition) {
                return savedPosition
            }

            const findEl = async(hash, x) => {
                return document.querySelector(hash) ||
                    new Promise((resolve, reject) => {
                        if (x > 50) {
                            return resolve()
                        }
                        setTimeout(() => { resolve(findEl(hash, ++x || 1)) }, 100)
                    })
            }

            if (to.hash) {
                let el = await findEl(to.hash)
                if ('scrollBehavior' in document.documentElement.style) {
                    return window.scrollTo({ top: el.offsetTop, behavior: 'smooth' })
                } else {
                    return window.scrollTo(0, el.offsetTop)
                }
            }

            return { x: 0, y: 0 }
        },

        // base: process.env.NODE_ENV !== 'development' ? '/curiousnuxt/' : '/'
    },

    /*
     ** Headers of the page
     */
    head: {
        title: 'Curious - Solving Brand, Marketing & Product problems for small businesses',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Curious is a group of experienced consultants helping business leaders overcome brand, marketing, and product challenges. We help companies discover their best opportunities for growth.' },
            { hid: 'keywords', name: 'keywords', content: 'product design, branding, marketing, coaching, consulting, design sprint, review, strategy, digital, identity, story, minneapolis, minnesota, twin cities, hightlight center, ux, interface' },

            { hid: 'og:type', name: 'og:type', content: 'website' },
            { hid: 'og:url', name: 'og:url', content: 'https://discovercurious.com' },
            { hid: 'og:title', name: 'og:title', content: 'Curious - Solving Brand, Marketing & Product problems for small businesses' },
            { hid: 'og:description', name: 'og:description', content: 'Curious is a group of experienced consultants helping business leaders overcome brand, marketing, and product challenges. We help companies discover their best opportunities for growth.' },

            { hid: 'og:image', name: 'og:image', content: 'https://discovercurious.com/images/shareLogo.png' },
            { hid: 'og:image:type', name: 'og:image:type', content: 'image/png' },
            { hid: 'og:image:width', name: 'og:image:width', content: '1080' },
            { hid: 'og:image:height', name: 'og:image:height', content: '800' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            // { rel: 'stylesheet', href: '//brick.freetls.fastly.net/Source+Sans+Pro:300,400,600,700/Playfair+Display:400' }
            // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700|Playfair+Display' }
        ],
        script: [{
            src: "https://code.jquery.com/jquery-3.4.0.min.js",
            type: "text/javascript"
        }, ]
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
    plugins: [
        { src: '~/plugins/vue-lazy-background', mode: 'client' },
        { src: '~/plugins/after-route.js', mode: 'client' },
    ],

    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        '@nuxtjs/google-analytics',
    ],
    /*
     ** Axios module configuration
     */
    axios: {
        // See https://github.com/nuxt-community/axios-module#options
    },

    googleAnalytics: {
        id: 'UA-138299135-1',
        dev: false,
    },

    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {}
    },
    render: {
        static: {
            // maxAge: 1000 * 60 * 60 * 24 * 7
        }
    }
}