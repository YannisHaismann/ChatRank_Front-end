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
  <div class="dashboard-home flex flex-auto h-full w-full">
    <navbar :activePage="'Home'" />
    <div class="h-full w-full flex flex-col flex-grow-0 p-10">
      <div class="h-full w-full bg-red-500"></div>
      <div class="h-full w-full bg-green-500"></div>
    </div>
  </div>
</template>
