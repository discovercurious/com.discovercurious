<template>
  <div>
    <section id="pageTop">
      <PageHeader></PageHeader>
    </section>
    <nuxt />
  </div>
</template>

<script>
import PageHeader from '~/components/PageHeader.vue';
// import TypeMate from 'typemate';

export default {
  components: {
     PageHeader
  },
  
  mounted: function(){
    const hsScript = document.createElement('script')
    hsScript.src = "//js.hs-scripts.com/3891745.js"
    document.body.appendChild(hsScript)
  },
  methods: {}
  
}
</script>