import { State, StoreGetters } from "../../types";
import { computed } from "vue";


export const createGetters = (state: State): StoreGetters => {
  const getSelectedPlant = computed(() => state.selectedPlant);

  const getPlants = computed(() => state.plants);

  return {
    getSelectedPlant,
    getPlants
  }
}
