<script lang="ts">
import { defineComponent } from "vue";
import SlimCircleService from "@/components/SlimCircleService.vue"

export default defineComponent({
  name: "HomeServices2",
  props: {  },
  components: { SlimCircleService },
  setup() {
    return { };
  },
});
</script>

<template>
  <div class="w-full h-screen flex flex-col lg:flex-row p-20" id="service2">
    <div class="relative h-1/2 lg:h-full lg:w-1/2 order-1 lg:order-2">
      <SlimCircleService />
      <div class="relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-36rem xl:w-44rem 2xl:w-50rem h-full">
        <img class="relative top-1/2 transform -translate-y-1/2 w-full" src="./../assets/service_2.png" alt="">
      </div>
    </div>
    <div class="text-white font-maven-medium lg:w-1/2 lg:pl-40 2xl:pl-60 my-auto">
      <h2 class="font-maven-black text-20px mb-4">Loremp</h2>
      <p class="text-18px ml-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam totam molestias voluptatibus quis nisi, veniam aliquid optio sequi accusamus aspernatur! Quaerat inventore, ipsum debitis eos ipsa impedit neque consequatur sit.</p>
    </div>
  </div>
</template>
