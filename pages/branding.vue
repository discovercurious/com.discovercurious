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
        <div class="feature" v-lazy:background-image="require('~/static/images/featured/designsprints.png')">
          <div class="featureContent">
            <h5>Featured thing</h5>
            <p>why does anyone care?</p>
          </div>
          <div class="button">Read the article</div>
        </div>
      </div>
    </section>
    <section id="caseStudies">
      <div class="pageWidth">
        <h3>Past examples of brand strategy application</h3>
        <div class="col3">
          <nuxt-link to="/case-studies/branding-alomere" tag="div" class="caseStudy col">
            <div class="pic">
              <div class="responsiveImage" v-lazy:background-image="require('~/static/casestudies/alomereBrand/2.jpg')"></div>
            </div>
            <h4><span>Alomere Health</span> Guiding Rename &amp; Rebrand Strategy</h4>
            <button>View Case Study</button>
          </nuxt-link>
          <nuxt-link to="/case-studies/branding-ostra" tag="div" class="caseStudy col">
            <div class="pic">
              <div class="responsiveImage" v-lazy:background-image="require('~/static/casestudies/ostra/2.jpg')"></div>
            </div>
            <h4><span>Ostra</span> Collaborative Brand Story Development</h4>
            <button>View Case Study</button>
          </nuxt-link>
          <nuxt-link to="/case-studies/branding-heimies" tag="div" class="caseStudy col">
            <div class="pic">
              <div class="responsiveImage" v-lazy:background-image="require('~/static/casestudies/heimies/4.jpg')"></div>
            </div>
            <h4><span>Heimies Made</span> Define Unique Brand Position</h4>
            <button>View Case Study</button>
          </nuxt-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Team from '@/components/people.vue';

export default {
  components: {
    Team,
  },
  head () {
    return {
      title: 'Curious: Building better brands',
    meta: [
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  }
}
</script>

<style>

</style>
