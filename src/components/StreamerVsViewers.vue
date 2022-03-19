<script lang="ts">
import { defineComponent } from "vue";
import Btn1 from '@/components/Btn1.vue';
import StreamerVsViewersCharts from '@/components/StreamerVsViewersCharts.vue';

export default defineComponent({
  name: "StreamerVsViewers",
  components: { Btn1, StreamerVsViewersCharts },
  setup() {
    return { };
  },
});
</script>

<template>
<div class="w-full h-full mt-5 relative" id="StreamerVsViewers">
  <p class="text-white font-maven-medium ml-3 text-18px">Streamer vs viewers</p>
  <btn1 class="top-3 right-10" name="Ranked flex" />
  <div class="w-full h-full p-10 border-2 border-darkBorder rounded-2xl">
    <streamer-vs-viewers-charts />
  </div>
</div>
</template>
