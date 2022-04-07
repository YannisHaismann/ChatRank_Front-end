<script lang="ts">
import { defineComponent } from "vue";
import SlimCircleService from "@/components/SlimCircleService.vue"

export default defineComponent({
  name: "HomeServices1",
  props: {  },
  components: { SlimCircleService },
  setup() {
    return { };
  },
});
</script>

<template>
  <div class="w-full h-screen flex p-20" id="service1">
    <div class="text-white font-maven-medium my-auto w-1/2 pr-40 2xl:pr-60">
      <h2 class="font-maven-black text-20px mb-4">Loremp</h2>
      <p class="text-18px ml-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam totam molestias voluptatibus quis nisi, veniam aliquid optio sequi accusamus aspernatur! Quaerat inventore, ipsum debitis eos ipsa impedit neque consequatur sit.</p>
    </div>
    <div class="w-1/2 relative">
    <SlimCircleService />
      <div class="relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-24rem xl:w-30rem 2xl:w-40rem h-full">
        <div class="relative w-full top-1/2 transform -translate-y-1/2 h-20">
          <img class="absolute -top-36 right-0" src="./../assets/service_1-3.png" alt="">
          <img class="absolute -top-20 right-14" src="./../assets/service_1-1.png" alt="">
          <img class="absolute -top-4 right-28" src="./../assets/service_1-2.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
