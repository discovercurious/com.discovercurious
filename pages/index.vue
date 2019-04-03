<template>
  <div id="app">
    <section id="top">
      <PageHeader></PageHeader>
      <div class="intro pageWidth">
        <h2>
        We’re a group of experienced consultants &amp; coaches helping business leaders overcome <nuxt-link to="services/brand">brand</nuxt-link>, <nuxt-link to="services/marketing">marketing</nuxt-link>, and <nuxt-link to="services/product">product</nuxt-link> challenges.
        </h2>
      </div>
      <div class="sidebar">Highlight Center - <strong>Minneapolis, Minnesota USA</strong></div>
      <div class="cta pageWidth">
        <a href="#">Growing your business starts with a chat</a>
      </div>
    </section>
    <section id="main">
      <div class="pageWidth">
        <h3>Discover your best opportunities for growth.</h3>
        <div class="col3">
          <div class="col">
            <h4><span>Curious Helps</span> Define Brands</h4>
            <p>Does your brand represent your unique value to your customers?</p>
            <p><a href="#">See how we’ve answered these questions for other’s, and what a <strong>Brand Review</strong> could teach you.</a></p>
          </div>
          <div class="col">
            <h4><span>Curious Helps</span> Build Marketing</h4>
            <p>Are you reaching the right audience, at the right time, with the right goals?</p>
            <p><a href="#">See how we’ve answered these questions for other’s, and what a <strong>Marketing Audit</strong> could teach you.</a></p>
          </div>
          <div class="col">
            <h4><span>Curious Helps</span> Create Products</h4>
            <p>Do your products/services meet expectations and create delight?</p>
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
import PageHeader from '@/components/PageHeader.vue';

export default {
  components: {
    Team, PageHeader,
  },
}
</script>

<style>

</style>
