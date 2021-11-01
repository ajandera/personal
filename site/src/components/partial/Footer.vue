<template>
    <!-- Footer Section Start -->
    <section id="footer" class="container-fluid">
      <div class="row">
        <div class="col-12">
          <p>{{ year }} &copy; Aleš Jandera. {{ $t('footer.copyright')}}.</p>
        </div>
      </div>
      <div class="clearfix"></div>
    </section>
    <!-- Footer Section End -->
</template>

<script>

export default {
  name: 'Footer',
  data() {
    return {
      year: new Date().getFullYear(),
    }
  },
  components: {},
  mounted() {},
  methods: {

  }
}
</script>

<style lang="css" scoped>
section#footer {
  height: 30px;
  background: black;
  color: #fff;
  padding: 5px;
  position: fixed;
  left: 0;
  bottom: 0;
}
.clearfix {
  clear: both;
}
@media (min-width: 1900px) {
  section#footer {
    font-size: 1.1em;
  }
}

/*
  ##Device = Tablets, Ipads (portrait)
  ##Screen = B/w 768px to 1024px
*/

@media (min-width: 768px) and (max-width: 1025px) and (orientation: portrait) {
  section#footer {
    font-size: 1em;
  }
}
</style>
