<script lang="ts">
import { defineComponent } from "vue";
import downArrow from "@/assets/down-arrow.svg";
import loginImg from '@/assets/login.svg';

export default defineComponent({
  name: "LoginBtn",
  props: { },
  components: { },
  setup() {
    return { downArrow, loginImg };
  },
});
</script>

<template>
<router-link to="Login">
  <div class="flex h-12 md:h-16 w-fit font-maven-medium gap-3 relative z-50" id="LoginBtn">
    <img class="w-10 mb-1.5 md:mb-0 md:w-14 lg:w-full" :src="loginImg" alt="">
    <div class="h-full w-fit flex">
      <p class="text-white mt-2 md:mt-4 text-16px md:text-20px">Login</p>
    </div>
  </div>
  </router-link>
</template>
