<template>
    <!-- Footer Section Start -->
    <section id="footer" class="row">
      <div class="container-fluid">
        <div class="col-12">
          <p>{{ year }} &copy; Aleš Jandera. {{ $t('footer.copyright')}}.</p>
        </div>
      </div>
      <div class="clearfix"></div>
    </section>
    <!-- Footer Section End -->
</template>

<script lang="ts">

import {Component, Prop, Vue} from 'nuxt-property-decorator';

@Component
export default class Footer extends Vue {
    @Prop() readonly language!: string;
    year: number = new Date().getFullYear()
}
</script>

<style lang="css" scoped>
section#footer {
  height: 30px;
  color: #000;
  padding: 5px;
  text-align: center;
  margin-top: 50px;
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
