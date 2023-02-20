<template>
  <section id="shopycrm" class="container">
    <div class="row pt-5">
      <div class="col-9">
        <div v-html="shopycrm[language]"></div>
        <div class="clearfix"></div>
      </div>
      <Sidebar :language="language" />
    </div>
    <div class="clearfix"></div>
  </section>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'nuxt-property-decorator';
import IDictionary from '~/model/IDictionary';
import IResponseText from '~/model/IResponseText';

@Component
export default class ShopyCRMPage extends Vue {
    @Prop() readonly language!: string;

    shopycrm: IDictionary = {};
    $axios: any;

    mounted() {
      this.texts();
    }

    texts() {
      this.$axios.get("/"+this.$config.token + "/text/shopycrm")
        .then((response: IResponseText) => {
          if (response.data.success) {
            this.shopycrm = JSON.parse(response.data.text.Value);
          } else {
            console.log(response.data.error);
          }
        });
    }
}
</script>

<style lang="css" scoped>

</style>
