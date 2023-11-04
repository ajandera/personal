<template>
  <section id="sp" class="container">
    <div class="row pt-5">
      <div class="col-9">
        <p>{{ $t('content.sp') }}</p>
        <p>{{ $t('content.sp2') }}</p>
        <p>{{ $t('content.sp3') }}</p>
        <p>{{ $t('content.sp4') }}</p>
        <p>{{ $t('content.sp5') }}</p>
        <p>{{ $t('content.sp6') }}</p>
        <p>{{ $t('content.sp7') }}</p>
        <p>{{ $t('content.sp8') }}</p>
        <p>{{ $t('content.sp9') }}</p>
        <p>Visit <a href="https://storepredictor.com">storepredictor.com</a> or contact me on <a href="mailto:ales@storepredictor.com">ales@storepredictor.com</a> to know more about Pilot program.</p>
        <div class="clearfix"></div>
      </div>
      <Sidebar :language="language" />
    </div>
    <div class="clearfix"></div>
  </section>
</template>

<script lang="ts">

import {Component, Prop, Vue} from 'nuxt-property-decorator';
import IDictionary from '~/model/IDictionary';
import IResponseText from '~/model/IResponseText';

@Component
export default class StorePredictorPage extends Vue {
  @Prop() readonly language!: string;
  $t: any;
}
</script>
