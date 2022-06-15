<template>
  <button class="card" @click="selectCard">
    <div class="bg">
      <img src="../assets/icon-rock.svg" alt="" />
    </div>
  </button>
</template>

<script>
export default {
  name: "Rock",
  methods: {
    selectCard() {
      this.$store.commit("pick", "rock");
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  background: var(--rock);
  width: 17vw;
  height: 17vw;
  border-radius: 50%;
  position: absolute;
  top: 40rem;
  left: 30rem;
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
