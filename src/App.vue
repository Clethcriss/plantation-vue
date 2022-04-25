<template lang="pug">
Navbar
div
  router-view
</template>

<script lang="ts">
import Navbar from './components/navbar/navbar.vue';
import { useStore } from './store/store';
export default {
  components: { Navbar },
  setup() {
    const { actions } = useStore();
    actions.fetchPlants();
  }
}
</script>

<style>
  .main-title {
    padding-left: 10px;
  }
</style>
