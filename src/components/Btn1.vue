<script lang="ts">
import { defineComponent } from "vue";
import downArrow from "@/assets/down-arrow.svg";

export default defineComponent({
  name: "Btn1",
  props: { name: String },
  components: { },
  setup() {
    return { downArrow };
  },
});
</script>

<template>
  <div id="Btn1" class="rounded-2xl w-40 h-7 border-2 border-darkBorder bg-darkB absolute">
    <p class="text-white font-maven-medium text-14px ml-2">{{ name }}</p>
    <img class="absolute right-2 top-2 w-4" :src="downArrow" alt="">
  </div>
</template>
