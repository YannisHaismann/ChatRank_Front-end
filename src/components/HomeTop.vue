<script lang="ts">
import { defineComponent } from "vue";
import LoginBtn from '@/components/LoginBtn.vue';

export default defineComponent({
  name: "HomeTop",
  props: {  },
  components: { LoginBtn },
  setup() {
    return { };
  },
});
</script>

<template>
  <div class="w-full h-full" id="HomeTop">
    <login-btn class="float-right" />
    <div class="w-full h-full relative z-10">
      <div class="w-full h-fit flex flex-col mt-40 mx-auto">
        <p class="text-white font-maven-medium text-18px sm:text-24px lg:text-32px text-center">Thinked by streamers for streamers</p>
        <input type="text" class="w-2/3 sm:w-1/2 mt-20 lg:mt-28 h-8 sm:h-10 lg:h-12 border-2 text-12px sm:text-14px lg:text-16px outline-none text-white placeholder-secondText px-5 font-maven-medium caret-white border-darkBorder focus:border-mainA bg-black bg-opacity-40 rounded-3xl block mx-auto" placeholder="Search a streamer">
        <div class="flex w-1/2 justify-between mx-auto my-6 sm:my-10">
          <img class="h-5 sm:h-10 lg:h-20" src="./../assets/Twitch_logo.png" alt="">
          <img class="h-3 sm:h-6 lg:h-12 mt-2 sm:mt-4 lg:mt-8" src="./../assets/riot.png" alt="">
          <img class="h-6 sm:h-12 lg:h-24" src="./../assets/psyonix.png" alt="">
          <img class="h-3.5 sm:h-7 lg:h-14 mt-1.5 sm:mt-3 lg:mt-6" src="./../assets/blizzard.png" alt="">
        </div>
      </div>
      <img class="w-48 lg:w-96 absolute right-1/4 top-0 lg:top-0 z-n1" src="./../assets/Cylinder.png" alt="">
      <img class="w-48 lg:w-96 absolute right-1/6 top-24 lg:top-40 z-n1" src="./../assets/SuperToroid.png" alt="">
    </div>
    <div class="absolute bottom-20 left-1/2 transform -translate-x-1/2">
      <p class="font-maven-bold text-white text-14px sm:text-16px lg:text-20px text-center">Are you a streamer ?</p>
      <img class="w-10 sm:w-12 lg:w-16 mx-auto mt-4" src="./../assets/arrow-areYouAStreamer.png" alt="">
    </div>
  </div>
</template>
