<template>
  <section id="people">
    <div class="teamTop">
        <div class="pageWidth">
            <div class="leftSide">
                <h3 class="noTypeFix">Innovation &amp; growth aren’t solitary activities.</h3>
                <p>Curious team members are trusted guides who help solve hard business challenges.</p>
            </div>
            <div class="rightSide">
                <div class="pic" v-lazy:background-image="`/images/people/sherwin.png`" @click="setActiveTab(0)" v-bind:class="{ active: activeTab === 0 }"></div>
                <div class="pic" v-lazy:background-image="`/images/people/maya.png`" @click="setActiveTab(1)" v-bind:class="{ active: activeTab === 1 }"></div>
                <div class="pic" v-lazy:background-image="`/images/people/bryce.png`" @click="setActiveTab(2)" v-bind:class="{ active: activeTab === 2 }"></div>
                <div class="pic" v-lazy:background-image="`/images/people/paul.png`" @click="setActiveTab(3)" v-bind:class="{ active: activeTab === 3 }"></div>
                <div class="pic" v-lazy:background-image="`/images/people/eric.png`" @click="setActiveTab(4)" v-bind:class="{ active: activeTab === 4 }"></div>
                <div class="pic" v-lazy:background-image="`/images/people/jason.png`" @click="setActiveTab(5)" v-bind:class="{ active: activeTab === 5 }"></div>
            </div>
        </div>
    </div>
    <div class="teamBottom">
        <div class="peopleWrap pageWidth">
        <transition name="slideFade">
            <div class="personInfo" v-show="activeTab === 0">
                <div class="leftSide">
                    <h4><span>Brand Consultant</span> Sherwin Schwartzrock</h4>
                    <p>Sherwin understands how brand strategy and imagery become powerful tools in a visually-engaged marketplace. His 20+ career in advertising and design has afforded him the opportunity to touch dozens of Fortune 100 companies as well as small to medium brands that needed to support business objectives.</p>
                </div>
                <div class="rightSide">
                    <div class="questions">Questions Sherwin might ask:</div>
                    <ul class="questionList">
                        <li>Do you know your unique value proposition?</li>
                        <li>Can you say what it is in one sentence?</li>
                        <li>Can your employees?</li>
                        <li>Look around your office, pick up your marketing materials, check out your website… do these all say the same thing you just defined in one sentence?</li>
                        <li>If you’ve answered “yes,” you’re a rock star. Now the biggie: do your customers agree?</li>
                    </ul>
                </div>
            </div>
        </transition>
        <transition name="slideFade">
            <div class="personInfo" v-show="activeTab === 1">
                <div class="leftSide">
                    <h4><span>Marketing Consultant</span> Maya Khaira</h4>
                    <p>Maya is a hands-on creator with a background in marketing and product design. She partners with companies to identify their audience, develop relevant content, and execute strategic digital marketing campaigns. Also, she’s a <a href="https://vimeo.com/mayakhaira" target="_blank" rel="noopener noreferrer">filmmaker</a>!</p>
                </div>
                <div class="rightSide">
                    <div class="questions">Questions Maya might ask:</div>
                    <ul class="questionList">
                        <li>Are you leveraging paid social platforms for marketing?</li>
                        <li>How targeted are your campaigns? Are the right people engaging?</li>
                        <li>How are you targeting your audience?</li>
                        <li>How often are you changing your messaging and creative?</li>
                        <li>Are you leveraging A/B tests and are you aware what drove the results and why?</li>
                        <li>What do users find when they search for your company?</li>
                        <li>Is your marketing relevant to your potential customers and does it provide value?</li>
                        <li>Does your marketing voice match the way your audience speaks?</li>
                    </ul>
                </div>
            </div>
        </transition>
        <transition name="slideFade">
            <div class="personInfo" v-show="activeTab === 2">
                <div class="leftSide">
                    <h4><span>Product Consultant</span> Bryce Howitson</h4>
                    <p>Bryce has nearly 20 years of experience creating products that people want to use. He helps organizations of all sizes prototype, and test their ideas. As a <a href="https://developers.google.com/programs/experts/" target="_blank" rel="noopener noreferrer">Google Developer Expert</a>, he writes and speaks about implementing cutting edge technology. Additionally, being a Google certified <a href="https://www.gv.com/sprint/" target="_blank" rel="noopener noreferrer">Design Sprint Master</a> allows Bryce to efficiently guide teams through the process of identifying problems, creating solutions, and defining success.</p>
    
                    <a class="expertLink document" href="https://blog.prototypr.io/this-is-exactly-how-much-it-costs-to-make-an-app-8a669f77a6a7" target="_blank" rel="noopener noreferrer"><span>Read:</span> This is exactly how much it costs to build an app</a>
                    <a class="expertLink document" href="https://blog.prototypr.io/my-personal-pillars-of-ux-design-12ead9af0300" target="_blank" rel="noopener noreferrer"><span>Read:</span> My personal pillars of UX design</a>
                </div>
                <div class="rightSide">
                    <div class="questions">Questions Bryce might ask:</div>
                    <ul class="questionList">
                        <li>How might we fake it BEFORE we make it?</li>
                        <li>What "job" are your users trying to do?</li>
                        <li>Why do we expect so much from voice assistants? <br />Answer: <a href="https://www.youtube.com/watch?v=aiZ-SBuTJ4g&list=PL_aEqNu9qjpN7nmPHadEJs8B9_Q0EvXHB&index=4" target="_blank" rel="noopener noreferrer">Blame Sci Fi</a></li>
                        <li>Do people really read questions like this?</li>
                        <li>Is your design team structured to provide results?</li>
                        <li>Why do Virtual Reality interfaces seem so clunky?</li>
                        <li>Do you know how much it costs to find &amp; hire that unicorn?</li>
                        <li>Can I connect you with someone in my network?</li>
                    </ul>
                </div>
            </div>
        </transition>
        <transition name="slideFade">
            <div class="personInfo" v-show="activeTab === 3">
                <div class="leftSide">
                    <h4><span>Marketing Consultant</span> Garrio Harrison</h4>
                    <p>Garrio has spent his career at the intersection of design, technology, and resource allocation. He focuses on connecting the dots between marketing resources, sales enablement cashflow, marketing trends and revenue goals. Today he uses his experience implementing scalable marketing systems for companies that run on EOS to help our clients thrive.</p>
                </div>
                <div class="rightSide">
                    <div class="questions">Questions Garrio might ask:</div>
                    <ul class="questionList">
                        <li>What are your revenue goals for the quarter?</li>
                        <li>How did you acquire your best existing customers?</li>
                        <li>Are your marketing plans aligned with your chash-flow?</li>
                        <li>Are you using revenue focused metrics to align your sales and marketing efforts?</li>
                        <li>Do marketing or sales issues keep coming up in your team meetings?</li>
                        <li>Do you need more new leads or can we reach your revenue goals by creating more value for your existing customer?</li>
                    </ul>
                </div>
            </div>
        </transition>
        <transition name="slideFade">
            <div class="personInfo" v-show="activeTab === 4">
               <div class="leftSide">
                    <h4><span>Technololgy Consultant</span> Eric Brusven</h4>
                    <p>With degrees in both design and digital development, Eric is a rare talent that can create and build just about anything digitally. In his nearly decade of work experience, he has a superhero talent for asking the most practical and relevant questions to identify the core purpose and solution to any communications problem. Eric is a robot.</p>
                </div>
                <div class="rightSide">
                    <div class="questions">Questions Eric might ask:</div>
                    <ul class="questionList">
                        <li>Where does your website live?</li>
                        <li>Do your sales tools talk to each other? Could they?</li>
                        <li>Do your analytics tell your users full story? Can they tell you more?</li>
                        <li>Might something other than a Wordpress plugin solve this problem?</li>
                        <li>What’s for lunch?</li>
                        <li>Are there recurring pain points that could be solved by your digital product or website?</li>
                        <li>Should we re-invent the wheel with this feature or can we find a prebuilt solution?</li>
                    </ul>
                </div>
            </div>
        </transition>
        <transition name="slideFade">
            <div class="personInfo" v-show="activeTab === 5">
                <div class="leftSide">
                    <h4><span>Marketing Consultant</span> Jason Rysavy</h4>
                    <p>A marketing strategist and tactician for more than 20 years, Jason thrives when helping teams leverage targeted marketing best practices to grow their B2B or B2C businesses. He also lives with a hawk. So there’s that.</p>
                </div>
                <div class="rightSide">
                    <div class="questions">Questions Jason might ask:</div>
                    <ul class="questionList">
                        <li>Are your sales and marketing teams learning from each other? Are they talking to each other?</li>
                        <li>Are you generating the right leads?</li>
                        <li>Do your potential customers know about your company? How do you stay in front of them?</li>
                        <li>In a perfect scenario, what would marketing achieve for your business?</li>
                        <li>How are you measuring your marketing? Do you know if you’re wasting money?</li>
                        <li>Do competitors do a better job of explaining your products or services?</li>
                        <li>What, if anything, would make your customers stop doing business with you?</li>
                    </ul>
                </div>
            </div>
        </transition>
        </div>
    </div>
  </section>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'team',
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
