<template>
  <div id="app">
    <section id="top">
      <div class="intro pageWidth">
        <h2>We'll guide you through setting up tools, building your brand, transforming your approach, &amp; much more.</h2>
        <!-- <div class="cta">
          <nuxt-link to="#contact">Find an experienced partner</nuxt-link>
        </div> -->
      </div>
      <div class="sidebar">Highlight Center - <strong>Minneapolis, Minnesota USA</strong></div>
    </section>
    <section id="" class="studySection s-ImageGroup bg-ltGray">
      <div class="pageWidth">
        <h3>Get up to speed fast!</h3>
        <WorkshopList type="full" />
      </div>
    </section>
    <team></team>
  </div>
</template>

<script>
import Team from '@/components/people.vue';
import WorkshopList from '@/components/WorkshopList.vue';
import TypeMate from 'typemate';

export default {
  components: {
    Team,
    WorkshopList
  },
  mounted: function(){
    this.$nextTick(function () {
    const tm = new TypeMate(undefined, { selector: 'h2, h3, p, li', ignoreClass: 'noTypeFix' });
    tm.apply();
     
    })
  },
  head () {
    return {
      // title: 'Curious: Making Products Useful, Usable & Beautiful',
      meta: [
        // { hid: 'description', name: 'description', content: 'Curious consultants help you identify your next best marketing steps, and develop marketing strategies to find and connect with your customers.' },

        // { hid: 'keywords', name: 'keywords', content: 'product design, branding, marketing, coaching, consulting, design sprint, review, strategy, digital, identity, story, minneapolis, minnesota, twin cities, hightlight center, ux, interface' },
         
        // { hid: 'og:title', name: 'og:title', content: 'Curious - Solving Brand, Marketing & Product problems for small businesses' },
        // { hid: 'og:description', name: 'og:description', content: 'Curious is a group of experienced consultants helping business leaders overcome brand, marketing, and product challenges. We help companies discover their best opportunities for growth.' },

        // { hid: 'og:image', name: 'og:image', content: 'https://discovercurious.com/images/shareLogo.png' },
        // { hid: 'og:image:type', name: 'og:image:type', content: 'image/png' },
        // { hid: 'og:image:width', name: 'og:image:width', content: '1080' },
        // { hid: 'og:image:height', name: 'og:image:height', content: '800' },
      ]
    }
  },
}
</script>

<style>

</style>
