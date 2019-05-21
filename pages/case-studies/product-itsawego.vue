<template>
  <div id="app">
    <section class="studySection s-Intro bg-ltGray">
      <div class="pageWidth">
          <div class="columns s-textRow">
            <div class="col">
              <h3>Growing from an interesting idea to marketable business</h3>
              <p>Our client Amanda looked at existing dating apps and noticed a dirty secret. Namely, they don’t encourage a comfortable environment, especially for women. Questions abound around safety, what happens when there isn’t a connection, and even what to do if friends/family don’t approve. She realized that group dates can easily address these issues but traditional tools don’t cater to that type of activity. The idea of building a better dating app was born, but where to start…</p>
            </div>
            <div class="col">
              <div class="curiousDid">
                <h5>What Curious provided</h5>
              <p>
                <ul>
                  <li>Design Sprint</li>
                  <li>Survey Training</li>
                  <li>Interactive Prototype</li>
                  <li>Product Story Coaching</li>
                  <li>Monetization Resources</li>
                </ul>
              </p>
              </div>
            </div>
          </div>
      </div>
    </section>


    <section class="studySection s-ImageLarge bg-darkGray">
      <div class="pageWidth">
          <div class="col1">
            <div class="col">
              <div class="responsiveImage" v-lazy:background-image="`/casestudies/itsawego/1.jpg`"></div>
            </div>
          </div>
      </div>
    </section>

    <section class="studySection bg-white">
      <div class="pageWidth">
          <div class="col3 s-textRow" >
            <div class="col">
              <div class="responsiveImage" v-lazy:background-image="`/casestudies/itsawego/sprint1.png`"></div>
            </div>
            <div class="col">
              <h5>Asking many questions</h5>
              <p>The biggest hurdle between the spark of an idea and a viable product boils down to, who needs this? To answer that question, Curious helped Amanda craft a survey to assess potential audience pain points and demographics. After a week, and over 200 responses later, we had an answer. There seemed to be a need, but where to focus, and how could she continue to validate her idea?</p>
            </div>
            <div class="col">
              <h5>Run fast &amp; break things</h5>
              <p>Seeing the lack of a clear path forward, Curious recommended a modified Design Sprint with the goal of identifying key assumptions for further testing. The Design Sprint Methodology, created by Google Ventures, typically takes place in a five day workshop that covers ideation, basic prototyping and testing. Due to the small team and specialized challenges, we decided to focus heavily on ideation with a shorter sprint. Based on the sprint, Amanda concluded that we should focus on prototyping three opportunities unique to group dating.</p>
            </div>
          </div>
      </div>
    </section>
    <section class="studySection s-ImageGroup bg-ltGray">
      <div class="pageWidth">
          <h4>Fake it BEFORE you make it</h4>
          <h5>When prototyping, focus and efficiency are extremely important. Since we wanted to quickly address feature ideas for a mobile app, Curious identified a pre-built “UI library” consisting of layouts, widgets, and buttons. Customizing these items allowed us to iterate quickly on feature benefits, while maintaining a style that users intuitively expect. After the interface was created, we linked screens together creating an even more believable experience.</h5>
      </div>
    </section>

    <section class="studySection s-ImageGroup bg-ltGray">
      <div class="pageWidth">
          <div class="col2 s-textRow">
            <div class="col">
              <div class="responsiveVideo">
                <video loop autoplay muted poster="/casestudies/itsawego/matching_placeholder.png">
                  <source src="/casestudies/itsawego/matching.mp4" type="video/mp4">
                </video>
              </div>
              <h5>Making a love connection</h5>
              <p>The foundation of any dating app is the ability to match interested parties. We had to show how matching could work in a group setting, while conveying personality, interests, and background. Finally, it had to work exactly like users expected to make the barrier of adoption really low.</p>
            </div>
            <div class="col">
              <div class="responsiveVideo">
                <video loop autoplay muted poster="/casestudies/itsawego/chat_placeholder.png">
                  <source src="/casestudies/itsawego/chat.mp4" type="video/mp4">
                </video>
              </div>
              <h5>Communication &amp; Logistics</h5>
              <p>In a world with an excess of communication options, we felt it was imperative to offer a tool for matched groups to organize. While group chat is well understood, we questioned what unique opportunities could that create? We wanted to show the ability to include scheduling and empower the most organized person to facilitate action from the comfort of a well known system. Plus everyone loves to chat.</p>
            </div>
          </div>
      </div>
    </section>


    <section class="studySection s-ImageGroup s-noBorder bg-ltGray">
      <div class="pageWidth">
          <div class="col2 s-textRow">
            <div class="col">
              <h5>Business partnerships</h5>
              <p>An obvious goal is to make this a viable, sustainable business. Amanda concluded that venue and activity partnerships are one of the best ways to generate revenue. But a good partnership offers value to the users and therefore must appear an interface. We focused our remaining prototype effort on presenting curated suggestions in non-intrusive ways that might be useful during a group date.</p>
            </div>
            <div class="col">
              <div class="responsiveImage" v-lazy:background-image="`/casestudies/itsawego/suggest.png`"></div>
            </div>
          </div>
      </div>
    </section>
    <section class="studySection bg-white">
      <div class="pageWidth">
          <div class="col2 s-textRow">
            <div class="col">
              <h5>An idea you can touch</h5>
              <p>Armed with an interactive prototype, Amanda is able to test and validate her assumptions with anyone she meets. But its value doesn’t stop there. Everyone from potential investors, to partner businesses, can easily imagine exactly how this app works and its benefits. Plus, when it comes time to build it for real, any development shop can use the prototype to produce extremely accurate proposals.</p>
            </div>
            <div class="col">
              <h5>Curious connections</h5>
              <p>Throughout the process of disrupting traditional online dating, Amanda has relied on Curious as more than a consultant or maker. Instead we’ve acted as a coach to create accountability, provide advice, and even to create connections to the entrepreneurial community.</p>
            </div>
          </div>
      </div>
    </section>
    <section class="studySection s-ImageLarge s-noBorder bg-white">
      <div class="pageWidth">
          <div class="col1">
            <div class="col">
              <div class="responsiveImage" v-lazy:background-image="`/casestudies/itsawego/brand.png`"></div>
            </div>
          </div>
      </div>
    </section>

    <section class="studySection s-ImageGroup bg-darkGray">
      <div class="pageWidth">
          <h5>More Product</h5>
          <ProductStudies />
      </div>
    </section>
  </div>
