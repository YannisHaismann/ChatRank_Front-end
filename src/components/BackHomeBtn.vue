<script lang="ts">
import { defineComponent } from "vue";
import backhome from "@/assets/backhome.svg";

export default defineComponent({
  name: "BackHomeBtn",
  props: { },
  components: { },
  setup() {
    return { backhome };
  },
});
</script>

<template>
<router-link to="/">
  <div class="flex" id="BackHomeBtn">
    <img class="w-8 sm:w-10" :src="backhome">
    <p class="font-maven-medium ml-3 mt-0.5 sm:mt-1 text-white text-20px sm:text-22px">Back home</p>
  </div>
</router-link>
</template>
