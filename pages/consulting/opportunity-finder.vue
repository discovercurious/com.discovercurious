<template>
  <div id="app">
    <section class="studySection bg-ltGray s-noBorder">
      <div class="pageWidth">
        <h3><span>Engagement:</span>Curious Opportunity Map</h3>
        <div class="col2 s-textRow">
          <div class="col">
            <h5>Do you have an idea to grow your business but the path to achieving that goal is hazy?</h5>
            <p>Do you imagine templating a service to generate new revenue or leads? How might your existing offerings be tweaked to reach a new audience? </p>
            <p>At Curious we believe every business will benefit from answering these questions. We created the Curious Opportunity Map Process (COP) to identify ways to productize your unique business, service, and knowledge. But it doesn’t stop there. The COP process combines collaborative workshops with Curious product branding and marketing expertise to not only uncover opportunities, but also provide definition to empower you to decide how best to invest in your business. By the end of the process you’ll receive documentation covering the vision, pros/cons, estimated costs, production hurdles, success metrics and ROI for 2-3 unique opportunities.</p>
          </div>
          <div class="col">
            <p><strong>Curious Opportunity Mapping provides these benefits:</strong></p>
            <ol>
              <li>Efficiently shape the challenge to quickly identify opportunities and roadblocks</li>
              <li>Identify the full picture of the problem being solved</li> 
              <li>Collaborate with experienced product and marketing experts</li>
              <li>Bring clarity to the impact and viability of ideas / solutions</li>
              <li>Understand implementation costs</li>
              <li>Clearly define success and how to measure it</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
    <!-- <section class="studySection bg-ltGray s-cta">
      <div class="pageWidth">
        <div class="ctaText">
          <span>Ready to start identifiying product opportunities?</span> <nuxt-link class="button" to="#contact">Get in touch</nuxt-link>
        </div>
      </div>
    </section> -->
    <section class="studySection bg-white s-noBorder">
      <div class="pageWidth">
          <h4>How it works + deliverables</h4>
          <div class="col2 s-textRow" >
            <div class="col">
              <h5>Exploration Audit  (half day)</h5>
                <ul>
                  <li>Lightning Talks - Expert conversations to provide perspective and goals of the problem being solved.</li>
                  <li>Definition Exercise - Define the challenge and establish success metrics.</li>
                  <li>"How Might We" Exercise - clarify the challenges and context based on lighting talks.</li> 
                  <li>Demo Time - share existing marketplace examples that solve similar problems to provide context and inspiration.</li>
                  <li>Listening Session - ensure Curious completely understands goals &amp; objectives. </li>
                </ul>
            </div>
            <div class="col">
              <h5>Curious Recommendations</h5>
              <ul>
                  <li>Presentation of opportunities (2-3 solutions)</li>
                  <li>Take-away documentation of each solution including pros/cons, estimated implementation costs and role/expertise requirements</li>
                </ul>
                <h5>Business Investment $5,000.00</h5>
                <p class="note">
                <strong>Note:</strong> To provide greatest value, each collaboration session is customized to the participants’ specific organization, industry and set of challenges.
              </p>
            </div>
          </div>
          <div class="responsiveImage" v-lazy:background-image="`/workshops/cop.svg`"></div>
      </div>
    </section>
    
    <section class="studySection bg-gold s-cta">
      <div class="pageWidth">
        <div class="ctaText">
          <span>Ready to start identifiying product opportunities?</span> <nuxt-link class="button" to="#contact">Get in touch</nuxt-link>
        </div>
      </div>
    </section>

    <!-- <section class="studySection s-facilitator bg-darkGray">
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
    </section> -->

  </div>
</template>

<script>

export default {
  components: {
  },
  head () {
    return {
      title: 'Curious: Opportunity Mapping & Solution Identification',
      meta: [

        { hid: 'og:title', property: 'og:title', content: 'Curious: Opportunity Mapping & Solution Identification' },
        { hid: 'og:description', property: 'og:description', content: 'We created the Curious Opportunity Map (COP) process to identify ways to productize your unique business, service, and knowledge.' },

         { hid: 'og:image', property: 'og:image', content: 'https://discovercurious.com/workshops/cop.png' },
         { hid: 'og:image:type', property: 'og:image:type', content: 'image/png' },
         { hid: 'og:image:width', property: 'og:image:width', content: '1168' },
         { hid: 'og:image:height', property: 'og:image:height', content: '722' },
      ]
    }
  },
}
</script>

<style></style>
