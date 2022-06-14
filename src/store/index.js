import { createStore } from "vuex";

export default createStore({
  state: {
    score: 0,
    playerChoice: "",
    computerChoice: "",
    result: "",
  },
  mutations: {
    pick(state, data) {
      this.state.playerChoice = data;
      let player = data;
      let items = ["rock", "paper", "scissors"];
      let computerChoice = items[Math.floor(Math.random() * items.length)];
      this.state.computerChoice = computerChoice;
      this.state.result = true;
      if (player === "rock") {
        if (computerChoice === "rock") {
          this.state.result = "DRAW";
        } else if (computerChoice === "scissors") {
          this.state.score += 1;
          this.state.result = "WIN";
        } else if (computerChoice === "paper") {
          this.state.score -= 1;
          this.state.result = "LOSE";
        }
      } else if (player === "paper") {
        if (computerChoice === "paper") {
          this.state.result = "DRAW";
        } else if (computerChoice === "rock") {
          this.state.score += 1;
          this.state.result = "WIN";
        } else if (computerChoice === "scissors") {
          this.state.score -= 1;
          this.state.results = "LOSE";
        }
      } else if (player === "scissors") {
        if (computerChoice === "scissors") {
          this.state.result = "DRAW";
        } else if (computerChoice === "rock") {
          this.state.score -= 1;
          this.state.result = "LOSE";
        } else if (computerChoice === "paper") {
          this.state.score += 1;
          this.state.result = "WIN";
        }
      }
    },
  },
  actions: {},
  modules: {},
});
