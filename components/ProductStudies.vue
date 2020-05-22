<template>
  <div class="caseStudyList" v-bind:class="this.type == 'full' ? 'studiesFull' : 'col3'">
    <nuxt-link to="/case-studies/product-itsawego" tag="div" class="caseStudy col">
      <div class="picWrap">
        <div class="pic">
          <div class="responsiveImage" v-lazy:background-image="`/images/casestudies/itsawego/1.jpg`"></div>
        </div>
      </div>
      <div class="studyInfo">
        <h4><span>Itsawego</span>Product Story + Prototyping</h4>
        <button>View Case Study</button>
      </div>
    </nuxt-link>

    <!-- <nuxt-link to="/case-studies/product-reve-academy" tag="div" class="caseStudy col">
      <div class="picWrap">
        <div class="pic">
          <div class="responsiveImage" v-lazy:background-image="`/images/casestudies/reve/1.jpg`"></div>
        </div>
      </div>
      <div class="studyInfo">
        <h4><span>R&ecirc;ve Academy</span>Google Design Sprint Workshop</h4>
        <button>View Case Study</button>
      </div>
    </nuxt-link> -->

  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'ProductStudies',
  props: {
    type: String,
  },
  mounted: function(){
    console.log("route " + $nuxt.$route.path);
  },
});
</script>
