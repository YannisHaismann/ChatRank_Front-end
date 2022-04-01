<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "login-input",
  props: { name: String, type: String, bool: Boolean, errorMsg: String },
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
  <div class="flex flex-col text-white font-maven-medium h-20" id="login-input">
    <label :class="{'text-mainA': focusBool, 'text-error': bool}" class="text-10px sm:text-14px w-32" :for="name">{{ name }}</label>
    <input @keyup="$emit('valueUpdate', $event.target.value)" @focus="setFocus(true)" @blur="setFocus(false)" :class="{'border-mainA': focusBool, 'border-error': bool, 'border-darkBorder': !bool}" class="border-2 pl-3 outline-none text-white rounded-2xl text-10px sm:text-16px bg-darkB h-6 sm:h-8 w-40 sm:w-96" :id="name" :type="type">
    <p class="text-error text-12px mt-1" v-show="bool">{{ errorMsg }}</p>
  </div>
</template>
