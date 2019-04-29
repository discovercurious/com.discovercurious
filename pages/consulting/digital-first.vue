<template>
  <div id="app">
    <section class="studySection bg-ltGray">
      <div class="pageWidth">
          <div class="col1 s-textRow">
            <div class="col">
              <h3><span>Workshop:</span>Digital Thinking for Analog Organizations</h3>
              <h5>A foundational workshop providing teams with techniques to start imagining and developing digital products to innovate their organization.</h5>
              <p>This half-day session will help your team: 1) Build a basic knowledge of how digital products work, 2) Quickly gain an understanding of proven processes used by leading tech companies to develop new ideas, and 3) Learn techniques to cross-functionally collaborate to define and understand success.</p>
              <p>We’ll de-mystify terminology, discuss common iterative approaches to product development, and uncover opportunities unique to a digital mindset. Finally, we’ll explore examples on the technical horizon to spark ideas for the future.</p>
            </div>
          </div>
      </div>
    </section>

    <section class="studySection bg-white">
      <div class="pageWidth">
          <div class="col2 s-textRow" >
            <div class="col">
              <h4>What you'll learn:</h4>
              <p>
                <ol>
                  <li>How organizations with a "digital first" mindset assemble teams and create processes that allow them to build engaging digital products.</li>
                  <li>Identify the various types of technical platforms and when to leverage their unique attributes.</li>
                  <li>Why learning is an integral part of continuously-evolving products and how to integrate test-and-enhancement cycles into your product development.</li>
                  <li>Which benefits of digital are unique to your business/industry and how to leverage them to improve what you create.</li>
                  <li>The problem with budget buckets and how to better estimate production costs for digital products.</li>
                </ol>
              </p>
            </div>
            <div class="col">
              <h4>After this workshop</h4>
              <p>You'll be able to:
                <ol>
                  <li>See where technology is going and imagine how it might be used to create products for your market.</li>
                  <li>Improve your relationship with vendors and in-house teams by speaking a unified language.</li>
                  <li>Utilize a test + iterate mindset on your next project.</li>
                </ol>
              </p>
            </div>
          </div>
      </div>
    </section>
    <section class="studySection bg-white">
      <div class="pageWidth">
          <h4>Workshop outline</h4>
          <div class="col3 s-textRow" >
            <div class="col">
              <h5>Part A (2 hours)</h5>
              <p>
                <ul>
                  <li>A (brief) History of Digital</li>
                  <li>Device ecosystems</li>
                  <li>Common digital product types</li>
                  <li class="callout"><strong>Exercise:</strong> Building a data stream</li>
                  <li>Digital opportunities</li>
                  <li>Development practices (Design Thinking, Lean, Agile)</li>
                  <li>Team roles &amp; How to fill them</li>
                </ul>
              </p>
            </div>
            <div class="col">
              <h5>Part B (2 hours)</h5>
              <p>
                <ul>
                  <li>A story and a warning</li>
                  <li>Estimating the cost of production</li>
                  <li>Building to the minimums</li>
                  <li class="callout"><strong>Exercise:</strong> Trim the feature fat</li>
                  <li>Testing, One, Two, Three</li>
                  <li>Fake it first</li>
                  <li>Monetization options</li>
                  <li>Near future technology to consider</li>
                </ul>
              </p>
            </div>
            <div class="col">
              <h5>Note:</h5>
              <p class="note">
                To provide greatest value, each workshop is customized to the participants’ specific organization, industry and set of challenges.
              </p>
            </div>
          </div>
      </div>
    </section>

    <section class="studySection s-facilitator bg-darkGray">
      <div class="pageWidth">
          <div class="col3 s-textRow">
            <div class="col double">
              <h4>About the facilitator</h4>
              <p>I’ve spent 20 years watching organizations struggle to adapt a digital mindset. Without this change in thinking, businesses often fail to build marketable products, waste huge sums of money and alienate their top innovation talent. I don’t want simple knowledge gaps or misaligned processes to torpedo anyone’s ability to create amazing solutions. So I created this workshop to help teams bridge the gap between analog and digital.</p>
              <p>Over the course of my career, I’ve designed interfaces, translated business/technical needs, written code, architected solutions and helped define success. I’ve seen the struggles of creating a “digital first organization” from many different perspectives and possess a deep knowledge of the tech involved. Additionally, I’m certified by Google to facilitate innovation workshops.</p>
              <p>All that really means is that I understand a successful workshop is built from equal parts knowledge transfer, hands on exercises and timely brain breaks. All with a dash or post-it note art tossed in for fun. I look forward to meeting your team!</p>
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
