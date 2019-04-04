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

export default {
  components: {
    Contact, PageHeader
  },
}
</script>