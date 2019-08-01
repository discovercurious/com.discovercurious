<template>
  <div id="app">
    <section id="top">
      <div class="intro pageWidth">
        <h2>
          <!-- consultants -->
        We’re a group of experienced creatives helping business leaders overcome <nuxt-link to="branding">brand</nuxt-link>, <nuxt-link to="marketing">marketing</nuxt-link> &amp; <nuxt-link to="product">product development</nuxt-link> challenges.
        <!-- <img class="aboutProcess" src="~assets/images/process.svg" alt=""> -->
        </h2>
        <!-- <div class="cta">
          Growing your business <nuxt-link to="#contact">starts with a chat</nuxt-link>
        </div> -->
      </div>
      <div class="sidebar">Highlight Center - <strong>Minneapolis, Minnesota USA</strong></div>
    </section>
    <section id="main">
      <div class="pageWidth">
        <h3>Discover your best opportunities for growth!</h3>
        <!-- <h3>Discover your best opportunities for growth, informed by all aspects of business</h3> -->
        <div class="col3">
            <nuxt-link tag="div" class="col" to="product">
              <h4><span>Curious Helps</span> Create Products</h4>
              <h5>Do your products/services meet expectations and create delight?</h5>
              <a class="blockLink" href="#">See how we help answer these questions, and what a <strong>Design Sprint</strong> could teach you.</a>
            </nuxt-link>
            <nuxt-link tag="div" class="col" to="branding">
              <h4><span>Curious Helps</span> Define Brands</h4>
              <h5>Does your brand represent your unique value to your customers?</h5>
              <a class="blockLink" href="#">See how we help answer these questions, and what a <strong>Brand Review</strong> could teach you.</a>
            </nuxt-link>
          <nuxt-link tag="div" class="col" to="marketing">
            <h4><span>Curious Helps</span> Build Marketing</h4>
            <h5>Are you reaching the right audience, at the right time, with the right goals?</h5>
            <a class="blockLink" href="#">See how we help answer these questions, and what a <strong>Marketing Audit</strong> could teach you.</a>
          </nuxt-link>
          
        </div>
      </div>
    </section>
    <section id='aboutUs'>
      <div class="pageWidth">
        <h3>Curious about Curious?</h3>
        <div class="col3">
          <div class="col">
            <h4>How we work</h4>
            <p>Curious specializes in helping small to medium businesses take actionable steps to address common challenges to improving offerings, story and awareness. If you need an outside perspective Curious will consult to help you identify issues and set goals. If you need a push we’ll act as a coach, keeping you accountable and cheering for your success. Finally if you need execution support, we’ll roll up our sleeves to make it happen.</p>
          </div>
          <div class="col">
            <h4>&nbsp;</h4>
            <p>We believe the challenges of creating/maintaining products, defining branding and driving awareness are intertwined but require unique expertise. To that end, Curious consultants possess deep knowledge and experience in branding, marketing or product/tech but also maintain working knowledge across all areas. This perspective enables big picture thinking and successful cross collaboration.</p>
          </div>
          <div class="col">
            <h4>What we do</h4>
            <p>Our product specialists bring concepts to life from ideation to interface design to prototyping and testing. Curious brand experts tell your story to investors, stakeholders and customers. Along the way they’ll collaborate to create components of a brand including naming services and identity design. Our marketing strategists teach you to grow your audience by creating a marketing machine by using traditional tools in unique ways.</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- <team></team> -->
  </div>
</template>

<script>
import Team from '@/components/people.vue';
import TypeMate from 'typemate';


export default {
  components: {
    Team,
  },
  mounted: function(){
    this.$nextTick(function () {
    const tm = new TypeMate(undefined, { selector: 'h2, h3, p, li', ignoreClass: 'noTypeFix' });
    tm.apply();
     
    })
  },
  
}
</script>

<style>

</style>
