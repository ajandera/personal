<template>
  <section id="content" class="container">
    <div class="row pt-5">
        <div class="col-9 mt-4">
          <div class="row">
            <div class="col-12 col-sm-6">
              <p>Zimna 15, 04001 Kosice, Slovakia</p>
              <p>+421 904 750 220</p>
              <p><a href="mailto:ales.jandera@gmail.com">ales.jandera@gmail.com</a></p>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2631.8181780169184!2d21.244430776825364!3d48.72806580986863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ee05e6a21f7a7%3A0xe0d8fec801aef4bf!2zWmltbsOhIDExNDkvMTUsIDA0MCAwMSBLb8WhaWNl!5e0!3m2!1ssk!2ssk!4v1693254796485!5m2!1ssk!2ssk" width="450" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div class="col-12 col-sm-6">
              <h2>{{ $t('menu.contact')}}</h2>
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
            </div>
          </div>
        </div>
        <Sidebar :language="language" />
      </div>
    <div class="clearfix"></div>
  </section>
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
    $t: any;

    order() {
      this.$axios.post("/" + this.$config.token + "/mail",
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
