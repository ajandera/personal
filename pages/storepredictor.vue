<template>
  <div style="height: 100%;padding:10%">
    <div class="row">
      <div class="col-12">
        <div v-html="storepredictor[language]"></div>
        <div class="clearfix"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StorePredictorPage',
  props: ['language'],
  data() {
    return {
      storepredictor: ""
    }
  },
  components: {},
  mounted() {
    this.texts();
  },
  methods: {
    texts() {
      this.$axios.get(this.$config.$hostname + "text")
        .then(response => {
          if (response.data.success === true) {
            this.storepredictor = response.data.texts.filter(x => x.key === "storepredictor")[0].value;
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
