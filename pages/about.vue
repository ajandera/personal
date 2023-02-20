<template>
  <div>
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
    <section class="mt-5">
      <div class="container">
        <div class="row">
          <div class="col-9">
            <div v-html="about[language]"></div>
            <div class="clearfix"></div>
          </div>
          <Sidebar :language="language" />
        </div>
      </div>
      <div class="clearfix"></div>
    </section>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'nuxt-property-decorator';
import IResponseText from '~/model/IResponseText';
import IDictionary from '~/model/IDictionary';
import IResponseFiles from '~/model/IResponseFiles';

@Component
export default class AboutPage extends Vue {
  @Prop() readonly language!: string;

  about: IDictionary = {};
  $axios: any;
  main: string = '';
  $t: any;
  $config: any;

  mounted() {
    this.texts();
    this.getFiles();
  }

  texts() {
    this.$axios.get("/"+this.$config.token + "/text/about")
        .then((response: IResponseText) => {
          if (response.data.success) {
            this.about = JSON.parse(response.data.text.Value);
          } else {
            console.log(response.data.error);
          }
        });
  }

  getFiles() {
    this.$axios.get("/"+this.$config.token + "/files")
      .then((response: IResponseFiles) => {
        if (response.data.success) {
          this.main = this.$config.storage + response.data.files.filter(item => item.Name === 'main.jpg')[0].Src;
        } else {
          console.log(response.data.error);
        }
      });
  }
}
</script>

<style lang="css" scoped>
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
</style>
