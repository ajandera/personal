<template>
  <section id="notFound" class="container">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="error-template">
            <h1>{{ $t("404.title")}}</h1>
            <h2>{{ $t("404.subtitle")}}</h2>
            <div class="error-details">
              {{ $t("404.description")}}
            </div>
            <div class="error-actions">
              <a href="/" class="btn btn-primary btn-lg">{{ $t("404.home")}}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'NotFound',
  data() {
    return {
      language: window.localStorage.getItem("language"),
      languages: window.localStorage.getItem("languages") !== null ? window.localStorage.getItem("languages").split(',') : ""
    }
  },
  components: {},
  mounted() {
    window.addEventListener('language-localstorage-changed', (event) => {
      this.language = event.detail.storage;
    });
  },
  methods: {}
}
</script>

<style lang="css" scoped>

.error-template {
  margin-top: 30%;
  padding: 40px 15px;
  text-align: center;
}

.error-actions {
  margin-top: 15px;
  margin-bottom: 15px;
}

.error-actions .btn {
  margin-right: 10px;
}
</style>
