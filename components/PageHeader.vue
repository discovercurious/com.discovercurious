<template>
      <header id="pageHeader" v-bind:class="menuVisible ? 'showMenu': ''">
          <nuxt-link tag="h1" to="/" exact @click.native="showMenu()">Curious</nuxt-link>
          <div class="menuToggle" @click="showMenu()">Menu</div>
          <nav>
            <div class="navWrap">
              <a href="#" class="primaryNav">We Help You</a>
              <div class="subNav">
                <nuxt-link to="/branding" @click.native="showMenu()">Define Brands</nuxt-link>
                <nuxt-link to="/marketing" @click.native="showMenu()">Build Marketing</nuxt-link>
                <nuxt-link to="/product" @click.native="showMenu()">Create Products</nuxt-link>
              </div>
            </div>

            <nuxt-link to="/consulting/" @click.native="showMenu()">Workshops &amp; Engagements</nuxt-link>
            <nuxt-link to="/case-studies/" @click.native="showMenu()">Case Studies</nuxt-link>
            <nuxt-link to="/team" @click.native="showMenu()">Team</nuxt-link>
            <a href="#contact" exact @click.native="showMenu()">Contact Us</a>
            <a class="location" href="https://www.google.com/maps/place/Curious/@44.9989033,-93.2525572,17z/data=!3m1!4b1!4m5!3m4!1s0x52b32db8b34daef9:0xe12fd7d2771f2dc2!8m2!3d44.9988995!4d-93.2503632">807 Broadway Street NE, Suite 140<br />Minneapolis, MN 55413</a>
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
      activeTab: 0,
      menuVisible: false,
    }
  },
  created () {
  },
  destroyed () {
  },
  mounted(){
    this.$nextTick(function(){
        window.addEventListener("scroll", function(){
          var navbar = document.getElementById("pageTop")
          var nav_classes = navbar.classList
          if(document.documentElement.scrollTop > 150) {
              nav_classes.add("smallHeader");
          } else if(document.documentElement.scrollTop < 100) {
              nav_classes.remove("smallHeader");
          }
        })
      })
  },
  methods: {
    setActiveTab: function(tab) {
      this.activeTab = tab
    },
    showMenu: function(){
      if(this.menuVisible){
        this.menuVisible = false;
      } else {
        this.menuVisible = true;
      }
    }
  },
  computed: {

  }
});
</script>
