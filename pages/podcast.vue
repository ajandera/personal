<template>
  <div style="height: 100%;padding:10%">
    <div class="row">
      <div class="col-12">
        <div v-html="podcast[language]"></div>
        <div class="clearfix"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'nuxt-property-decorator';
import IResponseText from '~/model/IResponseText';

@Component
export default class PodcastPage extends Vue {
  @Prop() readonly language!: string;

  podcast: object = {};
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
