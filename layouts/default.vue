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
    const hsScript = document.createElement('script')
    hsScript.src = "//js.hs-scripts.com/3891745.js"
    document.body.appendChild(hsScript)
  },
  methods: {}
  
}
</script>