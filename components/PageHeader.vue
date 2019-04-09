<template>
      <header id="pageHeader">
          <nuxt-link tag="h1" to="/" exact>Curious</nuxt-link>
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
  mounted(){
    this.$nextTick(function(){
        window.addEventListener("scroll", function(){
          var navbar = document.getElementById("pageHeader")
          var nav_classes = navbar.classList
          if(document.documentElement.scrollTop > 150) {
            if (nav_classes.contains("smallHeader") === false) {
              nav_classes.toggle("smallHeader");
            }
          }
          else {
            if (nav_classes.contains("smallHeader") === true) {
              nav_classes.toggle("smallHeader");
            }
          }
        })
      })
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
