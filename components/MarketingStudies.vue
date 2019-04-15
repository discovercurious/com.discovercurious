<template>
  <div class="col3 caseStudyList">
    <nuxt-link to="/case-studies/marketing-white-crane" tag="div" class="caseStudy col">
      <div class="pic">
        <div class="responsiveImage" v-lazy:background-image="require('~/static/casestudies/whitecrane/1.jpg')"></div>
      </div>
      <h4><span>White Crane</span> Lead Generation + Sales Integration Strategy</h4>
      <button>View Case Study</button>
    </nuxt-link>
    <nuxt-link to="/case-studies/marketing-alomere" tag="div" class="caseStudy col">
      <div class="pic">
        <div class="responsiveImage" v-lazy:background-image="require('~/static/casestudies/alomereMarketing/1.jpg')"></div>
      </div>
      <h4><span>Alomere Health</span>Digital Marketing Strategy</h4>
      <button>View Case Study</button>
    </nuxt-link>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'MarketingStudies',
  
});
</script>
