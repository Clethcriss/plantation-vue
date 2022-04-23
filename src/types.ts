import { ComputedRef } from "vue";

export interface StoreActions {
  savePlant(plant: Plant): Promise<void>,
  getPlants(): Promise<Plant[]>
}

export type State = {
  plants: Plant[] | undefined;
  selectedPlant: Plant | null;
}

export interface StoreGetters {
  getSelectedPlant: ComputedRef<Plant | null>;
  getPlants: ComputedRef<Plant[] | undefined>;
}

export type Plant = {
  id: number | undefined;
  image: string;
  name: string;
  description: string;
  lastWatered: Date;
  wateringDeadline: Date;
  wateringCycle: number;
}

export type Store = {

}
