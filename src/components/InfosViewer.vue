<script lang="ts">
import { defineComponent } from "vue";
import Champion from '@/components/LOL/Champion.vue';

export default defineComponent({
  name: "InfosViewer",
  components: { Champion },
  setup() {
    return { };
  },
});
</script>

<template>
  <div class="h-full" id="InfosViewer">
    <div class="w-full flex gap-6 flex-col h-full bg-darkC border-2 border-darkBorder rounded-2xl">
      <div class="relative bg-darkB w-full text-10px border-b-2 border-darkBorder tablet:text-14px h-5 tablet:h-11 block rounded-t-2xl">
        <p class="text-white absolute top-1/2 transform -translate-y-1/2 left-1/2 -translate-x-1/2 font-maven-bold text-20px">Viewer informations</p>
      </div>
      <div class="h-full w-full rounded-b-2xl flex">
        <div class="w-fit">
          <div class="w-fit h-full relative">
            <div class="absolute right-0 w-1 rounded-2xl bg-darkBorder h-5/6"></div>
            <div class="absolute right-0 h-1 rounded-2xl bg-darkBorder w-1/2"></div>
            <p class="text-secondText font-maven-medium text-14px w-1/2 text-center absolute -top-2">Twitchs Infos</p>
            <div class="justify-center flex gap-3 my-auto flex-col w-fit h-full mx-20">
              <img class="w-44 mx-auto" src="./../assets/twitch_pdp_img.png">
              <div class="text-white w-40 font-maven-medium mx-auto">
                <p class="text-12px">Pseudo</p>
                <p class="-mt-2 text-lg">Marvin McKinney</p>
              </div>
              <div class="text-white w-40 font-maven-medium mx-auto">
                <p class="text-12px">Last connexion</p>
                <p class="-mt-2 text-lg">14 Mar 2021</p>
              </div>
              <div class="text-white w-40 font-maven-medium mx-auto">
                <p class="text-12px">Type</p>
                <p class="-mt-2 text-lg">Viewer</p>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full relative flex">
          <div class="absolute right-0 h-1 rounded-2xl bg-darkBorder w-4/6 left-1/2 transform -translate-x-1/2"></div>
          <p class="text-secondText font-maven-medium text-14px text-center absolute -top-2 w-1/6">Game Infos</p>
          <div class="flex w-full max-h-80 p-8">
            <div class="flex flex-col gap-4 flex-wrap">
              <div class="text-white w-48 font-maven-medium">
                <p class="text-12px">Pseudo in game</p>
                <p class="-mt-2 text-lg">Marvin McKinney_23</p>
              </div>
              <div class="flex">
                <div class="text-white w-40 font-maven-medium mx-auto">
                  <p class="text-12px">Season</p>
                  <p class="-mt-2 text-lg">2022</p>
                </div>
                <div class="text-white w-40 font-maven-medium mx-auto">
                  <p class="text-12px">Level 123</p>
                  <p class="-mt-2 text-lg">2022</p>
                </div>
              </div>
              <div class="flex">
                <div class="text-white w-40 font-maven-medium mx-auto">
                  <p class="text-12px">Ranked solo</p>
                  <p class="-mt-2 text-lg">Gold III</p>
                  <img src="./../assets/Emblem_Gold_1.png" alt="">
                </div>
                <div class="text-white w-40 font-maven-medium mx-auto">
                  <p class="text-12px">Ranked flex</p>
                  <p class="-mt-2 text-lg">Unnranked</p>
                </div>
              </div>
              <div class="text-white font-maven-medium">
                <p class="text-12px">Most played lanes</p>
                <div class="flex">
                  <div class="w-24">
                    <img src="./../assets/Middle_icon_1.png" alt="">
                    <p class="text-lg">90<span class="text-12px">%</span></p>
                    <p class="text-lg"><span class="text-14px">Wr: </span>54<span class="text-12px">%</span></p>
                  </div>
                  <div class="w-24">
                    <img src="./../assets/Top_icon_1.png" alt="">
                    <p class="text-lg">10<span class="text-12px">%</span></p>
                    <p class="text-lg"><span class="text-14px">Wr: </span>81<span class="text-12px">%</span></p>
                  </div>
                  </div>
              </div>
              <div class="text-white flex flex-col gap-3 w-48 font-maven-medium">
                <p class="text-12px">Most played champions</p>
                <champion name="Cassiopeia" img="Cassiopeia.png" win="44" loose="33" />
                <champion name="Gragas" img="Gragas.png" win="5" loose="12" />
                <champion name="Ahri" img="Ahri.png" win="1" loose="2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
