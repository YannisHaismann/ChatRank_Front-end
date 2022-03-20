<script lang="ts">
import { defineComponent } from "vue";


export default defineComponent({
  name: "BtnOnOff",
  props: { },
  components: { },
  setup() {
    return { };
  },
});
</script>

<template>
  <div id="BtnOnOff" class="rounded-2xl relative tablet:w-12 tablet:h-6 bg-gradient-to-r from-green-200 via-green-400 to-green-600">
    <div class="rounded-2xl w-5 left-0.5 absolute top-1/2 transform -translate-y-1/2 h-5/6 bg-white">
    </div>
    <p class="absolute top-1/2 transform -translate-y-1/2 right-1.5 text-12px">On</p>
  </div>
</template>
