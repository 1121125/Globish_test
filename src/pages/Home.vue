<template>
  <div class="home">
    <div class="container">
      <!-- <img src="../assets/homeImage.png" /> -->
      <RouterLink to="/test">
        <button>เริ่มเลย</button>
      </RouterLink>
    </div>
  </div>
</template>

<script lang="ts">
import { RouterLink } from 'vue-router';
export default {
  name: 'Home',
  components: {
    RouterLink,
  },
};
</script>

<style lang="scss">
.container {
  height: 100vh;
  max-width: 720px;
  margin: 0 auto;
  position: relative;
  background-image: url('../assets/homeImage.png');
  background-repeat: no-repeat;
  background-size: cover;
  button {
    background-color: $secondary-color;
    position: absolute;
    z-index: 10;
    left: 50%;
    top: 85%;
    transform: translate(-50%, -50%);
    width: 80%;
    padding: 5px;
    border-radius: 999px;
    font-size: 20px;
  }
}
</style>
