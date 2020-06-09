<template>
  <div id="app">
    <section class="studySection s-Intro bg-ltGray">
      <div class="pageWidth">
          <h3>Welia Health Rebrand</h3>
          <div class="columns s-textRow">
            <div class="col">
              <p>With time running out, a rural health system needed a name that fit their vision.</p>
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
          <div class="col1">
            <img class="fullWidthImage" v-lazy="`/images/casestudies/welia/1.png`" >
          </div>
          <h4>Design the rocket for where you want to go.</h4>
          <div class="col1 s-textRow">
            <p>To name and launch&mdash;fast&mdash;we pulled together a partnership of unique skill sets. Consulting agency 3.2.1 joined with Curious to oversee a small team that included the client’s existing freelance talent as key participants. The speed of the effort required a remarkable combined-lift from people who had never worked together.</p>
            <p>We developed a nimble strategy that spanned the name launch and an approach to manage the flow of elements that would soon have hundreds of moving parts daily. 3.2.1 facilitated the process from the selection of the name through the tone, approach, and language of the launch. Curious created the visual presence and vocabulary that began with a logo and expanded to signage and billboards and digital media and video and print advertising and employee badges and sweatshirts and you get the idea. We coordinated all the partners across design, video production, animation, and media buying to function as one seamless unit.</p>
          </div>
          <div class="col1">
            <img class="fullWidthImage" v-lazy="`/images/casestudies/welia/2.png`" >
            <img class="fullWidthImage" v-lazy="`/images/casestudies/welia/3.png`" >
          </div>
      </div>
    </section>
    <section class="studySection s-ImageGroup bg-ltGray s-noBorder">
      <div class="pageWidth">
          <h4>But first, a pause.</h4>
          <div class="col2">
            <div class="col s-textRow">
              <p>Even in this sprint, our first step was to stop and listen. We interviewed key staff members on the desire for the name and the dreams of the organization. We studied the strategic plan and the organizations mission, vision, and values. We also surveyed over 650 people inside the organization and the community for the key elements that made them unique.</p>
            </div>
            <div class="col s-textRow">
              <p>The agreement between employees and community was astounding—and a lucky break for us. Finding the organization so well defined inside and outside meant we had a tight target on what the final name should say and how it should feel.</p>
            </div>
          </div>
      </div>
    </section>

    <section class="studySection s-ImageGroup bg-white s-noBorder">
      <div class="pageWidth">
          <div class="col1">
            <img class="fullWidthImage" v-lazy="`/images/casestudies/welia/4.png`" >
          </div>
          <h4>Data driven but heart centered.</h4>
          <div class="col2 s-textRow">
            <div class="col">
              <p>Three-hundred-plus names on our original list were whittled down to 27 that passed trademark and URL availability. Using 3.2.1's Spark&trade; process—which uses a database to sort ideas in real time—we then brought in a team of 14 key stakeholders to rank the names in all the ways the team had identified as important.</p>
              <h5>At the end of the day, the name that rose to the top was Welia Health.</h5>
            </div>
            <div class="col">
               <p>Circling back to what made the organization unique, this is what people told us:
               <ul>
                 <li>We’re wellness focused. </li>
                 <li>We’re engaged in our communities.</li>
                 <li>We provide innovative care.</li>
                 <li>And we’re always welcoming. </li>
               </ul>
               </p>
               <p>The key points—wellness, engaged, leading, innovative and always welcoming—spell out the short name. To top it off, Welia means “to see” in Gaelic, which feels ideal for a provider providing insight and leading-edge care.</p>
            </div>
          </div>
          <div class="col1">
            <img class="fullWidthImage" v-lazy="`/images/casestudies/welia/5.png`" >
            <img class="fullWidthImage" v-lazy="`/images/casestudies/welia/6.png`" >
          </div>
      </div>
    </section>

    
    <section class="studySection s-ImageGroup bg-gold s-noBorder">
      <div class="pageWidth">
          <div class="col1">
            <img class="fullWidthImage" v-lazy="`/images/casestudies/welia/7.png`" >
          </div>
          <h4>What we learned by being Curious.</h4>
          <div class="col2 s-textRow">
            <div class="col">
             <p>Naming is always a unique journey for a deeply consequential and emotional decision. We knew going in that speeding up a name-and-launch timeline complicates bringing all audiences along in the process. Also, no one gives you extra stars for how fast a name change happens; at the end of the day, what matters is having a name that people will champion, one that resonates as being right and true.</p>
            </div>
            <div class="col">
              <p>What we discovered was that by remaining faithful to our foundations of listening and letting the client lead the important decision making, we can help facilitate major changes like a name even when the clock is ticking. Starting with what the organization holds valuable meant that the new name could be a natural next step. And with a name that works—highlighting wellness in a simple, approachable way&mdash;Welia Health can live out their mission of creating communities that are healthy and well.</p>
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
