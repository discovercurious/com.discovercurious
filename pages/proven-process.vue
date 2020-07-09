<template>
  <div id="app">
    <section id="top">
      <div class="intro pageWidth">
        <h2>Proven Process</h2>
      </div>
      <div class="sidebar">Highlight Center - <strong>Minneapolis, Minnesota USA</strong></div>
    </section>
    <section id="main">
      <div class="pageWidth serviceIntro">
        Stuff
      </div>
    </section>
    <section id="caseStudies">
      <div class="pageWidth">
        <h3>Results</h3>
        <BrandingStudies />
      </div>
    </section>
  </div>
</template>

<script>
import BrandingStudies from '@/components/BrandingStudies.vue';
import TypeMate from 'typemate';

export default {
  components: {
    BrandingStudies
  },
  mounted: function(){
    this.$nextTick(function () {
    const tm = new TypeMate(undefined, { selector: 'h2, h3, p' });
    tm.apply();
     
    })
  },
  head () {
    return {
      title: 'Curious: Our Proven Process',
    }
  },
}
</script>

<style>

</style>
