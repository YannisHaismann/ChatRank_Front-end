<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeServices3",
  props: {  },
  components: {  },
  setup() {
    return { };
  },
});
</script>

<template>
  <div class="w-full h-screen flex p-20" id="service3">
    <div class="text-white font-maven-medium w-1/2 pr-60">
      <h2 class="font-maven-black text-20px mb-4">Loremp</h2>
      <p class="text-18px ml-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam totam molestias voluptatibus quis nisi, veniam aliquid optio sequi accusamus aspernatur! Quaerat inventore, ipsum debitis eos ipsa impedit neque consequatur sit.</p>
    </div>
    <div class="w-1/2 relative">
      <div class="rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-27rem h-27rem ml-20 bg-gradient-to-tr from-black to-circleSecond z-10" id="circleBg"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-27rem h-full">
        <img class="absolute top-0 right-0" src="./../assets/service_1-3.png" alt="">
        <img class="absolute top-14 right-14" src="./../assets/service_1-1.png" alt="">
        <img class="absolute top-28 right-28" src="./../assets/service_1-2.png" alt="">
      </div>
    </div>
  </div>
</template>
