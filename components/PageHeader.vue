<template>
    <header class="pageWidth">
        <nuxt-link to="/" exact><h1>Curious</h1></nuxt-link>
        <nav>
          <nuxt-link to="/services">Services</nuxt-link>
          <nuxt-link to="team">Team</nuxt-link>
          <a href="#contact">Contact Us</a>
        </nav>
      </header>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'PageHeader',
  props: {
  },

  data () {
    return {
      activeTab: 0
    }
  },
  created () {
  },
  destroyed () {
  },
  methods: {
    setActiveTab: function(tab) {
      this.activeTab = tab
    }
  },
  computed: {

  }
});
</script>
