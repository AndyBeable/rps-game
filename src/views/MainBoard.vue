<template>
  <div>
    <Scoreboard />
    <GameBoard v-if="this.$store.state.result.length === 0"/>
    <Result v-else />
    <button class="rules__button" @click="showRules = true">RULES</button>
    <Rules v-if="showRules" @showRules="showRules = false" :show-rules="showRules"/>
  </div>
</template>

<script>
import Scoreboard from "@/components/Scoreboard";
import GameBoard from "@/components/GameBoard";
import Result from "@/components/Result";
import Rules from "@/components/Rules";

export default {
  name: "Board",
  components: {
    Result,
    GameBoard,
    Scoreboard,
    Rules
  },
  data() {
    return {
      showRules: false
    }
  }
};
</script>

<style lang="scss" scoped>
.rules-button {
  position: absolute;
  right: 3vw;
  bottom: 3vw;
  border: 1px solid #fff;
  padding: 10px 29px 14px;
  color: white;
  border-radius: 7px;
  font-weight: 400;
  font-size: 18px;
  background: none;
}

</style>
