<template>
  <div>
    <nuxt />
    <Contact />
  </div>
</template>

<script>
import Contact from '~/components/contact.vue';

export default {
  components: {
    Contact,
  },
}
</script>