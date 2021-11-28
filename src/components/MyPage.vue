<template>
  <div style="padding:10px;">    
    <h4>팔로워</h4>
    <input placeholder="Search"/>
    <div class="post-header" v-for="oneFollower in follower" :key="oneFollower">
      <div class="profile" :style="`background-image:url(${oneFollower.image})`"></div>
      <span class="profile-name">{{oneFollower.name}}</span>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import axios from 'axios'

export default {
  setup() {
    let follower = ref([]);

    onMounted(()=> {
      axios.get('/follower.json').then((a)=> {
        follower.value = a.data
      })
    })

    

    return {follower}
  },
}
</script>

<style>

</style>