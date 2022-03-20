<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BtnValidate",
  props: { },
  components: { },
  setup() {
    return { };
  },
});
</script>

<template>
  <div id="BtnValidate" class="rounded-2xl h-5 w-32 tablet:w-40 tablet:h-9 bg-mainA">
    <p class="text-white text-18px font-maven-medium absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">Save</p>
  </div>
</template>
