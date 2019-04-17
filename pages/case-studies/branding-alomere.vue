<template>
  <div id="app">
    <section class="studySection s-ImageLarge bg-white">
      <div class="pageWidth">
          <div class="responsiveImage" v-lazy:background-image="`/casestudies/alomereBrand/2.jpg`"></div>
      </div>
    </section>
    <section class="studySection s-Intro bg-ltGray">
      <div class="pageWidth">
          <div class="columns s-textRow">
            <div class="col">
              <h3>Alomere Health Rebrand Strategy</h3>
              <h5>Why was Curious hired?</h5>
              <p>A county-owned health system needed help navigating a name change to better position themselves for growth.</p>
            </div>
            <div class="col">
              <h5>What Curious provided</h5>
              <p>
                <ul>
                  <li>Rebrand Viability Assessment</li>
                  <li>Naming</li>
                  <li>Identity Design</li>
                  <li>Brand standards</li>
                  <li>Internal Engagement Strategy</li>
                  <li>Rebrand Launch Strategy</li>
                  <li>Signage</li>
                  <li>Advertising</li>
                </ul>
              </p>
            </div>
          </div>
      </div>
    </section>
    <section class="studySection s-2ColText bg-ltGray">
      <div class="pageWidth">
          <div class="col2 s-textRow">
            <div class="col">
              <h5>The Setting</h5>
              <p>Douglas County Hospital (DCH) was the pride of the community because of its economic influence as a large employer and it’s national recognition for excellence.</p>
              <p>To stay locally independent, DCH and three local clinics merged in 2012 but kept their individual brands. Executive director, Carl Vaagenes knew their health system needed to grow if it wanted to stay strong. The county name no longer reflected the community they served and limited future growth.</p>
            </div>
            <div class="col">
              <div class="responsiveImage" v-lazy:background-image="`/casestudies/alomereBrand/1.jpg`"></div>
            </div>
          </div>
      </div>
    </section>
    <section class="studySection s-2ColText bg-ltGray">
      <div class="pageWidth">
          <div class="col2 s-textRow">
            <div class="col">
              <div class="responsiveImage" v-lazy:background-image="`/casestudies/alomereBrand/ADs_1.jpg`"></div>
            </div>
            <div class="col">
              <h5>The Strategy</h5>
              <p>Curious helped Alomere Health’s leadership engage the stakeholders and the public to see the value in a change that would undoubtedly be emotional for many. Through a process of interviews, research, steering committee meetings, naming, branding, and design, Curious helped launch an exciting new chapter for a beloved community hero.</p>
            </div>
          </div>
      </div>
    </section>
    <section class="studySection s-ImageLarge bg-white s-noBorder">
      <div class="pageWidth">
          <div class="responsiveImage" v-lazy:background-image="`/casestudies/alomereBrand/3.jpg`"></div>
      </div>
    </section>
    <section class="studySection s-ImageGroup bg-ltGray">
      <div class="pageWidth">
          <div class="col2">
            <div class="col">
              <div class="responsiveImage" v-lazy:background-image="`/casestudies/alomereBrand/BirthCert_1.jpg`"></div>
            </div>
            <div class="col">
              <div class="responsiveImage" v-lazy:background-image="`/casestudies/alomereBrand/Signage_1.jpg`"></div>
            </div>
          </div>
          <div class="col2">
            <div class="col">
              <div class="responsiveImage" v-lazy:background-image="`/casestudies/alomereBrand/4.jpg`"></div>
            </div>
            <div class="col">
              <div class="responsiveImage" v-lazy:background-image="`/casestudies/alomereBrand/5.jpg`"></div>
            </div>
          </div>
      </div>
    </section>
        <section class="studySection s-ImageGroup bg-ltGray">
      <div class="pageWidth">
          <h4>The Results</h4>
          <div class="col1">
            <h5>The rebrand launched with great success due to a strategy that first united employees, and then inspired the community with the leadership’s vision months before the unveiling of the new name.</h5>
          </div>
          
          <div class="col3">
            <div class="col">
              <p>We assisted Alomere Health with a rebrand rollout across all touchpoints from clinic and hospital external/internal wayfinding signage to updating all collateral and advertising materials.</p>
              <p>Our partnership continues. By adding targeted digital marketing to a traditional media mix (print, outdoor, radio), Curious helps Alomere create health-related conversations relevant to focused audiences.</p>
            </div>
            <div class="col">
              <div class="responsiveImage" v-lazy:background-image="`/casestudies/alomereBrand/Signage_2.jpg`"></div>
            </div>
            <div class="col">
              <div class="responsiveImage" v-lazy:background-image="`/casestudies/alomereBrand/7.jpg`"></div>
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
          <span>Need help building consensus within a large organization?</span> <nuxt-link class="button" to="#contact">Get in touch</nuxt-link>
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