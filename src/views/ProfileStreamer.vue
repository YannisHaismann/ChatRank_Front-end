<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { useRouter } from 'vue-router';
import LoginBtn from '@/components/LoginBtn.vue';
import $ from "jquery";
import { useStore } from "vuex";
import BackHomeBtn from "@/components/BackHomeBtn.vue";

export default defineComponent({
  name: "ProfileStreamer",
  props: {  },
  components: { LoginBtn, BackHomeBtn },
  setup() {
    const router = useRouter();
    const streamer = ref();
    const store = useStore();
    
    const requestStreamer = () => {
      //CHANGE PATH
      $.ajax('http://127.0.0.1:8000/apip/users/find/users/streamer/' + router.currentRoute.value.params.nameStreamer, {
        type: "GET",
        success: (data: any) => {
          console.log("success");
          console.log(data);
          streamer.value = data[0];
        },
        error: () => {
          streamer.value = null;
        }
      });
    }

    const getImgUrl = (name: string) => {
      return require("/API/ChatRank_Back-end/public/uploads/" + name);
    }

    onMounted(() => {
      if(router.currentRoute.value.params.nameStreamer){
        requestStreamer();
      }
    })

    return { streamer, getImgUrl };
  },
});
</script>

<template>
  <div class="w-full h-full pt-10 flex bg-gradient-to-tr from-bgLeftColor via-bgMiddleColor to-bgDarkGreen relative z-10" id="ProfileStreamer">
    <LoginBtn class="absolute right-10" />
    <div class="m-auto flex flex-col gap-3 w-2/3 h-1/2">
      <BackHomeBtn />
      <div class="w-full h-full border-2 border-darkBorder bg-darkC m-auto rounded-2xl p-10">
        <div class="flex p-5 flex-col justify-around h-full" v-if="streamer">
          <div class="flex">
            <img class="rounded-2xl w-24" :src="getImgUrl(streamer.url_profile_img)" alt="">
            <p class="text-white font-maven-medium ml-10 h-8 my-auto">{{ streamer.username }}</p>
          </div>
          <div class="w-full h-0.5 bg-darkBorder mx-auto"></div>
          <div class="mx-auto">
            <p class="text-white font-maven-medium text-22px">Link as a {{ streamer.username }}'s viewer</p>
            <div class="bg-mainA pt-0.5 w-3/4 mx-auto mt-4 h-8 text-white font-maven-bold rounded-2xl">
              <p class="text-center cursor-pointer">Link</p>
            </div>
          </div>
        </div>
        <div v-else>
          <p class="text-white text-center h-10 my-auto">This streamer doesnt exist or not already registered.</p>
        </div>
      </div>
    </div>
    <img class="w-40 sm:w-96 absolute right-1 top-14 sm:top-0 sm:right-10 z-n1" src="./../assets/Cube-1.png" alt="">
    <img class="w-40 sm:w-96 absolute right-0 top-24 sm:right-2 sm:top-24 z-n1" src="./../assets/RoundCube-2.png" alt="">
  </div>
</template>
