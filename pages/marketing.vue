<template>
  <div id="app">
    <section id="top">
      <div class="intro pageWidth">
        <h2>Find and connect with your audience. Improve your business.</h2>
        <div class="cta">
          Are you generating the right traffic? <a href="#">Get answers</a>
        </div>
      </div>
      <div class="sidebar">Highlight Center - <strong>Minneapolis, Minnesota USA</strong></div>
    </section>
    <section id="main">
      <div class="pageWidth serviceIntro">
        <div class="serviceLeft">
          <h3>Answer Marketing Questions Like These</h3>
          <div class="col2">
            <ul class="col questions">
              <li>What are the goals of your marketing?</li>
              <li>How do you market to the right customers?</li>
              <li>How should you measure your marketing?</li>
            </ul>
            <ul class="col questions">
              <li>What marketing tools and platforms should you use to reach your customers?</li>
              <li>How do you create a system of communication and learning between your marketing and sales teams?</li>
            </ul>
          </div>
        </div>
        <div class="feature" v-lazy:background-image="require('~/static/images/featured/designsprints.png')">
          <div class="featureContent">
            <h5>Not sure where to get started with your marketing?</h5>
            <p>Our team partners with many large and small organizations to help implement marketing strategies. Some businesses, however, can’t necessarily afford to outsource their marketing, so we created a workshop to identify what can work for you, providing the foundation to get started. This 3-hour strategic marketing workshop is customized for your business.</p>
            <p>
              In this workshop you will:
              <ul>
                <li>Learn best practices</li>
                <li>Learn how to target your audience</li>
                <li>Discover customized marketing tactics specific to your business</li>
                <li>Build a marketing plan you can execute internally</li>
              </ul>
            </p>
          </div>
          <div class="button">Schedule a workshop</div>
        </div>
      </div>
    </section>
    <section id="caseStudies">
      <div class="pageWidth">
        <h3>Past examples of marketing consulting</h3>
        <div class="col3">
          <div class="caseStudy col">
            <div class="pic">
              <div class="responsiveImage" v-lazy:background-image="'https://images.unsplash.com/photo-1554336903-a5f31529dd4b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80'"></div>
            </div>
            <h4><span>White Crane</span> Lead Generation + Sales Integration Strategy</h4>
            <button>View Case Study</button>
          </div>
          <div class="caseStudy col">
            <div class="pic">
              <div class="responsiveImage" v-lazy:background-image="'https://images.unsplash.com/photo-1554336903-a5f31529dd4b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80'"></div>
            </div>
            <h4>Case Study Title</h4>
            <button>View Case Study</button>
          </div>
          <div class="caseStudy col">
            <div class="pic">
              <div class="responsiveImage" v-lazy:background-image="'https://images.unsplash.com/photo-1554336903-a5f31529dd4b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80'"></div>
            </div>
            <h4>Case Study Title</h4>
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
  head () {
    return {
      title: 'Curious: Solving Your Marketing Challenges',
    meta: [
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  }
}
</script>

<style>

</style>
