<template lang="pug">
Navbar
div
  router-view
</template>

<script lang="ts">
import Navbar from './components/navbar/navbar.vue';
export default {
  components: { Navbar }
}
</script>

<style>
  .main-title {
    padding-left: 10px;
  }
</style>
