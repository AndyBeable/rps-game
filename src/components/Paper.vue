<template>
  <button class="card paper" @click="selectCard">
    <div class="bg">
      <img src="../assets/icon-paper.svg" alt="" />
    </div>
  </button>
</template>

<script>
export default {
  name: "Paper",
  methods: {
    selectCard() {
      this.$store.commit("pick", "paper");
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  background: var(--paper);
  width: 17vw;
  height: 17vw;
  border-radius: 50%;
  position: relative;
  box-shadow: inset 0 -5px 3px #2944c5;

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

.paper {
}
</style>
