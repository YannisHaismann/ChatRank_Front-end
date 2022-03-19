<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "@/components/Navbar.vue";

export default defineComponent({
  name: "DashboardHome",
  components: {
    Navbar
  },
  setup() {
    return {};
  },
});
</script>

<template>
  <div class="dashboard-home flex flex-auto h-full w-full bg-darkA">
    <navbar :activePage="'Statistics'" />
  </div>
</template>
