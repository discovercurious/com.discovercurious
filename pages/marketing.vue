<template>
  <div id="app">
    <section id="top">
      <div class="intro pageWidth">
        <h2>Find and connect with your audience. Improve your business.</h2>
        <!-- <div class="cta">
          Are you generating the right traffic? <nuxt-link to="#contact">Get answers.</nuxt-link>
        </div> -->
      </div>
      <div class="sidebar">Highlight Center - <strong>Minneapolis, Minnesota USA</strong></div>
    </section>
    <section id="main">
      <div class="pageWidth serviceIntro">
        <div class="serviceLeft">
          <h3>Answer Marketing Questions Like These</h3>
          <div class="col2">
            <ul class="col questions">
              <li>In a perfect scenario, what would marketing achieve for your business?</li>
              <li>Are your sales and marketing teams learning from each other? Are they talking to each other?</li>
              <li>Is your marketing relevant to your potential customers? Does it provide value?</li>
              <li>Do your potential customers know about your company? How do you stay in front of them?</li>
              <li>How targeted are your campaigns? Are the right people engaging?</li>
            </ul>
            <ul class="col questions">
              <li>How often are you changing your messaging and creative?</li>
              <li>Are you leveraging A/B tests? Are you aware what drove the results and why?</li>
              <li>What marketing tools and platforms should you use to reach your customers?</li>
              <li>How are you measuring your marketing? Do you know if you’re wasting money?</li>
              <li>Do competitors do a better job of explaining your products or services?</li>
            </ul>
          </div>
        </div>
        <div class="feature">
          <div class="featureImage" v-lazy:background-image="`/images/featured/marketingWorkshop.png`"></div>
          <div class="featureContent">
            <h5>Workshop: What’s your next best opportunity for marketing?</h5>
            <p>While our team partners with several organizations to develop and implement marketing strategies, some of our clients wanted direction on next steps. These customized workshops are designed to cover multiple topics and provide a foundation to discover your next best opportunities.</p>
            <p>After a 30 minute consult to make sure this is a good fit, we create a customized 3-hour strategic workshop to explore:</p>
            <ul>
                <li>Best practices in digital marketing and how to target your audience.</li>
                <li>Game plans for how your team can execute internally. Marketing tactics, specific to your business, with both a quick win and long term strategy.</li>
                <li>Breaking down barriers between marketing and sales teams.</li>
              </ul>
          </div>
          <nuxt-link class="button" to="#contact">Schedule a consultation</nuxt-link>
        </div>
      </div>
    </section>
    <section id="caseStudies">
      <div class="pageWidth">
        <h3>Past examples of marketing consulting</h3>
        <MarketingStudies />
      </div>
    </section>
  </div>
</template>

<script>
import Team from '@/components/people.vue';
import MarketingStudies from '@/components/MarketingStudies.vue';
import TypeMate from 'typemate';

export default {
  components: {
    Team, MarketingStudies,
  },
  head () {
    return {
      title: 'Curious: Solving Your Marketing Challenges',
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
