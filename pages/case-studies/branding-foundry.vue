<template>
  <div id="app">
    <section class="studySection s-Intro bg-ltGray">
      <div class="pageWidth">
          <div class="columns s-textRow">
            <div class="col">
              <h3>105-year old print publisher transitions to a digital future.</h3>
              <h5>Why was Curious hired?</h5>
              <p>Nazarene Publish House (NPH) needed coaching to reimagine themselves as a digital educator.</p>
            </div>
            <div class="col">
              <!-- <h5>What Curious provided</h5>
              <p>
                <ul>
                  <li>Brand voice</li>
                  <li>Brand standards</li>
                  <li>Website</li>
                  <li>Custom Illustrations</li>
                  <li>Investor deck &amp; Story</li>
                </ul>
              </p> -->
            </div>
          </div>
      </div>
    </section>
    <section class="studySection s-ImageGroup bg-ltGray">
      <div class="pageWidth">
          <div class="responsiveImage" v-lazy:background-image="`/images/casestudies/foundry/7.jpg`"></div>
      </div>
    </section>
    <section class="studySection s-2ColText bg-white">
      <div class="pageWidth">
          <div class="col2 s-textRow">
            <div class="col">
              <h5>The Setting</h5>
              <p>NPH, the publishing arm of the Church of the Nazarene, is the world's largest publisher of Wesleyan-Holiness literature. Struggling with a business model that is changing from print to digital distribution, NPH needed a dramatically more efficient way of serving their core audience while also finding new readers.</p>
            </div>
            <div class="col">
              <h5>The Strategy</h5>
              <p>Even though NPH’s mission wasn’t changing, HOW they voiced a Wesleyan perspective to the larger Christian conversation was dramatically different. To honor their history and position themselves for the future, Curious listened to key stakeholders and helped them select a new name and led them through a rebranding process with unanimous internal consensus.</p>
            </div>
          </div>
      </div>
    </section>
    <section class="studySection s-ImageGroup bg-ltGray">
      <div class="pageWidth">
          <div class="responsiveImage" v-lazy:background-image="`/images/casestudies/foundry/8.jpg`"></div>
          <div class="col2">
            <div class="col">
              <div class="responsiveImage" v-lazy:background-image="`/images/casestudies/foundry/6.jpg`"></div>
            </div>
            <div class="col">
              <div class="responsiveImage" v-lazy:background-image="`/images/casestudies/foundry/4.jpg`"></div>
            </div>
          </div>
          <div class="col2">
            <div class="col">
              <div class="responsiveImage" v-lazy:background-image="`/images/casestudies/foundry/5.png`"></div>
            </div>
            <div class="col">
              <div class="responsiveImage" v-lazy:background-image="`/images/casestudies/foundry/1.jpg`"></div>
            </div>
          </div>
      </div>
    </section>
    <section class="studySection s-ImageGroup bg-white">
      <div class="pageWidth">
          <div class="col2 s-textRow">
            <div class="col">
              <h5>The Results</h5>
              <p>Their new name, The Foundry, finds inspiration from church history as John Wesley’s first church/missions building. The new brand and messaging assure their core audience continued dedication without alienating readership outside of their denomination.</p>
              <p>We followed up the rebrand with a modern and flexible website that offered a dramatically better experience finding and ordering resources online. Curious continues to innovate The Foundry offerings with a new online community and digital tools that make sharing their message easier and cost effective.</p>
            </div>
            <div class="col">
              <div class="responsiveImage" v-lazy:background-image="`/images/casestudies/foundry/2.jpg`"></div>
            </div>
          </div>
      </div>
    </section>
    <section class="studySection s-ImageGroup bg-darkGray">
      <div class="pageWidth">
          <h5>More Branding</h5>
          <BrandingStudies />
      </div>
    </section>
    <section id="cta">
      <div class="pageWidth">
        <div class="ctaText">
          <span>Starting something new? We can help you build a brand that is approachable and unique.</span> <nuxt-link class="button" to="#contact">Get in touch</nuxt-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import BrandingStudies from '@/components/BrandingStudies.vue';

export default {
  components: {
    BrandingStudies,
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

<style></style>
