<template>
  <div style="height: 100%;padding:10%">
    <div class="row">
      <div class="col-12">
        <h2>{{ $t('content.about')}}</h2>
      </div>
    </div>
    <div v-html="about[language]"></div>
    <div class="clearfix"></div>
  </div>
</template>

<script>

import axios from "axios";

export default {
  name: 'Home',
  data() {
    return {
      about: "",
      language: window.localStorage.getItem("language"),
      languages: window.localStorage.getItem("languages") !== null ? window.localStorage.getItem("languages").split(',') : ""
    }
  },
  components: {},
  mounted() {
    this.texts();
    window.addEventListener('language-localstorage-changed', (event) => {
      this.language = event.detail.storage;
    });
  },
  methods: {
    texts() {
      axios.get(this.$hostname + "text")
          .then(response => {
            if (response.data.success === true) {
              this.about = response.data.texts.filter(x => x.key === "about")[0].value;
            } else {
              console.log(response.data.error);
            }
          });
    },
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
.text-left {
  text-align: left;
}
.clearfix {
  clear: both;
}

.reference img {
  max-width: 100%;
  vertical-align: middle;
  height: 50px;
}
.blogItem img {
  max-width: 100%;
}
.shopyImg img{
  width: 50%;
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
