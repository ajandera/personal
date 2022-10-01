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
          <div id="avatar" :style="{'background-image':'url('+ main +')'}">
            <h1 title="ajandera.com"><span itemprop="givenName">Aleš</span> <span itemprop="familyName">Jandera</span></h1>
            <h2>{{ $t('content.moto') }}</h2>
          </div>
        </div>
      </div>
    </section>
    <section id="content" class="row">
      <div class="container">
        <div class="col-12">
          <NuxtChild :language="language"></NuxtChild>
          <div class="clearfix"></div>
        </div>
      </div>
      <div class="clearfix"></div>
    </section>
    <Footer />
  </div>
</template>

<script lang="ts">

import { Component, Vue } from 'nuxt-property-decorator';
import Message from '~/model/Message';
import File from "~/model/File";
import IResponseFiles from "~/model/IResponseFiles";
import IResponseLanguages from "~/model/IResponseLanguages";
import Nav from '~/components/Nav.vue';
import Footer from '~/components/Footer.vue';

@Component({
  components: {
    Nav,
    Footer
  }
})
export default class DefaultLayout extends Vue {
    language: string = '';
    languages: string[] = [];
    message: Message = {text: "", class: ""}
    $axios: any;
    $i18n: any;
    images: File[] = [];
    main: string = '';
    $auth: any;

    async mounted() {
      if (!this.$auth.loggedIn) {
        let login = {
          "username": this.$config.username,
          "password": this.$config.password
        }
        await this.$auth.loginWith('local', {data: login})
        this.getFiles();
        this.getDefaultLanguage();
      } else {
        this.getFiles();
        this.getDefaultLanguage();
      }
    }

    getDefaultLanguage() {
      this.$axios.get("/"+this.$config.site + "/languages")
        .then((response: IResponseLanguages) => {
          if (response.data.success) {
            this.language = response.data.languages.filter(item => item.Default)[0].Key;
            this.languages = response.data.languages.map(item => item.Key);
          } else {
            this.message.text = response.data.error;
            this.message.class = 'danger';
          }
        });
    }

    getFiles() {
      this.$axios.get("/"+this.$config.site + "/files")
        .then((response: IResponseFiles) => {
          if (response.data.success) {
            this.images = response.data.files;
            this.main = this.$config.storage + this.images.filter(item => item.Name === 'main.jpg')[0].Src;
          } else {
            console.log(response.data.error);
          }
        });
    }

    setLanguage(lang: string) {
      this.$i18n.locale = this.language = lang;
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
