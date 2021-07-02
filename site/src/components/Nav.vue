<template>
  <div>
    <!-- Top Navigation Menu -->
    <div class="topnav" v-if="menu === true">
      <!-- Navigation links (hidden by default) -->
      <div id="myLinks">
        <router-link to="/home">Home</router-link>
        <router-link to="/blog">Blog</router-link>
      </div>
      <!-- "Hamburger menu" / "Bar icon" to toggle the navigation links -->
    </div>
    <a href="#" class="icon" v-bind:class="{ open: menu }" v-on:click="hamburger()">
      <font-awesome-icon :icon="['fas', 'bars']" />
    </a>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      menu: false
    }
  },
  components: {},
  mounted() {},
  methods: {
    hamburger() {
      this.menu = !this.menu;
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
  left: 0;
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
  left: 20px;
  top: 20px;
  cursor: pointer;
  z-index: 999;
  color: white;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.icon.open {
  left: 200px;
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
