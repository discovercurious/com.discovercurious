<template>
        <div class="col3 caseStudyList">
          <nuxt-link to="/case-studies/branding-alomere" tag="div" class="caseStudy col">
            <div class="pic">
              <div class="responsiveImage" v-lazy:background-image="`casestudies/alomereBrand/2.jpg`"></div>
            </div>
            <h4><span>Alomere Health</span> Guiding Rename &amp; Rebrand Strategy</h4>
            <button>View Case Study</button>
          </nuxt-link>
          <nuxt-link to="/case-studies/branding-ostra" tag="div" class="caseStudy col">
            <div class="pic">
              <div class="responsiveImage" v-lazy:background-image="`casestudies/ostra/2.jpg`"></div>
            </div>
            <h4><span>Ostra</span> Collaborative Brand Story Development</h4>
            <button>View Case Study</button>
          </nuxt-link>
          <nuxt-link to="/case-studies/branding-heimies" tag="div" class="caseStudy col">
            <div class="pic">
              <div class="responsiveImage" v-lazy:background-image="`casestudies/heimies/4.jpg`"></div>
            </div>
            <h4><span>Heimies Made</span> Define Unique Brand Position</h4>
            <button>View Case Study</button>
          </nuxt-link>
        </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'BrandingStudies',
  
});
</script>
