<template>
    <div class="col-3 sidebar d-none d-sm-block">
      <div class="row person">
        <div class="col-12">
          <!--
              PeoplePerHour Profile Widget
              The div#pph-hire me is the element
              where the iframe will be inserted.
              You may move this element wherever
              you need to display the widget
          -->
          <div id="pph-hireme"></div>
        </div>
      </div>
      <div class="row person">
        <div class="col-12">
          <iframe id="embedPlayer" src="https://embed.podcasts.apple.com/us/podcast/storepredictor/id1684803774?itsct=podcast_box_player&amp;itscg=30200&amp;ls=1&amp;theme=light" height="450px" frameborder="0" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation" allow="autoplay *; encrypted-media *; clipboard-write" style="width: 100%; max-width: 660px; overflow: hidden; border-radius: 10px; transform: translateZ(0px); animation: 2s 6 loading-indicator; background-color: rgb(228, 228, 228);"></iframe>
        </div>
      </div>
      <div class="row person">
        <div class="col-12">
          <!-- Calendly inline widget begin -->
          <div class="calendly-inline-widget" data-url="https://calendly.com/ales-6?hide_gdpr_banner=1" style="min-width:320px;height:700px;"></div>
          <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
          <!-- Calendly inline widget end -->
        </div>
      </div>
      <div v-for="post in posts" v-bind:key="post.Id" class="row article" v-on:click="goToDetail(post.Id)">
        <div class="col-12">
          <h3 class="title">{{ post.title[language] }}</h3>
          <img v-bind:src="$config.storage + post.Src" class="img" />
          <p class="desc">{{ post.excerpt[language] }}</p>
        </div>
      </div>
    </div>
</template>

<script lang="ts">

import {Component, Prop, Vue, Watch} from 'nuxt-property-decorator';
import Post from "~/model/Post";
import IResponsePosts from "~/model/IResponsePosts";
import IDictionary from "~/model/IDictionary";

@Component
export default class Sidebar extends Vue {
  @Prop() readonly language!: string;

  posts: Post[] = [];
  about: IDictionary = {};
  $axios: any;
  $t: any;

  @Watch('language', { immediate: true })
  onLanguageChange(newVal: any, oldVa: any) {
    this.$axios.get("/"+this.$config.token + "/posts")
      .then((response: IResponsePosts) => {
        if (response.data.success) {
          this.posts = response.data.posts.sort(() => 0.5 - Math.random()).slice(0, 10);
          this.posts.map(item => {
            item.excerpt = JSON.parse(item.Excerpt),
            item.title = JSON.parse(item.Title),
            item.Src = response.data.files.filter((f) => f.Id === item.File)[0]?.Src
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
<sctipt lang="js">
  (function(d, s) {
    var useSSL = 'https:' == document.location.protocol;
    var js, where = d.getElementsByTagName(s)[0],
    js = d.createElement(s);
    js.src = (useSSL ? 'https:' : 'http:') +  '//www.peopleperhour.com/hire/43573616/10356450.js?width=245&height=170&orientation=vertical&theme=light&rnd='+parseInt(Math.random()*10000, 10);
    try { where.parentNode.insertBefore(js, where); } catch (e) { if (typeof console !== 'undefined' && console.log && e.stack) { console.log(e.stack); } }
}(document, 'script'));
</sctipt>

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
.person .img {
  width: 150px;
  height: auto;
  float: left;
  margin-right: 10px;
  margin-bottom: 5px;
}
.person .desc {
  text-align: justify;
  font-size: 12px;
  font-weight: 400;
  border-bottom: 2px solid #000000;
  padding-bottom: 10px;
}
</style>
