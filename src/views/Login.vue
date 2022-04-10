<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import LoginInput from "@/components/LoginInput.vue";
import axios from "axios";
import { useRouter } from 'vue-router';
import Exclamation from "@/assets/exclamation.svg";
import BackHomeBtn from "@/components/BackHomeBtn.vue";

export default defineComponent({
  name: "Login",
  props: { },
  components: { LoginInput, BackHomeBtn },
  setup(props, context) {
    const router = useRouter();
    const boolRegisteredMsg = ref(false);
    const mail = ref();
    const password = ref();
    const errorBool = ref(false);

    const sendLogin = () => {
      console.log('sendLogin');

      axios.post('http://127.0.0.1:8000/apip/login', {
        username: mail.value,
        password: password.value,
        
      }).then((response) => {
        console.log("response");
        console.log(response.data);
        var d = new Date();
        var year = d.getFullYear();
        var month = d.getMonth();
        var day = d.getDate();
        var c = new Date(year + 1, month, day);

        document.cookie = "id=" + response.data.id + ";expires=" + c;
        document.cookie = "email=" + response.data.email + ";expires=" + c;
        document.cookie = "password=" + response.data.password + ";expires=" + c;
        document.cookie = "roles=" + response.data.type + ";expires=" + c;

        router.push('/');
      }).catch((error) => {
        errorBool.value = true;
      })

    }

    const updateMail = (value: string) => {
      mail.value = value;
    }

    const updatePassword = (value: string) => {
      password.value = value;
    }

    onMounted(() => {
      if(router.currentRoute.value.params.justRegistered == '0'){
        boolRegisteredMsg.value = true;
      }
    });

    return { sendLogin, boolRegisteredMsg, Exclamation, updateMail, updatePassword, errorBool };
  },
});
</script>

<template>
  <div class="w-full h-full flex bg-gradient-to-tr from-bgLeftColor via-bgMiddleColor to-bgDarkGreen relative z-10" id="login">
    <div class="m-auto flex flex-col gap-3">
      <BackHomeBtn />
      <div class="w-fit h-fit border-2 border-darkBorder bg-darkC rounded-2xl" id="login_container">
        <p class="text-16px sm:text-24px text-center text-white font-maven-bold mt-6">Login</p>
        <div class="sm:w-96 w-full px-10 py-2 sm:p-0 sm:m-10">
          <div v-if="boolRegisteredMsg && !errorBool" class="border-2 border-mainA bg-darkB h-8 rounded flex">
            <img class="-mt-0.5 ml-3 w-1.5" :src="Exclamation" />
            <p class="text-white font-maven-medium text-11px mt-1.5 ml-4">You have been correctly registered</p>
          </div>
          <login-input @valueUpdate="updateMail($event)" class="sm:mt-5 mt-2" :bool="errorBool" :type="'email'" :name="'Mail'"/>
          <login-input @valueUpdate="updatePassword($event)" class="sm:mt-5 mt-2" :bool="errorBool" :errorMsg="'Invalid credentials'" :type="'password'" :name="'Password'"/>
          <p class="text-white font-maven-medium text-10px sm:text-12px mt-2">Forgot your password ?</p>
          <router-link to="register">
            <p class="text-white font-maven-medium text-10px sm:text-12px mt-2">Register ?</p>
          </router-link>
          <p @click="sendLogin" class="bg-mainA mb-14 text-white font-maven-medium text-center rounded-2xl h-8 sm:h-10 pt-1 sm:pt-1 text-16px sm:text-20px mt-6 sm:mt-10 cursor-pointer">Login</p>
        </div>
      </div>
    </div>
    <img class="w-40 sm:w-96 absolute right-1 top-14 sm:top-0 sm:right-10 z-n1" src="./../assets/Cube-1.png" alt="">
    <img class="w-40 sm:w-96 absolute right-0 top-24 sm:right-2 sm:top-24 z-n1" src="./../assets/RoundCube-2.png" alt="">
  </div>
</template>