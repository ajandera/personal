<template>
  <section class="mt-5">
    <div class="container">
      <div class="row align-items-center">
        <h3>{{ $t('sidebar.projects')}}</h3>
        <div class="col-4 text-center mt-4 mb-4" v-for="(ref, index) in myProjects" :key="ref.Name">
          <a :href="links[index]">
            <img :src="$config.storage + ref.Src" class="img-fluid" />
          </a>
        </div>
      </div>
      <div class="row">
        <div class="col-9">
          <div v-html="about[language]"></div>
          <h3 class="mt-5">{{ $t('sidebar.customers')}}</h3>
          <div class="row align-items-center">
            <div class="col-3 mt-4 mb-4" v-for="ref in references" :key="ref.Name">
                <img :src="$config.storage + ref.Src" class="img-fluid" />
            </div>
          </div>
          <div class="clearfix"></div>
        </div>
        <Sidebar :language="language" />
      </div>
      <div class="row">
        <div class="col-9">
          <!-- Calendly inline widget begin -->
          <div class="calendly-inline-widget" data-url="https://calendly.com/ales-6?hide_gdpr_banner=1" style="min-width:320px;height:700px;"></div>
          <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
          <!-- Calendly inline widget end -->
        </div>
      </div>
    </div>
    <div class="clearfix"></div>
  </section>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'nuxt-property-decorator';
import IResponseText from '~/model/IResponseText';
import IDictionary from '~/model/IDictionary';
import IResponseFiles from '~/model/IResponseFiles';
import File from "~/model/File";

@Component
export default class AboutPage extends Vue {
  @Prop() readonly language!: string;

  about: IDictionary = {};
  $axios: any;
  main: string = '';
  $t: any;
  $config: any;
  references: File[] = [];
  myProjects: File[] = [];
  links: string[] = [
    "https://storepredictor.com",
    "https://shopycrm.com",
    "https://github.com/ajandera/arualcms"
  ];

  mounted() {
    this.texts();
    this.$axios.get("/"+this.$config.token + "/files")
      .then((response: IResponseFiles) => {
        if (response.data.success) {
          this.references = response.data.files.filter(x => x.Gallery === 'reference').reverse();
          this.myProjects = response.data.files.filter(x => x.Gallery === 'my').reverse();
        } else {
          console.log(response.data.error);
        }
      });
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
}
</script>

<style lang="css" scoped>

</style>
