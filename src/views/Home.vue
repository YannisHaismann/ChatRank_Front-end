
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import HomeTop from './../components/HomeTop.vue';
import HomeOffers from './../components/HomeOffers.vue';
import HomeServices1 from './../components/HomeServices1.vue';
import HomeServices2 from './../components/HomeServices2.vue';
import HomeServices3 from './../components/HomeServices3.vue';
import Footer from './../components/Footer.vue';
// import $ from 'jquery';

export default defineComponent({
  name: "Home",
  components: { HomeTop, HomeOffers, Footer, HomeServices1, HomeServices2, HomeServices3 },
  setup(){
    onMounted(() => {
      console.log("haaaa")
    });
  }
});
</script>
  
<template>
  <div class="relative" id="Home">
    <div id="home-top" class="snap snap-y snap-mandatory h-screen overflow-y-scroll bg-gradient-to-tr from-bgLeftColor via-bgMiddleColor to-bgDarkGreen"> 
      <div class="snap-start pt-2 lg:pt-10 relative h-screen">
        <home-top />
      </div>
      <HomeServices1 class="snap-start" />
      <HomeServices2 class="snap-start" />
      <HomeServices3 class="snap-start" />
      <div class="snap-start relative h-fit min-h-screen flex flex-col justify-between">
        <HomeOffers />
        <Footer />
      </div>
    </div>
  </div>
</template>