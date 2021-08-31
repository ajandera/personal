<template>
    <!-- Footer Section Start -->
    <section id="footer" class="container-fluid">
      <p>{{ year }} &copy; Aleš Jandera. {{ $t('footer.copyright')}}.</p>
      <p>{{ $t('footer.company')}}, <span itemprop="workLocation">{{ $t('footer.address')}}</span>, {{ $t('footer.number')}}, <span itemprop="vatId">{{ $t('footer.vat')}}</span></p>
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
  height: 100px;
  background: black;
  color: #fff;
  padding: 20px;
  position: absolute;
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

@media (max-width: 320px) {
  #footer {
    display: none;
  }
}
</style>
