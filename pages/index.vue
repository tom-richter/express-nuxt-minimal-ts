<template>
  <div class="container">
    <div v-if="$fetchState.pending">Loading...</div>
    <div v-else-if="$fetchState.error">
      <p>Error while fetching foods: {{ $fetchState.error.message }}</p>
    </div>
    <div v-else>
      <h1 class="title">My Minimal Blog</h1>
      {{ posts }}
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import PostService from './../services/PostService'

interface Post {
  id: string
  title: string
}

@Component
export default class Posts extends Vue {
  posts: Post[] = []

  fetch() {
    return Promise.all([
      PostService.getPosts()
        .then((posts) => {
          this.posts = posts
        })
        .catch((error) => console.log(error))
    ])
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
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 50px;
  color: #35495e;
  letter-spacing: 1px;
}
</style>
