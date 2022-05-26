<template>
  <div id="nav">
<!--    <router-link to="/">Home</router-link> |-->
<!--    <router-link to="/about">About</router-link>-->
    <Scoreboard />
  </div>
  <router-view />
</template>

<script>
import Scoreboard from './components/Scoreboard.vue'

export default {
  components: {
    Scoreboard
  }
}

</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@600;700&display=swap');

:root {
  --radial: hsl(214, 47%, 23%);
  --grey: hsl(217, 16%, 45%);
  --blue: hsl(229, 64%, 46%);
  --white: #ffffff;
}

body {
  margin: 0;
  padding: 0;
  height: 100vh;
  background-color: var(--radial);
}

#app {
  font-family: 'Barlow Semi Condensed', sans-serif;
  padding-top: 5rem;
  display: flex;
  justify-content: center;
}
</style>
