<script lang="ts">
import { defineComponent } from "vue";
import TwitchInfos from '@/components/TwitchInfos.vue';
import GameInfos from '@/components/GameInfos.vue';

export default defineComponent({
  name: "InfosViewer",
  components: { TwitchInfos, GameInfos },
  setup() {
    return { };
  },
});
</script>

<template>
  <div class="h-full overflow-hidden" id="InfosViewer">
    <div class="w-full flex gap-3 tablet:gap-6 flex-col h-full bg-darkC border-2 border-darkBorder rounded-2xl">
      <div class="relative flex-shrink-0 bg-darkB w-full text-10px border-b-2 border-darkBorder tablet:text-14px h-5 tablet:h-11 block rounded-t-2xl">
        <p class="text-white absolute top-1/2 transform -translate-y-1/2 left-1/2 -translate-x-1/2 font-maven-bold text-10px tablet:text-20px">Viewer informations</p>
      </div>
      <div class="h-full w-full rounded-b-2xl flex">
        <twitch-infos />
        <game-infos />
      </div>
    </div>
  </div>
</template>
