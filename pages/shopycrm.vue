<template>
  <section id="shopycrm" class="container">
    <div class="row pt-5">
      <div class="col-9">
        <p>{{ $t('content.shopycrm') }}</p>
        <p>{{ $t('content.shopycrm2') }}</p>
        <p>{{ $t('content.shopycrm3') }}</p>
        <div class="clearfix"></div>
      </div>
      <Sidebar :language="language" />
    </div>
    <div class="clearfix"></div>
  </section>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'nuxt-property-decorator';

@Component
export default class ShopyCRMPage extends Vue {
    @Prop() readonly language!: string;
    $t: any;
}
</script>

<style lang="css" scoped>

</style>
