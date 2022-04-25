import { State, StoreActions } from "../../types";
import { TPlant } from "../../../../plantation-frontend/src/common/interfaces";
import { PlantService } from "../../services/PlantService";

export const createActions = (state: State, dependencies: {plantService: PlantService}): StoreActions => {
  return {
    savePlant: async (plant: TPlant): Promise<void> => dependencies.plantService.savePlant(plant),
    fetchPlants: async () => {
      const plants = await dependencies.plantService.getPlants();
      console.log('plants: ', plants);
      state.plants = plants;
    }
  }
}
