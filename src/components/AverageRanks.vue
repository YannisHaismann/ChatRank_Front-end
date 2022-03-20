<script lang="ts">
import { defineComponent } from "vue";
import Btn1 from '@/components/Btn1.vue';
import AverageRanksDoughnut from '@/components/AverageRanksDoughnut.vue';

export default defineComponent({
  name: "AverageRanks",
  components: { Btn1, AverageRanksDoughnut },
  setup() {
    return { };
  },
});
</script>

<template>
<div class="w-full h-full relative" id="AverageRanks">
  <p class="text-white font-maven-medium ml-3 text-12px tablet:text-18px">Average ranks</p>
  <btn1 class="top-2.5 tablet:top-3 right-10" name="Ranked flex" />
  <div class="w-full h-full p-2 tablet:p-10 border-2 border-darkBorder rounded-2xl">
    <averageRanksDoughnut />
  </div>
</div>
</template>
