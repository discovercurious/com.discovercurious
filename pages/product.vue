<template>
  <div id="app">
    <section id="top">
      <div class="intro pageWidth">
        <h2>Good products are useful, usable &amp; beautiful.  Great ones solve customer pain in revolutionary ways.</h2>
        <div class="cta">
          Growing your business <a href="#">starts with a chat</a>
        </div>
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
          <div class="featureImage" v-lazy:background-image="require('~/static/images/featured/designsprints.png')"></div>
          <div class="featureContent">
            <h5>Feeling stuck? Need to engage your team? Short on time?</h5>
            <p>Why not compress ideation, prototyping and testing into a week or less with a <a href="https://www.gv.com/sprint/" target="_blank" rel="noopener noreferrer">Design Sprint Workshop</a>. Our Google trained facilitators will guide your team through unlocking creative solutions in a fun activity driven environment.</p>
          </div>
          <div class="button">Schedule a Sprint!</div>
        </div>
      </div>
    </section>
    <section id="caseStudies">
      <div class="pageWidth">
        <h3>We've made things useful, useable &amp; beautiful. Here are some examples.</h3>
        <ProductStudies />
      </div>
    </section>
  </div>
</template>

<script>
import Team from '@/components/people.vue';
import ProductStudies from '@/components/ProductStudies.vue';

export default {
  components: {
    Team, ProductStudies,
  },
  head () {
    return {
      title: 'Curious: Making Products Useful, Usable & Beautiful',
    meta: [
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  }
}
</script>

<style>

</style>
