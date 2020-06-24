import pkg from './package';
export default {
    mode: 'universal',
    head: {
        htmlAttrs: {
            lang: 'en'
        },
        title: 'Curious - Solving Brand, Marketing & Product problems for small businesses',
        meta: [{
            charset: 'utf-8'
        }, {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1'
        }, {
            hid: 'description',
            name: 'description',
            content: 'Curious is a group of experienced consultants helping business leaders overcome brand, marketing, and product challenges. We help companies discover their best opportunities for growth.'
        }, {
            hid: 'keywords',
            name: 'keywords',
            content: 'product design, branding, marketing, coaching, consulting, design sprint, review, strategy, digital, identity, story, minneapolis, minnesota, twin cities, hightlight center, ux, interface'
        }, {
            hid: 'og:type',
            name: 'og:type',
            content: 'website'
        }, {
            hid: 'og:url',
            name: 'og:url',
            content: 'https://discovercurious.com'
        }, {
            hid: 'og:title',
            name: 'og:title',
            content: 'Curious - Solving Brand, Marketing & Product challenges for small businesses'
        }, {
            hid: 'og:description',
            name: 'og:description',
            content: 'Curious is a group of experienced consultants helping business leaders overcome brand, marketing, and product challenges. We help companies discover their best opportunities for growth.'
        }, {
            hid: 'og:image',
            name: 'og:image',
            content: 'https://discovercurious.com/images/shareLogo.png'
        }, {
            hid: 'og:image:type',
            name: 'og:image:type',
            content: 'image/png'
        }, {
            hid: 'og:image:width',
            name: 'og:image:width',
            content: '1080'
        }, {
            hid: 'og:image:height',
            name: 'og:image:height',
            content: '800'
        }, {
            hid: 'Cache-Control',
            name: 'Cache-Control',
            content: 'public, must-revalidate, proxy-revalidate, max-age=0'
        }],
        link: [{
                rel: 'icon',
                type: 'image/x-icon',
                href: '/favicon.ico'
            } // { rel: 'stylesheet', href: '//brick.freetls.fastly.net/Source+Sans+Pro:300,400,600,700/Playfair+Display:400' }
            // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700|Playfair+Display' }
        ],
        script: [{
            src: "https://code.jquery.com/jquery-3.4.0.min.js",
            type: "text/javascript",
            defer: true
        }, {
            "src": "https://cdn.polyfill.io/v2/polyfill.min.js?features=Element.prototype.classList"
        }, {
            "src": "https://cdn.jsdelivr.net/npm/focus-visible@5.0.2/dist/focus-visible.min.js"
        }]
    },

    /*
     ** Customize the progress-bar color
     */
    loading: {
        color: '#fff'
    },

    /*
     ** Global CSS
     */
    css: ['@/assets/scss/normalize.scss',
        '@/assets/scss/style.scss',
        // "vue-essential-slices/src/styles/styles.scss"
    ],

    /*
     ** Plugins to load before mounting the App
     */
    plugins: [{
        src: '~/plugins/vue-lazy-background',
        mode: 'client'
    }],
    buildModules: [],
    modules: [
        '@nuxtjs/axios',
        '@/modules/static',
        '@/modules/crawler',
        '@nuxtjs/prismic',
        '@nuxtjs/google-analytics', ["@nuxtjs/prismic", {
            "endpoint": "https://discovercurious.cdn.prismic.io/api/v2",
            "apiOptions": {
                "routes": [{
                    "type": "page",
                    "path": "/:uid"
                }]
            }
        }],
        ["nuxt-sm"]
    ],
    googleAnalytics: {
        id: 'UA-138299135-1',
        dev: false
    },
    axios: {},
    prismic: {
        endpoint: 'https://discovercurious.cdn.prismic.io/api/v2',
        linkResolver: '@/plugins/link-resolver',
        htmlSerializer: '@/plugins/html-serializer'
    },
    build: {
        extend(config, ctx) {
            config.resolve.alias['vue'] = 'vue/dist/vue.common';
        },

        transpile: ["vue-slicezone", "nuxt-sm"]
    },
    generate: {
        fallback: '404.html'
    },
    render: {
        static: {
            maxAge: 1000 * 60 * 60 * 24 * 7
        }
    }
};