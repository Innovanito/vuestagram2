<template>
  <div class="header">
    <ul class="header-button-left">
      <li v-if="step == 1 || step == 2" @click="step = 0">Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step == 0" @click="step = 3">팔로워 </li>
      <li v-if="step == 1" @click="step ++">Next</li>
      <li v-if="step == 2" @click="publish">발행</li>
    </ul>
    <img src="./assets/logo.png" class="logo"> 
  </div>
<!-- store에 있는 mutation함수를 사용하는 법
  <h4>안녕 {{ $store.state.name }}</h4>
  <button @click="$store.commit('이름변경')">이름변경버튼1</button>

  <h4>내 나이는 {{ $store.state.age }} 살이야</h4>
  <button @click="$store.commit('나이변경')">내년 내 나이 버튼</button> -->

  <!-- <p> {{ $store.state.more}}</p>
  <button @click="$store.dispatch('getData')">더보기버튼</button>

  <h4>{{name}}</h4> -->

  <Container @write="작성한글 = $event" :postData="postData" :step="step" :이미지="이미지" />


  <button v-if="step==0" @click="more">더보기</button>

  <div v-if="step == 0" class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" accept="image/*" type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>
</template>

<script>
import Container from './components/Container.vue'
import postData from './assets/postData'
import axios from 'axios'

export default {
  name: 'App',
  data() {
    return {
      step : 0,
      postData,
      버튼누른거 : 0,
      이미지 : '',
      작성한글: '',
      newFilter: '',
      카운터 : 0
    }
  },
  mounted() {
    this.emitter.on('sendFilter', (a) => {
      this.newFilter = a
    })
  },
  components: {
    Container
  },
  computed : {
    name() {
      return this.$store.state.name
    }
  },
  methods: {
    now() {
      return new Date()
    },

    publish() {
      var 내게시물 = {
        name: "김하경",
        userImage: "https://placeimg.com/100/100/arch",
        postImage: this.이미지,
        likes: 36,
        date: "May 15",
        liked: false,
        content: this.작성한글,
        filter: this.newFilter
      };
      this.postData.unshift(내게시물)
      this.step = 0
    },
    more() {
      axios.get(`https://codingapple1.github.io/vue/more${this.버튼누른거}.json`)
        .then((결과) => {
          console.log(결과.data)
          this.postData.push(결과.data)
          this.버튼누른거 ++
        })
    },
    upload(e) {
      var 파일 = e.target.files;
      console.log(파일)
      let url = URL.createObjectURL(파일[0])
      console.log(url)
      this.이미지 = url;
      this.step = 1;
    }
  }
}
</script>

<style>
#app {
  box-sizing: border-box;
  font-family: sans-serif;
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}

</style>
