<script lang="ts">
import { defineComponent } from "vue";
import disconnect from "@/assets/disconnect.svg";

export default defineComponent({
  name: "DisconnectBtn",
  props: { },
  components: { },
  setup() {
    const disconnectF = () => {
      localStorage.removeItem('back_token');
      localStorage.removeItem('twitch_access_token');
      localStorage.removeItem('back_refresh_token');
      window.location.href = '/';
      // window.location.reload();
    }
    return { disconnect, disconnectF };
  },
});
</script>

<template>
  <div @click="disconnectF" class="flex h-14 sm:h-16 cursor-pointer" id="DisconnectBtn">
    <p class="font-maven-medium mt-0.5 sm:mt-1 text-white text-20px sm:text-22px">Disconnect</p>
    <img class="w-8 h-8 sm:h-10 ml-3 sm:w-10" :src="disconnect">
  </div>
</template>
