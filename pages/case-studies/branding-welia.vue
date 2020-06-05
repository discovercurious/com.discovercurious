<template>
  <div id="app">
    <section class="studySection s-Intro bg-ltGray">
      <div class="pageWidth">
          <h3>Welia Health Rebrand</h3>
          <div class="columns s-textRow">
            <div class="col">
              <p>With time running out, a rural health system needed help building consensus around a new name and to launch quickly.</p>
            </div>
          </div>
      </div>
    </section>

    <section class="studySection s-ImageGroup bg-white s-noBorder">
      <div class="pageWidth">
          <h4>Finding the right name in a tight timeframe.</h4>
          <div class="col2 s-textRow">
            <div class="col">
              <p>It was daunting. The hospital system in Mora, Pine City, and Hinckley approached us after learning they had lost trademark rights to their name—and the window on use of their old name was closing. We had six months to rename, design the logo, and launch a new hospital system identity the whole staff and community could get behind.</p>
            </div>
            <div class="col">
               <p>In these situations, it’s tempting to pick a name out of a hat and run with it. What helps an organization thrive, though, is a name that aligns with who they are, one that works hard to help the team reach its goals. This fit and function lets a new identity be embraced by the people who live with it every day.</p>
            </div>
          </div>
          <div class="col2">
            <div class="col">
              <div class="responsiveImage" v-lazy:background-image="`/images/casestudies/whitecrane/left_sales.png`"></div>
            </div>
            <div class="col">
              <div class="responsiveImage" v-lazy:background-image="`/images/casestudies/whitecrane/right_sales.png`"></div>
            </div>
          </div>
          <h4>Design the rocket for where you want to go.</h4>
          <div class="col1 s-textRow">
            <p>To name and launch&mdash;fast&mdash;we pulled together a partnership of unique skill sets. Consulting agency 3.2.1 joined with Curious to oversee a small team that included the client’s existing freelance talent as key participants. The speed of the effort required a remarkable combined-lift from people who had never worked together.</p>
            <p>We developed a nimble strategy that spanned the name launch and an approach to manage the flow of elements that would soon have hundreds of moving parts daily. 3.2.1 facilitated the process from the selection of the name through the tone, approach, and language of the launch. Curious created the visual presence and vocabulary that began with a logo and expanded to signage and billboards and digital media and video and print advertising and employee badges and sweatshirts and you get the idea. We coordinated all the partners across design, video production, animation, and media buying to function as one seamless unit.</p>
          </div>
          <div class="pageWidth">
            <img class="fullWidthImage" v-lazy="`/images/casestudies/alomereMarketing/satw.png`" >
          </div>
      </div>
    </section>



    
    <section class="studySection s-ImageGroup bg-ltGray s-noBorder">
      <div class="pageWidth">
          <h4>Strategy Part Two - Align the Marketing &amp; Sales Teams</h4>
          <div class="col2">
            <div class="col">
              <div class="responsiveImage" v-lazy:background-image="`/images/casestudies/whitecrane/left_sales.png`"></div>
            </div>
            <div class="col">
              <div class="responsiveImage" v-lazy:background-image="`/images/casestudies/whitecrane/right_sales.png`"></div>
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
              <div class="responsiveImage" v-lazy:background-image="`/images/casestudies/whitecrane/resultstopleft.png`"></div>
            </div>
            <div class="col">
              <div class="responsiveImage" v-lazy:background-image="`/images/casestudies/whitecrane/resultstopright.png`"></div>
            </div>
          </div>
          <div class="col2">
            <div class="col">
              <div class="responsiveImage" v-lazy:background-image="`/images/casestudies/whitecrane/resultsbottomleft.png`"></div>
            </div>
            <div class="col">
              <div class="responsiveImage" v-lazy:background-image="`/images/casestudies/whitecrane/resultsbottomright.png`"></div>
            </div>
          </div>
          <div class="col2 s-textRow">
            <div class="col">
              <p class="quote">Discovering Curious was a bit of a process, but once here, we knew we had a partner we could trust. White Crane is a residential design/build remodeling company without the in-house bandwidth to do our marketing consistently and effectively. Couple that with the continued rise of the internet and its content-rich capability, we needed help. Enter Curious! This firm is leading, listening, and learning and the number and quality of leads reflect exactly this.  These are people I trust who are delivering the goods.</p>
              <p class="attr">Susan Denk, Owner &amp; Founder of White Crane Construction</p>
            </div>
            <div class="col">
              <div class="responsiveImage" v-lazy:background-image="`/images/casestudies/whitecrane/susan.png`"></div>
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
          <span>Get results like this: </span> <nuxt-link class="button" to="#contact">Get in touch</nuxt-link>
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
  // head () {
  //   return {
  //     title: 'Curious: Making Products Useful, Usable & Beautiful',
  //     meta: [
  //       { hid: 'description', name: 'description', content: 'Curious consultants help you identify your next best marketing steps, and develop marketing strategies to find and connect with your customers.' },

  //       { hid: 'keywords', name: 'keywords', content: 'product design, branding, marketing, coaching, consulting, design sprint, review, strategy, digital, identity, story, minneapolis, minnesota, twin cities, hightlight center, ux, interface' },
         
  //       { hid: 'og:title', name: 'og:title', content: 'Curious - Solving Brand, Marketing & Product problems for small businesses' },
  //       { hid: 'og:description', name: 'og:description', content: 'Curious is a group of experienced consultants helping business leaders overcome brand, marketing, and product challenges. We help companies discover their best opportunities for growth.' },

  //       { hid: 'og:image', name: 'og:image', content: 'https://discovercurious.com/images/shareLogo.png' },
  //       { hid: 'og:image:type', name: 'og:image:type', content: 'image/png' },
  //       { hid: 'og:image:width', name: 'og:image:width', content: '1080' },
  //       { hid: 'og:image:height', name: 'og:image:height', content: '800' },
  //     ]
  //   }
  // },
}
</script>

<style></style>
