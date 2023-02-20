<template>
  <section id="podcast">
    <div class="container mt-5">
      <div class="row">
        <div class="col-9">
          <div v-html="podcast[language]"></div>
          <div class="clearfix"></div>
        </div>
        <Sidebar :language="language" />
      </div>
    </div>
    <div class="clearfix"></div>
  </section>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'nuxt-property-decorator';
import IDictionary from '~/model/IDictionary';
import IResponseText from '~/model/IResponseText';

@Component
export default class PodcastPage extends Vue {
  @Prop() readonly language!: string;

  podcast: IDictionary = {};
  $axios: any;
  mounted() {
    this.texts();
  }

  texts() {
    this.$axios.get("/"+this.$config.token + "/text/podcast")
      .then((response: IResponseText) => {
        if (response.data.success) {
          this.podcast = JSON.parse(response.data.text.Value);
        } else {
          console.log(response.data.error);
        }
      });
  }
}
</script>

<style lang="css" scoped>

</style>
