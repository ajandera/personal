<template>
  <div id="app">
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
    <Info :languages="languages" :language="language" />
    <NuxtChild :language="language" class="mt-5"></NuxtChild>
    <Footer :language="language" />
  </div>
</template>

<script lang="ts">
// 
import { Component, Vue } from 'nuxt-property-decorator';
import Message from '~/model/Message';
import Nav from '~/components/Nav.vue';
import Footer from '~/components/Footer.vue';
import Info from '~/components/Info.vue';

@Component({
  components: {
    Nav,
    Footer,
    Info
  }
})
export default class DefaultLayout extends Vue {
    language: string = 'en';
    languages: string[] = ['en'];
    message: Message = {text: "", class: ""}
    $axios: any;
    $i18n: any;
    $t: any;

    setLanguage(lang: string) {
      this.$i18n.locale = this.language = lang;
    }
}
</script>

<style lang="css" scoped>
@import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css";
@import url("https://fonts.googleapis.com/css2?family=Comforter&display=swap");
.row {
  margin-right: 0px;
  margin-left: 0px;
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
  /* Create the parallax scrolling effect */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  background-attachment: fixed;
  height:500px;
  position: relative;
  background-image: url(/main.jpg);
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
    font-size: 1em;
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
