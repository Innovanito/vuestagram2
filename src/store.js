import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      name : 'kim',
      age : 20,
      likes: [32, 64, 128],
      likeToggle: [false, false, false ],
      postOrder: 0,
    }
  },
  mutations : {
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
  }
})

export default store