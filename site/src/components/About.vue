<template>
  <div style="height: 100%;padding:10%">
    <div class="row">
      <div class="col-12">
        <div v-html="about[language]"></div>
        <div class="clearfix"></div>
      </div>
    </div>
  </div>
</template>

<script>

import axios from "axios";

export default {
  name: 'Home',
  props: ['language', 'languages'],
  data() {
    return {
      about: ""
    }
  },
  components: {},
  mounted() {
    this.texts();
  },
  methods: {
    texts() {
      axios.get(this.$hostname + "text")
          .then(response => {
            if (response.data.success === true) {
              this.about = response.data.texts.filter(x => x.key === "about")[0].value;
            } else {
              console.log(response.data.error);
            }
          });
    },
  }
}
</script>

<style lang="css" scoped>

</style>
