<template>
  <section id="blog" class="container">
      <div class="col-12">
        <router-link to="/blog">Back</router-link>
        <hr>
        <img v-bind:src="post.src" class="image" />
        <h3>{{ post.title[language] }}</h3>
        <div v-html="post.body[language]"></div>
      </div>
    <Footer />
  </section>
</template>

<script>

import axios from "axios";
import Footer from "@/components/partial/Footer";

export default {
  name: 'Detail',
  data() {
    return {
      post: {},
      language: window.localStorage.getItem("language"),
      languages: window.localStorage.getItem("languages") !== null ? window.localStorage.getItem("languages").split(',') : ""
    }
  },
  components: {
    Footer
  },
  mounted() {
    this.getPost();
    window.addEventListener('language-localstorage-changed', (event) => {
      this.language = event.detail.storage;
    });
  },
  methods: {
    getPost() {
      axios.get(this.$hostname + "post/"+ this.$route.params.id)
          .then(response => {
            if (response.data.success === true) {
              this.post = response.data.post[0];
            } else {
              console.log(response.data.error);
            }
          });
    }
  }
}
</script>

<style lang="css" scoped>
.image {
  width: 30%;
  height: auto;
  float: left;
  margin-right: 30px;
  margin-bottom: 30px;
}
h1 {
  font-size: 3em;
}
h2 {
  text-align: right;
  font-size: 1em;
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
section#customers ul {
  margin-top: 50px;
}
section#customers ul li {
  font-size: 2em;
  line-height: 2;
}
ul {
  list-style: none;
}
ul.actions li {
  display: inline-block;
  padding: 5px;
}
.container {
  max-width: 1920px;
  margin: 0 auto;
}
.reference img {
  max-width: 100%;
  vertical-align: middle;
  height: 50px;
}
#blog {
  padding: 5%;
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
