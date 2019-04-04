<template>
  <div id="app">
    <section id="top">
      <div class="intro pageWidth">
        <h2>We’re a small team with big experience across many diciplines &amp; technologies.</h2>
        <div class="cta">
          <a href="#">Find an experienced partner</a>
        </div>
      </div>
      <div class="sidebar">Highlight Center - <strong>Minneapolis, Minnesota USA</strong></div>
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
