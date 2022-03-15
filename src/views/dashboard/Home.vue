<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "@/components/Navbar.vue";
import SearchViewer from "@/components/SearchViewer.vue";
import ListViewers from "@/components/ListViewers.vue";

export default defineComponent({
  name: "DashboardHome",
  components: {
    Navbar,
    SearchViewer,
    ListViewers,
  },
  setup() {
    return {};
  },
});
</script>

<template>
  <div class="dashboard-home flex flex-auto h-full w-full bg-darkA">
    <navbar :activePage="'Home'" />
    <div class="h-full w-full flex flex-col flex-grow-0 p-10">
      <search-viewer />
      <list-viewers />
      <!-- <div class="h-full w-full bg-green-500"></div> -->
    </div>
  </div>
</template>
