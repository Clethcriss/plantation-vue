import { Plant } from "../types";

export const samplePlants: Plant[] = [
  {
    id: Date.now(),
    name: 'Monstrea',
    description: 'Nagyon szep, levelei hasitottak',
    image: 'monstrea.jpg',
    lastWatered: new Date('12/26/2020'),
    wateringCycle: 3,
    wateringDeadline: new Date('12/29/2020'),
  }, {
    id: Date.now() + 1,
    name: 'Futoka',
    description: 'Ez is szep, levelei futnak',
    image: 'futoka.jpg',
    lastWatered: new Date('12/27/2020'),
    wateringCycle: 4,
    wateringDeadline: new Date('12/31/2020'),
  }, {
    id: Date.now() + 2,
    name: 'Zoldike',
    description: 'Megintcsak szep, leveleinek szele vilagos',
    image: 'zoldike.jpg',
    lastWatered: new Date('12/27/2020'),
    wateringCycle: 3,
    wateringDeadline: new Date('12/30/2020'),
  }
]
