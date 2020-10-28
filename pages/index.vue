<template>
  <div class="container">
    <div>
      <h1 class="title">My Minimal Blog</h1>
      <button @click="getPosts">Get Posts</button>
      <p>{{ posts }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

interface Post {
  id: string;
  title: string;
}

@Component
export default class Posts extends Vue {
  posts: Post[] = [];

  async getPosts() {
    const { data } = await this.$axios.get("/posts");
    this.posts = data;
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 50px;
  color: #35495e;
  letter-spacing: 1px;
}
</style>
