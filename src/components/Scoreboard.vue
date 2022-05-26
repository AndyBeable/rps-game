<template>
  <div class="scoreboard">
    <div class="scoreboard__title">
      <img src="../assets/logo.svg" alt="" />
    </div>
    <div class="scoreboard__score">
      <span>SCORE</span>
      <span>0</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Scoreboard",
};
</script>

<style lang="scss" scoped>
.scoreboard {
  border: 2px var(--grey) solid;
  padding: 1rem;
  width: 50vw;
  border-radius: 5px;
  display: flex;

  & img {
    //padding: 24px 0 24px 24px;
  }
}
</style>
