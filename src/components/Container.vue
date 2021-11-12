<template>
  <div>
    <Post :postData="post" v-for="post  in postData" :key="post"   />
    <!-- <Post :postData="postData[0]" /> -->
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