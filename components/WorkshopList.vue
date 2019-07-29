<template>
        <div class="caseStudyList workshopList" v-bind:class="this.type == 'full' ? 'studiesFull' : 'col3'">
          <nuxt-link to="/consulting/digital-first" tag="div" class="caseStudy col">
            <div class="picWrap">
              <div class="pic">
                <div class="responsiveImage" v-lazy:background-image="`/workshops/digital-first.png`"></div>
                <span class="learnMore">Learn More</span>
              </div>
            </div>
            <div class="studyInfo">
              <h4><span>Product Development</span> Digital Thinking for Analog Organizations</h4>
              <h5>Type: Workshop <br />
                Length: 1/2 Day <br />
                Cost: $$$
              </h5>
            </div>
          </nuxt-link>

          <nuxt-link to="/consulting/transition-branding" tag="div" class="caseStudy col">
            <div class="picWrap">
              <div class="pic">
                <div class="responsiveImage" v-lazy:background-image="`/workshops/hurdles.png`"></div>
                <span class="learnMore">Learn More</span>
              </div>
            </div>
            <div class="studyInfo">
              <h4><span>Brand Strategy</span> Branding for business transition</h4>
              <h5>Type: Workshop <br />
                Length: 1/2 Day <br />
                Cost: $$$
              </h5>
            </div>
          </nuxt-link>

          <nuxt-link to="/consulting/opportunity-finder" tag="div" class="caseStudy col">
            <div class="picWrap">
              <div class="pic">
                <div class="responsiveImage" v-lazy:background-image="`/workshops/default.jpg`"></div>
                <span class="learnMore">Learn More</span>
              </div>
            </div>
            <div class="studyInfo">
              <h4><span>Product Development</span> Opportunity Finder</h4>
              <h5>Type: Recommendation <br />
                Cost: $5,000
              </h5>
            </div>
          </nuxt-link>
        </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'BrandingStudies',
  props: {
    type: String,
  },
});
</script>
