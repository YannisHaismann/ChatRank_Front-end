<script lang="ts">
import { defineComponent } from "vue";
import OfferCardBasic from './OfferCardBasic.vue';
import OfferCardPremium from './OfferCardPremium.vue';

export default defineComponent({
  name: "HomeOffers",
  props: {  },
  components: { OfferCardBasic, OfferCardPremium },
  setup() {
    return { };
  },
});
</script>

<template>
  <div class="relative w-full h-full flex justify-center" id="HomeOffers">
    <OfferCardBasic class="mx-10 right-1/2 absolute top-1/2 transform -translate-y-1/2" />
    <OfferCardPremium class="mx-10 left-1/2 absolute top-2/5 transform -translate-y-1/2" />
  </div>
</template>
