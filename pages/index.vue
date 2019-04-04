<template>
  <div id="app">
    <section id="top">
      <div class="intro pageWidth">
        <h2>
        We’re a group of experienced consultants &amp; coaches helping business leaders overcome <nuxt-link to="branding">brand</nuxt-link>, <nuxt-link to="marketing">marketing</nuxt-link>, and <nuxt-link to="product">product</nuxt-link> challenges.
        </h2>
        <div class="cta">
          Growing your business <a href="#">starts with a chat</a>
        </div>
      </div>
      <div class="sidebar">Highlight Center - <strong>Minneapolis, Minnesota USA</strong></div>
    </section>
    <section id="main">
      <div class="pageWidth">
        <h3>Discover your best opportunities for growth.</h3>
        <div class="col3">
          <div class="col">
            <h4><span>Curious Helps</span> Define Brands</h4>
            <h5>Does your brand represent your unique value to your customers?</h5>
            <p><a href="#">See how we’ve answered these questions for other’s, and what a <strong>Brand Review</strong> could teach you.</a></p>
          </div>
          <div class="col">
            <h4><span>Curious Helps</span> Build Marketing</h4>
            <h5>Are you reaching the right audience, at the right time, with the right goals?</h5>
            <p><a href="#">See how we’ve answered these questions for other’s, and what a <strong>Marketing Audit</strong> could teach you.</a></p>
          </div>
          <div class="col">
            <h4><span>Curious Helps</span> Create Products</h4>
            <h5>Do your products/services meet expectations and create delight?</h5>
            <p><a href="#">See how we’ve answered these questions for other’s, and what a <strong>Design Sprint</strong> could teach you.</a></p>
          </div>
        </div>
      </div>
    </section>
    
    <team></team>
  </div>
</template>

<script>
import Team from '@/components/people.vue';


export default {
  components: {
    Team,
  },
}
</script>

<style>

</style>
