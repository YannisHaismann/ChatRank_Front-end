<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import LoginInput from "@/components/LoginInput.vue";
import axios from "axios";
import { useRouter } from 'vue-router';
import Exclamation from "@/assets/exclamation.svg";
import BackHomeBtn from "@/components/BackHomeBtn.vue";
import { useStore } from "vuex";
import $ from "jquery";

export default defineComponent({
  name: "Login",
  props: { },
  components: { LoginInput, BackHomeBtn },
  setup(props, context) {
    const store = useStore();
    const router = useRouter();
    const boolRegisteredMsg = ref(false);
    const userInfos = ref({
      username: "",
      password: "",
      email: "",
      profileImg: "",
    });
    const errorBool = ref(false);
    const accessToken = ref('');

    const loginWithTwitch = () => {
      window.location.replace('https://id.twitch.tv/oauth2/authorize?client_id=' + store.state.clientId + '&redirect_uri=https://localhost:8080/login&response_type=token&scope=user:edit+user:read:email');
    }

    const sendLogin = () => {
      console.log('sendLogin');
      console.log(userInfos.value.email);
      console.log(userInfos.value.password);

      $.ajax('http://127.0.0.1:8000/apip/login', {
        type: "POST",
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({
          username: userInfos.value.email,
          password: userInfos.value.password,
        }),
        success: (data: any) => {
          console.log("response");
          console.log(data);
          
          // Stock les tokens
          localStorage.setItem('back_refresh_token', data.refresh_token);
          localStorage.setItem('back_token', data.token);
          localStorage.setItem('twitch_access_token', accessToken.value);

          window.location.replace("https://localhost:8080/");
        }
      });

    }

    const updatePassword = (value: string) => {
      userInfos.value.password = value;
    }

    const getTwitchUserInfos = () => {
      //https://api.twitch.tv/helix/users
      $.ajax('https://api.twitch.tv/helix/users', {
        type: "GET",
        beforeSend: function(xhr: any) {
          xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken.value);
        },
        headers: {
          "Client-ID": store.state.clientId,
        },
        success: (data: any) => {
          data = data.data[0];
          userInfos.value.email = data.email;
          userInfos.value.username = data.display_name;
          userInfos.value.profileImg = data.profile_image_url;
          console.log(userInfos.value);
        }
      })
    }

    onMounted(() => {
      let regex = /(#access_token=)(.*)(&scope)/;
      if(router.currentRoute.value.hash){
        accessToken.value = router.currentRoute.value.hash.match(regex)![2];
        console.log(accessToken.value);
        getTwitchUserInfos();
      }
      if(router.currentRoute.value.params.justRegistered == '0'){
        boolRegisteredMsg.value = true;
      }
    });

    return { sendLogin, boolRegisteredMsg, accessToken, loginWithTwitch, Exclamation, updatePassword, errorBool, userInfos };
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
          <!-- <div v-if="boolRegisteredMsg && !errorBool" class="border-2 border-mainA bg-darkB h-8 rounded flex">
            <img class="-mt-0.5 ml-3 w-1.5" :src="Exclamation" />
            <p class="text-white font-maven-medium text-11px mt-1.5 ml-4">You have been correctly registered</p>
          </div> -->
          <div v-if="accessToken && userInfos" class="bg-purple-500 h-12 sm:h-20 flex rounded-2xl w-4/5 m-auto mb-4">
            <img class="h-8 w-8 sm:w-16 sm:h-16 mt-2 ml-2 rounded-2xl absolute" :src="userInfos.profileImg" alt="">
            <div class="w-2/3 h-full center m-auto flex">
              <p class="text-white center font-maven-medium text-10px sm:text-14px lg:text-18px m-auto">{{ userInfos.username }}</p>
            </div>
          </div>
          <login-input v-if="accessToken" @valueUpdate="updatePassword($event)" class="sm:mt-5 mt-2" :bool="errorBool" :errorMsg="'Invalid credentials'" :type="'password'" :name="'Password'"/>
          <p class="text-white font-maven-medium text-10px sm:text-12px mt-2">Forgot your password ?</p>
          <router-link to="register">
            <p class="text-white font-maven-medium text-10px sm:text-12px mt-2">Register ?</p>
          </router-link>
          <p v-if="!accessToken" @click="loginWithTwitch" class="bg-purple-500 mb-14 text-white font-maven-medium text-center rounded-2xl h-8 sm:h-10 pt-1 sm:pt-1 text-16px sm:text-20px mt-6 sm:mt-10 cursor-pointer">Login with twitch</p>
          <p v-if="accessToken" @click="sendLogin" class="bg-mainA mb-14 text-white font-maven-medium text-center rounded-2xl h-8 sm:h-10 pt-1 sm:pt-1 text-16px sm:text-20px mt-6 sm:mt-10 cursor-pointer">Login</p>
        </div>
      </div>
    </div>
    <img class="w-40 sm:w-96 absolute right-1 top-14 sm:top-0 sm:right-10 z-n1" src="./../assets/Cube-1.png" alt="">
    <img class="w-40 sm:w-96 absolute right-0 top-24 sm:right-2 sm:top-24 z-n1" src="./../assets/RoundCube-2.png" alt="">
  </div>
</template>