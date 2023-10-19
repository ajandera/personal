<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div class="container">
      <router-link to="/" class="navbar-brand">
        <span itemprop="givenName">Aleš</span> <span itemprop="familyName">Jandera</span>
      </router-link>
      <button @click="mobile()"
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
      </button>
      <div class="navbar-collapse" id="navbarSupportedContent" v-if="mobileMenu">
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/about" class="nav-link">{{ $t('menu.about')}}</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/storepredictor" class="nav-link">storePredictor</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/shopycrm" class="nav-link">shopyCRM</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/arualcms" class="nav-link">arualCMS</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/contact" class="nav-link">
                <font-awesome-icon :icon="['fas', 'envelope-open']" :alt="$t('menu.contact')" />
              </router-link>
            </li>
            <li class="nav-item">
                <a href="http://github.com/ajandera" target="_blank" title="Github" class="black nav-link" itemprop="contactPoint">
                  <font-awesome-icon :icon="['fab', 'github']" /></a>
            </li>
            <li class="nav-item" v-if="languages.length > 1" v-for="(lang, index) in languages" v-bind:key="'l'+index">
              <div href="#"
                    v-if="isMobile()"
                    class="nav-link"
                    @click="$emit('set-language', lang)"
                    v-bind:class="{'language': lang !== language, 'language active': lang === language}"
                    v-bind:key="index">
                {{ lang }}
              </div>
            </li>
          </ul>
          <!--<form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>-->
      </div>
      <div v-bind:class="{'d-flex': !isMobile,  'd-none': isMobile()}">
        <ul class="navbar-nav d-flex">
            <li class="nav-item" v-if="languages.length > 1" v-for="(lang, index) in languages" v-bind:key="'l'+index">
                <div href="#"
                  class="nav-link"
                  @click="$emit('set-language', lang)"
                  v-bind:class="{'language': lang !== language, 'language active': lang === language}"
                  v-bind:key="index">
                  {{ lang }}
                </div>
              </li>
          </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">

import {Component, Prop, Vue, Watch} from 'nuxt-property-decorator';

@Component
export default class Nav extends Vue {
    @Prop() readonly language!: string;
    @Prop() readonly languages!: string[];

    menu: boolean = false;
    mobileMenu: boolean = !this.isMobile();
    $t: any;

    dropdown() {
      this.menu = !this.menu;
    }

    mobile() {
      this.mobileMenu = !this.mobileMenu;
    }

    isMobile() {
      if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true
      } else {
        return false
      }
    }

    @Watch('$route')
    onPropertyChanged(value: string, oldValue: string) {
      this.menu = false;
      this.mobileMenu = !this.isMobile();
    }
}
</script>

<style lang="css" scoped>
.black {
  color: #000;
}
.bg-light {
  background-color: #fff !important;
}
.dropdown-menu {
  display: block;
}
.language {
  cursor: pointer;
}
.navbar-brand {
  font-family: 'Comforter', cursive;
  font-size: 2em;
}
/* home route and active route will show in bold as it matches / and /about */
a.nuxt-link-active {
  font-weight: bold;
}
/* exact link will show the primary color for only the exact matching link */
a.nuxt-link-exact-active {
  color: #000;
}
</style>
