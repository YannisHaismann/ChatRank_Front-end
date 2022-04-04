
<script lang="ts">
import { defineComponent } from "vue";
import HomeTop from './../components/HomeTop.vue';
import HomeServices from './../components/HomeServices.vue';
import HomeOffers from './../components/HomeOffers.vue';
import Footer from './../components/Footer.vue';

export default defineComponent({
  name: "Home",
  components: { HomeTop, HomeServices, HomeOffers, Footer },
  setup(){

    return {  }
  }
});
</script>
  
<template>
  <div class="relative w-fit h-fit" id="Home">
    <div class="w-fit h-fit p-2 lg:p-10 bg-gradient-to-tr from-bgLeftColor via-bgMiddleColor to-bgDarkGreen"> 
      <div class="relative w-screen h-screen">
        <home-top />
      </div>
      <div class="relative w-screen h-fit">
        <home-services />
      </div>
      <div class="relative w-screen h-screen">
        <HomeOffers />
      </div>
      <div class="relative w-screen h-screen">
        <Footer />
      </div>
    </div>
  </div>
</template>
