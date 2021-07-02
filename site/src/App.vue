<template>
  <div>
    <Nav />
    <router-view></router-view>
    <div class="clearfix"></div>
    <Footer />
  </div>
</template>

<script>

import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

export default {
  name: 'App',
  data() {
    return {
      primary: 'Content'
    }
  },
  components: {
    Footer,
    Nav
  },
  mounted() {
    this.$router.push('home');
  },
  methods: {

  },
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
