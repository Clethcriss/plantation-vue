import { RouteRecordRaw } from 'vue-router';
import Analytics from '../pages/home/Analytics.vue';
import PlantList from "../pages/plantList/PlantList.vue";

export const routes: Array<RouteRecordRaw> = [
    {
        name: 'Plant List',
        path: '/',
        component: PlantList
    },
    {
        name: 'Analytics',
        path: '/analytics',
        component: Analytics
    }
];
