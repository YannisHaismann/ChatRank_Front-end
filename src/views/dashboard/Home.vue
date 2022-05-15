<script lang="ts">
import { defineComponent, onMounted, watchEffect, ref } from "vue";
import Navbar from "@/components/Navbar.vue";
import SearchViewer from "@/components/SearchViewer.vue";
import ListViewers from "@/components/ListViewers.vue";
import InfosViewer from "@/components/InfosViewer.vue";
import { useStore } from "vuex";

import $ from "jquery";

export default defineComponent({
  name: "DashboardHome",
  components: {
    Navbar,
    ListViewers,
    InfosViewer,
  },
  setup() {
    const store = useStore();
    const viewers = ref();
    console.log(store.state.tokenDatas);
    function getViewers() {
      $.ajax(store.state.serverBackIp + `/users/viewers/list/${store.state.tokenDatas.id}/usernameAsc`, {
        type: "GET",
        beforeSend: function(xhr: any) {
          xhr.setRequestHeader('Authorization', 'Bearer ' + localStorage.getItem('back_token'));
        },
        headers: {
          "Client-ID": store.state.clientId,
        },
        success: (data: any) => {
          console.log("success")
          viewers.value = data;
          console.log(data);
        },
        error: () => {
          console.log("error");
        } 
      });
    }

    watchEffect(() => {
      if(store.state.tokenDatas && store.state.tokenDatas.id){
        getViewers();
      }
    })

    onMounted(() => {
      console.log("onMounted")
    })

    return { viewers };
  },
});
</script>

<template>
  <div class="dashboard-home flex flex-auto h-full w-full bg-darkA">
    <navbar :activePage="'Home'" />
    <div class="h-full w-full flex flex-col gap-6 p-4 tablet:p-10 overflow-y-auto">
      <list-viewers :viewers="viewers" />
      <infos-viewer />
    </div>
  </div>
</template>
