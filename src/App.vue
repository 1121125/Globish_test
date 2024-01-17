<template>
  <RouterView />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';

export default defineComponent({
  name: 'App',
  components: {
    RouterView,
  },
});
</script>

<style lang="scss">
.app {
  height: 100vh;
  max-width: 720px;
  margin: auto;
}
</style>