</template>

<script>
import ProductStudies from '@/components/ProductStudies.vue';

export default {
  components: {
    ProductStudies,
  },
  head () {
    return {
      title: 'Curious: Case Study - making an idea real',
      meta: [
        // { hid: 'description', name: 'description', content: 'Curious consultants help you identify your next best marketing steps, and develop marketing strategies to find and connect with your customers.' },

        // { hid: 'keywords', name: 'keywords', content: 'product design, branding, marketing, coaching, consulting, design sprint, review, strategy, digital, identity, story, minneapolis, minnesota, twin cities, hightlight center, ux, interface' },

        { hid: 'og:title', name: 'og:title', content: 'Curious: Case Study - making an idea real' },
        // { hid: 'og:description', name: 'og:description', content: 'Curious is a group of experienced consultants helping business leaders overcome brand, marketing, and product challenges. We help companies discover their best opportunities for growth.' },

         { hid: 'og:image', name: 'og:image', content: 'https://discovercurious.com/images/og/itsawego_share.png' },
         { hid: 'og:image:type', name: 'og:image:type', content: 'image/png' },
         { hid: 'og:image:width', name: 'og:image:width', content: '1080' },
         { hid: 'og:image:height', name: 'og:image:height', content: '500' },
      ]
    }
  },
}
</script>

<style></style>
