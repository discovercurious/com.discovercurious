<template>
        <div class="caseStudyList workshopList" v-bind:class="this.type == 'full' ? 'studiesFull' : 'col3'">
          <nuxt-link to="/consulting/digital-first" tag="div" class="caseStudy col">
            <div class="picWrap">
              <div class="pic">
                <div class="responsiveImage" v-lazy:background-image="`/workshops/digital-first.png`"></div>
              </div>
            </div>
            <div class="studyInfo">
              <h4><span>Product Development</span> Digital Thinking for Analog Organizations</h4>
              <button>Workshop Details</button>
              <h5>Length: 1/2 Day</h5>
            </div>
          </nuxt-link>

          <nuxt-link to="/consulting/transition-branding" tag="div" class="caseStudy col">
            <div class="picWrap">
              <div class="pic">
                <div class="responsiveImage" v-lazy:background-image="`/workshops/hurdles.png`"></div>
              </div>
            </div>
            <div class="studyInfo">
              <h4><span>Brand Strategy</span> Branding for business transition</h4>
              <button>Workshop Details</button>
              <h5>Length: 1/2 Day</h5>
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
