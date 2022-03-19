<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Line",
  props: [ 'percentagePlayed', 'WinRatePercentage', 'img'],
  setup(props) {

    return { props };
  },
});
</script>

<template>
  <div id="Line" class="flex tablet:mr-6">
    <img class="w-6 h-6 tablet:w-10 tablet:h-10 largeScreen:w-12 largeScreen:h-12" :src="require(`./../../assets/LOL/Lines/${img}`)" alt="">
    <div>
      <p class="text-10px tablet:text-base largeScreen:text-lg">{{ percentagePlayed }}<span class="text-6px tablet:text-12px">%</span></p>
      <p class="-mt-1 tablet:-mt-2 text-10px tablet:text-base largeScreen:text-lg"><span class="text-6px tablet:text-xs largeScreen:text-14px">Wr: </span>{{ WinRatePercentage }}<span class="text-6px tablet:text-12px">%</span></p>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
