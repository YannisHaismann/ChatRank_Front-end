
<script lang="ts">
import { defineComponent } from "vue";
import HomeTop from './../components/HomeTop.vue';
import HomeServices from './../components/HomeServices.vue';

export default defineComponent({
  name: "Home",
  components: { HomeTop, HomeServices },
  setup(){

    return {  }
  }
});
</script>
  
<template>
  <div class="relative" id="Home">
    <div class="w-screen h-screen p-2 lg:p-10 bg-gradient-to-tr from-bgLeftColor via-bgMiddleColor to-bgDarkGreen"> 
      <div class="relative w-full h-full">
        <home-top />
      </div>
      <div class="relative w-full h-full">
        <home-services />
      </div>
    </div>
  </div>
</template>
