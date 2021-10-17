<template>
  <div style="height: 100%;padding:10%">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2>{{ $t('menu.contact')}}</h2>
        </div>
      </div>
      <form>
        <div class="row">
          <div class="col-12">
            <label for="name">{{ $t('content.form.labels.name') }}</label>
            <input type="text" v-model="form.name" class="form-control" id="name">
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-12">
            <label for="email">{{ $t('content.form.labels.email') }}</label>
            <input type="email" v-model="form.email" class="form-control" id="email">
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-12">
            <label for="phone">{{ $t('content.form.labels.phone') }}</label>
            <input type="text" v-model="form.phone" class="form-control" id="phone">
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-12">
            <label for="address">{{ $t('content.form.labels.message') }}</label>
            <textarea v-model="form.message" class="form-control" id="address" rows="10"></textarea>
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
    <div class="clearfix"></div>
  </div>
</template>

<script>

import axios from "axios";

export default {
  name: 'Contact',
  data() {
    return {
      message: null,
      form: {
        name: "",
        email: "",
        message: "",
        phone: ""
      },
      language: window.localStorage.getItem("language"),
      languages: window.localStorage.getItem("languages") !== null ? window.localStorage.getItem("languages").split(',') : ""
    }
  },
  components: {},
  mounted() {
    window.addEventListener('language-localstorage-changed', (event) => {
      this.language = event.detail.storage;
    });
  },
  methods: {
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
          message: "",
          phone: ""
        };
        this.message = response.data.message;
      });
    }
  }
}
</script>

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
  display: block;
}

section .left {
  width: 50%;
  float: left;
  height: 100%;
}

section .right {
  width: 50%;
  float: right;
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

section#about .right {
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
  font-weight: 700;
}

.black {
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

.badges {
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

.shopyImg img {
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
  section#about .right {
    font-size: 1em;
  }
}

@media (min-width: 768px) and (max-width: 1025px) {
  section#about .right {
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

  section .right {
    width: 100%;
    height: 100%;
  }

  section#about .left {
    display: none;
  }

  section#about .right {
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

  section .right {
    width: 100%;
    height: auto;
  }

  .badges {
    font-size: 1.5em;
    position: relative;
    margin-top: 2em;
  }

  section#about .left {
    display: none;
  }

  section#about .right {
    font-size: 0.9em;
  }

  section#customers ul li {
    font-size: 1.2em;
  }

  section#customers .right {
    display: none;
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
