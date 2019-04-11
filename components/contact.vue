<template>
    <section id="contact">
      <div class="pageWidth col2">
        <div class="col">
          <h3>Advisor, partner, coach, or cheerleader,<br />Curious can help.</h3>
          <p>We understand the complexities of growing and innovating a business. The good news is that you don’t have to go it alone. We’d love to help! But before we can do that, we need to know a bit more about you and your challenges.</p>
          <p><strong>Please fill out this quick form and we’ll get back to you as soon as possible.</strong></p>
          <p class="address"><a href="https://www.google.com/maps/place/Curious/@44.9989033,-93.2525572,17z/data=!3m1!4b1!4m5!3m4!1s0x52b32db8b34daef9:0xe12fd7d2771f2dc2!8m2!3d44.9988995!4d-93.2503632">807 Broadway Street NE, Suite 140<br />Minneapolis, MN 55413</a></p>
        </div>
        <div class="col form">
            <input type="text" name="name" id="" placeholder="My name is" required>
            <input type="email" name="email" id="" placeholder="My email address is" required>
            <input type="text" name="company" id="" placeholder="I represent (organization)">
            <input type="text" name="discount" class="hp">
            <div class="selectList">
              <select name="" id="">
                <option value="" disabled selected>What's this about? (choose one)</option>
                <option value="branding">Branding help</option>
                <option value="marketing">Marketing help</option>
                <option value="product">Product help</option>
                <option value="sprint">Schedule a Design Sprint</option>
                <option value="general">Just saying hello</option>
              </select>
            </div>
            <textarea name="" id="" cols="30" rows="10" placeholder="My message is" required></textarea>
            <div class="buttonWrap">
              <button>Send Message</button>
            </div>
        </div>
      </div>
    </section>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'contact',
  props: {
    msg: String,
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
