<template>
  <section id="blog" class="container">
    <div v-for="post in posts" v-bind:key="post.id" class="row mt-4 item" v-on:click="goToDetail(post._id.$oid)">
      <div class="col-4">
        <img v-bind:src="post.src" class="img-fluid" />
      </div>
      <div class="col-8">
        <h3>{{ post.title[language] }}</h3>
        <p>{{ post.excerpt[language] }}</p>
      </div>
    </div>
    <Footer />
  </section>
</template>

<script>

import axios from "axios";
import Footer from "@/components/Footer";

export default {
  name: 'Blog',
  data() {
    return {
      posts: [],
      language: window.localStorage.getItem("language"),
      languages: window.localStorage.getItem("languages") !== null ? window.localStorage.getItem("languages").split(',') : ""
    }
  },
  components: {
    Footer
  },
  mounted() {
    this.getPosts();
    window.addEventListener('language-localstorage-changed', (event) => {
      this.language = event.detail.storage;
    });
  },
  methods: {
    getPosts() {
      axios.get(this.$hostname + "post")
          .then(response => {
            if (response.data.success === true) {
              this.posts = response.data.posts;
            } else {
              console.log(response.data.error);
            }
          });
    },
    goToDetail(id) {
      this.$router.push('detail/'+id);
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
section {
  height: 100%;
  display:block;
}
#blog {
  padding: 5%;
}
.item {
  cursor: pointer;
  padding: 20px;
}
.item:hover {
  border: 1px solid silver;
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
