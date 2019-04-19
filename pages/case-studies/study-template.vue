<template>
  <div id="app">
    <section class="studySection s-Intro bg-ltGray">
      <div class="pageWidth">
          <h3>The title of this case study</h3>
          <div class="columns s-textRow">
            <div class="col">
              <h5>Why was Curious hired?</h5>
              <p>probably because we're amazing and other people want in on the amazing!!! But that's not all, they had a problem we could solve.</p>
            </div>
            <div class="col">
              <h5>What Curious provided</h5>
              <p>
                <ul>
                  <li>Some stuff</li>
                  <li>Some stuff</li>
                  <li>Some stuff</li>
                  <li>Some stuff</li>
                  <li>Some stuff</li>
                </ul>
              </p>
            </div>
          </div>
      </div>
    </section>
    <section class="studySection s-ImageLarge bg-white">
      <div class="pageWidth">
          <div class="responsiveImage" v-lazy:background-image="'https://images.unsplash.com/photo-1553532070-e2c5714303e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80'"></div>
          
      </div>
    </section>
    <section class="studySection s-2ColText bg-darkGray">
      <div class="pageWidth">
          <h4>Section header</h4>
          <div class="col2">
            <div class="col">
              <h5>Subhead</h5>
              <p>stuff</p>
            </div>
            <div class="col">
              <h5>Subhead</h5>
              <p>stuff</p>
            </div>
          </div>
      </div>
    </section>
    <section class="studySection s-ImageGroup bg-gold">
      <div class="pageWidth">
          <h4>section header (optional)</h4>
          <div class="responsiveImage" v-lazy:background-image="'https://images.unsplash.com/photo-1553532070-e2c5714303e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80'"></div>
          <div class="col2">
            <div class="col">
              <div class="responsiveImage" v-lazy:background-image="'https://images.unsplash.com/photo-1554496272-b77154d74dc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1649&q=80'"></div>
            </div>
            <div class="col">
              <div class="responsiveImage" v-lazy:background-image="'https://images.unsplash.com/photo-1554545760-e86cb53b588d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1103&q=80'"></div>
            </div>
          </div>
          <div class="col3">
            <div class="col">
              <div class="responsiveImage" v-lazy:background-image="'https://images.unsplash.com/photo-1554398063-26678c252e83?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80'"></div>
            </div>
            <div class="col">
              <div class="responsiveImage" v-lazy:background-image="'https://images.unsplash.com/photo-1554369205-8b1de386d783?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'"></div>
            </div>
            <div class="col">
              <div class="responsiveImage" v-lazy:background-image="'https://images.unsplash.com/photo-1554336903-a5f31529dd4b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80'"></div>
            </div>
          </div>
      </div>
    </section>
        <section class="studySection s-ImageGroup bg-darkGray">
      <div class="pageWidth">
          <h4>section header (optional)</h4>
          <div class="col2 s-textRow">
            <div class="col">
              <h5>Look a yellow car</h5>
              <p>We like yellow cars because they match out branding and we like snow because well... Minnesota in April.</p>
            </div>
            <div class="col">
              <div class="responsiveImage" v-lazy:background-image="'https://images.unsplash.com/photo-1554545760-e86cb53b588d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1103&q=80'"></div>
            </div>
          </div>
      </div>
    </section>
    <section id="cta">
      <div class="pageWidth">
        <div class="ctaText">
          <span>Call to action</span> <nuxt-link class="button" to="#contact">Get in touch</nuxt-link>
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
