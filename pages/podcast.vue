<template>
  <section class="mt-5">
    <div class="container">
      <div class="row align-items-center">
        <h3>UnderTheLid</h3>
        
      </div>
    </div>
    <div class="clearfix"></div>
  </section>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'nuxt-property-decorator';

@Component
export default class PodcastPage extends Vue {
  @Prop() readonly language!: string;

  $axios: any;
  $t: any;
  $config: any;

  mounted() {
    
  }
}
</script>

<style lang="css" scoped>

</style>
