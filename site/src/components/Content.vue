<template>
  <div style="height: 100%">
    <!-- Home Section Starts -->
    <section id="home" class="container-fluid p-0" itemscope itemtype="http://schema.org/Person">
      <div class="left relative">
        <div class="text">
          <h1 title="ajandera.com" class="text-right"><span itemprop="givenName">Aleš</span> <span itemprop="familyName">Jandera</span></h1>
          <h2>{{ $t('content.moto')}}</h2>
          <p class="phone font-weight-900"><font-awesome-icon :icon="['fas', 'mobile-alt']" /> +421 904 750 220</p>
          <ul class="actions">
            <li>
              <a href="mailto:jandera@shopycrm.com" title="Email" class="black" itemprop="email">
                <font-awesome-icon :icon="['fas', 'envelope-open']" />
              </a>
            </li>
            <li>
              <a href="http://github.com/ajandera" target="_blank" title="Github" class="black" itemprop="contactPoint">
                <font-awesome-icon :icon="['fab', 'github']" />
              </a>
            </li>
          </ul>
          <div class="badges">
            <div class="col-6">
              <h3>
                <font-awesome-icon :icon="['fas', 'briefcase']" />
                <span class="font-weight-900">10+</span>
              </h3>
              <h6 class="uppercase font-weight-700">{{ $t('content.experience')}}</h6>
            </div>
            <div class="col-6">
              <h3>
                <font-awesome-icon :icon="['fas', 'handshake']" />
                <span class="font-weight-900">100+</span>
              </h3>
              <h6 class="uppercase font-weight-700">{{ $t('content.projects')}}</h6>
            </div>
            <div class="col-6">
              <h3>
                <font-awesome-icon :icon="['fas', 'heart']" />
                <span class="font-weight-900">25+</span>
              </h3>
              <h6 class="uppercase font-weight-700">{{ $t('content.customers')}}</h6>
            </div>
            <div class="col-6">
              <h3>
                <font-awesome-icon :icon="['fas', 'chart-line']" />
                <span class="font-weight-900">1Mil+</span>
              </h3>
              <h6 class="uppercase font-weight-700">{{ $t('content.rows')}}</h6>
            </div>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
      <div class="right">
        <div id="avatar"></div>
      </div>
      <div class="clearfix"></div>
    </section>
    <!-- Home Section Ends -->
    <!-- About Section Starts -->
    <section id="about" class="container-fluid p-0">
      <div class="left">
        <div id="aboutImage"></div>
      </div>
      <div class="right">
        <div class="text">
          <h2 class="text-left">{{ $t('content.about')}}</h2><br>
          <div v-html="about[language]"></div>
          <div class="clearfix"></div>
        </div>
        <div class="clearfix"></div>
      </div>
      <div class="clearfix"></div>
    </section>
    <!-- About Section Ends -->
    <!-- Customers Section Starts -->
    <section id="customers" class="container-fluid p-0">
      <hr>
      <carousel :autoplay="true" :loop="true" :speed="3" :autoplayHoverPause="true" :perPage="4">
        <slide v-for="ref in references" v-bind:key="ref.name" class="reference">
          <img v-bind:src="ref.src" />
        </slide>
      </carousel>
      <div class="clearfix"></div>
      <hr>
    </section>
    <!-- Customer Section End -->
    <!-- Automation Section Starts -->
    <section id="automation" class="container-fluid p-0">
      <div class="left">
        <div class="text">
          <h2 class="text-right">{{ $t('content.automation')}}</h2>
          <div v-html="automation[language]"></div>
          <div class="clearfix"></div>
        </div>
      </div>
      <div class="right">
        <div class="text">
          <div class="container">
            <form>
            <div class="row">
              <div class="col-12">
                <label for="name">{{ $t('content.form.labels.company')}}</label>
                <input type="text" v-model="form.name" class="form-control" id="name">
              </div>
            </div>
            <div class="row mt-4">
              <div class="col-12">
                <label for="email">{{ $t('content.form.labels.email')}}</label>
                <input type="email" v-model="form.email" class="form-control" id="email">
              </div>
            </div>
            <div class="row mt-4">
              <div class="col-12">
                <label for="address">{{ $t('content.form.labels.address')}}</label>
                <textarea v-model="form.address" class="form-control" id="address"></textarea>
              </div>
            </div>
            <div class="row mt-4">
              <div class="col-12">
                <label for="number">{{ $t('content.form.labels.number')}}</label>
                <input type="text" v-model="form.number" class="form-control" id="number">
              </div>
            </div>
            <div class="row mt-4">
              <div class="col-12">
                <label for="vat">{{ $t('content.form.labels.vat')}}</label>
                <input type="text" v-model="form.vat" class="form-control" id="vat">
              </div>
            </div>
              <div class="row mt-4">
                <div class="col-12">
                  <label for="person">{{ $t('content.form.labels.person')}}</label>
                  <input type="text" v-model="form.person" class="form-control" id="person">
                </div>
              </div>
            <div class="row mt-4">
              <div class="col-12">
                <div class="btn btn-lg btn-success" v-on:click="order">{{ $t('content.form.btn.submit')}}</div>
              </div>
            </div>
            <div class="row mt-4" v-if="message !== null">
              <div class="col-12">
                <div class="alert  alert-success">{{ message }}</div>
              </div>
            </div>
          </form>
          </div>
        </div>
      </div>
      <div class="clearfix"></div>
      <Footer />
    </section>
    <!-- Feed Section End -->
  </div>
