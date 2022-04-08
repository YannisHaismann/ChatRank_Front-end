<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "OfferCardPremium",
  props: {  },
  components: {  },
  setup() {
    return { };
  },
});
</script>

<template>
    <div class="h-fit" id="OfferCardPremium">
      <div class="bg-gradient-to-tr from-cardBlue via-cardBlue to-cardGreen border-4 border-mainA text-white font-maven-medium h-27rem md:h-30rem lg:h-34rem w-80 lg:w-96 rounded-2xl flex flex-col mx-auto relative">
        <p class="font-maven-bold text-center text-20px md:text-22px lg:text-24px pt-2 md:pt-3">Streamer premium</p>
        <img class="mx-auto w-28 lg:w-40" src="./../assets/premium_img.png" alt="">
        <div class="flex flex-col mt-2 gap-3.5 lg:gap-4">
          <div class="relative">
            <img class="absolute left-16 md:left-12 lg:left-20 w-5 md:w-7 lg:w-8" src="./../assets/donut_blue.png" alt="">
            <p class="text-center text-12px md:text-16px">Viewer statistics</p>
          </div>
          <div class="relative">
            <img class="absolute left-16 md:left-12 lg:left-20 w-5 md:w-7 lg:w-8" src="./../assets/donut_blue.png" alt="">
            <p class="text-center text-12px md:text-16px">Dashboard access</p>
          </div>
          <div class="relative">
            <img class="absolute left-16 md:left-12 lg:left-20 w-5 md:w-7 lg:w-8" src="./../assets/donut_blue.png" alt="">
            <p class="text-center text-12px md:text-16px">Personnal page</p>
          </div>
          <div class="relative">
            <img class="absolute left-16 md:left-12 lg:left-20 w-5 md:w-7 lg:w-8" src="./../assets/donut_multicolor.png" alt="">
            <p class="text-center text-12px md:text-16px">Bot Access</p>
          </div>
          <div class="relative">
            <img class="absolute left-16 md:left-12 lg:left-20 w-5 md:w-7 lg:w-8" src="./../assets/donut_multicolor.png" alt="">
            <p class="text-center text-12px md:text-16px">Full Statistics</p>
          </div>
          <div class="relative">
            <img class="absolute left-16 md:left-12 lg:left-20 w-5 md:w-7 lg:w-8" src="./../assets/donut_multicolor.png" alt="">
            <p class="text-center text-12px md:text-16px">Unlock database</p>
          </div>
        </div>
        <div class="bg-gradient-to-r cursor-pointer from-cardYellow via-cardOrange to-cardPink rounded-3xl w-48 lg:w-52 h-8 md:h-10 mx-auto text-center absolute left-1/2 transform -translate-x-1/2 bottom-6">
          <p class="text-18px md:text-20px mt-0.5 md:mt-1 font-maven-bold">BUY</p>
        </div>
      </div>
    </div>
</template>
