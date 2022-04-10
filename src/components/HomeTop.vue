<script lang="ts">
import { defineComponent, ref } from "vue";
import LoginBtn from '@/components/LoginBtn.vue';
import { useRouter } from 'vue-router';
import $ from "jquery";

export default defineComponent({
  name: "HomeTop",
  props: {  },
  components: { LoginBtn },
  setup() {
    const request = ref();
    const streamers = ref(null);
    const router = useRouter();

    const sendRequest = (name: string) => {
      if(request.value){
        request.value.abort();
      }
      request.value = $.ajax('http://127.0.0.1:8000/apip/users/find/users/streamer/' + name, {
      type: "GET",
      success: (data: any) => {
        console.log("success");
        console.log(data);
        streamers.value = data;
      },
      error: () => {
        streamers.value = null;
      }
    });
    }

    const sendToProfile = (username: string) => {
      router.push('/Profile/' + username);
    }

    const setStreamers = (value: any) => {
      streamers.value = value;
    }

    const searchStreamer = (name: string) => {
      sendRequest(name)
      console.log(name);
    }

    return { searchStreamer, streamers, setStreamers, sendToProfile };
  },
});
</script>

<template>
  <div class="w-full h-fit" id="HomeTop">
    <login-btn class="float-right mr-10" />
    <div class="w-full h-full flex relative z-10">
      <div class="w-full h-fit flex flex-col lg:m-auto">
        <p class="text-white font-maven-medium text-18px sm:text-24px lg:text-32px text-center">Thinked by streamers for streamers</p>
        <div class="h-fit relative w-2/3 sm:w-1/2 mx-auto">
          <input @focus="searchStreamer($event.target.value)" @keyup="searchStreamer($event.target.value)" type="text" :class="{'rounded-b-3xl border-b-2': streamers == null || streamers.length == 0}" class="w-full mt-20 lg:mt-28 h-8 sm:h-10 lg:h-12 border-t-2 border-r-2 border-l-2 text-12px sm:text-14px lg:text-16px outline-none text-white placeholder-secondText px-5 font-maven-medium caret-white border-darkBorder focus:border-mainA bg-black bg-opacity-40 rounded-t-3xl block" placeholder="Search a streamer">
          <div v-if="streamers && streamers.length > 0" class="absolute w-full h-fit border-2 rounded-b-3xl overflow-hidden border-darkBorder">
            <div @click="sendToProfile(streamer.username)" v-for="streamer in streamers" :key="streamer.id" class="bg-darkC cursor-pointer bg-opacity-40 h-10 py-2 text-white font-maven-medium">
              <p class="ml-4">{{ streamer.username }}</p>
            </div>
          </div>
        </div>
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
