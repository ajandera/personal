<template>
  <section id="content" class="container">
    <div class="row pt-5">
      <div class="col-9">
        <p>{{ $t('content.arualcms') }}</p>
        <p>{{ $t('content.arualcms2') }}</p>
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
export default class ArualCMSPage extends Vue {
  @Prop() readonly language!: string;
  $t: any;
}
</script>
