<template>
  <div id="app">
    <section class="studySection s-Intro bg-ltGray">
      <div class="pageWidth">
          <h3>Why a top 100 Hospital Tapped Curious for a Digital Marketing Strategy</h3>
          <h5>As part of an ongoing relationship, Curious continues to demonstrate how digital marketing efficiently reaches a highly targeted audience.</h5>
      </div>
    </section>
    <section class="studySection s-ImageLarge bg-ltGray">
      <div class="pageWidth">
          <div class="responsiveImage" v-lazy:background-image="`/casestudies/alomereMarketing/computer.png`"></div>
      </div>
    </section>
    <section class="studySection s-2ColText bg-darkGray s-noBorder">
      <div class="pageWidth">
          <h4>Building Health &amp; Wellness in an Expanding Community</h4>
          <div class="col2 s-textRow">
            <div class="col">
              <p>Alomere Health is not only the largest provider of medical services in their community but also the largest employer. Dedicated to improving the health and wellness in their community, Alomere was looking to build awareness with their continually expanding audience. Curious implemented highly targeted digital strategies to bolster their reach. </p>
            </div>
            <div class="col">
              <div class="responsiveImage" v-lazy:background-image="`/casestudies/alomereMarketing/community.png`"></div>
            </div>
          </div>
      </div>
    </section>
    <section class="studySection s-2ColText bg-ltGray s-noBorder">
      <div class="pageWidth">
          <h4>The Recruitment Challenge</h4>
          <div class="col2 s-textRow">
            <div class="col">
              <p>Recruitment is an ongoing challenge for everyone. And even more challenging when you’re looking to find the very best doctors, nurses, and specialists in the healthcare field. Getting the Alomere Health story out to potential hires in schools and other healthcare organizations is a time consuming and expensive process of attending recruitment fairs and site visits. Curious developed a digital strategy to support in-person recruitment efforts by introducing Alomere Health before these events, bringing awareness to the benefits and opportunities working with Alomere.  </p>
            </div>
            <div class="col">
              <div class="responsiveImage" v-lazy:background-image="`/casestudies/alomereMarketing/recruitment.png`"></div>
            </div>
          </div>
      </div>
    </section>
    <section class="studySection s-2ColText bg-white s-noBorder">
      <div class="pageWidth">
          <h4>The Expansion Challenge</h4>
          <div class="col2 s-textRow">
            <div class="col">
              <div class="responsiveImage" v-lazy:background-image="`/casestudies/alomereMarketing/expansion.png`"></div>
            </div>
            <div class="col">
              <p>Being the largest healthcare provider in the region means continuously adding services and offerings that benefit the community. To get the word out, Curious continues to utilize highly targeted digital marketing strategies to get in front of those likely interested in these new (and some existing) services. Awareness is key in healthcare as medical technologies continue to advance.</p>
            </div>
          </div>
      </div>
    </section>


    <section class="studySection s-ImageGroup bg-gold s-noBorder">
      <div class="pageWidth">
          <h4>The Results</h4>
          <div class="col1">
            <h5>We’re targeting unique demographics for every campaign, providing relevant messaging to the community. We are consistently reaching the majority of the population for a fraction of the cost of traditional media. </h5>
          </div>
          <div class="col2">
            <div class="col">
              <div class="responsiveImage" v-lazy:background-image="`/casestudies/alomereMarketing/alomereResultsEngage.png`"></div>
            </div>
            <div class="col">
              <div class="responsiveImage" v-lazy:background-image="`/casestudies/alomereMarketing/alomereResultsright.png`"></div>
            </div>
          </div>
          <div class="col2">
            <div class="col">
              <div class="responsiveImage" v-lazy:background-image="`/casestudies/alomereMarketing/alomereResultsWeb.png`"></div>
            </div>
            <div class="col"></div>
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
          <span>Call to action</span> <nuxt-link class="button" to="/#contact">Get in touch</nuxt-link>
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
  // layout: 'CaseStudy'
}
</script>

<style></style>
