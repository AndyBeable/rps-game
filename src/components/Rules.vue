<template>
  <div class="rules">
    <div class="container">
      <div class="rules__header">
        <h3>RULES</h3>
        <button class="close__button">
          <img class="close__image" src="@/assets/icon-close.svg" alt="" />
        </button>
      </div>
      <img class="rules__image" src="@/assets/image-rules.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Rules",
};
</script>

<style lang="scss" scoped>
.rules {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #0000007a;
  z-index: 2;

  & .container {
    position: fixed;
    width: 30vw;
    height: 30vw;
    background-color: white;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 2vw;
    border-radius: 10px;
    z-index: 3;

    & .rules__header {
      display: flex;

      & h3 {
        font-size: 2vw;
        margin: 0 0 10px;
        color: #3b4363;
      }
    }

    & .close__button {
      margin-left: auto;
      background-color: transparent;

      & .close__image {
        height: 2vw;
      }
    }
  }

  & .rules__image {
    margin: 4vw;
    height: 20vw;
  }
}
</style>
