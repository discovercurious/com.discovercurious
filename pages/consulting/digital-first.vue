<template>
  <div id="app">
    <section class="studySection bg-ltGray s-noBorder">
      <div class="pageWidth">
          <h3><span>Workshop:</span>Digital Thinking for Analog Organizations - v2</h3>
          <div class="col2 s-textRow">
            <div class="col">
              <div class="responsiveImage" v-lazy:background-image="`/workshops/digital-first.svg`"></div>
            </div>
            <div class="col">
              <h5>Digital Thinking for Analog Organizations provides teams with techniques to imagine and develop digital products that create unique innovative solutions for their organization or market.</h5>
              <p>This half-day session will help your team: 1) Implement the benefits unique to digital platforms during new product development , 2) See how to replicate the processes developed by leading tech companies to build amazing products while saving valuable resources, and 3) Learn techniques to cross-functionally collaborate to define and understand success.</p>
              <p>We’ll de-mystify terminology, discuss iterative approaches to product development, highlight available tools to integrate, and uncover opportunities unique to a digital mindset. Finally, we’ll explore technology examples beyond the web to address audiences of the future.</p>
              <p><strong>We've designed this workshop to re-energize your team through entertaining and collaborative learning exercises.</strong> Additionally, these exercieses generate actionable ideas you could begin to implement the very next day.</p>
            </div>
          </div>
      </div>
    </section>

    <section class="studySection bg-white">
      <div class="pageWidth">
          <div class="col2 s-textRow" >
            <div class="col">
              <h4>What you'll learn:</h4>
              <ol>
                  <li>How organizations with a "digital first" mindset assemble teams and create processes to rapidly engage audiences and meet their needs.</li>
                  <li>Identify the various types of technical platforms available and when to leverage their unique attributes.</li>
                  <li>Which benefits of digital are unique to your business/industry and how to leverage them to maximize your investment.</li>
                  <li>How to leverage tools from Amazon, Google, and Microsoft to speed production while decreasing costs.</li>
                  <li>The problem with budget buckets and how to better estimate production costs for digital products.</li>
                </ol>
            </div>
            <div class="col">
              <h4>You'll be able to:</h4>
              <ol>
                  <li>Utilize new and existing resources to produce content specifically optimized for digital mediums.</li>
                  <li>Save time and money by speaking a unified language when building digital products.</li>
                  <li>Utilize a “test and learn then iterate” mindset on your next project.</li>
                  <li>Visualize technology’s direction post web and imagine how it might be used to create unique products for your market.</li>
                </ol>
            </div>
          </div>
      </div>
    </section>

    <section class="studySection bg-gold s-cta">
      <div class="pageWidth">
        <div class="ctaText">
          <span>Want more information or to offer this workshop to your team?</span> <nuxt-link class="button" to="#contact">Get in touch</nuxt-link>
        </div>
      </div>
    </section>

    <section class="studySection bg-white">
      <div class="pageWidth">
          <h4>Workshop outline</h4>
          <div class="col3 s-textRow" >
            <div class="col">
              <h5>Part A (2 hours)</h5>
                <ul>
                  <li>Review where we've been (brief history)</li>
                  <li>Modern device ecosystems</li>
                  <li>Common digital product types</li>
                  <li><strong>Exercise:</strong> Things we wish we knew</li>
                  <li>Digital opportunities you shouldn't ignore</li>
                  <li>Development practices (Design Thinking, Lean, Agile)</li>
                  <li>Implementation roles &amp; How to fill them</li>
                  <li><strong>Discuss:</strong> What does success look like?</li>
                </ul>
            </div>
            <div class="col">
              <h5>Part B (2 hours)</h5>
              <ul>
                  <li>A story and a warning</li>
                  <li>Estimating the cost of production</li>
                  <li>Building to the minimums</li>
                  <li><strong>Exercise:</strong> Trim the feature fat</li>
                  <li>Testing, One, Two, Three</li>
                  <li>Fake it first</li>
                  <li>Monetization options</li>
                  <li>Near future technology to consider</li>
                  <li><strong>Discuss:</strong> What can we implement?</li>
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
            <div class="col double">
              <h4>About the facilitator</h4>
              <p>I’ve spent 20 years watching organizations struggle to adopt a digital mindset. Without this change in thinking, businesses often fail to build marketable products, waste huge sums of money, and alienate their top innovation talent. I don’t want simple knowledge gaps or misaligned processes to torpedo anyone’s ability to create amazing solutions. I created this workshop to help teams bridge the gap between analog and digital.</p>

              <p>Over the course of my career, I’ve designed interfaces, translated business/technical needs, written code, architected solutions, and helped define success. I’ve seen the struggles of creating a “digital first organization” from many different perspectives and possess a deep knowledge of the tech involved. Additionally, I’m certified by Google to facilitate innovation workshops.</p>

              <p>What that really means is I understand a successful workshop is built from equal parts knowledge transfer, hands-on exercises, and timely brain breaks. All with a dash of post-it note art tossed in for fun. I look forward to meeting your team!</p>
            </div>
            <div class="col">
              <h5>Bryce Howitson</h5>
              <div class="responsiveImage" v-lazy:background-image="`/workshops/bryce.jpg`"></div>
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
      title: 'Curious: Workshop - Digital Thinking for Analog Organizations',
      meta: [
        // { hid: 'description', name: 'description', content: 'Curious consultants help you identify your next best marketing steps, and develop marketing strategies to find and connect with your customers.' },

        // { hid: 'keywords', name: 'keywords', content: 'product design, branding, marketing, coaching, consulting, design sprint, review, strategy, digital, identity, story, minneapolis, minnesota, twin cities, hightlight center, ux, interface' },

        { hid: 'og:title', name: 'og:title', content: 'Curious: Workshop - Digital Thinking for Analog Organizations' },
        { hid: 'og:description', name: 'og:description', content: 'A foundational workshop providing teams with techniques to imagine and develop digital products that create unique innovative solutions in their organization or market.' },

         { hid: 'og:image', name: 'og:image', content: 'https://discovercurious.com/workshops/digital-first.png' },
         { hid: 'og:image:type', name: 'og:image:type', content: 'image/png' },
         { hid: 'og:image:width', name: 'og:image:width', content: '1168' },
         { hid: 'og:image:height', name: 'og:image:height', content: '1034' },
      ]
    }
  },
}
</script>

<style></style>
