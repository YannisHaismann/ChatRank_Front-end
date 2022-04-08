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
  <div class="relative h-fit w-full min-h-full flex flex-col md:flex-row justify-center" id="HomeOffers">
    <OfferCardBasic class="mx-5 my-5 lg:mx-10 md:mb-20 md:mt-32" />
    <OfferCardPremium class="mx-5 my-5 lg:mx-10 md:mb-20 md:mt-20" />
  </div>
</template>
