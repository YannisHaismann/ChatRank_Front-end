<script lang="ts">
import { defineComponent, ref, watchEffect } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "EditLastName",
  props: {  },
  components: { },
  setup() {
    const lastNameValue = ref();
    const store = useStore();
    const focusBool = ref(false);
    const bool = ref(false);

    const validLastName = () => {
      // Modif user
      // If good just reload page or send emit event to change lastname in myaccount
      // Else bool = true
      bool.value = true;
    }

    watchEffect(() => {
      store.state.user.lastName;
      lastNameValue.value = store.state.user.lastName;
      console.log(lastNameValue.value);
    })

    return { lastNameValue, focusBool, validLastName, bool };
  },
});
</script>

<template>
<div class="rounded-2xl flex flex-col absolute bg-darkB w-fit h-fit p-5">
  <label :class="{'text-mainA': focusBool, 'text-error': bool}" class="text-10px sm:text-14px w-32" for="email">Last Name</label>
  <input v-model="lastNameValue" @focus="focusBool = true" @blur="focusBool = false" :class="{'border-mainA': focusBool, 'border-error': bool, 'border-darkBorder': !bool}" class="border-2 pl-3 outline-none text-white rounded-2xl text-10px sm:text-16px bg-darkB h-6 sm:h-8 w-40 sm:w-96" id="email" type="email">
  <div @click="validLastName" class="w-32 h-8 bg-mainA relative rounded-2xl cursor-pointer mx-auto mt-6">
    <p class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Save</p>
  </div>
</div>
</template>
