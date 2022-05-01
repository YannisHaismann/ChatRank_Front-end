<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import $ from "jquery";
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import BackHomeBtn from "@/components/BackHomeBtn.vue";
import LoginInput from "@/components/LoginInput.vue";

export default defineComponent({
  name: "Register",
  props: { },
  components: { BackHomeBtn, LoginInput },
  setup() {
    const store = useStore();
    const router = useRouter();
    const boolEmail = ref(false);
    const boolUsername = ref(false);
    const boolPhone = ref(false);
    const accessToken = ref('');
    const password = ref('');
    const password2 = ref('');

    type User = {
      email: string,
      password: string,
      firstname: string,
      lastname: string,
      username: string,
      type: string,
      sex: string,
      dateOfBirthday: string, //new Date().toISOString().slice(0, 10)
      phoneNumber: string,
      profileImg: string,
    };
    const userInfos = ref({} as User);
    
    //https://id.twitch.tv/oauth2/authorize?client_id=1rsnaxngmvagb1twtd5rdo4d90xepb&redirect_uri=http://localhost:8080/login&response_type=token&scope=user:read:email
    const registerWithTwitch = () => {
      console.log("register with twitch wahouuu")
      window.location.replace('https://id.twitch.tv/oauth2/authorize?client_id=' + store.state.clientId + '&redirect_uri=https://localhost:8080/register&response_type=token&scope=user:edit+user:read:email');
    }
    
    userInfos.value.type = '1';

    const goToLogin = () => {
      router.push('/login');
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
          console.log(data);
          userInfos.value.email = data.email;
          userInfos.value.username = data.display_name;
          userInfos.value.profileImg = data.profile_image_url;
          console.log(userInfos.value);
        }
      })
    }

    const setPassword = (value: string) => {
      password.value = value;
    }
   
    const setPassword2 = (value: string) => {
      password2.value = value;
    }

    const saveAccessToken = () => {
      localStorage.setItem('twitch_access_token', accessToken.value);
      store.state.user.username = userInfos.value.username;
    }

    const registerUserInBdd = () => {
      console.log(userInfos.value.password);
      $.ajax('http://127.0.0.1:8000/apip/users/register', {
        type: "POST",
        data: userInfos.value,
        success: (data: any) => {
          boolEmail.value = false;
          console.log("success");
          console.log(data);
          if(data === true){
            saveAccessToken();
            window.location.replace("https://localhost:8080/login");
          }else{
            console.log(data.length);
            for(let i = 0; i < data.length; i++){
              if(data[i].error == 'invalid email'){
                boolEmail.value = true;
              }else if(data[i].error == 'invalid username'){
                boolUsername.value = true;
              }else if(data[i].error == 'invalid phoneNumber'){
                boolPhone.value = true;
              }
            }
          }
        }
      });
    }

    const register = () => {
      if(password.value && password2.value){
        if(password.value === password2.value){
          userInfos.value.password = password.value;
          registerUserInBdd();
        }
      }
    }

    onMounted(() => {
      let regex = /(#access_token=)(.*)(&scope)/;
      if(router.currentRoute.value.hash){
        accessToken.value = router.currentRoute.value.hash.match(regex)![2];
        console.log(accessToken.value);
        getTwitchUserInfos();
      }
    })

    return { register, setPassword, setPassword2, accessToken, boolEmail, boolUsername, goToLogin, registerWithTwitch, userInfos };
  },
});
</script>

<template>
  <div class="w-full h-full flex bg-gradient-to-tr from-bgLeftColor via-bgMiddleColor to-bgDarkGreen relative z-10" id="login">
    <div class="m-auto w-3/4 h-3/4 flex flex-col gap-3">
      <BackHomeBtn />
      <div class="w-full border-2 border-darkBorder bg-darkC rounded-2xl" id="login_container">
        <p class="text-16px sm:text-24px text-center text-white font-maven-bold mt-6 mb-10">Register</p>
        <div v-if="accessToken" class="mx-auto">
          <div class="bg-purple-500 h-12 sm:h-20 flex rounded-2xl w-1/2 m-auto mb-4" v-if="userInfos">
            <img class="h-8 w-8 sm:w-16 sm:h-16 mt-2 ml-2 rounded-2xl absolute" :src="userInfos.profileImg" alt="">
            <div class="w-2/3 h-full center m-auto flex">
              <p class="text-white center font-maven-medium text-10px sm:text-14px lg:text-18px m-auto">{{ userInfos.username }}</p>
            </div>
          </div>
          <login-input @valueUpdate="setPassword" class="mx-auto sm:mt-5 w-40 sm:w-96" :type="'password'" :name="'Password'"/>
          <login-input @valueUpdate="setPassword2" class="mx-auto sm:mt-5 w-40 sm:w-96" :type="'password'" :name="'Repeat Password'"/>
        </div>
        <div class="mx-auto w-40 sm:w-80">
          <p @click="goToLogin" class="text-white font-maven-medium w-24 sm:w-28 text-10px sm:text-12px mt-2 ml-2 cursor-pointer">Already register ?</p>
        </div>
        <div v-if="!accessToken" class="mx-auto w-40 sm:w-80">
          <p @click="registerWithTwitch" class="w-40 sm:w-80 bg-purple-500 mb-14 text-white font-maven-medium text-center rounded-2xl h-8 sm:h-10 pt-1 sm:pt-1 text-16px sm:text-20px mt-2 sm:mt-4 cursor-pointer">Register twitch</p>
        </div>
        <div v-if="accessToken" class="mx-auto w-40 sm:w-80">
          <p @click="register" class="w-40 sm:w-80 bg-blue-500 mb-14 text-white font-maven-medium text-center rounded-2xl h-8 sm:h-10 pt-1 sm:pt-1 text-16px sm:text-20px mt-2 sm:mt-4 cursor-pointer">Register</p>
        </div>
      </div>
    </div>
    <img class="w-40 sm:w-96 absolute right-1 top-14 sm:top-0 sm:right-10 z-n1" src="./../assets/Cube-1.png" alt="">
    <img class="w-40 sm:w-96 absolute right-0 top-24 sm:right-2 sm:top-24 z-n1" src="./../assets/RoundCube-2.png" alt="">
  </div>
</template>