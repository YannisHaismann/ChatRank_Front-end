<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "@/components/Navbar.vue";

export default defineComponent({
  name: "DashboardHome",
  components: {
    Navbar,
  },
  setup() {
    return {};
  },
});
</script>

<template>
  <div id="Bot" class="dashboard-home flex flex-auto h-full w-full bg-darkA">
    <navbar :activePage="'Bot'" />
    <div class="h-full w-full flex flex-col gap-6 p-4 tablet:p-10 overflow-y-auto">

    </div>
  </div>
</template>
