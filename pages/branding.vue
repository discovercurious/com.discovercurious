<template>
  <div id="app">
    <section id="top">
      <div class="intro pageWidth">
        <h2>It’s proven. Great design produces  valuable brands. Yet branding must be more than a cool logo &amp; clean packaging.</h2>
        <div class="cta">
          Would you like an audit of your current positioning and brand? <a href="#">We can help!</a>
        </div>
      </div>
      <div class="sidebar">Highlight Center - <strong>Minneapolis, Minnesota USA</strong></div>
    </section>
    <section id="main">
      <div class="pageWidth serviceIntro">
        <div class="serviceLeft">
          <h3>Answer Brand Questions Like These</h3>
          <div class="col2">
            <div class="col">
              <h5>Question type</h5>
              <ul class="questions">
                <li>Are there other competitors that offer the same product or service? Why do your customers choose you?</li>
                <li>Can you capture your unique value proposition in one sentence?</li>
                <li>Could your customers describe your unique value proposition using their own words?</li>
                <li>Does what your customers say and what you say about your company align?</li>
                <li>Do your employees embody your organization’s values and personality?</li>
              </ul>
            </div>
            <div class="col">
              <h5>&amp;</h5>
              <ul class="questions">
                <li>Marketing produces short term results. Branding is a long term strategy. Are you doing both well?</li>
                <li>At every point of contact (online, in-store, advertising, customer service), do customers get the same experience?</li>
                <li>Is your corporate identity future proof?</li>
                <li>Have you ever noticed your customers being confused when interacting with your services?</li>
                <li>Look at ALL of your brochures, catalogs, social media, advertising, and website… do they look like they come from the same place?</li>
              </ul>
            </div>
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
        <h3>Past examples of brand development</h3>
        <div class="col3">
          <div class="caseStudy col">
            <div class="pic">
              Pic
            </div>
            <h4><span>Alomere Health</span> What we did</h4>
            <button>View Case Study</button>
          </div>
          <div class="caseStudy col">
            <div class="pic">
              Pic
            </div>
            <h4><span>Ostra</span> What we did</h4>
            <button>View Case Study</button>
          </div>
          <div class="caseStudy col">
            <div class="pic">
              Pic
            </div>
            <h4><span>The Foundry</span> What we did</h4>
            <button>View Case Study</button>
          </div>
        </div>
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
