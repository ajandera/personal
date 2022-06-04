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
      this.$axios.get("/text")
        .then((response: IResponseTexts) => {
          if (response.data.success) {
            this.shopycrm = response.data.texts.filter(x => x.key === "shopycrm")[0].value;
          } else {
            console.log(response.data.error);
          }
        });
    }
}
</script>

<style lang="css" scoped>

</style>
