<template>
  <div>
    <section id="blog" class="container">
      <div class="row item">
        <div class="col-12" v-if="post">
          <NuxtLink to="/"><font-awesome-icon :icon="['fas', 'arrow-left']"></font-awesome-icon> {{ $t('back')}}</NuxtLink>
          <hr>
          <h3>{{ post.title[language] }}</h3>
          <p>{{ post.excerpt[language] }}</p>
          <hr>
          <img v-bind:src="post.Src" class="image" />
          <div v-html="post.body[language]"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'nuxt-property-decorator';
import IResponsePosts from '~/model/IResponsePosts';
import Post from "~/model/Post";
import IResponseFiles from "~/model/IResponseFiles";

@Component

export default class DetailPage extends Vue {
  @Prop() readonly language!: string;

  post: Post = {
    Src: "",
    body: {},
    title: [],
    excerpt: [],
    Title: '',
    Excerpt: '',
    Id: '',
    File: '',
    Body: ''
  };
  $axios: any;

  mounted() {
    this.getPost();
  }

  getPost() {
    this.$axios.get("/"+this.$config.site + "/posts/"+ this.$route.params.id)
      .then((response: IResponsePosts) => {
        if (response.data.success) {
          this.$axios.get("/"+this.$config.site + "/files/"+response.data.post.File)
            .then((file: IResponseFiles) => {
              if (file.data.success) {
                this.post = response.data.post;
                this.post.excerpt = JSON.parse(this.post.Excerpt);
                this.post.title = JSON.parse(this.post.Title);
                this.post.body = JSON.parse(this.post.Body);
                console.log(this.$config.storage + file.data.file.Src);
                this.post.Src = this.$config.storage + file.data.file.Src;
              } else {
                console.log(response.data.error);
              }
            });
        } else {
          console.log(response.data.error);
        }
      });
  }

}
</script>

<style lang="css" scoped>
.image {
  width: 30%;
  height: auto;
  float: left;
  margin-right: 30px;
  margin-bottom: 30px;
}
h1 {
  font-size: 3em;
}
h2 {
  text-align: right;
  font-size: 1em;
}
h3 {
  margin-bottom: 20px;
}
a {
  color: green;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
section {
  height: 100%;
  display: block;
}
section#customers ul {
  margin-top: 50px;
}
section#customers ul li {
  font-size: 2em;
  line-height: 2;
}
ul {
  list-style: none;
}
ul.actions li {
  display: inline-block;
  padding: 5px;
}
.container {
  max-width: 1920px;
  margin: 0 auto;
}
.reference img {
  max-width: 100%;
  vertical-align: middle;
  height: 50px;
}
#blog {
  padding: 5%;
}
.blogItem img {
  max-width: 100%;
}
/*
  ##Device = Tablets, Ipads (portrait)
  ##Screen = B/w 768px to 1024px
*/
@media (min-width: 1900px) {
  h1 {
    font-size: 4em;
  }
  h2 {
    text-align: right;
    font-size: 2em;
  }
}

@media (min-width: 768px) and (max-width: 1025px) {
  section#customers ul li {
    font-size: 1.5em;
    line-height: 2;
  }
}

/*
  ##Device = Tablets, Ipads (portrait)
  ##Screen = B/w 768px to 1024px
*/

@media (min-width: 768px) and (max-width: 1025px) and (orientation: portrait) {

}

/*
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
*/

@media (min-width: 481px) and (max-width: 767px) {

}

/*
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

@media (min-width: 320px) and (max-width: 480px) {
  section#customers ul li {
    font-size: 1.2em;
  }
  h1 {
    font-size: 2.2em;
  }
  h2 {
    font-size: 0.8em;
  }
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
