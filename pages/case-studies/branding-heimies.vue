<template>
  <div id="app">
    <section class="studySection s-ImageLarge bg-ltGray">
      <div class="pageWidth">
          <div class="responsiveImage" v-lazy:background-image="`casestudies/heimies/6.jpg`"></div>
      </div>
    </section>
    <section class="studySection s-Intro bg-ltGray">
      <div class="pageWidth">
          <div class="columns s-textRow">
            <div class="col">
              <h3>Curious helps St. Paul’s Heimie’s Haberdashery with a unique product launch</h3>
              <h5>Why was Curious hired?</h5>
              <p>Heimie’s was exploring marketing a hand-made leather and canvas bag brand. Owner Anthony Adler reached out to Curious to help him build a brand that clearly communicated his uniqueness in a crowded bag market.</p>
            </div>
            <div class="col">
              <h5>What Curious provided</h5>
              <p>
                <ul>
                  <li>Brand Positioning</li>
                  <li>Brand Story</li>
                  <li>Identity design</li>
                  <li>Website</li>
                  <li>Marketing assets</li>
                </ul>
              </p>
            </div>
          </div>
      </div>
    </section>
    <section class="studySection s-ImageGroup bg-white">
      <div class="pageWidth">
          <div class="col2">
            <div class="col">
              <div class="responsiveImage" v-lazy:background-image="`casestudies/heimies/1.jpg`"></div>
            </div>
            <div class="col">
              <div class="responsiveImage" v-lazy:background-image="`casestudies/heimies/2.jpg`"></div>
            </div>
          </div>
          <div class="col3">
            <div class="col">
              <div class="responsiveImage" v-lazy:background-image="`casestudies/heimies/3.jpg`"></div>
            </div>
            <div class="col">
              <div class="responsiveImage" v-lazy:background-image="`casestudies/heimies/4.jpg`"></div>
            </div>
            <div class="col">
              <div class="responsiveImage" v-lazy:background-image="`casestudies/heimies/5.jpg`"></div>
            </div>
          </div>
      </div>
    </section>
    <section class="studySection s-2ColText bg-ltGray">
      <div class="pageWidth">
          <div class="col2 s-textRow">
            <div class="col">
              <h5>The Setting</h5>
              <p>If you’re looking to buy a quality, masculine, leather bag, there are lots of options to choose from. We knew that Anthony’s locally made, handcrafted, old-world values, made a compelling story.</p>
            </div>
            <div class="col">
              <h5>The Strategy</h5>
              <p>We started by narrowing our focus and research to an ideal male customer that values a nostalgic aesthetic based on quality. With this narrow demographic clearly in mind, we crafted a finely-detailed, script logo, a stark contrast to fashion brands that are all moving towards a modern aesthetic. Next, we built a website showcasing hunting and fly fishing photos next to modern commuting scenes in St. Paul, MN featuring Heimie’s Made timeless bags. We leveraged the same photography into social media posts, targeted direct mail, and in-store sales materials.</p>
            </div>
          </div>
      </div>
    </section>
    <section class="studySection s-ImageGroup bg-darkGray">
      <div class="pageWidth">
          <div class="col2 s-textRow">
            <div class="col">
              <div class="responsiveImage" v-lazy:background-image="`casestudies/heimies/7.jpg`"></div>
            </div>
            <div class="col">
              <h5>The Results</h5>
              <p>The visuals and messaging supported a brand position that Heimie’s Made bags built with the values of old school quality and attention to detail can function beautifully in a modern lifestyle.</p>
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
          <span>Starting something new? We can help you build a brand that reflects a smart positioning strategy.</span> <nuxt-link class="button" to="/#contact">Get in touch</nuxt-link>
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
  // layout: 'CaseStudy'
}
</script>

<style></style>