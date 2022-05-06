<script lang="ts">
import { defineComponent } from "vue";
import downArrow from "@/assets/down-arrow.svg";
import { useStore } from "vuex";
import goToArrow from "@/assets/goToArrow.svg";

export default defineComponent({
  name: "ConnectedBtn",
  props: { },
  components: { },
  setup() {
    const store = useStore();

    return { downArrow, store, goToArrow };
  },
});
</script>

<template>
  <div class="flex h-12 md:h-16 w-fit font-maven-medium gap-3 relative z-50" id="ConnectedBtn">
    <img class="w-10 mb-1.5 md:mb-0 lg:w-16 lg:h-16 md:h-14 md:w-14 rounded-2xl" :src="store.state.user.profileImg" alt="">
    <div class="h-full w-fit flex flex-col">
      <p class="text-white text-16px md:text-20px">{{ store.state.user.username }}</p>
      <router-link v-if="store.state.user.type == 1" to="/account">
        <p class="text-white text-14px md:text-18px flex">My Account<img class="w-7 h-7 mt-0.5 ml-1" :src="goToArrow"></p>
      </router-link>
      <router-link v-if="store.state.user.type == 2" to="/dashboard/home">
        <p class="text-white text-14px md:text-18px flex">My Dashboard<img class="w-7 h-7 mt-0.5 ml-1" :src="goToArrow"></p>
      </router-link>
    </div>
  </div>
</template>
