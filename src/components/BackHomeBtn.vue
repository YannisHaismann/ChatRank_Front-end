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
<router-link class="h-fit" to="/">
  <div class="flex h-14 sm:h-16" id="BackHomeBtn">
    <img class="w-8 h-8 sm:h-10 sm:w-10" :src="backhome">
    <p class="font-maven-medium ml-3 mt-0.5 sm:mt-1 text-white text-20px sm:text-22px">Back home</p>
  </div>
</router-link>
</template>