</template>

<script>

import axios from "axios";
import Footer from "@/components/Footer";

export default {
  name: 'Content',
  data() {
    return {
      images: null,
      about: "",
      automation: "",
      references: [],
      message: null,
      shopy: {src: ""},
      form: {
        name: "",
        email: "",
        address: "",
        number: "",
        vat: "",
        person: ""
      },
      language: window.localStorage.getItem("language"),
      languages: window.localStorage.getItem("languages") !== null ? window.localStorage.getItem("languages").split(',') : ""
    }
  },
  components: {
    Footer
  },
  mounted() {
    this.files();
    this.texts();
    window.addEventListener('language-localstorage-changed', (event) => {
      this.language = event.detail.storage;
    });
  },
  methods: {
    files() {
      axios.get(this.$hostname + "files")
          .then(response => {
            if (response.data.success === true) {
              this.images = response.data.files;
              const main = this.images.filter(x => x.name === 'main.jpg')[0];
              const about = this.images.filter(x => x.name === 'lensball.jpg')[0];
              this.shopy = this.images.filter(x => x.name === 'shopycrm-logo.png')[0];
              document.getElementById('avatar').style.backgroundImage = "url(" + main.src + ")";
              document.getElementById('aboutImage').style.backgroundImage = "url(" + about.src + ")";
              this.references = this.images.filter(x => x.gallery === 'reference');
            } else {
              console.log(response.data.error);
            }
          });
    },
    texts() {
      axios.get(this.$hostname + "text")
          .then(response => {
            if (response.data.success === true) {
              this.about = response.data.texts.filter(x => x.key === "about")[0].value;
              this.automation = response.data.texts.filter(x => x.key === "automation")[0].value;
            } else {
              console.log(response.data.error);
            }
          });
    },
    order() {
      axios.post(this.$hostname + "mail",
          {
            email: "ales.jandera@gmail.com",
            subject: "Nová objednávka ajandera.com",
            body: this.form.toString()
          }
      ).then(response => {
        this.form = {
          name: "",
          email: "",
          address: "",
          number: "",
          vat: "",
          person: ""
        };
        this.message = response.data.message;
      });
    }
  }
}
</script>

<style>
@import "https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/css/bootstrap.min.css";
* {
  margin: 0;
  padding: 0;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}
html, body {
  height: 100%;
}
body > div {
  height: 100%;
}
</style>

