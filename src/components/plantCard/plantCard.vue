<template lang="pug">
div.card-container
  div.plant-image-container
    img.plant-image(:src='`src/assets/plantImages/${image}`')
  div.plant-data
    h2.plant-name
      | {{ name }}
    p
      | {{ `Watering Cycle: ${wateringCycle} day${wateringCycle > 1 ? 's' : ''}` }}
    p
      | {{ `Last watered: ${lastWatered.getMonth() + 1}/${lastWatered.getDate()}/${lastWatered.getFullYear()}` }}
    p
      | {{ `Deadline: ${wateringDeadline.getMonth() + 1}/${wateringDeadline.getDate()}/${wateringDeadline.getFullYear()}` }}
  div.card-tap-catcher(@click='oneClick' :data-id='id')
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Plant } from "../../types";

export default defineComponent({
  name: "plantCard",
  props: {
    plant: {
      type: Object as PropType<Plant>,
      default: null
    }
  },
  setup(props) {
    const { name, wateringCycle, wateringDeadline, lastWatered, image, id }  = props.plant;
    const doubleClickHandler = (e: any) => {
      const plantId = e.target.getAttribute('data-id');
      console.log('plantId: ', plantId);
    }
    const delay = 700;
    let clicks = 0;
    let timer: any = null;

    const oneClick = (e: Event) => {
      clicks++
      if(clicks === 1) {
        timer = setTimeout(() => {
          clicks = 0;
        }, delay);
      } else {
        clearTimeout(timer);
        clicks = 0;
        doubleClickHandler(e);
      }
    }

    return {
      name,
      wateringDeadline,
      wateringCycle,
      lastWatered,
      image,
      oneClick,
      id
    }
  }
});
</script>

<style scoped>
@import
'./plantCard.css';
</style>
