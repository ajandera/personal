<!-- https://codepen.io/chilliconcode/pen/YyRKYZ -->
<template>
  <section>
    <div class="container">
      <div class="row mt-5">
        <div class="col-md-8 col-sm-12 col-xs-12 text-justify">
          <p>Greetings! Allow me to introduce myself, I am <strong>Aleš Jandera</strong>, passionate entrepreneur with backgorund as senior software developer. With a wealth of experience under my belt, I proudly hold a master's degree in
            cybernetics and automation, which has provided me with a robust foundation to delve into the exciting realms of technology and innovation. Over the course of the past decade, my journey in the software development landscape has
            been nothing short of exhilarating.</p>
          <p>I've traversed through a myriad of projects, donning the roles of a trusted partner for my clients and a vital member of expansive teams as a dedicated contractor.
            This dynamic journey has equipped me with a diverse skill set and a profound understanding of how to bring visions to life through the power of code.</p>
          <p>My true passion lies in the vibrant world of <strong>ecommerce</strong>, where I've carved out a niche specializing in creating captivating online stores that seamlessly blend form and function.
            Crafting these digital marketplaces is akin to painting on a canvas of code, where user experience takes center stage.</p>
          <p>The synergy between data and efficiency fascinates me, and I'm driven by the challenge of orchestrating complex logistical processes with the elegance of a symphony conductor. 
            Predictive analytics, a true gem of the digital age, also finds its place in my repertoire. So there you have it – an intricate tapestry woven with my experiences, passions, and aspirations.
            I'm not just a software developer; I'm a trailblazer, a conductor of code, and a maestro of digital innovation. Join me on this captivating journey as we continue to explore the ever-evolving landscape of technology together.</p>
        </div>
        <div class="col-md-4 col-sm-12 col-xs-12">
          <div class="row align-items-center">
            <div class="col-6 mt-4 mb-4" v-for="(ref, index) in references" :key="index">
                <img :src="ref" class="img-fluid" />
            </div>
          </div>
        </div>
      </div>
      <div class="row" id="storepredictor">
        <div class="col-12">
          <div class="divider"></div>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-md-4 col-sm-12 col-xs-12">
          <img :src="images[0]" class="img-fluid" />
          <iframe id="embedPlayer" src="https://embed.podcasts.apple.com/us/podcast/storepredictor/id1684803774?itsct=podcast_box_player&amp;itscg=30200&amp;ls=1&amp;theme=light" height="450px" frameborder="0" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation" allow="autoplay *; encrypted-media *; clipboard-write" style="width: 100%; max-width: 660px; overflow: hidden; border-radius: 10px; transform: translateZ(0px); animation: 2s 6 loading-indicator; background-color: rgb(228, 228, 228);"></iframe>
          <a href="https://storepredictor.com" target="_blank" class="btn btn-success btn-lg actionBtn">Register for FREE</a>
        </div>
        <div class="col-md-8 col-sm-12 col-xs-12 text-justify">
          <p><strong>storePredictor</strong> is a cutting-edge innovation that lies at the crossroads of data science, <strong>artificial intelligence</strong>, and retail strategy. Imagine having the power to peer into the future of retail, foreseeing trends and consumer behavior patterns before they even unfold. This is the essence of StorePredictor.</p>
          <p>At its core, StorePredictor is a sophisticated predictive analytics platform designed to empower retailers and e-commerce businesses with the ability to make informed decisions that resonate with the ever-changing desires of their customers. Leveraging historical data, real-time inputs, and advanced machine learning algorithms, StorePredictor has the capability to anticipate buying trends, optimize inventory management, and fine-tune pricing strategies with remarkable accuracy.</p>
          <p>Furthermore, storePredictor has the prowess to decipher intricate <strong>consumer behavior patterns</strong>. It examines variables such as past purchases, browsing habits, demographics, and external factors like economic indicators and social trends. Armed with this multifaceted understanding, businesses can tailor their marketing efforts, personalize user experiences, and craft promotions that resonate authentically with their target audience.</p>
          <p>But the brilliance of storePredictor doesn't end there. One of its standout features is its ability to optimize pricing strategies. By analyzing historical pricing data, competitor pricing, and market trends, the platform can recommend optimal price points that strike a harmonious balance between profitability and customer appeal. This dynamic pricing approach keeps businesses agile and competitive in a landscape where pricing nuances can make all the difference.</p>
          <p>Imagine a retailer receiving real-time alerts from storePredictor when a sudden surge in demand is detected, allowing them to swiftly replenish stock or adjust marketing efforts to capitalize on the opportunity. This agility is a game-changer, granting businesses the ability to stay ahead of the curve and ride the waves of consumer sentiment.</p>
          <p>In essence, StorePredictor is not just a tool; it's a strategic companion that guides retailers through the intricate dance of modern commerce. By fusing the power of data-driven insights with the art of prediction, StorePredictor equips businesses with the tools to thrive, adapt, and succeed in an ever-evolving retail landscape.</p>
          <p>Develope since 7/2021 after success in a <strong>Startup Incubator in Technicom</strong>, part of TUKE university in Košice.</p>
        </div>
      </div>
      <div class="row" id="shopycrm">
        <div class="col-12">
          <div class="divider"></div>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-md-8 col-sm-12 col-xs-12 text-justify">
          <h2>Elevate Your Sales Game with ShopyCRM!</h2>
          <p>Ready to supercharge your <strong>strong>sales process</strong> and take your business to new heights? Look no further than ShopyCRM – your all-in-one solution for seamless sales management and automation!</p>
          <p>Since 2014, we've been leading the charge in revolutionizing CRM technology. Our SaaS CRM application isn't just another run-of-the-mill platform – it's a powerhouse of innovation tailored specifically for sales companies like yours.</p>
          <p>What sets ShopyCRM apart? Our focus on automation and seamless integration with third-party applications is unmatched. Say goodbye to manual data entry and hello to effortless connectivity!</p>
          <p><strong>With ShopyCRM, you can:</strong></p>
          <ul>
            <li>Easily integrate your online store, marketplaces, accounting software, logistics platforms, and warehouse storage systems</li>
            <li>Streamline communication and data exchange with XML or CSV specifications – no hassle, no fuss!</li>
            <li>Enjoy custom connections and bespoke solutions tailored to your unique business needs</li>
          </ul>
          <p>Ready to experience the ShopyCRM difference for yourself? Visit shopycrm.com and sign up for <strong>FREE</strong> today to unlock the full potential of our cloud-based CRM app.</p>
          <p>Don't miss out on this game-changing opportunity to revolutionize your sales process and drive unprecedented growth! Join the ShopyCRM family today and unleash the power of seamless sales management.</p>
        </div>
        <div class="col-md-4 col-sm-12 col-xs-12">
          <img :src="images[1]" class="img-fluid" />
          <img :src="images[2]" class="img-fluid mt-5"/>
          <a href="https://shopycrm.com" target="_blank" class="btn btn-success btn-lg actionBtn">Register for FREE</a>
        </div>
      </div>
      <div class="row" id="underthelid">
        <div class="col-12">
          <div class="divider"></div>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-md-4 col-sm-12 col-xs-12">
          
        </div> 
        <div class="col-md-8 col-sm-12 col-xs-12 text-justify">
          <h2>Discover the Secrets of Success in Entrepreneurship and AI-Powered E-Commerce!</h2>
          <p>Embark on a journey behind the scenes of <strong>entrepreneurship and AI innovation</strong> with me, a seasoned senior software developer with over a decade of experience. From navigating international teams to crafting my own CRM software since 2014, my entrepreneurial ventures have led me to develop a groundbreaking startup centered around mathematical modeling in e-commerce.</p>
          <p>Join me as I unveil the tips, tricks, and real-life experiences that have shaped my entrepreneurial path. Gain invaluable insights into:</p>
          <ul>
            <li>Navigating the intricacies of international collaboration and team dynamics</li>
            <li>Unveiling the secrets behind the creation and evolution of my own CRM software</li>
            <li>Exploring the transformative potential of AI in e-commerce through mathematical modeling</li>
            <li>Harnessing AI for human behavior prediction and revolutionizing customer engagement</li>
          </ul>
          <p>Through candid discussions and firsthand accounts, you'll uncover the regular days and extraordinary moments that define the journey of entrepreneurship and AI innovation.</p>
          <p>Ready to unlock the keys to success and propel your own ventures forward? Join me for an enlightening exploration of the intersection between technology, entrepreneurship, and human behavior prediction.</p>
          <p>Sign up now for an exclusive insider look at the world of entrepreneurship and AI-powered e-commerce!</p>
        </div>
      </div>
      <div class="row" id="consultaitons">
        <div class="col-12">
          <div class="divider"></div>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-md-8 col-sm-12 col-xs-12 text-justify">
        <h2>Free AI Consultation for Your Business!</h2>
        <p>Are you looking to harness the <strong>power of Artificial Intelligence (AI)</strong> and Machine Learning (ML) to drive innovation and growth in your company?</p>
        <p>As a senior software developer with a master's degree in Cybernetics and currently pursuing a PhD with a focus on AI, I understand the complexities and opportunities that AI presents. With over two years of experience running my own AI startup, I've gained valuable insights into how AI can transform businesses across industries.</p>
        <p>I'm offering complimentary 30-minute consultation sessions to discuss how AI and ML can be tailored to meet the specific needs and goals of your organization. Whether you're exploring AI for the first time or seeking to optimize your existing AI initiatives, I'm here to help.</p>
        </div>
        <div class="col-md-4 col-sm-12 col-xs-12">
          <!-- Calendly inline widget begin -->
          <div class="calendly-inline-widget" data-url="https://calendly.com/ales-6?hide_gdpr_banner=1" style="min-width:320px;height:300px;"></div>
          <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
          <!-- Calendly inline widget end -->
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component
export default class IndexPage extends Vue {
  @Prop() readonly language!: string;

