<template>
  <div id="app">
    <section class="studySection s-Intro bg-ltGray">
      <div class="pageWidth">
          <h3>Why one of MN’s top remodeling companies works with Curious</h3>
          <div class="columns s-textRow">
            <div class="col">
              <p>White Crane, a residential design-build company in Minneapolis, has been successfully remodeling homes for over 16 years. With growth as a primary goal, Curious was hired to help generate the right leads for the sales team.</p>
            </div>
          </div>
      </div>
    </section>
    <section class="studySection s-ImageLarge bg-white s-noBorder">
      <div class="pageWidth">
          <div class="responsiveImage" v-lazy:background-image="require('~/static/casestudies/whitecrane/houseAndSign.png')"></div>
      </div>
    </section>
    <section class="studySection s-ImageGroup bg-darkGray s-noBorder">
      <div class="pageWidth">
          <h4>The Initial Strategy - Generating Relevant Leads</h4>
          <div class="col2 s-textRow">
            <div class="col">
              <h5>Generating leads can be easy, but there are hidden costs to unqualified leads.</h5>
              <p>Dead end leads can deplete your sales team’s time and resources. For White Crane, the low-hanging fruit was identifying where the bad leads were coming from and shutting off the marketing generating those leads. From there, we developed a robust content strategy tapping into homeowners’ curiosity around remodels happening in comparable homes. With this content, we targeted potential clients who are likely to remodel. The leads quickly right-sided themselves and aligned with White Crane’s goals.</p>
            </div>
            <div class="col">
               <div class="responsiveImage" v-lazy:background-image="require('~/static/casestudies/whitecrane/ipadiphone.png')"></div>
            </div>
          </div>
      </div>
    </section>
    <section class="studySection s-ImageGroup bg-ltGray s-noBorder">
      <div class="pageWidth">
          <h4>Strategy Part Two - Align the Marketing &amp; Sales Teams</h4>
          <div class="col2">
            <div class="col">
              <div class="responsiveImage" v-lazy:background-image="require('~/static/casestudies/whitecrane/left_sales.png')"></div>
            </div>
            <div class="col">
              <div class="responsiveImage" v-lazy:background-image="require('~/static/casestudies/whitecrane/right_sales.png')"></div>
            </div>
          </div>
          <div class="col1">
            <h5>With the right leads coming in, we consulted with White Crane’s leadership and sales team to support communication through their CRM. We then developed additional tools and strategies to improve the conversion of leads through a lead-nurturing program based around value-driven content.</h5>
          </div>
      </div>
    </section>
    <section class="studySection s-ImageGroup bg-gold s-noBorder">
      <div class="pageWidth">
          <h4>The Results</h4>
          <div class="col1">
            <h5>By refining White Crane’s messaging, generating relevant content, and marketing to a targeted audience, we significantly increased web traffic, and nearly tripled relevant leads.</h5>
          </div>
          <div class="col2">
            <div class="col">
              <div class="responsiveImage" v-lazy:background-image="require('~/static/casestudies/whitecrane/resultstopleft.png')"></div>
            </div>
            <div class="col">
              <div class="responsiveImage" v-lazy:background-image="require('~/static/casestudies/whitecrane/resultstopright.png')"></div>
            </div>
          </div>
          <div class="col2">
            <div class="col">
              <div class="responsiveImage" v-lazy:background-image="require('~/static/casestudies/whitecrane/resultsbottomleft.png')"></div>
            </div>
            <div class="col">
              <div class="responsiveImage" v-lazy:background-image="require('~/static/casestudies/whitecrane/resultsbottomright.png')"></div>
            </div>
          </div>
          <div class="col2 s-textRow">
            <div class="col">
              <p class="quote">Discovering Curious was a bit of a process, but once here, we knew we had a partner we could trust. White Crane is a residential design/build remodeling company without the in-house bandwidth to do our marketing consistently and effectively. Couple that with the continued rise of the internet and its content-rich capability, we needed help. Enter Curious! This firm is leading, listening, and learning and the number and quality of leads reflect exactly this.  These are people I trust who are delivering the goods.</p>
              <p class="attr">Susan Denk, Owner &amp; Founder of White Crane Construction</p>
            </div>
            <div class="col">
              <div class="responsiveImage" v-lazy:background-image="require('~/static/casestudies/whitecrane/susan.png')"></div>
            </div>
          </div>
      </div>
    </section>
    <section class="studySection s-ImageGroup bg-darkGray">
      <div class="pageWidth">
          <h5>More Marketing</h5>
          <MarketingStudies />
      </div>
    </section>
    <section id="cta">
      <div class="pageWidth">
        <div class="ctaText">
          <span>Get results like this: </span> <nuxt-link class="button" to="/#contact">Get in touch</nuxt-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import MarketingStudies from '@/components/MarketingStudies.vue';

export default {
  components: {
    MarketingStudies,
  },
  layout: 'CaseStudy'
}
</script>

<style></style>
