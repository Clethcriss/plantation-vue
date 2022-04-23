import { StoreActions } from "../../types";
import { TPlant } from "../../../../plantation-frontend/src/common/interfaces";
import { PlantService } from "../../services/PlantService";

export const createActions = (state: any, dependencies: {plantService: PlantService}): StoreActions => {
  return {
    savePlant: async (plant: TPlant): Promise<void> => new Promise((res) => res),
    getPlants: async (): Promise<TPlant[]> => new Promise((res) => {
      return dependencies.plantService.getPlants();
    })
  }
}
