<template>
  <div class="post-header">
    <div class="profile" :style="{ backgroundImage :  `url(${postData.userImage})`}"></div>
    <span class="profile-name">{{postData.name}}</span>
  </div>
  <div @click="$store.commit('changeLike')" :class="`post-body ${postData.filter}`" :style="{ backgroundImage : `url(${postData.postImage})`}"></div>
  <div class="post-content">
    <p >❤️{{ $store.state.likes[postData.postNumber] }}  likes</p>
    <p><strong>{{ postData.name }}</strong> {{ postData.content }}</p>
    <p class="date">{{ postData.date }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  mounted() {
    this.$store.state.postOrder = this.postData.postNumber
  },
  props: {
    postData : Array
  }
}
</script>

<style>
.post {
  width: 100%;
}
.profile{
  background-image: url("https://placeimg.com/100/100/arch");
  width: 30px;
  height: 30px;
  background-size: 100%;
  border-radius: 50%;
  float: left;
}
.profile-name {
  display: block;
  float: left;
  padding-left: 10px;
  padding-top: 7px;
  font-size: 14px;
}
.post-header {
  height: 30px;
  padding: 10px;
}
.post-body {
  background-image: url("https://placeimg.com/640/480/animals");
  height: 450px;
  background-position: center;
  background-size: cover;
}
.post-content {
  padding-left: 15px;
  padding-right: 15px;
  font-size: 14px;
}
.date {
  font-size: 11px;
  color: grey;
  margin-top: -8px;
}
</style>