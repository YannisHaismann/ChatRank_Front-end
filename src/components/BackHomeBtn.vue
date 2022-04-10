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
    <img :src="backhome">
    <p class="font-maven-medium ml-3 mt-1 text-white text-22px">Back home</p>
  </div>
</router-link>
</template>
