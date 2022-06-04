<template>
  <section id="blog" class="container">
    <div v-for="post in posts" v-bind:key="post.id" class="row item" v-on:click="goToDetail(post._id.$oid)">
      <div class="col-4">
        <img v-bind:src="$config.hostname + '/storage/' + post.src" class="img-fluid" />
      </div>
      <div class="col-8">
        <h3>{{ post.title[language] }}</h3>
        <p>{{ post.excerpt[language] }}</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import Post from "~/model/Post";
import IResponsePosts from "~/model/IResponsePosts";

@Component
export default class IndexPage extends Vue {
  @Prop() readonly language!: string;

  posts: Post[] = [];
  $axios: any;

  mounted() {
    this.getPosts();
  }

  getPosts() {
    this.$axios.get("/post")
      .then((response: IResponsePosts) => {
        if (response.data.success) {
          this.posts = response.data.posts;
        } else {
          console.log(response.data.error);
        }
      });
  }

  goToDetail(id: string) {
    this.$router.push('post/'+id);
  }
}
</script>

<style lang="css" scoped>
.item {
  cursor: pointer;
  padding: 40px 20px 20px;
  border-bottom: 1px solid silver;
}
.item:hover {
  border-bottom: 1px solid black;
  background: #f5f5f5;
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
