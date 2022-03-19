<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "@/components/Navbar.vue";
import GameStatistics from "@/components/GameStatistics.vue";

export default defineComponent({
  name: "DashboardHome",
  components: {
    Navbar,
    GameStatistics
  },
  setup() {
    return {};
  },
});
</script>

<template>
  <div class="flex flex-auto h-full w-full overflow-hidden bg-darkA">
    <navbar :activePage="'Statistics'" />
    <gameStatistics />
  </div>
</template>
