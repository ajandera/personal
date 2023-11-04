<template>
  <section class="mt-5">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-4 text-center mt-4 mb-4" v-for="(ref, index) in links" :key="index">
          <a :href="ref">
            <img :src="images[index]" class="img-fluid" />
          </a>
        </div>
      </div>
      <div class="row">
        <div class="col-9">
          <p>{{ $t('content.homepage') }}</p>
          <p>{{ $t('content.homepage2') }}</p>
          <p>{{ $t('content.homepage3') }}</p>
          <p>{{ $t('content.homepage4') }}</p>
          <h3 class="mt-5">{{ $t('sidebar.customers')}}</h3>
          <div class="row align-items-center">
            <div class="col-3 mt-4 mb-4" v-for="(ref, index) in references" :key="index">
                <img :src="ref" class="img-fluid" />
            </div>
          </div>
          <div class="clearfix"></div>
        </div>
        <Sidebar :language="language" />
      </div>
    </div>
    <div class="clearfix"></div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component
export default class IndexPage extends Vue {
  @Prop() readonly language!: string;

  $axios: any;
  $t: any;
  references: string[] = [
    "/customers/asseco_centraleurope_logo.svg",
    "/customers/bookingforce-01-copy.png",
    "/customers/headwork.png",
    "/customers/hhp_logo.png",
    "/customers/logo-cz-2.png",
    "/customers/logo-site-white-header-animated-med.22180f8ca16ad33fd51a4b8f78d4120d.gif",
    "/customers/PwC-logo.svg",
    "/customers/vivantis.cz.cachedbbf84b0b4dbe8aae4861cc1aec7c9b58040fb0f0e.svg"
  ];
  links: string[] = [
    "https://storepredictor.com",
    "https://shopycrm.com",
    "https://github.com/ajandera/arualcms"
  ];
  images: string[] = [
    "storePredictor_logo.jpg",
    "shopycrm-logo.png",
    "arualcms-logo.png"
  ];
}
</script>

<style lang="css" scoped>
.item {
  cursor: pointer;
  padding: 40px 20px 20px;
  border-bottom: 1px solid silver;
}
.item:hover {
  border-bottom: 1px solid black;
  background: #f5f5f5;
}
@media print {
  * {
    font-family: "Courier New", Courier, monospace;
  }
  body {
    margin: 5px;
    padding: 5px;
  }
}
</style>