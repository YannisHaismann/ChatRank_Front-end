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
  <div class="w-full h-screen flex flex-col lg:flex-row p-20" id="service1">
    <div class="text-white font-maven-medium my-auto lg:w-1/2 lg:pr-40 2xl:pr-60">
      <h2 class="font-maven-black text-18px md:text-20px mb-4">Loremp</h2>
      <p class="text-12px md:text-18px ml-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam totam molestias voluptatibus quis nisi, veniam aliquid optio sequi accusamus aspernatur! Quaerat inventore, ipsum debitis eos ipsa impedit neque consequatur sit.</p>
    </div>
    <div class="h-1/2 lg:w-1/2 lg:h-full relative">
    <SlimCircleService />
      <div class="relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-18rem md:w-24rem xl:w-30rem 2xl:w-40rem h-full">
        <div class="relative w-full top-1/2 transform -translate-y-1/2 h-20">
          <img class="absolute -top-36 -right-8 md:right-0" src="./../assets/service_1-3.png" alt="">
          <img class="absolute -top-20 right-2 md:right-14" src="./../assets/service_1-1.png" alt="">
          <img class="absolute -top-4 right-10 md:right-28" src="./../assets/service_1-2.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
