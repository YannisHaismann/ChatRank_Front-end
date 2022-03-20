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
  <div id="MyAccount" class="dashboard-home flex flex-auto h-full w-full bg-darkA">
    <navbar :activePage="'MyAccount'" />
    <div class="h-full w-full p-4 tablet:p-10 overflow-y-auto">
      
    </div>
  </div>
</template>
