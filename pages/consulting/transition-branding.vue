<template>
  <div id="app">
    <section class="studySection bg-ltGray">
      <div class="pageWidth">
          <div class="col1 s-textRow">
            <div class="col">
              <h3><span>Workshop:</span>Branding for business transition</h3>
              <p>Many baby boomer company founders are retiring and would like to transition their business to the next generation leadership. Because they are leaving a legacy, transition isn’t just about selling the business for a quick buck. The outgoing and incoming leadership need to share a common vision for the company, yet allowing for new management styles, new processes, new compensation models, new positioning, new products, and possibly a new vision.</p>
              <p>How do you let go and set the company up for success? How do you make changes that are helpful and not too disruptive? How do you address new technology and a more competitive marketplace? It isn’t easy. But we can help you navigate the process as an unemotional, experienced guide.</p>
            </div>
          </div>
      </div>
    </section>

    <section class="studySection bg-white s-noBorder">
      <div class="pageWidth">
        <div class="col1">
            <div class="col">
              <div class="responsiveImage" v-lazy:background-image="`/workshops/hurdles.svg`"></div>
            </div>
          </div>
          <div class="col3 s-textRow" >
            <div class="col">
              <h4>What is it?</h4>
              <p>This 1-day workshop with your team will discuss the following topics:</p>
              <ul>
                  <li>Company history, values, customers, milestones, channels, products/services</li>
                  <li>Leadership Personality Assessments</li>
                  <li>Current and future marketplace analysis</li>
                  <li>Align old and new brand vision, values, value proposition, personality, voice</li>
                  <li>Identify current and future customer segments</li>
                  <li>Fee Structures</li>
                  <li>Corporate partnerships</li>
                  <li>Brand positioning</li>
                  <li>Messaging</li>
                  <li>Marketing channels</li>
                </ul>
            </div>
            <div class="col">
              <h4>What do you get?</h4>
              <p>After the workshop, there will be homework and follow up discussions to organize and align the discussion. In the end, Curious will deliver a multi-page document we call a Brand Guideline. It will document the following building blocks as a corporate foundation for future decision making:</p>
              <ul>
                  <li>Brand Position</li>
                  <li>Brand Vision</li>
                  <li>Brand Values</li>
                  <li>Brand Value Proposition</li>
                  <li>Brand Personality/voice</li>
                  <li>Identity logo, colors, fonts, photography, and design assets.</li>
                </ul>
            </div>
            <div class="col">
              <p class="note">
                <strong>Note:</strong> To provide greatest value, each workshop is customized to the participants’ specific organization, industry and set of challenges.
              </p>
            </div>
          </div>
      </div>
    </section>

    <section class="studySection bg-ltGray s-cta">
      <div class="pageWidth">
        <div class="ctaText">
          <span>Need more details about what's discussed or want customization?</span> <nuxt-link class="button" to="#contact">Please Contact Us</nuxt-link>
        </div>
      </div>
    </section>

    <section class="studySection s-facilitator bg-darkGray">
      <div class="pageWidth">
          <div class="col3 s-textRow">
            <div class="col">
              <h5>Sherwin Schwartzrock</h5>
              <div class="responsiveImage" v-lazy:background-image="`/workshops/sherwin.jpg`"></div>
            </div>
            <div class="col double">
              <h4>About the facilitator</h4>
              <p>In my 30-year career, I’ve learned and seen first hand the power of a well-defined brand. It is a valuable long-term investment. Not only does it help your customers understand what your organization offers, it also aligns everyone internally to move as one in the same direction. This foundation is so important when you begin to think about succession planning. Most founders sit down with their financial advisor first. But, if the outgoing founder and the incoming leadership aren’t on the same page, it could be a train wreck.</p>
              <p>My job in this workshop is very much like a marriage counselor. I ask the right questions and you make all the decisions. It’s a systematic process that will bring clarity and confidence to a good fit and smooth transition.</p>
            </div>
          </div>
      </div>
    </section>

  </div>
</template>

<script>

export default {
  components: {
  },
  head () {
    return {
      title: 'Curious: Workshop - Branding for business transition',
      meta: [
        // { hid: 'description', name: 'description', content: 'Curious consultants help you identify your next best marketing steps, and develop marketing strategies to find and connect with your customers.' },

        // { hid: 'keywords', name: 'keywords', content: 'product design, branding, marketing, coaching, consulting, design sprint, review, strategy, digital, identity, story, minneapolis, minnesota, twin cities, hightlight center, ux, interface' },

        { hid: 'og:title', name: 'og:title', content: 'Curious: Workshop - Branding for business transition' },
        { hid: 'og:description', name: 'og:description', content: 'How do you let go and set the company up for success? How do you make changes that are helpful and not too disruptive? How do you address new technology and a more competitive marketplace? It isn’t easy. But we can help you navigate the process as an unemotional, experienced guide.' },

         { hid: 'og:image', name: 'og:image', content: 'https://discovercurious.com/workshops/hurdles.png' },
         { hid: 'og:image:type', name: 'og:image:type', content: 'image/png' },
         { hid: 'og:image:width', name: 'og:image:width', content: '1129' },
         { hid: 'og:image:height', name: 'og:image:height', content: '520' },
      ]
    }
  },
}
</script>

<style></style>
