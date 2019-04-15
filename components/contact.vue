<template>
    <section id="contact">
      <div class="pageWidth col2">
        <div class="col">
          <h3>Advisor, partner, coach, or cheerleader, Curious can help.</h3>
          <p>We understand the complexities of growing and innovating a business. The good news is that you don’t have to go it alone. We’d love to help! But before we can do that, we need to know a bit more about you and your challenges.</p>
          <p><strong>Please fill out this quick form and we’ll get back to you as soon as possible.</strong></p>
          <p class="address"><a href="https://www.google.com/maps/place/Curious/@44.9989033,-93.2525572,17z/data=!3m1!4b1!4m5!3m4!1s0x52b32db8b34daef9:0xe12fd7d2771f2dc2!8m2!3d44.9988995!4d-93.2503632">807 Broadway Street NE, Suite 140<br />Minneapolis, MN 55413</a></p>
        </div>
        <div class="col form">
          <div v-if="messageSuccess">
            Your message has been sent
          </div>
          <div v-else>
            <input type="text" name="name" v-model="senderName" placeholder="My name is" required>
            <input type="email" name="email" v-model="senderEmail" placeholder="My email address is" required>
            <input type="text" name="company" v-model="senderCompany" placeholder="I represent (organization)">
            <input type="text" name="discount" v-model="eatSpam" class="hp">
            <div class="selectList">
            <select name="subject" v-model="contactSubject" >
            <option value="" disabled selected>What's this about? (choose one)</option>
            <option value="Branding Inquiry">Branding help</option>
            <option value="Marketing Inquiry">Marketing help</option>
            <option value="Product Inquiry">Product help</option>
            <option value="More about Design Sprints">Schedule a Design Sprint</option>
            <option value="General Inquiry">Just saying hello</option>
            </select>
            </div>
            <textarea name="" v-model="contactMessage" cols="30" rows="10" placeholder="My message is" required></textarea>
            {{messageErrors}}
            <div class="buttonWrap">
            <button @click="processContact()">Send Message</button>
            </div>
          </div>

        </div>
      </div>
    </section>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'contact',
  data () {
    return {
      senderName:'',
      senderEmail:'',
      senderCompany:'',
      contactSubject:'',
      contactMessage:'',
      eatSpam:'',
      messageSuccess: false,
      messageErrors: '',
    }
  },
  created () {
  },
  destroyed () {
  },
  methods: {
    processContact() {
      var that = this;
      if(this.eatSpam === ''){
        if(this.senderName != '' && this.senderEmail != '' && this.contactMessage != ''){
          $.ajax({
            url: 'https://brycehowitson.com/curiousContact.php',
            type: 'GET',
            data: {
                to: 'hello@discovercurious.com',
                name: that.senderName,
                email: that.senderEmail,
                comment: that.contactMessage,
                subject: that.contactSubject,
            },
            success: function(result) {
                console.log(result);
                that.messageSuccess = true;
            },
            error: function(error) {
                console.log('email error occurred: ' + error);
            }
          });
        }else{
          this.messageErrors = 'Name, Email & Message cannot be blank'
        }
      }
    }
  },
  computed: {

  }
});
</script>
