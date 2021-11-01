<template>
  <div style="height: 100%;padding:10%">
    <div class="row">
      <div class="col-12">
        <div v-html="arualcms[language]"></div>
        <div class="clearfix"></div>
      </div>
    </div>
  </div>
</template>

<script>

import axios from "axios";

export default {
  name: 'ArualCMS',
  data() {
    return {
      arualcms: "",
      language: window.localStorage.getItem("language"),
      languages: window.localStorage.getItem("languages") !== null ? window.localStorage.getItem("languages").split(',') : ""
    }
  },
  components: {},
  mounted() {
    this.texts();
    window.addEventListener('language-localstorage-changed', (event) => {
      this.language = event.detail.storage;
    });
  },
  methods: {
    texts() {
      axios.get(this.$hostname + "text")
          .then(response => {
            if (response.data.success === true) {
              this.arualcms = response.data.texts.filter(x => x.key === "arualcms")[0].value;
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
