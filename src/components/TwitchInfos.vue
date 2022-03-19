<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TwitchInfos",
  props: {
  },
  setup(props) {

    return { props };
  },
});
</script>

<template>
  <div id="TwitchInfos" class="w-fit">
    <div class="w-fit h-full relative">
      <div class="absolute right-0 tablet:w-1 w-0.5 rounded-2xl bg-darkBorder h-5/6"></div>
      <div class="absolute right-0 tablet:h-1 h-0.5 rounded-2xl bg-darkBorder w-1/2"></div>
      <p class="text-secondText font-maven-medium text-8px tablet:text-14px w-1/2 text-center absolute -top-1.5 tablet:-top-2">Twitch Infos</p>
      <div class="pt-4 largeScreen:pt-0 largeScreen:justify-center flex gap-2 largeScreen:gap-3 my-auto flex-col w-fit h-full mx-2 tablet:mx-10 veryLargeScreen:mx-20">
        <img class="w-10 tablet:w-24 largeScreen:w-44 mx-auto" src="./../assets/twitch_pdp_img.png">
        <div class="text-white w-20 tablet:w-36 largeScreen:w-40 font-maven-medium mx-auto">
          <p class="text-6px tablet:text-10px largeScreen:text-12px">Pseudo</p>
          <p class="-mt-1 tablet:-mt-2 text-8px tablet:text-base largeScreen:text-lg">Marvin McKinney</p>
        </div>
        <div class="text-white w-20 tablet:w-36 largeScreen:w-40 font-maven-medium mx-auto">
          <p class="text-6px tablet:text-10px largeScreen:text-12px">Last connexion</p>
          <p class="-mt-1 tablet:-mt-2 text-8px tablet:text-base largeScreen:text-lg">14 Mar 2021</p>
        </div>
        <div class="text-white w-20 tablet:w-36 largeScreen:w-40 font-maven-medium mx-auto">
          <p class="text-6px tablet:text-10px largeScreen:text-12px">Type</p>
          <p class="-mt-1 tablet:-mt-2 text-8px tablet:text-base largeScreen:text-lg">Viewer</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
