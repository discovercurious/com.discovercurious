<template>
  <div id="app">
    <section class="studySection bg-ltGray s-noBorder">
      <div class="pageWidth">
          <h3><span>HubSpot Implementation:</span>Powerful Sales Software That Grows With Your Business</h3>
          <div class="col2 s-textRow">
            <div class="col">
                <p>Your CRM is at the heart of your sales enablement activities, but keeping it up to date can be a challenge and take away from the activities that lead to actual revenue. Our Sales Acceleration CRM Implementation&trade; includes everything you need to close more deals and grow your business.</p>
                <p>At Curious, we go beyond the basic CRM setup and help you avoid a time-consuming implementation. We pair your data and sales enablement technology, expert training and industry experience to keep your pipeline organized so you can focus on what matters, building relationships that lead to revenue.</p>
                <p>Unlike other agencies that do CRM implementations, we focus on making onboarding seamless, your sales enablement technology training flexible and ensure sales momentum by providing support to actually close deals.</p>
                <p>As your sales pipeline begins to fill, we’ve partnered with virtual closing experts who are available to provide “on-demand” deal assistance to ensure expeditious deal closure.</p>
            </div>
            <div class="col">
              <div class="responsiveImage" v-lazy:background-image="`/insights/closers_transparent.png`"></div>
            </div>
          </div>
      </div>
    </section>

    <section class="studySection bg-gold s-cta">
      <div class="pageWidth">
        <div class="ctaText">
          <span>Want more information or to get started with HubSpot?</span> <a class="button" href="https://doodle.com/mm/garrioharrison/discovercurious">Schedule a Chat</a>
        </div>
      </div>
    </section>
    
    <section class="studySection bg-white">
      <div class="pageWidth">
          <h5>Our proven process saves time at every stage of the funnel.</h5>
          <div class="col3 s-textRow" >
            <div class="col">
                <h4>Track Your Entire Pipeline</h4>
                <p>Sync with HubSpot CRM to track deals won, lost, and in progress.</p>
            </div>
            <div class="col">
                <h4>Business Intelligence</h4>
                <p>A technology stack optimized to help you find, engage and nurture your hottest leads with both timely and relevant follow-ups.</p>
            </div>
            <div class="col">
                <h4>Sales Coaching</h4>
                <p>Real-time, individual or team based sales coaching focused on deal advancement live in your HubSpot CRM.</p>
            </div>
          </div>
      </div>
    </section>
    <section class="studySection bg-white">
      <div class="pageWidth">
          <div class="responsiveVideo">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/qDCyvvdzND4?modestbranding=true" frameborder="0" allow="encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
      </div>
    </section>

    <section class="studySection bg-gold s-cta">
      <div class="pageWidth">
        <div class="ctaText">
          <span>Want more information or to get started with HubSpot?</span> <a class="button" href="https://doodle.com/mm/garrioharrison/discovercurious">Schedule a Chat</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import TypeMate from 'typemate';
export default {
  components: {
  },
  head () {
    return {
      title: 'Curious: Workshop - HubSpot Integration',
      meta: [
        // { hid: 'description', name: 'description', content: 'Curious consultants help you identify your next best marketing steps, and develop marketing strategies to find and connect with your customers.' },

        // { hid: 'keywords', name: 'keywords', content: 'product design, branding, marketing, coaching, consulting, design sprint, review, strategy, digital, identity, story, minneapolis, minnesota, twin cities, hightlight center, ux, interface' },

        { hid: 'og:title', name: 'og:title', content: 'Curious: Workshop - HubSpot Integration' },
        { hid: 'og:description', name: 'og:description', content: 'Our Sales Acceleration CRM Implementation includes everything you need to close more deals and grow your business.' },

        //  { hid: 'og:image', name: 'og:image', content: 'https://discovercurious.com/workshops/digital-first.png' },
        //  { hid: 'og:image:type', name: 'og:image:type', content: 'image/png' },
        //  { hid: 'og:image:width', name: 'og:image:width', content: '1168' },
        //  { hid: 'og:image:height', name: 'og:image:height', content: '1034' },
      ]
    }
  },
  mounted: function(){
    this.$nextTick(function () {
      const tm = new TypeMate(undefined, { selector: 'h2, h3, p, li', ignoreClass: 'noTypeFix' });
      tm.apply();
    })

    const hsScript = document.createElement('script')
    hsScript.src = "//js.hs-scripts.com/3891745.js"
    document.body.appendChild(hsScript)
  },
}
</script>

<style></style>
