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
  <div class="relative h-fit w-full min-h-full flex justify-center" id="HomeOffers">
    <OfferCardBasic class="mx-10 mb-20 mt-32" />
    <OfferCardPremium class="mx-10 mb-20 mt-20" />
  </div>
</template>
