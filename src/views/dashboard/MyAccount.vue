<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "@/components/Navbar.vue";
import Dashboard from "@/components/Dashboard.vue";

export default defineComponent({
  name: "DashboardHome",
  components: {
    Navbar,
    Dashboard,
  },
  setup() {
    return {};
  },
});
</script>

<template>
  <div id="MyAccount" class="dashboard-home flex flex-auto h-full w-full bg-darkA">
    <navbar :activePage="'MyAccount'" />
    <Dashboard />
  </div>
</template>
