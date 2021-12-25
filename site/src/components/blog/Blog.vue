<template>
  <section id="blog" class="container">
    <div v-for="post in posts" v-bind:key="post.id" class="row item" v-on:click="goToDetail(post._id.$oid)">
      <div class="col-4">
        <img v-bind:src="post.src" class="img-fluid" />
      </div>
      <div class="col-8">
        <h3>{{ post.title[language] }}</h3>
        <p>{{ post.excerpt[language] }}</p>
      </div>
    </div>
  </section>
</template>

<script>

import axios from "axios";

export default {
  name: 'Blog',
  props: ['language'],
  data() {
    return {
      posts: []
    }
  },
  components: {},
  mounted() {
    this.getPosts();
  },
  methods: {
    getPosts() {
      axios.get(this.$hostname + "post")
          .then(response => {
            if (response.data.success === true) {
                this.posts.push(response.data.posts[0]);
            } else {
              console.log(response.data.error);
            }
          });
    },
    goToDetail(id) {
      this.$router.push('detail/'+id);
    }
  }
}
</script>

<style lang="css" scoped>
section {
  height: 100%;
  display:block;
}
#blog {
  padding: 5%;
  overflow: auto;
}
.item {
  cursor: pointer;
  padding: 40px 20px 20px;
  border-bottom: 1px solid silver;
}
.item:hover {
  border-bottom: 1px solid black;
  background: #e5e5e5;
}
@media print {
  * {
    font-family: "Courier New", Courier, monospace;
  }
  body {
    margin: 5px;
    padding: 5px;
  }
}
</style>
