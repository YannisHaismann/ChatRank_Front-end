<script lang="ts">
import { defineComponent, ref, watchEffect } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "EditPassword",
  props: {  },
  components: { },
  setup() {
    const actualPassword = ref();
    const newPassword = ref();
    const repeatNewPassword = ref();
    const store = useStore();
    const focusBoolPassword = ref(false);
    const boolPassword = ref(false);
    const focusBoolNewPassword = ref(false);
    const boolNewPassword = ref(false);
    const focusBoolRepeatNewPassword = ref(false);
    const boolRepeatNewPassword = ref(false);

    const validPassword = () => {
      // Modif user
      // If good just reload page or send emit event to change firstname in myaccount
      // Else bool = true
      // bool.value = true;
    }

    return { actualPassword, newPassword, focusBoolPassword, validPassword, focusBoolNewPassword, boolNewPassword, boolPassword, repeatNewPassword, focusBoolRepeatNewPassword, boolRepeatNewPassword };
  },
});
</script>

<template>
<div class="rounded-2xl flex flex-col gap-4 absolute bg-darkB w-fit h-fit p-5">
  <div>
    <label :class="{'text-mainA': focusBoolPassword, 'text-error': boolPassword}" class="text-10px sm:text-14px w-32" for="email">Actual Password</label>
    <input v-model="actualPassword" @focus="focusBoolPassword = true" @blur="focusBoolPassword = false" :class="{'border-mainA': focusBoolPassword, 'border-error': boolPassword, 'border-darkBorder': !boolPassword}" class="border-2 pl-3 outline-none text-white rounded-2xl text-10px sm:text-16px bg-darkB h-6 sm:h-8 w-40 sm:w-96" id="email" type="email">
  </div>
  <div>
    <label :class="{'text-mainA': focusBoolNewPassword, 'text-error': boolNewPassword}" class="text-10px sm:text-14px w-32" for="email">New Password</label>
    <input v-model="newPassword" @focus="focusBoolNewPassword = true" @blur="focusBoolNewPassword = false" :class="{'border-mainA': focusBoolNewPassword, 'border-error': boolNewPassword, 'border-darkBorder': !boolNewPassword}" class="border-2 pl-3 outline-none text-white rounded-2xl text-10px sm:text-16px bg-darkB h-6 sm:h-8 w-40 sm:w-96" id="email" type="email">
  </div>
  <div>
    <label :class="{'text-mainA': focusBoolRepeatNewPassword, 'text-error': boolRepeatNewPassword}" class="text-10px sm:text-14px w-32" for="email">Repeat New Password</label>
    <input v-model="repeatNewPassword" @focus="focusBoolRepeatNewPassword = true" @blur="focusBoolRepeatNewPassword = false" :class="{'border-mainA': focusBoolRepeatNewPassword, 'border-error': boolRepeatNewPassword, 'border-darkBorder': !boolRepeatNewPassword}" class="border-2 pl-3 outline-none text-white rounded-2xl text-10px sm:text-16px bg-darkB h-6 sm:h-8 w-40 sm:w-96" id="email" type="email">
  </div>
  <div @click="validPassword" class="w-32 h-8 bg-mainA relative rounded-2xl cursor-pointer mx-auto mt-6">
    <p class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Save</p>
  </div>
</div>
</template>
