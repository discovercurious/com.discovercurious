<template>
      <header class="pageWidth">
          <nuxt-link to="/" exact><h1>Curious</h1></nuxt-link>
          <nav>
            <nuxt-link to="/branding">For Branding</nuxt-link>
            <nuxt-link to="/marketing">For Marketing</nuxt-link>
            <nuxt-link to="/product">For Products</nuxt-link>
            <nuxt-link to="/team">Team</nuxt-link>
            <a href="/#contact" exact>Contact Us</a>
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
