<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeOffers",
  props: {  },
  components: {  },
  setup() {
    return { };
  },
});
</script>

<template>
  <div class="w-full h-fit" id="HomeOffers">
    <div class="bg-red-500 text-white font-maven-medium h-30rem w-96 rounded-2xl">
      <p class="font-maven-bold text-center text-24px pt-4">Streamer basic</p>
      <img class="m-auto" src="./../assets/streamer_basic_png.png" alt="">
      <p class="flex gap-4">
        <img src="./../assets/donut_blue.png" alt="">
        <span>Viewer statistics</span>
      </p>
      <p>
        <img src="./../assets/donut_blue.png" alt="">
        <span>Dashboard access</span>
      </p>
      <p>
        <img src="./../assets/donut_blue.png" alt="">
        <span>Personnal page</span>
      </p>
    </div>
  </div>
</template>
