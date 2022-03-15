<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Icon-navbar",
  props: {
    name: String,
    activePage: String,
    icon: String,
    iconFull: String,
  },
  setup(props) {
    return { props };
  },
});
</script>

<template>
  <div id="Icon-navbar">
    <div :id="name + '-btn'" class="h-12 tablet:h-16 w-full relative">
      <img
        v-show="activePage === name"
        id="active-gradient"
        class="absolute right-0 top-0 h-full"
        src="./../assets/active-gradient-btn.png"
      />
      <div
        v-show="activePage === name"
        class="bg-mainA h-full w-1 left-0"
      ></div>
      <img
        v-if="activePage == name"
        class="absolute w-5 tablet:w-7 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        :src="iconFull"
      />
      <img
        v-else
        class="absolute w-5 tablet:w-7 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        :src="icon"
      />
      <p
        class="opacity-0 w-32 left-40 text-navbar text-white absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 font-maven-semi-bold text-lg"
      >
        {{ name }}
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
