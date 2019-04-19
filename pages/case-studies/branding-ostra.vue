<template>
  <div id="app">
    <section class="studySection s-Intro bg-ltGray">
      <div class="pageWidth">
          <div class="columns s-textRow">
            <div class="col">
              <h3>Curious helps a cybersecurity startup find a unique voice</h3>
              <h5>Why was Curious hired?</h5>
              <p>Ostra needed help translating scary technical jargon for business owners who need 360&deg; digital protection.</p>
            </div>
            <div class="col">
              <h5>What Curious provided</h5>
              <p>
                <ul>
                  <li>Brand voice</li>
                  <li>Brand standards</li>
                  <li>Website</li>
                  <li>Custom Illustrations</li>
                  <li>Investor deck &amp; Story</li>
                </ul>
              </p>
            </div>
          </div>
      </div>
    </section>
    <section class="studySection s-ImageGroup bg-ltGray">
      <div class="pageWidth">
          <div class="col3">
            <div class="col">
              <div class="responsiveImage" v-lazy:background-image="`/casestudies/ostra/2.jpg`"></div>
            </div>
            <div class="col">
              <div class="responsiveImage" v-lazy:background-image="`/casestudies/ostra/6.png`"></div>
            </div>
            <div class="col">
              <div class="responsiveImage" v-lazy:background-image="`/casestudies/ostra/5.png`"></div>
            </div>
          </div>
      </div>
    </section>
    <section class="studySection s-2ColText bg-white">
      <div class="pageWidth">
          <div class="col2 s-textRow">
            <div class="col">
              <h5>The Setting</h5>
              <p>The principals of Ostra had the experience and know-how to maximize enterprise-level digital protection software and protocols for unprotected medium to small businesses. Looking to market to clients outside their area of expertise, they asked Curious for help packaging this innovative service in a way that made sense to business owners without an IT degree.</p>
            </div>
            <div class="col">
              <h5>The Strategy</h5>
              <p>Curious started from the ground up by giving Ostra a voice that made a scary reality easy to understand and actionable. Fonts, colors, humorous illustrations, and tone of voice gave Ostra a personality that was highly relatable to customers and investors. </p>
            </div>
          </div>
      </div>
    </section>
    <section class="studySection s-ImageGroup bg-ltGray">
      <div class="pageWidth">
          <div class="responsiveImage" v-lazy:background-image="`/casestudies/ostra/3.jpg`"></div>
          <div class="col2">
            <div class="col">
              <div class="responsiveImage" v-lazy:background-image="`/casestudies/ostra/1.jpg`"></div>
            </div>
            <div class="col">
              <div class="responsiveImage" v-lazy:background-image="`/casestudies/ostra/4.jpg`"></div>
            </div>
          </div>
          <div class="col2">
            <div class="col">
              <div class="responsiveImage" v-lazy:background-image="`/casestudies/ostra/8.png`"></div>
            </div>
            <div class="col">
              <div class="responsiveImage" v-lazy:background-image="`/casestudies/ostra/9.png`"></div>
            </div>
          </div>
      </div>
    </section>
    <section class="studySection s-ImageGroup bg-white">
      <div class="pageWidth">
          <div class="col2 s-textRow">
            <div class="col">
              <h5>The Results</h5>
              <p>Putting it all together, the new website and investor pitch deck feature not just data, but a story that illustrates how simple sophisticated digital protection can be.</p>
            </div>
            <div class="col">
              <div class="responsiveImage" v-lazy:background-image="`/casestudies/ostra/7.png`"></div>
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
