<template>
  <div id="app">
    <section id="top">
      <div class="intro pageWidth">
        <h2>Curious. Designed to grow your business.</h2>
      </div>
    </section>
    <section id="main">
      <div class="pageWidth">
        <h4>Delivering better customers, and more of them, by ensuring your brand, marketing, and sales are working together.</h4>
        <div class="col3">
          <div class="col">
            <h5>We stay focused on revenue goals and consider your cash flow.</h5>
          </div>
          <div class="col">
            <h5>We don’t compromise on design and storytelling.</h5>
          </div>
          <div class="col">
            <h5>We only invest in marketing to your potential buyers.</h5>
          </div>
        </div>
      </div>
    </section>
    <section id='aboutUs'>
      <div class="pageWidth">
        <h3>Proven Process</h3>
          <div class="col">
            <h5>We’ve refined our holistic approach into a proven 3-phase process that starts with defining your goals and marketing architecture, designing and executing a strategy, and refining based on results.</h5>
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
  async asyncData({ $prismic, error }) {
    try{
      // Query to get blog home content
      const pageContent = (await $prismic.api.getSingle('page-home')).data
      return {
        pageContent
      }
    } catch (e) {
      error({ statusCode: 404, message: 'Page not found' })
    }
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
