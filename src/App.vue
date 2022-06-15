<template>
  <div id="app">
<!--    <Scoreboard />-->
    <router-view />
  </div>

</template>

<script>
// import Scoreboard from "./components/Scoreboard.vue";

export default {
  components: {
    // Scoreboard
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@400;600;700&display=swap");

:root {
  --grey: hsl(217, 16%, 45%);
  --blue: hsl(229, 64%, 46%);
  --white: #ffffff;

  --rock: linear-gradient(to top, hsl(349, 71%, 52%), hsl(349, 70%, 56%));
  --paper: linear-gradient(to top, hsl(230, 89%, 62%), hsl(230, 89%, 65%));
  --scissors: linear-gradient(to top, rgb(236, 159, 15), rgb(236, 170, 34));
}

body {
  margin: 0;
  padding: 0;
  height: 100vh;
  background: -webkit-radial-gradient(center top,#1f3756,#151632);
}

#app {
  font-family: "Barlow Semi Condensed", sans-serif;
  padding-top: 5rem;
  display: flex;
  justify-content: center;
}

button {
  cursor: pointer;
}
</style>
