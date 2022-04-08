<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Footer",
  props: {  },
  components: {  },
  setup() {
    return { };
  },
});
</script>

<template>
  <div class="w-full h-fit" id="Footer">
    <div class="text-white w-full bg-darkA h-28 relative">
      <p class="font-maven-medium text-center text-14px pt-6">
        <span class="cursor-pointer mx-5">Privacy policy</span>
        <span class="cursor-pointer mx-5">Term of service</span>
        <span class="cursor-pointer mx-5">Safety Regulations</span>
        <span class="cursor-pointer mx-5">Login</span>
        <span class="cursor-pointer mx-5">Register</span>
      </p>
      <p class="text-center text-10px font-maven-regular absolute bottom-6 transform -translate-x-1/2 left-1/2">2022 All rights reserved, reproduction of informations contained on the site is prohibited.</p>
    </div>
  </div>
</template>
