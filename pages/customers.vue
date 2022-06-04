<template>
  <div style="height: 100%;padding: 10%">
    <div class="row">
      <div class="col-12">
        <h2>{{ $t('menu.customers')}}</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-6 text-center mt-4 mb-4" v-for="ref in references" v-bind:key="ref.name">
          <img v-bind:src="ref.src" class="img-fluid" />
      </div>
      <div class="clearfix"></div>
    </div>
    <div class="row mt-5">
      <div class="col-xs-12 col-sm-12 col-md-12">
        <h4>My Projects</h4>
      </div>
      <div class="col-xs-12 col-sm-6 text-center mt-4 mb-4" v-for="ref in myProjects" v-bind:key="ref.name">
        <img v-bind:src="ref.src" class="img-fluid" />
      </div>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'nuxt-property-decorator';
import IResponseFiles from "~/model/IResponseFiles";
import File from "~/model/File";

@Component
export default class CustomersPage extends Vue {
  @Prop() readonly language!: string;
  references: File[] = [];
  myProjects: File[] = [];
  $axios: any;

  mounted() {
    this.files();
  }

  files() {
    this.$axios.get("/files")
        .then((response: IResponseFiles) => {
          if (response.data.success) {
            const images = response.data.files;
            this.references = images.filter(x => x.gallery === 'reference').reverse();
            this.myProjects = images.filter(x => x.gallery === 'my');
          } else {
            console.log(response.data.error);
          }
        });
  }
}
</script>

<style lang="css" scoped>

</style>
