<template>
  <div>
    <Post :postData="post" v-for="post  in postData" :key="post"   />
  </div>
</template>

<script>
import Post from './Post.vue'
export default {
  components: {
    Post
  },
  props: {
    postData : Array
  }

}
</script>

<style>

</style>