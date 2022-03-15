<script lang="ts">
import { defineComponent } from "vue";


export default defineComponent({
  name: "InfosViewer",
  components: {},
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
      <div class="h-full w-full rounded-b-2xl flex overflow-hidden">
        <div class="w-1/3 flex gap-4 flex-col relative">
          <div class="absolute right-0 w-1 rounded-2xl bg-darkBorder h-5/6"></div>
          <div class="absolute right-0 h-1 rounded-2xl bg-darkBorder w-1/2"></div>
          <img class="w-44 mt-6 mx-auto" src="./../assets/twitch_pdp_img.png">
          <div class="text-white w-40 font-maven-medium mx-auto">
            <p class="text-14px">Pseudo</p>
            <p class="-mt-2 text-lg">Marvin McKinney</p>
          </div>
          <div class="text-white w-40 font-maven-medium mx-auto">
            <p class="text-14px">Last connexion</p>
            <p class="-mt-2 text-lg">14 Mar 2021</p>
          </div>
          <div class="text-white w-40 font-maven-medium mx-auto">
            <p class="text-14px">Type</p>
            <p class="-mt-2 text-lg">Viewer</p>
          </div>
        </div>
        <div class="w-full bg-blue-400">

        </div>
      </div>
    </div>
  </div>
</template>
