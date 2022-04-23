import { Plant } from "../types";
import { inject, InjectionKey } from "vue";
import { samplePlants } from './samplePlants';

export const PlantServiceKey: InjectionKey<PlantService> =
  Symbol('Service');

export const injectPlantService = (): PlantService => {
  const plantService = inject(PlantServiceKey);

  if (!plantService) {
    throw new Error('Service not provided');
  }

  return plantService;
};

export class PlantService {
  private _plants: Plant[] | undefined;

  public getPlants = (): Plant[] => {
    if (!!this._plants) {
      return this._plants;
    } else {
      this._plants = samplePlants;
      return this._plants;
    }
  }
}
