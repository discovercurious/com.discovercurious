<template>
  <div id="app" class="blogSection">
    <section class="studySection bg-ltGray">
      <div class="pageWidth">
        <h3 class="blog-title">{{ $prismic.asText(pageContent.headline) }}</h3>
        <prismic-rich-text class="content-prime" :field="pageContent.content" />
      </div>
    </section>
    <section id="cta">
      <div class="pageWidth">
        <div class="ctaText">
          <span>Do you want marketing that runs like clockwork? Let’s talk about your immediate marketing opportunities and how they can build up to a larger marketing strategy. </span> <nuxt-link class="button" to="#contact">Get in touch</nuxt-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'result',
  components: {

  },
  head () {
    let pageTitle = 'Curious - ' + this.pageContent.headline[0].text 
    let headerBlock = {
      title: pageTitle,
      meta: [
        { hid: 'og:title', property: 'og:title', content: pageTitle }
      ]
    }
    if(this.pageContent.seo_description) {
      headerBlock.meta.push(
        { hid: 'description', name: 'description', content: this.pageContent.seo_description },
        { hid: 'og:description', property: 'og:description', content: this.pageContent.seo_description }
      )
    }
    if(this.pageContent.seo_keywords) {
      headerBlock.meta.push(
        { hid: 'keywords', name: 'keywords', content: this.pageContent.seo_keywords }
      )
    }
    if(this.pageContent.preview_image && Object.entries(this.pageContent.preview_image).length > 0) {
      headerBlock.meta.push(
        { hid: 'og:image', property: 'og:image', content: this.pageContent.preview_image.url },
        { hid: 'og:image:width', property: 'og:image:width', content: this.pageContent.preview_image.dimensions.width +'' },
        { hid: 'og:image:height', property: 'og:image:height', content: this.pageContent.preview_image.dimensions.height+'' },
      )
    }
    return headerBlock
  },
  async asyncData({ $prismic, params, error }) {
    try{
      // Query to get post content
      const pageContent = (await $prismic.api.getByUID('results', params.uid)).data
      return {
        pageContent
      }
    } catch (e) {
      error({ statusCode: 404, message: 'Page not found' })
    }
  }

}
</script>