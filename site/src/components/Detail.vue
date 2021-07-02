<template>
  <section id="blog" class="container">
      <div class="col-4">
        <router-link to="/blog">Back</router-link>
        <hr>
        <img v-bind:src="post.src" class="img-fluid" />
      </div>
      <div class="col-8">
        <h3>{{ post.title }}</h3>
        <div v-html="post.body"></div>
      </div>
    <div class="clearfix"></div>
  </section>
</template>

<script>

import axios from "axios";

export default {
  name: 'Detail',
  data() {
    return {
      post: {}
    }
  },
  components: {},
  mounted() {
    this.getPost();
  },
  methods: {
    getPost() {
      axios.get(this.$hostname + "post/"+ this.$route.params.id)
          .then(response => {
            if (response.data.success === true) {
              this.post = response.data.post;
            } else {
              console.log(response.data.error);
            }
          });
    },
    goToDetail(id) {

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
section #customersImage {
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: left;
  height: 100%;
}
section#customers ul {
  margin-top: 50px;
}
section#customers ul li {
  font-size: 2em;
  line-height: 2;
}
section#footer {
  text-align: center;
  margin-top: 50px;
  height: 50px;
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
#blog {
  padding: 5%;
}
.blogItem {
  width: 50%;
  float:left;
}
.blogItem img {
  max-width: 100%;
}
.modal-dialog{
  max-width: 1000px;
}
.modal-content {
  border: none;
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
    font-size: 1.3em;
  }
  section#footer {
    font-size: 1.3em;
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
  section#footer {
    font-size: 1.5em;
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
    height: 100%;
  }
  .badges{
    font-size: 1.5em;
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
}

@media (max-width: 320px) {
  #customers,
  #footer {
    display: none;
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
