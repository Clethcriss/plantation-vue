import { reactive } from 'vue';
import { State } from "../types";

export const getDefaultState = (
): State => {
  return reactive<State>({
    plants: [],
    selectedPlant: null
  }) as State;
};


