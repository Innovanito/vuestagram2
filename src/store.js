import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
  state () {
    return {
      name : 'kim',
      age : 20,
      likes: [32, 64, 128],
      likeToggle: [false, false, false ],
      postOrder: 0,
      more: {}
    }
  },
  mutations : {
    setMore(state, data) {
      state.more = data
    },
    이름변경(state) {
      state.name = 'park'
    },
    나이변경(state) {
      state.age ++
    },
    changeLike(state) {
      if( state.likeToggle[state.postOrder] == false) {  
        state.likes ++
        state.likeToggle[state.postOrder] = true
      } else {
        state.likes --
        state.likeToggle[state.postOrder] = false
      }
      
    }
  },
  actions: {
    getData(context) {
      axios.get(`https://codingapple1.github.io/vue/more0.json`)
        .then((a) => {
          console.log(a.data)
          context.commit('setMore', a.data)
      })
    },
  }

})

export default store