<style lang="css" scoped>
h1 {
  font-size: 3em;
}
h2 {
  text-align: right;
  font-size: 2em;
}
h3 {
  margin-bottom: 20px;
}
a {
  color: green;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
section {
  height: 100%;
  display:block;
}
section .left {
  width: 50%;
  float:left;
  height: 100%;
}
section .right{
  width: 50%;
  float:right;
  height: 100%;
}
section #avatar {
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: left;
  height: 100%;
}
section #aboutImage {
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right;
  height: 100%;
}
section#customers {
  height: auto;
  margin-top: 30px;
}
section#about .right{
  font-size: 1.2em;
}
ul {
  list-style: none;
}
ul.actions {
  font-size: 30px;
  margin-top: 20px;
  text-align: right;
}
ul.actions li {
  display: inline-block;
  padding: 5px;
}
.phone {
  text-align: right;
  margin-top: 10px;
}
.text {
  padding: 50px;
}
.text-left {
  text-align: left;
}
.text-right {
  text-align: right;
}
.container {
  max-width: 1920px;
  margin: 0 auto;
}
.font-weight-900 {
  font-weight: 900;
}
.uppercase {
  text-transform: uppercase;
}
.font-weight-700 {
  font-weight:  700;
}
.black{
  color: #000;
}
.clearfix {
  clear: both;
}
.col-6 {
  width: 50%;
  float: left;
  margin-bottom: 50px;
}
.badges{
  font-size: 2em;
  position: absolute;
  bottom: 0;
  right: 50px;
  text-align: right;
}
.relative {
  position: relative;
}
.reference {
  width: 45%;
  float: left;
  height: 100px;
  padding: 20px;
  display: inline-flex;
}
.reference img {
  max-width: 100%;
  vertical-align: middle;
  height: 50px;
}
.blogItem img {
  max-width: 100%;
}
.shopyImg {
  text-align: center;
  display: block;
}
.shopyImg img{
  width: 50%;
}
.ql-align-center {
  text-align: center;
}
/*
  ##Device = Tablets, Ipads (portrait)
  ##Screen = B/w 768px to 1024px
*/
@media (min-width: 1900px) {
  h1 {
    font-size: 4em;
  }
  h2 {
    text-align: right;
    font-size: 2em;
  }
  .phone {
    font-size: 2em;
  }
  section#about .text {
    font-size: 1em;
  }
}
@media (min-width: 1025px) and (max-width: 1200px) {
  section#about .right{
    font-size: 1em;
  }
}
@media (min-width: 768px) and (max-width: 1025px) {
  section#about .right{
    font-size: 0.9em;
  }
  section#customers ul li {
    font-size: 1.5em;
    line-height: 2;
  }
}

/*
  ##Device = Tablets, Ipads (portrait)
  ##Screen = B/w 768px to 1024px
*/

@media (min-width: 768px) and (max-width: 1025px) and (orientation: portrait) {
  section .left {
    width: 100%;
    height: 100%;
  }
  section .right{
    width: 100%;
    height: 100%;
  }
  section#about .left {
    display: none;
  }
  section#about .right{
    font-size: 1.3em;
  }
}

/*
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
*/

@media (min-width: 481px) and (max-width: 767px) {

}

/*
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

@media (min-width: 320px) and (max-width: 480px) {
  section .left {
    width: 100%;
    height: 100%;
  }
  section .right{
    width: 100%;
    height: auto;
  }
  .badges{
    font-size: 1.5em;
    position: relative;
    margin-top: 2em;
  }
  section#about .left {
    display: none;
  }
  section#about .right{
    font-size: 0.9em;
  }
  section#customers ul li {
    font-size: 1.2em;
  }
  section#customers .right {
    display:none;
  }
  h1 {
    font-size: 2.2em;
  }
  h2 {
    font-size: 0.8em;
  }
  .reference {
    width: 100%;
  }
  section#customers {
    height: auto;
  }
}

@media (max-width: 320px) {

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
