<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "@/components/Navbar.vue";
import SearchViewer from "@/components/SearchViewer.vue";
import ListViewers from "@/components/ListViewers.vue";
import InfosViewer from "@/components/InfosViewer.vue";

export default defineComponent({
  name: "DashboardHome",
  components: {
    Navbar,
    ListViewers,
    InfosViewer,
  },
  setup() {
    return {};
  },
});
</script>

<template>
  <div class="dashboard-home flex flex-auto h-full w-full bg-darkA">
    <navbar :activePage="'Home'" />
    <div class="h-full w-full flex flex-col gap-6 p-4 tablet:p-10 overflow-y-auto">
      <list-viewers />
      <infos-viewer />
    </div>
  </div>
</template>
