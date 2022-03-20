<script lang="ts">
import { defineComponent } from "vue";
import downArrow from "@/assets/down-arrow.svg"
import AverageRanks from '@/components/AverageRanks.vue';
import TopRanking from '@/components/TopRanking.vue';
import StreamerVsViewers from "./StreamerVsViewers.vue";

export default defineComponent({
  name: "GameStatistics",
  components: { AverageRanks, TopRanking, StreamerVsViewers },
  setup() {
    return { downArrow };
  },
});
</script>

<template>
  <div class="p-4 tablet:p-10 w-full h-full" id="GameStatistics">
    <div class="w-full h-full bg-darkC border-2 border-darkBorder rounded-2xl">
      <div class="relative flex-shrink-0 bg-darkB w-full text-10px border-b-2 border-darkBorder tablet:text-14px h-5 tablet:h-11 block rounded-t-2xl">
          <p class="text-white absolute top-1/2 transform -translate-y-1/2 left-1/2 -translate-x-1/2 font-maven-bold text-10px tablet:text-20px">Game statistics</p>
      </div>
      <div class="p-5 h-5/6 w-full">
        <div class="flex justify-between">
          <div class="rounded-2xl relative w-40 tablet:w-60 h-7 tablet:h-9 bg-darkC border-2 border-darkBorder" id="choiceGame">
            <p class="text-white absolute top-0.5 left-3 text-12px tablet:text-16px font-maven-medium">League of Legends</p>
            <img class="w-3.5 tablet:w-5 absolute right-2 top-2" :src="downArrow" alt="">
          </div>
          <div>
            <p class="text-white text-10px tablet:text-14px font-maven-medium"><span>Viewers linked:</span><span class="text-14px tablet:text-16px"> 12 921</span></p>
          </div>
        </div>
        <div class="grid pt-2 tablet:pt-5 gap-2 tablet:gap-5 grid-cols-2 grid-rows-2 w-full h-full">
          <div class="w-full col-span-1 h-full">
            <averageRanks />
          </div>
          <div class="w-full col-span-1 h-full">
            <top-ranking />
          </div>
          <div class="w-full pt-5 col-span-2 h-full">
            <streamer-vs-viewers />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
