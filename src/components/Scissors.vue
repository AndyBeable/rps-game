<template>
  <button class="card">
    <div class="bg">
      <img src="../assets/icon-scissors.svg" alt="" />
    </div>
  </button>
</template>

<script>
export default {
  name: "Scissors",
};
</script>

<style lang="scss" scoped>
.card {
  background: var(--scissors);
  width: 17vw;
  height: 17vw;
  border-radius: 50%;
  position: relative;
  box-shadow: inset 0 -5px 3px #b9c2da;

  & .bg {
    background-color: #fff;
    width: 12vw;
    height: 12vw;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    box-shadow: inset 0px 4px 3px 0px #b9c2da;

    & img {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      height: 5vw;
    }
  }
}
</style>
