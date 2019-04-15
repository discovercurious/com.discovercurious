<template>
  <div id="app">
    <section id="top">
      <div class="intro pageWidth">
        <h2>It’s proven. Great design produces  valuable brands. Yet branding must be more than a cool logo &amp; clean packaging.</h2>
        <div class="cta">
          Would you like an audit of your current positioning and brand? <a href="#">We can help!</a>
        </div>
      </div>
      <div class="sidebar">Highlight Center - <strong>Minneapolis, Minnesota USA</strong></div>
    </section>
    <section id="main">
      <div class="pageWidth serviceIntro">
        <div class="serviceLeft">
          <h3>We help businesses answer brand questions like these.</h3>
          <div class="col2">
            <div class="col">
              <ul class="questions">
                <li>Are there other competitors that offer the same product or service? Why do your customers choose you?</li>
                <li>Can you capture your unique value proposition in one sentence?</li>
                <li>Could your customers describe your unique value proposition using their own words?</li>
                <li>Does what your customers say and what you say about your company align?</li>
                <li>Do your employees embody your organization’s values and personality?</li>
              </ul>
            </div>
            <div class="col">
              <ul class="questions">
                <li>Marketing produces short term results. Branding is a long term strategy. Are you doing both well?</li>
                <li>At every point of contact (online, in-store, advertising, customer service), do customers get the same experience?</li>
                <li>Is your corporate identity future proof?</li>
                <li>Have you ever noticed your customers being confused when interacting with your services?</li>
                <li>Look at ALL of your brochures, catalogs, social media, advertising, and website… do they look like they come from the same place?</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="feature">
          <div class="featureImage" v-lazy:background-image="require('~/static/images/featured/transitionWorkshop.png')"></div>
          <div class="featureContent">
            <h5>Leadership Transition Workshops</h5>
            <p>How do you let go and set the company up for success? How do you make changes that are innovative but not too disruptive? It can be overwhelming. Curious has a process to help your team ask the right questions and find consensus to make your next best move quickly.</p>
            <p>
              <strong>Guided discussions on these topics:</strong>
              <ul>
                <li>Leadership personality assessments</li>
                <li>Align old and new brand vision, values, value proposition, personality, voice</li>
                <li>Merger/Acquisition strategies</li>
                <li>Brand positioning</li><li>Messaging</li>
              </ul>
            </p>
            <p>At the end of this workshop, Curious will assemble a Brand Guideline that creates a corporate foundation for future decision making.</p>
          </div>
          <div class="button">Get in touch</div>
        </div>
      </div>
    </section>
    <section id="caseStudies">
      <div class="pageWidth">
        <h3>Past examples of brand strategy application</h3>
        <BrandingStudies />
      </div>
    </section>
  </div>
</template>

<script>
import Team from '@/components/people.vue';
import BrandingStudies from '@/components/BrandingStudies.vue';
import TypeMate from 'typemate';

export default {
  components: {
    Team, BrandingStudies
  },
  head () {
    return {
      title: 'Curious: Building better brands',
    meta: [
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  },
  mounted: function(){
    this.$nextTick(function () {
    const tm = new TypeMate(undefined, { selector: 'h2, h3, p' });
    tm.apply();
     
    })
  },
}
</script>

<style>

</style>
