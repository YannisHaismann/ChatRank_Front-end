<script lang="ts">
import { defineComponent, ref } from "vue";
import loop from "@/assets/Vector-loop.svg";
import loopActive from "@/assets/Vector-loop-active.svg";

export default defineComponent({
  name: "search-viewer",
  components: {},
  setup() {
    let focus = ref(false);
    const setFocus = (bool: boolean) => {
      focus.value = bool;
    };

    return { loop, loopActive, setFocus, focus };
  },
});
</script>

<template>
  <div id="SearchViewer">
    <div class="w-2/5 h-6 tablet:h-9 relative rounded-2xl">
      <input
        type="text"
        @keyup="$emit('changeValue', $event)"
        @focus="setFocus(true)"
        @blur="setFocus(false)"
        class="bg-darkB absolute top-0 w-full outline-none rounded-2xl border-2 border-darkBorder focus:border-mainA m-auto h-full text-white placeholder-white px-5 caret-white font-maven-medium text-8px tablet:text-14px"
        placeholder="Search a viewer"
      />
      <img
        v-if="focus"
        class="absolute w-4 top-twoPointfive tablet:top-1 tablet:w-6 right-3 tablet:right-4"
        :src="loopActive"
      />
      <img
        v-else
        class="absolute w-4 top-twoPointfive tablet:top-1 tablet:w-6 right-3 tablet:right-4"
        :src="loop"
      />
    </div>
  </div>
</template>
