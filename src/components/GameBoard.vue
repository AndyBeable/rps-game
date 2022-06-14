<template>
  <div class="container">
    <Paper />
    <Scissors />
  </div>
  <Rock class="rock" />
</template>

<script>
import Paper from "@/components/Paper.vue";
import Rock from "@/components/Rock.vue";
import Scissors from "@/components/Scissors.vue";

export default {
  name: "Board",
  components: {
    Rock,
    Paper,
    Scissors,
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: space-around;
  margin-bottom: 5rem;
}

.rock {
  display: flex;
  justify-content: center;
  margin: 0 auto;
}
</style>
