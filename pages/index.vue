<template>
  <section id="blog" class="container">
    <div class="row pt-5">
      <div class="col-9">
        <div v-for="post in posts" v-bind:key="post.Id" class="row item" v-on:click="goToDetail(post.Id)">
          <div class="col-4">
            <img v-bind:src="$config.storage + post.Src" class="img-fluid" />
          </div>
          <div class="col-8">
            <h3>{{ post.title[language] }}</h3>
            <p>{{ post.excerpt[language] }}</p>
          </div>
        </div>
        <div class="clearfix"></div>
      </div>
      <Sidebar :language="language" />
    </div>
    <div class="clearfix"></div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import Post from "~/model/Post";
import IResponsePosts from "~/model/IResponsePosts";
import File from "~/model/File";

@Component
export default class IndexPage extends Vue {
  @Prop() readonly language!: string;
  @Prop() readonly images!: File[];

  posts: Post[] = [];
  $axios: any;

  mounted() {
    this.getPosts();
  }

  getPosts() {
    this.$axios.get("/"+this.$config.token + "/posts")
      .then((response: IResponsePosts) => {
        if (response.data.success) {
          this.posts = response.data.posts;
          this.posts.map(item => {
            item.excerpt = JSON.parse(item.Excerpt),
            item.title = JSON.parse(item.Title),
            item.Src = response.data.files.filter((f) => f.Id === item.File)[0].Src
          });
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