  $axios: any;
  $t: any;
  references: string[] = [
    "/customers/PwC-logo.svg",
    "/customers/logo-site-white-header-animated-med.22180f8ca16ad33fd51a4b8f78d4120d.gif",
    "/customers/asseco_centraleurope_logo.svg",
    "/customers/headwork.png",
    "/customers/bookingforce-01-copy.png",
    "/customers/hhp_logo.png",
    "/customers/logo-cz-2.png",
    "/customers/vivantis.cz.cachedbbf84b0b4dbe8aae4861cc1aec7c9b58040fb0f0e.svg"
  ];
  links: string[] = [
    "https://storepredictor.com",
    "https://shopycrm.com"
  ];
  images: string[] = [
    "storePredictor_logo.jpg",
    "shopycrm-logo.png",
    "shopycrm.png"
  ];
}
</script>
<sctipt lang="js">
  (function(d, s) {
    var useSSL = 'https:' == document.location.protocol;
    var js, where = d.getElementsByTagName(s)[0],
    js = d.createElement(s);
    js.src = (useSSL ? 'https:' : 'http:') +  '//www.peopleperhour.com/hire/43573616/10356450.js?width=245&height=170&orientation=vertical&theme=light&rnd='+parseInt(Math.random()*10000, 10);
    try { where.parentNode.insertBefore(js, where); } catch (e) { if (typeof console !== 'undefined' && console.log && e.stack) { console.log(e.stack); } }
}(document, 'script'));
</sctipt>

<style lang="css" scoped>
.item {
  cursor: pointer;
  padding: 40px 20px 20px;
  border-bottom: 1px solid silver;
}
.item:hover {
  border-bottom: 1px solid black;
  background: #f5f5f5;
}
.divider {
  margin-top: 25px;
  margin-bottom: 25px;
  border: 2px solid rgb(26, 184, 68);
  height: 1px;
  width: 100%;
  display: block;
  box-shadow: 3px 3px;
  opacity: 0.7; 
}
.text-justify {
  text-align: justify;
}
.actionBtn {
  width: 100%;
  margin-top: 30px;
}
@media print {
  * {
    font-family: "Courier New", Courier, monospace;
  }
  body {
    margin: 5px;
    padding: 5px;
  }
}
</style>