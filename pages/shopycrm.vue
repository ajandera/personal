<template>
  <div style="height: 100%;padding:10%">
    <div class="row">
      <div class="col-12">
        <div v-html="shopycrm[language]"></div>
        <div class="clearfix"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'nuxt-property-decorator';
import IResponseTexts from '~/model/IResponseTexts';

@Component
export default class ShopyCRMPage extends Vue {
    @Prop() readonly language!: string;

    shopycrm: object = {};
    $axios: any;

    mounted() {
      this.texts();
    }

    texts() {
      this.$axios.get("/"+this.$config.site + "/text")
        .then((response: IResponseTexts) => {
          if (response.data.success) {
            this.shopycrm = JSON.parse(response.data.texts.filter(x => x.Key === "shopycrm")[0].Value);
          } else {
            console.log(response.data.error);
          }
        });
    }
}
</script>

<style lang="css" scoped>

</style>
