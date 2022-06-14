<template>
  <div class="result">
    <div class="container">
      <div class="pick playerChoice">
        <div class="result__title">YOU PICKED</div>
        <Rock v-if="$store.state.playerChoice === 'rock'" />
        <Paper v-if="$store.state.playerChoice === 'paper'" />
        <Scissors v-if="$store.state.playerChoice === 'scissors'" />
      </div>
      <div class="result__container">
        <div class="result__title">
          <span v-if="$store.state.result !== 'DRAW'">YOU</span>
          {{ $store.state.result }}
        </div>
      </div>
      <div class="pick computerChoice">
        <div class="title">THE HOUSE PICKED</div>
        <paper class="paper" v-if="$store.state.computerChoice === 'paper'" />
        <scissors class="scissors" v-if="$store.state.computerChoice === 'scissors'" />
        <rock class="rock" v-if="$store.state.computerChoice === 'rock'" />
<!--        <div class="mobile-title">THE HOUSE PICKED</div>-->
      </div>
    </div>
  </div>
</template>

<script>
import Paper from "@/components/Paper";
import Rock from "@/components/Rock";
import Scissors from "@/components/Scissors";
export default {
  name: "Result",
  components: {
    Scissors,
    Paper,
    Rock,
  },
};
</script>

<style scoped></style>
