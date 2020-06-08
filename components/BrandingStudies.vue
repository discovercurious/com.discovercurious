<template>
        <div class="caseStudyList" v-bind:class="this.type == 'full' ? 'studiesFull' : 'col3'">
          <nuxt-link v-if="$nuxt.$route.path != '/case-studies/branding-alomere'" to="/case-studies/branding-alomere" tag="div" class="caseStudy col">
            <div class="picWrap">
              <div class="pic">
                <div class="responsiveImage" v-lazy:background-image="`/images/casestudies/alomereBrand/2.jpg`"></div>
              </div>
            </div>
            <div class="studyInfo">
              <h4><span>Alomere Health</span> Guiding Rename &amp; Rebrand Strategy</h4>
              <button>View Case Study</button>
            </div>
          </nuxt-link>

          <nuxt-link v-if="$nuxt.$route.path != '/case-studies/branding-ostra'" to="/case-studies/branding-ostra" tag="div" class="caseStudy col">
            <div class="picWrap">
              <div class="pic">
                <div class="responsiveImage" v-lazy:background-image="`/images/casestudies/ostra/2.jpg`"></div>
              </div>
            </div>
            <div class="studyInfo">
              <h4><span>Ostra</span> Collaborative Brand Story Development</h4>
              <button>View Case Study</button>
            </div>
          </nuxt-link>

          <nuxt-link v-if="$nuxt.$route.path != '/case-studies/branding-heimies'" to="/case-studies/branding-heimies" tag="div" class="caseStudy col">
            <div class="picWrap">
              <div class="pic">
                <div class="responsiveImage" v-lazy:background-image="`/images/casestudies/heimies/4.jpg`"></div>
              </div>
            </div>
            <div class="studyInfo">
              <h4><span>Heimies Made</span> Define Unique Brand Position</h4>
              <button>View Case Study</button>
            </div>
          </nuxt-link>

          <nuxt-link v-if="$nuxt.$route.path != '/case-studies/branding-foundry'" to="/case-studies/branding-foundry" tag="div" class="caseStudy col">
            <div class="picWrap">
              <div class="pic">
                <div class="responsiveImage" v-lazy:background-image="`/images/casestudies/foundry/1.jpg`"></div>
              </div>
            </div>
            <div class="studyInfo">
              <h4><span>The Foundry</span> New Name Evokes a Storied History</h4>
              <button>View Case Study</button>
            </div>
          </nuxt-link>
          <nuxt-link v-if="$nuxt.$route.path != '/case-studies/branding-welia'" to="/case-studies/branding-welia" tag="div" class="caseStudy col">
            <div class="picWrap">
              <div class="pic">
                <div class="responsiveImage" v-lazy:background-image="`/images/casestudies/foundry/1.jpg`"></div>
              </div>
            </div>
            <div class="studyInfo">
              <h4><span>Welia Health</span> Launching a new brand.</h4>
              <button>View Case Study</button>
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
