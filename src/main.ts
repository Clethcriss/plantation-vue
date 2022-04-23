import { createApp } from 'vue';
import { routes } from './router/router';
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router';
import { createStore } from "./store/store";
import { PlantService, PlantServiceKey } from "./services/PlantService";


declare global {
  interface Window {
    e: any;
  }
}



(async () => {
  const app = createApp(App);
  const plantService = new PlantService();
  return app
    .provide(PlantServiceKey, plantService)
    .use(createStore({plantService}))
      .use(
          createRouter({
            history: createWebHashHistory(),
            routes
          })
      )
      .mount('#app');
})();
