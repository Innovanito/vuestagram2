<template>
  <div :class="`filter-item ${필터}`" :style="`background-image : url(${이미지})`">
    {{ 필터 }}
    <button @click="fire"> 버튼</button>
  </div>
</template>

<script>
export default {
 props: {
   이미지 : String,
   필터 : String
 },
 methods: {
   fire() {
     this.emitter.emit('sendFilter', this.필터)
   }
 }
}
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
  background-position: center;
}
</style>