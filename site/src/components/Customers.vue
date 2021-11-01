<template>
  <div style="height: 100%;padding: 10%">
    <div class="row">
      <div class="col-12">
        <h2>{{ $t('menu.customers')}}</h2>
      </div>
    </div>
    <div class="col-6 reference mt-4" v-for="ref in references" v-bind:key="ref.name">
        <img v-bind:src="ref.src" />
    </div>
    <div class="clearfix"></div>
  </div>
</template>

<script>

import axios from "axios";

export default {
  name: 'Customers',
  data() {
    return {
      references: [],
      message: null,
      language: window.localStorage.getItem("language"),
      languages: window.localStorage.getItem("languages") !== null ? window.localStorage.getItem("languages").split(',') : ""
    }
  },
  components: {},
  mounted() {
    this.files();
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
              this.references = this.images.filter(x => x.gallery === 'reference');
            } else {
              console.log(response.data.error);
            }
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
  display:block;
}
.clearfix {
  clear: both;
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
}
@media (min-width: 768px) and (max-width: 1025px) {
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
  section#customers ul li {
    font-size: 1.2em;
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
