import { ComputedRef } from "vue";

export interface StoreActions {
  savePlant(plant: Plant): Promise<void>,
  fetchPlants(): Promise<void>
}

export type State = {
  plants: Plant[];
  selectedPlant: Plant | null;
}

export interface StoreGetters {
  getSelectedPlant: ComputedRef<Plant | null>;
  getPlants: ComputedRef<Plant[]>;
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
  state: Readonly<State>;
  actions: StoreActions;
  getters: StoreGetters;
}
