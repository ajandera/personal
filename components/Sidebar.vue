<template>
    <div class="col-3 sidebar">
      <div v-for="post in posts" v-bind:key="post.Id" class="row article" v-on:click="goToDetail(post.Id)">
        <div class="col-12">
          <h3 class="title">{{ post.title[language] }}</h3>
          <img v-bind:src="$config.storage + post.Src" class="img" />
          <p class="desc">{{ post.excerpt[language] }}</p>
        </div>
      </div>
      <div class="row">
        <h3>{{ $t('menu.projects')}}</h3>
        <div class="col-4 text-center mt-4 mb-4" v-for="ref in myProjects" v-bind:key="ref.Name">
          <img v-bind:src="$config.storage + ref.Src" class="img-fluid" />
        </div>
      </div>
      <div class="row">
        <h3>{{ $t('menu.customers')}}</h3>
        <div class="col-6 mt-4 mb-4" v-for="ref in references" v-bind:key="ref.Name">
            <img v-bind:src="$config.storage + ref.Src" class="img-fluid" />
        </div>
      </div>
    </div>
</template>

<script lang="ts">

import {Component, Prop, Vue, Watch} from 'nuxt-property-decorator';
import File from "~/model/File";
import Post from "~/model/Post";
import IResponsePosts from "~/model/IResponsePosts";
import IResponseFiles from '~/model/IResponseFiles';

@Component
export default class Sidebar extends Vue {
  @Prop() readonly language!: string;

  references: File[] = [];
  myProjects: File[] = [];
  posts: Post[] = [];
  $axios: any;
  $t: any;

  mounted() {
    this.$axios.get("/"+this.$config.token + "/files")
      .then((response: IResponseFiles) => {
        if (response.data.success) {
          this.references = response.data.files.filter(x => x.Gallery === 'reference').reverse();
          this.myProjects = response.data.files.filter(x => x.Gallery === 'my');
        } else {
          console.log(response.data.error);
        }
      });
  }

  @Watch('language', { immediate: true })
  onLanguageChange(newVal: any, oldVa: any) {
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
.sidebar {
  border-left: 1px solid silver;
}
.sidebar .img {
  width: 100px;
  height: auto;
  float: left;
  margin-right: 5px;
  margin-bottom: 5px;
}
.sidebar .desc {
  text-align: justify;
  font-size: 12px;
  font-weight: 400;
}
h3.title {
  font-size: 16px;
  font-weight: 500;
}
.sidebar .article {
  cursor: pointer;
}
.sidebar .article:hover {
  background: #f5f5f5;
}
</style>
