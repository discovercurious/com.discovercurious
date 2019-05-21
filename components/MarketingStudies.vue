<template>
  <div class="caseStudyList" v-bind:class="this.type == 'full' ? 'studiesFull' : 'col3'">

    <nuxt-link to="/case-studies/marketing-white-crane" tag="div" class="caseStudy col">
      <div class="picWrap">
        <div class="pic">
          <div class="responsiveImage" v-lazy:background-image="`/casestudies/whitecrane/1.jpg`"></div>
        </div>
      </div>
      <div class="studyInfo">
        <h4><span>White Crane</span> Lead Generation + Sales Integration Strategy</h4>
        <button>View Case Study</button>
      </div>
    </nuxt-link>

    <nuxt-link to="/case-studies/marketing-alomere" tag="div" class="caseStudy col">
      <div class="picWrap">
        <div class="pic">
          <div class="responsiveImage" v-lazy:background-image="`/casestudies/alomereMarketing/1.jpg`"></div>
        </div>
      </div>
      <div class="studyInfo">
        <h4><span>Alomere Health</span>Digital Marketing Strategy</h4>
        <button>View Case Study</button>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'MarketingStudies',
  props: {
    type: String,
  },
  
});
</script>
