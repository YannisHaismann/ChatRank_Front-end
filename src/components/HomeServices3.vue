<script lang="ts">
import { defineComponent } from "vue";
import SlimCircleService from '@/components/SlimCircleService.vue';

export default defineComponent({
  name: "HomeServices3",
  props: {  },
  components: { SlimCircleService },
  setup() {
    return { };
  },
});
</script>

<template>
  <div class="w-full h-screen flex flex-col lg:flex-row p-20" id="service3">
    <div class="text-white font-maven-medium lg:w-1/2 lg:pr-40 2xl:pr-60 my-auto">
      <h2 class="font-maven-black text-18px md:text-20px mb-4">Loremp</h2>
      <p class="text-12px md:text-18px ml-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam totam molestias voluptatibus quis nisi, veniam aliquid optio sequi accusamus aspernatur! Quaerat inventore, ipsum debitis eos ipsa impedit neque consequatur sit.</p>
    </div>
    <div class="h-1/2 lg:h-full lg:w-1/2 relative">
      <SlimCircleService />
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-20rem md:w-30rem xl:w-36rem 2xl:w-44rem h-full">
        <img class="relative top-1/2 transform -translate-y-1/2 w-full" src="./../assets/service_3.png" alt="">
      </div>
    </div>
  </div>
</template>
