<template>
  <div class="col3 caseStudyList">
    <nuxt-link to="/case-studies/product-itsawego" tag="div" class="caseStudy col">
      <div class="pic">
        <div class="responsiveImage" v-lazy:background-image="`/casestudies/itsawego/1.jpg`"></div>
      </div>
      <h4><span>Itsawego</span>Product Story + Prototyping</h4>
      <button>View Case Study</button>
    </nuxt-link>
    <nuxt-link to="/case-studies/product-reve-academy" tag="div" class="caseStudy col">
      <div class="pic">
        <div class="responsiveImage" v-lazy:background-image="`/casestudies/reve/1.jpg`"></div>
      </div>
      <h4><span>R&ecirc;ve Academy</span>Google Design Sprint Workshop</h4>
      <button>View Case Study</button>
    </nuxt-link>
    <!-- <nuxt-link to="/" tag="div" class="caseStudy col">
      <div class="pic">
        <div class="responsiveImage" v-lazy:background-image="`/casestudies/heimies/4.jpg`"></div>
      </div>
      <h4><span>University of Minnesota</span>Platform Ideation &amp; Development Support</h4>
      <button>View Case Study</button>
    </nuxt-link> -->
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'ProductStudies',
  
});
</script>
