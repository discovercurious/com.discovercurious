<template>
  <div id="app">
    <section id="top">
      <div class="intro pageWidth">
        <h2>Marketing header</h2>
        <div class="cta">
          <a href="#">Marketing CTA</a>
        </div>
      </div>
      <div class="sidebar">Highlight Center - <strong>Minneapolis, Minnesota USA</strong></div>
    </section>
    <section id="main">
      <div class="pageWidth serviceIntro">
        <div class="col2">
          <h3>Questions header</h3>
          <div class="col">
            <h5>Question type</h5>
            <ul class="questions">
              <li>?</li>
            </ul>
          </div>
          <div class="col">
            <h5>&amp;</h5>
            <ul class="questions">
              <li>?</li>
            </ul>
          </div>
        </div>
        <div class="feature" :style="{backgroundImage: `url(${require(`~/assets/images/featured/designsprints.png`)})`}">
          <div class="featureContent">
            <h5>Featured thing</h5>
            <p>why does anyone care?</p>
          </div>
          <div class="button">Read the article</div>
        </div>
      </div>
    </section>
    <section id="caseStudies">
      <div class="pageWidth">
        Case Studies
      </div>
    </section>
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
