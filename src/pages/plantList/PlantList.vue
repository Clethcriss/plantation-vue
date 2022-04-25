<template lang="pug">
h1.main-title
  | Plant List here
div(v-if='plantList.length > 0')
  plant-card(v-for='plant in plantList' :plant="plant")
div(v-else)
  span
    | There is no plant to show.
</template>

<script lang="ts">
import { ComputedRef, defineComponent } from "vue";
import { useStore } from "../../store/store";
import { Plant } from "../../types";
import PlantCard from "../../components/plantCard/plantCard.vue";

export default defineComponent({
  name: "PlantList",
  components: { PlantCard },
  setup() {
    const { getters } = useStore();
    const plantList: ComputedRef<Plant[]> = getters.getPlants;
    console.log('plantList: ', plantList);

    return {
      plantList
    }
  }
});
</script>

<style scoped>

</style>
