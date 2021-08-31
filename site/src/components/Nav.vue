<template>
  <div>
    <!-- Top Navigation Menu -->
    <div class="topnav" v-if="menu === true">
      <!-- Navigation links (hidden by default) -->
      <div id="myLinks">
        <router-link to="/home">{{ $t('menu.home')}}</router-link>
        <router-link to="/blog">{{ $t('menu.blog')}}</router-link>
      </div>
      <!-- "Hamburger menu" / "Bar icon" to toggle the navigation links -->
    </div>
    <div class="icon" v-bind:class="{ open: menu }" v-on:click="hamburger()">
      <font-awesome-icon :icon="['fas', 'bars']" />
    </div>
    <div class="languageWrapper" v-bind:class="{ open: menu }">
      <div href="#"
         class="icon-lang"
         v-on:click="setLanguage(lang)"
         v-for="(lang, index) in languages"
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
  data() {
    return {
      menu: false,
      language: window.localStorage.getItem("language"),
      languages: window.localStorage.getItem("languages").split(',')
    }
  },
  components: {},
  mounted() {
    i18n.locale = this.language;
  },
  methods: {
    hamburger() {
      this.menu = !this.menu;
    },
    setLanguage(lang) {
      this.language = lang;
      i18n.locale = lang;
      window.localStorage.setItem('language', this.language);
      window.dispatchEvent(new CustomEvent('language-localstorage-changed', {
        detail: {
          storage: this.language
        }
      }));
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
</style>
