<template>
    <!-- Footer Section Start -->
    <section id="footer" class="container-fluid">
      <p>{{ year }} &copy; Aleš Jandera. All rights reserved.</p>
      <p>shopyCRM s.r.o, <span itemprop="workLocation">Komárovce 46, 044 55 Slovakia</span>, ID: 51 094 452, <span itemprop="vatId">VAT ID: SK2120594971</span></p>
      <div class="clearfix"></div>
    </section>
    <!-- Footer Section End -->
</template>

<script>

import axios from "axios";

export default {
  name: 'Footer',
  data() {
    return {
      year: new Date().getFullYear()
    }
  },
  components: {},
  mounted() {

  },
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
}
.clearfix {
  clear: both;
}
@media (min-width: 1900px) {
  section#footer {
    font-size: 1.3em;
  }
}

/*
  ##Device = Tablets, Ipads (portrait)
  ##Screen = B/w 768px to 1024px
*/

@media (min-width: 768px) and (max-width: 1025px) and (orientation: portrait) {
  section#footer {
    font-size: 1.5em;
  }
}

@media (max-width: 320px) {
  #footer {
    display: none;
  }
}
</style>
