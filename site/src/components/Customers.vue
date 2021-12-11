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
  </div>
</template>

<script>

import axios from "axios";

export default {
  name: 'Customers',
  props: ['language'],
  data() {
    return {
      references: [],
      message: null
    }
  },
  components: {},
  mounted() {
    this.files();
  },
  methods: {
    files() {
      axios.get(this.$hostname + "files")
          .then(response => {
            if (response.data.success === true) {
              this.images = response.data.files;
              this.references = this.images.filter(x => x.gallery === 'reference');
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
