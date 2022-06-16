<template>
  <div>
    <Scoreboard />
    <GameBoard v-if="this.$store.state.result.length === 0"/>
    <Result v-else />
    <Rules />
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
};
</script>

<style scoped></style>
