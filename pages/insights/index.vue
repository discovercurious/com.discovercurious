<template>
  <div id="app" class="allStudies">
    <section class="studySection s-ImageGroup bg-ltGray" >
      <div class="pageWidth">
        <h3>What we're thinking about</h3>
        <div id="insightItem" v-if="allInsights.length !== 0">
          <insightItem class="insightItem" v-for="insight in allInsights" :key="insight.id" :insight="insight"></insightItem>
      </div>
      </div>
    </section>
  </div>
</template>

<script>
import TypeMate from 'typemate';
import insightItem from '~/components/insightItem.vue'

export default {
  components: {
    insightItem
  },
  async asyncData({ $prismic, error }) {
    try{
      // const pageContent = (await $prismic.api.getSingle('resources_landing')).data

      const insights_list = await $prismic.api.query(
        $prismic.predicates.at("document.type", "insights"),
        { orderings : '[my.post.date desc]' }
      )

      return {
        allInsights: insights_list.results,
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
