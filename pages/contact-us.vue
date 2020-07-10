<template>
  <div id="app">
    <section id="top">
      <div class="intro pageWidth">
        <h2>Contact Us</h2>
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
      title: 'Curious: Get in touch',
    }
  },
}
</script>

<style>

</style>
