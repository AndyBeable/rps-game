import { createStore } from "vuex";

export default createStore({
  state: {
    score: 0,
    playerChoice: "",
    computerChoice: "",
  },
  mutations: {
    increase(state) {
      state.score++
    }
  },
  actions: {},
  modules: {},
});
