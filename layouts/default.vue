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
// import TypeMate from 'typemate';

export default {
  components: {
    Contact, PageHeader
  },
  
  mounted: function(){
  },
  methods: {}
}
</script>