<template>
    <section id="contact">
      <div class="pageWidth col2">
        <div class="col">
          <h3>Advisor, partner, coach, or maker... Curious can help</h3>
          <p>We understand the complexities of growing and innovating a business. The good news is that you don’t have to go it alone. We’d love to help! But before we can do that, we need to know a bit more about you and your challenges.</p>
          <p><strong>Please fill out this quick form and we’ll get back to you as soon as possible.</strong></p>
          <p class="address"><a href="https://www.google.com/maps/place/Curious/@44.9989033,-93.2525572,17z/data=!3m1!4b1!4m5!3m4!1s0x52b32db8b34daef9:0xe12fd7d2771f2dc2!8m2!3d44.9988995!4d-93.2503632">807 Broadway Street NE, Suite 140<br />Minneapolis, MN 55413</a></p>
        </div>
        <div class="col form">
          <div class="success" v-if="messageSuccess">
            <h4>Thanks for saying hi!</h4>
            <h5>We'll get back to you as soon as we can. While you wait, perhaps you'd like to learn about the <nuxt-link to="/#people">team</nuxt-link> reading your email.</h5>
            <div class="buttonWrap">
              <button @click="clearThanks()">Another Message</button>
            </div>
          </div>
          <div v-else>
            <label for="name">Your Name</label>
            <input type="text" name="name" v-model="senderName" placeholder="My name is" required>
            <label for="email">Your Email Address</label>
            <input type="email" name="email" v-model="senderEmail" placeholder="My email address is" required>
            <label for="company">Your Company</label>
            <input type="text" name="company" v-model="senderCompany" placeholder="I represent (organization)">
            <label for="discount">How much of a discount?</label>
            <input type="text" name="discount" v-model="eatSpam" class="hp">
            <label for="subject">Subject</label>
            <div class="selectList">
            <select name="subject" v-model="contactSubject" >
            <option value="" disabled selected>What's this about? (choose one)</option>
            <option value="1">Branding help</option>
            <option value="2">Marketing help</option>
            <option value="3">Product help</option>
            <option value="4">Schedule a Design Sprint</option>
            <option value="5">Just saying hello</option>
            </select>
            </div>
            <label for="message">Your Message</label>
            <textarea name="message" v-model="contactMessage" cols="30" rows="10" placeholder="My message is" required></textarea>
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
          switch(this.contactSubject){
            case "1":
              var newSubject = "discovercurious.com: I need branding help";
              var toEmail = "branding@discovercurious.com"
              break;
            case "2":
              var newSubject = "discovercurious.com: I need marketing help";
              var toEmail = "marketing@discovercurious.com"
              break;
            case "3":
              var newSubject = "discovercurious.com: I need product help";
              var toEmail = "product@discovercurious.com"
              break;
            case "4":
              var newSubject = "discovercurious.com: I'd like to schedule a Design Sprint";
              var toEmail = "product@discovercurious.com"
              break;
            default:
              var newSubject = "discovercurious.com: General Inquiry";
              var toEmail = "hello@discovercurious.com"
              break;
          }

          $.ajax({
            url: 'https://brycehowitson.com/curiousContact.php',
            type: 'GET',
            data: {
                to: toEmail,
                name: that.senderName,
                email: that.senderEmail,
                org: that.senderCompany,
                comment: that.contactMessage,
                subject: newSubject,
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
    },
    clearThanks(){
      this.contactMessage = '';
      this.contactSubject = '';
      this.messageSuccess = false;
    },
  },
  computed: {

  }
});
</script>
