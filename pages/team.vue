<template>
  <div id="app">
    <section id="top">
      <div class="intro pageWidth">
        <h2>We’re a small team with big experience across many diciplines &amp; technologies.</h2>
        <div class="cta">
          <nuxt-link to="/#contact">Find an experienced partner</nuxt-link>
        </div>
      </div>
      <div class="sidebar">Highlight Center - <strong>Minneapolis, Minnesota USA</strong></div>
    </section>
    <team></team>
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
