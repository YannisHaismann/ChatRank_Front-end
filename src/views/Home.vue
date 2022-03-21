
<script lang="ts">
import { defineComponent } from "vue";
import HomeTop from './../components/HomeTop.vue';

export default defineComponent({
  name: "Home",
  components: { HomeTop },
  setup(){

    return {  }
  }
});
</script>
  
<template>
  <div class="w-full h-full relative" id="Home">
    <div class="w-full h-full p-2 md:p-10 bg-gradient-to-tr from-bgLeftColor via-bgMiddleColor to-bgDarkGreen"> 
      <home-top />
    </div>
  </div>
</template>
