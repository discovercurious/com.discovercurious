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
        <div class="col2">
          <h3>Curious about Curious?</h3>
          <div class="col">
            <h4>Who we work with</h4>
          </div>
          <div class="col">
            <h4>What we do</h4>
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
