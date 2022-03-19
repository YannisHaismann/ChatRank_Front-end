<script lang="ts">
import { defineComponent } from "vue";
import Champion from '@/components/LOL/Champion.vue';
import ViewerWinPercentage from '@/components/ViewerWinPercentage.vue';
import Line from '@/components/LOL/Line.vue';
import downArrow from '@/assets/down-arrow.svg'

export default defineComponent({
  name: "GameInfos",
  components:{
    Champion,
    ViewerWinPercentage,
    Line,
  },
  props: {
  },
  setup(props) {

    return { props, downArrow };
  },
});
</script>

<template>
  <div id="GameInfos" class="w-full relative flex">
    <div class="absolute right-0 h-0.5 tablet:h-1 rounded-2xl bg-darkBorder w-1/2 veryLargeScreen:w-4/6 left-1/2 transform -translate-x-1/2"></div>
    <p class="text-secondText font-maven-medium text-8px tablet:text-14px text-center absolute -top-1.5 tablet:-top-2 w-1/6">Game Infos</p>
      <div class="absolute w-40 lg:w-72 -top-3 right-0">           
        <div class="w-2/3 relative bg-darkC top-1 tablet:top-0 mx-auto h-5 tablet:h-7 rounded-2xl border-2 border-darkBorder">                                                                                                                                                                     
          <p class="text-white font-maven-medium text-7px tablet:text-12px absolute left-2 top-0.5">League of Legends</p>
          <img class="absolute right-2 w-3 tablet:w-4 top-1 tablet:top-2" :src="downArrow" />
        </div>
      </div>
    <div class="flex flex-col flex-wrap tablet:h-80 p-4 tablet:p-8 tablet:gap-2">
      <div class="col-span-1 text-white w-40 largeScreen:w-48 font-maven-medium">
        <p class="text-6px tablet:text-10px largeScreen:text-12px">Pseudo in game</p>
        <p class="-mt-1 tablet:-mt-2 text-8px tablet:text-base largeScreen:text-lg">Marvin McKinney_23</p>
      </div>
      <div class="flex">
        <div class="col-span-1 text-white w-20 tablet:w-32 largeScreen:w-40 font-maven-medium mx-auto">
          <p class="text-6px tablet:text-10px largeScreen:text-12px">Season</p>
          <p class="-mt-1 tablet:-mt-2 text-8px tablet:text-base largeScreen:text-lg">2022</p>
        </div>
        <div class="text-white w-20 tablet:w-32 largeScreen:w-40 font-maven-medium mx-auto">
          <p class="text-6px tablet:text-10px largeScreen:text-12px">Level</p>
          <p class="-mt-1 tablet:-mt-2 text-8px tablet:text-base largeScreen:text-lg">222</p>
        </div>
      </div>
      <div class="flex">
        <div class="text-white w-20 tablet:w-32 largeScreen:w-40 font-maven-medium mx-auto">
          <p class="text-6px tablet:text-10px largeScreen:text-12px">Ranked solo</p>
          <p class="-mt-1 tablet:-mt-2 text-8px tablet:text-base largeScreen:text-lg">Gold III</p>
          <!-- <img class="hidden 2largeScreen:block" src="./../assets/Emblem_Gold_1.png" alt=""> -->
        </div>
        <div class="text-white w-20 tablet:w-32 largeScreen:w-40 font-maven-medium mx-auto">
          <p class="text-6px tablet:text-10px largeScreen:text-12px">Ranked flex</p>
          <p class="-mt-1 tablet:-mt-2 text-8px tablet:text-base largeScreen:text-lg">Unnranked</p>
        </div>
      </div>
      <div class="text-white font-maven-medium">
        <p class="text-6px tablet:text-10px largeScreen:text-12px">Most played lanes</p>
        <div class="flex gap-3">
          <Line percentagePlayed="22" WinRatePercentage="44" img="Top_icon_1.png" />
          <Line percentagePlayed="55" WinRatePercentage="60" img="Middle_icon_1.png" />
        </div>
      </div>
      <div class="text-white flex flex-col gap-3 w-40 largeScreen:w-48 font-maven-medium">
        <p class="text-6px tablet:text-10px largeScreen:text-12px">Most played champions</p>
        <champion name="Cassiopeia" img="Cassiopeia.png" win=44 loose=33 />
        <champion name="Gragas" img="Gragas.png" win=5 loose=12 />
        <champion name="Ahri" img="Ahri.png" win=1 loose=2 />
      </div>
      <viewerWinPercentage win=43 loose=22 />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
