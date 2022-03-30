<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "login-input",
  props: { name: String, type: String },
  components: { },
  setup() {
    const focusBool = ref(false);

    const setFocus = (bool: boolean) => {
      focusBool.value = bool;
    }

    return { setFocus, focusBool };
  },
});
</script>

<template>
  <div class="flex flex-col text-white font-maven-medium" id="login-input">
    <label :class="{'text-mainA': focusBool}" class="text-10px sm:text-14px w-32" :for="name">{{ name }}</label>
    <input @focus="setFocus(true)" @blur="setFocus(false)" :class="{'border-mainA': focusBool}" class="border-2 pl-3 outline-none border-darkBorder text-white rounded-2xl text-10px sm:text-16px bg-darkB h-6 sm:h-8 w-40 sm:w-96" :id="name" :type="type">
  </div>
</template>
