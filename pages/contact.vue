<template>
  <div style="height: 100%;padding:10%">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2>{{ $t('menu.contact')}}</h2>
        </div>
      </div>
      <form>
        <div class="row mt-4">
          <div class="col-12">
            <input type="text" v-model="form.name" class="form-control" id="name" v-bind:placeholder="$t('content.form.labels.name')">
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-12">
            <input type="email" v-model="form.email" class="form-control" id="email" v-bind:placeholder="$t('content.form.labels.email')">
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-12">
            <input type="text" v-model="form.phone" class="form-control" id="phone" v-bind:placeholder="$t('content.form.labels.phone')">
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-12">
            <textarea v-model="form.message" class="form-control" id="address" rows="10"></textarea>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-12 text-right">
            <div class="btn btn-lg btn-success" v-on:click="order">{{ $t('content.form.btn.submit')}}</div>
          </div>
        </div>
        <div class="row mt-4" v-if="message !== ''">
          <div class="col-12">
            <div class="alert  alert-success">{{ message }}</div>
          </div>
        </div>
      </form>
    </div>
    <div class="clearfix"></div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'nuxt-property-decorator';
import IContact from '~/model/IContact';

@Component

export default class ContactPage extends Vue {
    @Prop() readonly language!: string;

    message: string = '';
    form: IContact =  {
      name: "",
      email: "",
      message: "",
      phone: ""
    };
    $axios: any;

    order() {
      this.$axios.post("/" + this.$config.site + "/mail",
          {
            email: "ales.jandera@gmail.com",
            subject: "[ajandera.com] Dotaz ",
            body: this.form.toString()
          }
      ).then((response: any) => {
        this.form = {
          name: "",
          email: "",
          message: "",
          phone: ""
        };
        this.message = response.data.message;
      });
    }
}
</script>

<style lang="css" scoped>

</style>
