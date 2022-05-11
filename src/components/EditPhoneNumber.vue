<script lang="ts">
import { defineComponent, ref, watchEffect, onMounted } from "vue";
import { useStore } from "vuex";
import $ from "jquery";

export default defineComponent({
  name: "EditPhoneNumber",
  props: {  },
  components: { },
  setup(props, ctx) {
    const phoneNumberValue = ref();
    const store = useStore();
    const focusBool = ref(false);
    const bool = ref(false);

    const validPhoneNumber = () => {
      let regexPhoneNumber = /(06|07)[0-9]{8}$/;
      if(!phoneNumberValue.value.match(regexPhoneNumber)){
        bool.value = true;
        return;
      }
      console.log(store.state.tokenDatas);
      $.ajax(store.state.serverBackIp + `/users/${store.state.tokenDatas.id}`, {
          type: "PATCH",
          dataType: 'json',
          contentType: "application/merge-patch+json; charset=UTF-8;",
          data: JSON.stringify({
            "phoneNumber": phoneNumberValue.value,
          }),
          beforeSend: function(xhr: any) {
            xhr.setRequestHeader('Authorization', 'Bearer ' + localStorage.getItem('back_token'));
          },
          headers: {
            "Client-ID": store.state.clientId,
          },
          success: (data: any) => {
            store.state.user.phoneNumber = phoneNumberValue.value;
            ctx.emit('close');
          },
          error: (error: any) => {
            console.log("path error")
            console.log(error);
            bool.value = true;
          } 
        })
    }

    watchEffect(() => {
      if(store.state.user.phoneNumber){
        phoneNumberValue.value = store.state.user.phoneNumber;
      }
    })

    onMounted(() => {
      phoneNumberValue.value = store.state.user.phoneNumber;
    })

    return { phoneNumberValue, focusBool, validPhoneNumber, bool };
  },
});
</script>

<template>
<div class="rounded-2xl flex flex-col absolute bg-darkB w-fit h-fit p-5">
  <label :class="{'text-mainA': focusBool, 'text-error': bool}" class="text-10px sm:text-14px w-32" for="email">Phone Number</label>
  <input v-model="phoneNumberValue" @focus="focusBool = true" @blur="focusBool = false" :class="{'border-mainA': focusBool, 'border-error': bool, 'border-darkBorder': !bool}" class="border-2 pl-3 outline-none text-white rounded-2xl text-10px sm:text-16px bg-darkB h-6 sm:h-8 w-40 sm:w-96" id="email" type="email">
  <div @click="validPhoneNumber" class="w-32 h-8 bg-mainA relative rounded-2xl cursor-pointer mx-auto mt-6">
    <p class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Save</p>
  </div>
</div>
</template>
