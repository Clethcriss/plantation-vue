import { App, inject, InjectionKey, readonly } from 'vue';
import { State, Store } from '../types';
import { createActions } from './actions/actions';
import { createGetters } from './getters/getters';
import { getDefaultState } from './state';
import { PlantService } from "../services/PlantService";

const StoreKey: InjectionKey<Store> = Symbol('Store');

export const useStore = (): Store => {
  const store = inject(StoreKey);

  if (!store) {
    throw new Error('Store not provided');
  }

  return store;
};

export const createStore = (dependencies: {plantService: PlantService}): {
  install(app: App): void;
} => {
  const state: State = getDefaultState();

  const store = {
    state: readonly(state),
    actions: createActions(state, dependencies),
    getters: createGetters(state)
  };

  return {
    install: (app: App) => {
      app.provide(StoreKey, store);
    }
  };
};
