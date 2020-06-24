/**
 * To learn more about Link Resolving check out the Prismic documentation
 * Remember to set this based on page types created...
 */

export default function(doc) {
    if (doc.isBroken) {
        return '/not-found'
    }

    if (doc.type === 'insights') {
        return '/results/' + doc.uid
    }

    if (doc.type === 'results') {
        return '/prismic/' + doc.uid
    }

    return '/not-found'
}