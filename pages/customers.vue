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

<script>

export default {
  name: 'CustomersPage',
  props: ['language'],
  data() {
    return {
      references: [],
      myProjects: [],
      message: null
    }
  },
  components: {},
  mounted() {
    this.files();
  },
  methods: {
    files() {
      this.$axios.get(this.$config.$hostname + "files")
          .then(response => {
            if (response.data.success === true) {
              this.images = response.data.files;
              this.references = this.images.filter(x => x.gallery === 'reference').reverse();
              this.myProjects = this.images.filter(x => x.gallery === 'my');
            } else {
              console.log(response.data.error);
            }
          });
    }
  }
}
</script>

<style lang="css" scoped>

</style>
