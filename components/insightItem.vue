<template>
  <nuxt-link tag="div" class="caseStudy col" :to="link">
            <div class="picWrap" v-if="thumbnail">
              <div class="pic">
                <div class="responsiveImage" v-lazy:background-image="thumbnail"></div>
              </div>
            </div>
            <div class="studyInfo">
              <h4>{{$prismic.asText(insight.data.headline)}}</h4>
              <p>{{$prismic.asText(insight.data.preview_text)}}</p>
              <button>Read it</button>
            </div>
          </nuxt-link>
</template>

<script>
import LinkResolver from "~/plugins/link-resolver.js"

export default {
  props: ['insight'],
  data: function() {
    return {
      link: '',
      formattedDate: '',
      thumbnail: null,
    }
  },
  name: 'insightList',
  methods: {

    getFirstParagraph (insight) {
      const textLimit = 300;
      const slices = insight.data.content;
      let firstParagraph = '';
      let haveFirstParagraph = false;

      slices.map(function(slice) {
        if (!haveFirstParagraph && slice.slice_type == "text") {
          slice.primary.text.forEach(function(block){
            if (block.type == "paragraph" && !haveFirstParagraph) {
              firstParagraph += block.text;
              haveFirstParagraph = true;
            }
          });
        }
      });
      
      const limitedText = firstParagraph.substr(0, textLimit)

      if (firstParagraph.length > textLimit) {
        return limitedText.substr(0, limitedText.lastIndexOf(' ')) + '...';
      }
      else {
        return firstParagraph;
      }
    },
    setThumbnail (item) {
      let theThumb = ''
      if(item.data.thumbnail.url){
        theThumb = item.data.thumbnail.url;
      } else {
        theThumb = null
      }
      return theThumb
    },
  },
  created () {
    this.link = LinkResolver(this.insight),
    this.thumbnail = this.setThumbnail(this.insight)
    // this.formattedDate = Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(this.resource.data.date))
  },
}
</script>