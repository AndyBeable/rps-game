<template>
  <div class="scoreboard">
    <div class="scoreboard__logo">
      <img src="../assets/logo.svg" alt="" />
    </div>
    <div class="scoreboard__score">
      <span class="score">SCORE</span>
      <span class="number">0</span>
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
  min-width: 60vw;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;

  &__score {
    background-color: var(--white);
    color: var(--blue);
    padding: 1rem 2rem;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    & .number {
      font-size: 40px;
      font-weight: 700;
      color: var(--grey);
    }
  }
}
</style>
