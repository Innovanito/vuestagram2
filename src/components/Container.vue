<template>
  <div>
    <div v-if="step == 0" class="tab-step">
      <Post  :postData="post" v-for="post  in postData" :key="post"   />
    </div>

    <div v-if="step == 1" class="tab-step">
      <div class="upload-image" :style="`background-image:url(${이미지})`"></div>
      <div class="filters">
        <div class="filter-1"></div>
        <div class="filter-1"></div>
        <div class="filter-1"></div>
        <div class="filter-1"></div>
        <div class="filter-1"></div>
      </div>
    </div>

    <div v-if="step == 2" class="tab-step">
      <div class="upload-image" :style="`background-image:url(${이미지})`"></div>
      <div class="write">
        <textarea @input="$emit('write', $event.target.value)" placeholder="write!" class="write-box"></textarea>
      </div>
    </div>
  </div>
</template>

<script>
import Post from './Post.vue'
export default {
  components: {
    Post
  },
  props: {
    postData : Array,
    step : Number,
    이미지 : String
  }

}
</script>

<style>
.upload-image{
  width: 100%;
  height: 450px;
  background: cornflowerblue;
  background-size: cover;
  opacity: 0.2;
}
.filters{
  overflow-x: scroll;
  white-space: nowrap;
}
.filter-1 {
  width: 100px;
  height: 100px;
  background-color: cornflowerblue;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
}
.filters::-webkit-scrollbar {
  height: 10px;
}
.filters::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.filters::-webkit-slider-thumb {
  background: #888;
  border-radius: 5px;
}
.filters::-webkit-slider-thumb:hover {
  background: #555;
}
.write-box {
  width: 90%;
  height: 100px;
  padding: 15px;
  margin: auto;
  display: block;
  
}
</style>