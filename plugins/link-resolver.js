/**
 * To learn more about Link Resolving check out the Prismic documentation
 * Remember to set this based on page types created...
 */

export default function(doc) {
    if (doc.isBroken) {
        return '/not-found'
    }

    // if (doc.type === 'home') {
    //     return '/'
    // }

    // if (doc.type === 'about') {
    //     return '/about'
    // }

    // if (doc.type === 'services') {
    //     return '/services'
    // }

    // if (doc.type === 'why_coaching') {
    //     return '/why-coaching'
    // }

    // if (doc.type === 'resources_landing') {
    //     return '/resources/'
    // }

    if (doc.type === 'insights') {
        return '/insights/' + doc.uid
    }

    return '/not-found'
}