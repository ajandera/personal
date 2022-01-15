<template>
  <div>
    <!-- Top Navigation Menu -->
    <div class="topnav" v-if="menu === true">
      <!-- Navigation links (hidden by default) -->
      <div id="myLinks">
        <router-link to="/">{{ $t('menu.home')}}</router-link>
        <router-link to="/about">{{ $t('menu.about')}}</router-link>
        <router-link to="/shopycrm">shopyCRM</router-link>
        <router-link to="/storepredictor">storePredictor</router-link>
        <router-link to="/arualcms">arualCMS</router-link>
        <router-link to="/podcast">{{ $t('menu.podcast')}}</router-link>
        <router-link to="/customers">{{ $t('menu.customers')}}</router-link>
        <router-link to="/contact">{{ $t('menu.contact')}}</router-link>
        <hr>
        <ul class="social">
          <li>
            <a href="mailto:jandera@shopycrm.com" title="Email" class="black" itemprop="email">
              <font-awesome-icon :icon="['fas', 'envelope-open']" /></a>
          </li>
          <li>
            <a href="http://github.com/ajandera" target="_blank" title="Github" class="black" itemprop="contactPoint">
              <font-awesome-icon :icon="['fab', 'github']" /></a>
          </li>
          <li>
            <a href="https://instagram.com/ajandera" target="_blank" title="Instagram" class="black" itemprop="contactPoint">
              <font-awesome-icon :icon="['fab', 'instagram']" /></a>
          </li>
        </ul>
      </div>
    </div>
    <div class="icon" v-bind:class="{ open: menu }" v-on:click="hamburger()">
      <font-awesome-icon :icon="['fas', 'bars']" />
    </div>
    <div class="languageWrapper" v-bind:class="{ open: menu }">
      <div href="#"
         class="icon-lang"
         v-for="(lang, index) in languages"
         @click="$emit('set-language', lang)"
         v-bind:class="{'language': lang !== language, 'language active': lang === language}"
         v-bind:key="index">
        {{ lang }}
      </div>
    </div>
  </div>
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
    hamburger() {
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
/* Style the navigation menu */
.topnav {
  overflow: hidden;
  background-color: #333;
  position: fixed;
  top: 0;
  right: 0;
  width: 200px;
  z-index: 999;
  height: 100%;
}

/* Style navigation menu links */
.topnav a {
  color: white;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  display: block;
}

/* Style the hamburger menu */
.icon {
  background: black;
  display: block;
  position: fixed;
  right: 30px;
  top: 20px;
  cursor: pointer;
  z-index: 999;
  color: white;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}
.languageWrapper {
  top: 20px;
  position: fixed;
  right: 80px;
  z-index: 999;
}
.icon-lang {
  background: black;
  display: block;
  cursor: pointer;
  z-index: 999;
  color: white;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  float: left;
}

.icon.open {
  right: 200px;
}
.languageWrapper.open {
  right: 250px;
}

/* Add a grey background color on mouse-over */
.topnav a:hover {
  background-color: #ddd;
  color: black;
}

/* Style the active link (or home/logo) */
.active {
  background-color: #4CAF50;
  color: white;
}
.social {
  list-style: none;
}
.social li {
  display: inline-block;
}
</style>
