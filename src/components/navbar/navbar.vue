<template lang="pug">
div#navbar-container
  div.nav-item(@click='navigateToSection("Plant List")')
    p
      | Plants
  div.nav-item(@click='navigateToSection("Analytics")')
    p
      | Analytics
  div.nav-item
    p
      | add plant
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent( {
  name: 'Navbar',
  setup() {
    const {push: routerPush} = useRouter();
    const navigateToSection = (route: string): void  => {
      routerPush({name: route});
    }
    return {
      navigateToSection
    }
  }
});
</script>

<style scoped>
  @import
  './navbar.css';
</style>
