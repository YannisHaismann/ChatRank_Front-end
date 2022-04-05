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
  <div class="w-full h-fit" id="HomeOffers">
    <OfferCardBasic />
    <OfferCardPremium />
  </div>
</template>
