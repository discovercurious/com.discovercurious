<template>
  <div id="app">
    <section id="top">
      <PageHeader></PageHeader>
      <div class="intro pageWidth">
        <h2>
       News team assemble...
        </h2>
        <div class="sidebar">Highlight Center - <strong>Minneapolis, Minnesota USA</strong></div>
      </div>
      <div class="cta pageWidth">
        <a href="#">Find an experienced partner</a>
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
