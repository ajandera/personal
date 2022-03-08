<template>
<div>
  <section id="navigation" class="row">
    <div class="container">
      <div class="col-12">
        <Nav :languages="languages" :language="language" @set-language="setLanguage" />
      </div>
    </div>
  </section>
  <section id="home" class="row p-0" itemscope itemtype="http://schema.org/Person">
    <div class="container-fluid p-0">
      <div class="col-12 p-0">
        <div id="avatar">
          <h1 title="ajandera.com"><span itemprop="givenName">Aleš</span> <span itemprop="familyName">Jandera</span></h1>
          <h2>{{ $t('content.moto') }}</h2>
        </div>
      </div>
    </div>
  </section>
  <section id="content" class="row">
    <div class="container">
      <div class="col-12">
          <router-view :language="language"></router-view>
          <div class="clearfix"></div>
      </div>
    </div>
    <div class="clearfix"></div>
  </section>
  <Footer />
</div>
</template>

<script>

import axios from "axios";
import Nav from "@/components/partial/Nav";
import Footer from "@/components/partial/Footer";
import i18n from "@/i18n";

export default {
  name: 'App',
  data() {
    return {
      primary: 'Content',
      language: null,
      languages: []
    }
  },
  components: {
    Nav,
    Footer
  },
  mounted() {
    this.getFiles();
    this.getDefaultLanguage();
  },
  methods: {
    getDefaultLanguage() {
      axios.get(this.$hostname + "languages")
          .then(response => {
            if (response.data.success === true) {
              this.language =response.data.languages.find(item => item.default == 1).key;
              this.languages = response.data.languages.map(item => item = item.key);
            } else {
              this.message = response.data.error;
              this.messageClass = 'danger';
            }
          });
    },
    getFiles() {
      axios.get(this.$hostname + "files")
          .then(response => {
            if (response.data.success === true) {
              this.images = response.data.files;
              const main = this.images.filter(x => x.name === 'main.jpg')[0];
              document.getElementById('avatar').style.backgroundImage = "url(" + main.src + ")";
            } else {
              console.log(response.data.error);
            }
          });
    },
    setLanguage(lang) {
      i18n.locale = this.language = lang;
    }
  }
}
</script>

<style lang="css" scoped>
@import "https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/css/bootstrap.min.css";
@import url("https://fonts.googleapis.com/css2?family=Comforter&display=swap");
.row {
    margin-right: 0px;
    margin-left: 0px;
}
h1 {
  font-size: 5em;
  color: #fff;
  font-family: 'Comforter', cursive;
  position: absolute;
  right: 20px;
  bottom: 50px;
}
h2 {
  position: absolute;
  right: 20px;
  bottom: 10px;
  font-weight: 200;
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
.clearfix {
  clear: both;
}
.font-weight-900 {
  font-weight: 900;
}
.info {
  position: absolute;
  bottom: 30px;
  right: 20px;
}
#avatar {
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  height:500px;
  position: relative;
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
}
@media (min-width: 1025px) and (max-width: 1200px) {

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
  .personal {
    max-width: 95%
  }
  .text {
    height: auto;
    padding: 5px;
    margin-top: 40px;
  }
}

@media (max-width: 320px) {
  .personal {
    max-width: 95%
  }
  .text {
    height: auto;
    padding: 5px;
    margin-top: 40px;
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
