<template>
  <div>
    <section id="pageTop">
      <PageHeader></PageHeader>
    </section>
    <nuxt />
    <Contact />
  </div>
</template>

<script>
import Contact from '~/components/contact.vue';
import PageHeader from '~/components/PageHeader.vue';
import TypeMate from 'typemate';

export default {
  components: {
    Contact, PageHeader
  },
  mounted: function(){
    this.$nextTick(function () {
    // Code that will run only after the
    // entire view has been re-rendered
    const tm = new TypeMate(undefined, { selector: 'h2, h3, p' });
    tm.apply();
    console.log('rendered')
    })
  },
  methods: {}
}
</script>