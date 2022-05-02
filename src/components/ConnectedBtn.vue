<script lang="ts">
import { defineComponent } from "vue";
import downArrow from "@/assets/down-arrow.svg";
import { useStore } from "vuex";

export default defineComponent({
  name: "ConnectedBtn",
  props: { },
  components: { },
  setup() {
    const store = useStore();

    return { downArrow, store };
  },
});
</script>

<template>
<router-link to="/login">
  <div class="flex h-12 md:h-16 w-fit font-maven-medium gap-3 relative z-50" id="ConnectedBtn">
    <img class="w-10 mb-1.5 md:mb-0 md:w-14 lg:w-full rounded-2xl" :src="store.state.user.profileImg" alt="">
    <div class="h-full w-fit flex">
      <p class="text-white mt-2 md:mt-4 text-16px md:text-20px">{{ store.state.user.username }}</p>
    </div>
  </div>
</router-link>
</template>
