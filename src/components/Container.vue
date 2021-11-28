<template>
  <div>
    <div v-if="step == 0" class="tab-step">
      <Post  :postData="post" v-for="post  in postData" :key="post"   />
    </div>

    <div v-if="step == 1" class="tab-step">
      <div :class="`upload-image ${새필터}`" :style="`background-image:url(${이미지})`"></div>
      <div class="filters">
        <FilterBox v-for="필터 in 필터들" :key="필터" :이미지="이미지" :필터="필터"></FilterBox>
      </div>
    </div>

    <div v-if="step == 2" class="tab-step">
      <div :class="`upload-image ${새필터}`" :style="`background-image:url(${이미지})`"></div>
      <div class="write">
        <textarea @input="$emit('write', $event.target.value)" placeholder="write!" class="write-box"></textarea>
      </div>
    </div>

    <div v-if="step == 3">
      <MyPage/>
    </div>
  </div>
</template>

<script>
import Post from './Post.vue'
import FilterBox from './FilterBox.vue'
import MyPage from './MyPage.vue'

export default {
  data() {
    return {
      필터들 : [ "aden", "_1977", "brannan", "brooklyn", "clarendon", "earlybird", "gingham", "hudson", 
      "inkwell", "kelvin", "lark", "lofi", "maven", "mayfair", "moon", "nashville", "perpetua", 
      "reyes", "rise", "slumber", "stinson", "toaster", "valencia", "walden", "willow", "xpro2"],
      새필터 : '',
    }    
  },
  mounted() {
    this.emitter.on('sendFilter', (a) => {
      this.새필터 = a
    })
  },
  components: {
    Post,
    FilterBox,
    MyPage
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
.filters::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
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