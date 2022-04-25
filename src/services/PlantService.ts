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
  private _plants: Plant[] = [];

  public getPlants = (): Promise<Plant[]> => {
    if (!!this._plants && this._plants.length !== 0) {
      return new Promise<Plant[]>(resolve => resolve(this._plants));
    } else {
      console.log("here");
      this._plants = samplePlants;
      return new Promise<Plant[]>(resolve => resolve(this._plants));
    }
  }

  // TODO: connect to back end.
  public savePlant = (plant: Plant): Promise<void> => {
    if (!!this._plants) {
      this._plants.push(plant);
    }
    return new Promise<void>(resolve => resolve());
  }
}
