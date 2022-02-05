<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">Aleš Jandera</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/about" class="nav-link">{{ $t('menu.about')}}</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/podcast" class="nav-link">{{ $t('menu.podcast')}}</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/customers" class="nav-link">{{ $t('menu.customers')}}</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/contact" class="nav-link">{{ $t('menu.contact')}}</router-link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" @click="dropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                My Projects
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown" v-if="menu">
                <li><router-link to="/shopycrm" class="dropdown-item">shopyCRM</router-link></li>
                <li><router-link to="/storepredictor" class="dropdown-item">storePredictor</router-link></li>
                <li><router-link to="/arualcms" class="dropdown-item">arualCMS</router-link></li>
              </ul>
            </li>
            <li class="nav-item">
                <a href="mailto:jandera@shopycrm.com" title="Email" class="black nav-link" itemprop="email">
                  <font-awesome-icon :icon="['fas', 'envelope-open']" /></a>
              </li>
              <li class="nav-item">
                <a href="http://github.com/ajandera" target="_blank" title="Github" class="black nav-link" itemprop="contactPoint">
                  <font-awesome-icon :icon="['fab', 'github']" /></a>
              </li>
              <li class="nav-item">
                <a href="https://instagram.com/ajandera" target="_blank" title="Instagram" class="black nav-link" itemprop="contactPoint">
                  <font-awesome-icon :icon="['fab', 'instagram']" /></a>
              </li>
          </ul>
          <!--<form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>-->
      </div>
      <div class="d-flex">
        <ul class="navbar-nav d-flex">
            <li class="nav-item" v-for="(lang, index) in languages" v-bind:key="'l'+index">
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

<script>

import i18n from "@/i18n";

export default {
  name: 'App',
  props: ['languages', 'language'],
  data() {
    return {
      menu: false
    }
  },
  components: {},
  mounted() {
    i18n.locale = this.language;
  },
  methods: {
    dropdown() {
      this.menu = !this.menu;
    }
  },
  watch: {
    $route(to, from) {
      this.menu = false;
    }
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
</style>
