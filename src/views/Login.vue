<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import LoginInput from "@/components/LoginInput.vue";
import axios from "axios";
import { useRouter } from 'vue-router';
import Exclamation from "@/assets/exclamation.svg";

export default defineComponent({
  name: "Login",
  props: { },
  components: { LoginInput },
  setup() {
    const router = useRouter();
    const boolRegisteredMsg = ref(false);

    const sendLogin = () => {
      console.log('sendLogin');

      axios.post('http://127.0.0.1:8000/apip/login', {
        username: 'axios@outlook.fr',
        password: 'axios123',
      })

    }
    onMounted(() => {
      if(router.currentRoute.value.params.justRegistered == '0'){
        boolRegisteredMsg.value = true;
      }
    });

    return { sendLogin, boolRegisteredMsg, Exclamation };
  },
});
</script>

<template>
  <div class="w-full h-full flex bg-gradient-to-tr from-bgLeftColor via-bgMiddleColor to-bgDarkGreen relative z-10" id="login">
    <div class="w-fit h-fit border-2 border-darkBorder bg-darkC rounded-2xl m-auto" id="login_container">
      <p class="text-16px sm:text-24px text-center text-white font-maven-bold mt-6">Login</p>
      <div class="sm:w-96 w-full px-10 py-2 sm:p-0 sm:m-10">
        <div v-if="boolRegisteredMsg" class="border-2 border-mainA bg-darkB h-8 rounded flex">
          <img class="-mt-0.5 ml-3 w-1.5" :src="Exclamation" />
          <p class="text-white font-maven-medium text-11px mt-1.5 ml-4">You have been correctly registered</p>
        </div>
        <login-input class="sm:mt-5 mt-2" :type="'email'" :name="'Mail'"/>
        <login-input class="sm:mt-5 mt-2" :type="'password'" :name="'Password'"/>
        <p class="text-white font-maven-medium text-10px sm:text-12px mt-2">Forgot your password ?</p>
        <router-link to="register">
          <p class="text-white font-maven-medium text-10px sm:text-12px mt-2">Register ?</p>
        </router-link>
        <p @click="sendLogin" class="bg-mainA mb-14 text-white font-maven-medium text-center rounded-2xl h-8 sm:h-10 pt-1 sm:pt-1 text-16px sm:text-20px mt-6 sm:mt-10 cursor-pointer">Login</p>
      </div>
    </div>
    <img class="w-40 sm:w-96 absolute right-1 top-14 sm:top-0 sm:right-10 z-n1" src="./../assets/Cube-1.png" alt="">
    <img class="w-40 sm:w-96 absolute right-0 top-24 sm:right-2 sm:top-24 z-n1" src="./../assets/RoundCube-2.png" alt="">
  </div>
</template>