<template>
  <div id="app" class="announce">
    <!-- <section id="top">
      <div class="intro pageWidth">
        <h2>We’re stong believers in show &amp; tell, so here are a few examples of past projects.</h2>
      </div>
      <div class="sidebar">Highlight Center - <strong>Minneapolis, Minnesota USA</strong></div>
    </section> -->
    <section id="" class="studySection bg-ltGray" >
      <div class="pageWidth">
        <div class="col2">
          <div class="col">
            <h3>Curious &amp; Closers Media Join Forces</h3>
            <p>Due to current circumstances, Curious and <a href="http://bedorebusinessgroup.com">Closers Media</a> have joined forces to offer an end-to-end marketing/sales solution to EOS led companies to help them thrive during these unprecedented times.</p>
            <p>At Curious, we pair data with human intelligence, expert training, and industry experience to fill your pipeline with conversations that close. Sales + marketing done right. </p>
          </div>
          <div class="col">
            <div class="responsiveImage" v-lazy:background-image="`http://bedorebusinessgroup.com/wp-content/uploads/2020/03/Header-events-and-media.jpg`"></div>

          </div>
        </div>
        <div class="col4 s-textRow">
          <div class="col">
            <h5>Your Audience</h5>
            <p>By researching historical data, technology, and current market research, we define customer profiles that are most likely to choose you over your competitors.</p>
          </div>
          <div class="col">
            <h5>Unique Voice</h5>
            <p>Your brand and offering have a story unique to you and your ideal prospect. Together, let’s perfect and organize an awareness campaign that speaks directly to your target market.</p>
          </div>

          <div class="col">
            <h5>Take Action</h5>
            <p>We put an action-based sales spin on our marketing campaigns so that when we deploy, quality conversations follow. </p>
          </div>
          <div class="col">
            <h5>Expert Advice</h5>
            <p>As your sales pipeline begins to fill, our virtual closing experts are available to provide “on-demand” deal assistance to ensure expeditious deal closure.</p>
          </div>
        </div>
        <div class="ctaText">
          <span>Do you want marketing that runs like clockwork? </span> <nuxt-link class="button" to="#contact">Let's Chat</nuxt-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import TypeMate from 'typemate';


export default {
  components: {
    
  },
  mounted: function(){
    this.$nextTick(function () {
    const tm = new TypeMate(undefined, { selector: 'h2, h3, p, li', ignoreClass: 'noTypeFix' });
    tm.apply();
     
    })
  },
  head () {
    return {
      // title: 'Curious: Making Products Useful, Usable & Beautiful',
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
}
</script>

<style>

</style>
