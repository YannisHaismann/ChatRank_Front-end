<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "OfferCardBasic",
  props: {  },
  components: {  },
  setup() {
    return { };
  },
});
</script>

<template>
  <div class="w-full h-fit" id="OfferCardBasic">
    <div class="bg-gradient-to-tr from-cardBlue via-cardBlue to-cardGreen text-white font-maven-medium h-38rem w-96 rounded-2xl flex flex-col relative">
      <p class="font-maven-bold text-center text-24px pt-4">Streamer basic</p>
      <img class="mx-auto" src="./../assets/streamer_basic_png.png" alt="">
      <div class="flex flex-col mt-4 gap-4">
        <div class="relative">
          <img class="absolute left-20" src="./../assets/donut_blue.png" alt="">
          <p class="text-center">Viewer statistics</p>
        </div>
        <div class="relative">
          <img class="absolute left-20" src="./../assets/donut_blue.png" alt="">
          <p class="text-center">Dashboard access</p>
        </div>
        <div class="relative">
          <img class="absolute left-20" src="./../assets/donut_blue.png" alt="">
          <p class="text-center">Personnal page</p>
        </div>
      </div>
      <div class="bg-orange rounded-3xl w-52 h-10 mx-auto text-center absolute left-1/2 transform -translate-x-1/2 bottom-6">
        <p class="text-20px mt-1">Free</p>
      </div>
    </div>
  </div>
</template>
