<template>
  <div>
    <Scoreboard />
    <GameBoard v-if="this.$store.state.result.length == 0"/>
    <Result v-else />
  </div>
</template>

<script>
import Scoreboard from "@/components/Scoreboard";
import GameBoard from "@/components/GameBoard";
import Result from "@/components/Result";

export default {
  name: "Board",
  components: {
    Result,
    GameBoard,
    Scoreboard,
  },
};
</script>

<style scoped></style>
