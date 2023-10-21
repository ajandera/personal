<template>
  <section class="mt-5">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-4 text-center mt-4 mb-4" v-for="(ref, index) in myProjects" :key="ref.Name">
          <a :href="links[index]">
            <img :src="$config.storage + ref.Src" class="img-fluid" />
          </a>
        </div>
      </div>
      <div class="row">
        <div class="col-9">
          <div v-html="about[language]"></div>
          <h3 class="mt-5">{{ $t('sidebar.customers')}}</h3>
          <div class="row align-items-center">
            <div class="col-3 mt-4 mb-4" v-for="ref in references" :key="ref.Name">
                <img :src="$config.storage + ref.Src" class="img-fluid" />
            </div>
          </div>
          <div class="clearfix"></div>
        </div>
        <Sidebar :language="language" />
      </div>
    </div>
    <div class="clearfix"></div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import Post from "~/model/Post";
import IResponseText from '~/model/IResponseText';
import IDictionary from '~/model/IDictionary';
import IResponseFiles from '~/model/IResponseFiles';
import File from "~/model/File";
import IResponsePosts from '~/model/IResponsePosts';

@Component
export default class IndexPage extends Vue {
  @Prop() readonly language!: string;

  posts: Post[] = [];
  $axios: any;
  $t: any;
  about: IDictionary = {};
  main: string = '';
  $config: any;
  references: File[] = [];
  myProjects: File[] = [];
  links: string[] = [
    "https://storepredictor.com",
    "https://shopycrm.com",
    "https://github.com/ajandera/arualcms"
  ];

  mounted() {
    //this.getPosts();
    this.texts();
    this.$axios.get("/"+this.$config.token + "/files")
      .then((response: IResponseFiles) => {
        if (response.data.success) {
          this.references = response.data.files.filter(x => x.Gallery === 'reference').reverse();
          this.myProjects = response.data.files.filter(x => x.Gallery === 'my').reverse();
        } else {
          console.log(response.data.error);
        }
      });
  }

  texts() {
    this.$axios.get("/"+this.$config.token + "/text/about")
        .then((response: IResponseText) => {
          if (response.data.success) {
            this.about = JSON.parse(response.data.text.Value);
          } else {
            console.log(response.data.error);
          }
        });
  }

  getPosts() {
    this.$axios.get("/"+this.$config.token + "/posts")
      .then((response: IResponsePosts) => {
        if (response.data.success) {
          this.posts = response.data.posts.sort((a,b) => {
            // Turn your strings into dates, and then subtract them
            // to get a value that is either negative, positive, or zero.
            return (new Date(b.Published)).getTime() - (new Date(a.Published)).getTime();
          });
          this.posts.map(item => {
            item.excerpt = JSON.parse(item.Excerpt),
            item.title = JSON.parse(item.Title),
            item.Src = response.data.files.filter((f) => f.Id === item.File)[0]?.Src,
            item.Published = (new Date(item.Published)).toLocaleDateString()
          });
          console.log(this.posts);
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