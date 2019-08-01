<template>
  <div id="app">
    <section id="top">
      <div class="intro pageWidth">
        <h2>Good products are useful, usable &amp; beautiful.  Great ones solve customer pain in revolutionary ways.</h2>
        <!-- <div class="cta">
          Growing your business <nuxt-link to="#contact">starts with a chat.</nuxt-link>
        </div> -->
      </div>
      <div class="sidebar">Highlight Center - <strong>Minneapolis, Minnesota USA</strong></div>
    </section>
    <section id="main">
      <div class="pageWidth serviceIntro">
        <div class="serviceLeft">
          <h3>We use business context &amp; proven techniques to help you answer questions like these:</h3>
          <div class="col2">
            <div class="col">
              <h5>Product Development</h5>
              <ul class="questions">
                <li>Who is my audience and what do they need?</li>
                <li>What revenue generation models exist and what’s best for us?</li>
                <li>What is our product story and does it resonate with the right people?</li>
                <li>What can we test and how does that process work?</li>
                <li>What can we prototype with minimal investment?</li>
                <li>How do we quantify a “good” product experience?</li>
                <li>How might available technology improve our offering and customer experience?</li>
                <li>Who can build this idea and what will it cost?</li>
              </ul>
            </div>
            <div class="col">
              <h5>Technology &amp; Platform</h5>
              <ul class="questions">
                <li>How might we improve security or reliability with existing technologies?</li>
                <li>What are the implications of adding this (desired) feature?</li>
                <li>Is the investment to improve SEO going to have an equal impact on your business?</li>
                <li>Am I gaining all the insights available from analytics tools?</li>
                <li>Can I make my technology platforms do more for my business?</li>
                <li>Does your product infastructure &amp; documentation pass the "bus test"?</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="feature">
          <!-- <div class="featureImage" v-lazy:background-image="`/images/featured/designsprints.png`"></div>
          <div class="featureContent">
            <h5>Feeling stuck? Need to engage your team? Short on time?</h5>
            <p>Why not compress ideation, prototyping and testing into a week or less with a <a href="https://www.gv.com/sprint/" target="_blank" rel="noopener noreferrer">Design Sprint Workshop</a>. Our Google trained facilitators will guide your team through unlocking creative solutions in a fun activity driven environment.</p>
          </div>
          <nuxt-link class="button" to="#contact">Schedule a Sprint</nuxt-link> -->
          <div class="featureTop">
            <h4>Curious helps imagine, define, prototype and test product opportunities.</h4>
            <p>We want to help you create successful solutions your users will love. We can partner with your team to fill expertise gaps, provide education and training, or manage the entire process. It's up to you. </p>
          </div>
          <h5>Services we offer:</h5>
          <ul class="questions">
            <li>Google Design Sprint Workshops</li>
            <li>Opportunity Identification/Mapping <nuxt-link to="/consulting/opportunity-finder" tag="button">More</nuxt-link></li>
            <li>Customer Needs Analysis (Personas, Jobs to Be Done)</li>
            <li>Definition (Technical Architecture, Wireframes, UX Flows)</li>
            <li>Prototyping includeing web apps, mobile, platforms, voice, augmented/virtual reality</li>
            <li>UX Research/Testing (strategy, recruitment, moderation)</li>
            <li>Managing 3rd Party Production Efforts</li>
            <li>Training &amp; Mentoring your team</li>
          </ul>
        </div>
      </div>
    </section>
    <section id="caseStudies">
      <div class="pageWidth">
        <h3>Product Development Case Studies</h3>
        <ProductStudies />
      </div>
    </section>
  </div>
</template>

<script>
import Team from '@/components/people.vue';
import ProductStudies from '@/components/ProductStudies.vue';
import TypeMate from 'typemate';

export default {
  components: {
    Team, ProductStudies,
  },
  head () {
    return {
      title: 'Curious: Making Products Useful, Usable & Beautiful',
      meta: [
        // { hid: 'description', name: 'description', content: 'Curious consultants help you identify your next best marketing steps, and develop marketing strategies to find and connect with your customers.' },

        // { hid: 'keywords', name: 'keywords', content: 'product design, branding, marketing, coaching, consulting, design sprint, review, strategy, digital, identity, story, minneapolis, minnesota, twin cities, hightlight center, ux, interface' },
         
        // { hid: 'og:title', name: 'og:title', content: 'Curious - Solving Brand, Marketing & Product problems for small businesses' },
        // { hid: 'og:description', name: 'og:description', content: 'Curious is a group of experienced consultants helping business leaders overcome brand, marketing, and product challenges. We help companies discover their best opportunities for growth.' },

        // { hid: 'og:image', name: 'og:image', content: 'https://discovercurious.com/images/shareLogo.png' },
        // { hid: 'og:image:type', name: 'og:image:type', content: 'image/png' },
        // { hid: 'og:image:width', name: 'og:image:width', content: '1080' },
        // { hid: 'og:image:height', name: 'og:image:height', content: '800' },
      ]
    }
  },
  mounted: function(){
    this.$nextTick(function () {
    const tm = new TypeMate(undefined, { selector: 'h2, h3, p, li' });
    tm.apply();
     
    })
  },
}
</script>

<style>

</style>
