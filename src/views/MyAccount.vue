<script lang="ts">
import { defineComponent } from "vue";
import Dashboard from "@/components/Dashboard.vue";
import BackHomeBtn from "@/components/BackHomeBtn.vue"

export default defineComponent({
  name: "DashboardHome",
  components: {
    Dashboard,
    BackHomeBtn,
  },
  setup() {
    return {};
  },
});
</script>

<template>
  <div id="MyAccount" class="w-full h-full flex bg-gradient-to-tr from-bgLeftColor via-bgMiddleColor to-bgDarkGreen relative z-10">
    <div class="m-auto flex flex-col gap-3 w-2/3 h-3/4">
      <BackHomeBtn class="ml-10" />
      <Dashboard />
      <img class="w-40 sm:w-96 absolute right-1 top-14 sm:top-0 sm:right-10 z-n1" src="./../assets/Cube-1.png" alt="">
      <img class="w-40 sm:w-96 absolute right-0 top-24 sm:right-2 sm:top-24 z-n1" src="./../assets/RoundCube-2.png" alt="">
    </div>
  </div>
</template>
