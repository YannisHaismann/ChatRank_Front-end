<script lang="ts">
import { defineComponent } from "vue";
import $ from "jquery";
import FormData from "form-data";


export default defineComponent({
  name: "Register",
  props: { },
  components: { },
  setup() {
    const register = () => {
      // let params = new FormData();
      // params.append('email', "axios@outlook.fr");
      // params.append('password', 'axios123');
      // params.append('firstName', 'axios123');
      // params.append('lastName', "axios123");
      // params.append('username', "axios123");
      // params.append('type', "2");
      // params.append('sex', "2");
      // params.append('dateOfBirthday', new Date().toString());
      // params.append('phoneNumber', "0678928492");

        let params = {
          email: "axios@outlook.fr",
          password: 'axios123',
          firstname: 'axios123',
          lastname: "axios123",
          username: "axios123",
          type: "2",
          sex: "2",
          dateOfBirthday: new Date().toISOString().slice(0, 10),
          phoneNumber: "0678928492",
        }

      $.ajax('http://127.0.0.1:8000/apip/users/register', {
        type: "POST",
        data: params,
      }).done(() => {
        console.log("ENFIN AMDOULA");
      });


    }

    return { register };
  },
});
</script>

<template>
  <div class="w-full h-full flex bg-gradient-to-tr from-bgLeftColor via-bgMiddleColor to-bgDarkGreen relative z-10" id="login">
    <div class="w-fit h-fit border-2 border-darkBorder bg-darkC rounded-2xl m-auto" id="login_container">
      <p class="text-16px sm:text-24px text-center text-white font-maven-bold mt-6">Register</p>
      <div class="sm:w-96 w-full px-10 py-2 sm:p-0 sm:m-10">
        <login-input class="sm:mt-5 mt-2" :type="'email'" :name="'Mail'"/>
        <login-input class="sm:mt-5 mt-2" :type="'password'" :name="'Password'"/>
        <router-link to="register">
          <p class="text-white font-maven-medium text-10px sm:text-12px mt-2">Login ?</p>
        </router-link>
        <p class="bg-mainA mb-14 text-white font-maven-medium text-center rounded-2xl h-8 sm:h-10 pt-1 sm:pt-1 text-16px sm:text-20px mt-6 sm:mt-10 cursor-pointer">Login</p>
      </div>
    </div>
    <img class="w-40 sm:w-96 absolute right-1 top-14 sm:top-0 sm:right-10 z-n1" src="./../assets/Cube-1.png" alt="">
    <img class="w-40 sm:w-96 absolute right-0 top-24 sm:right-2 sm:top-24 z-n1" src="./../assets/RoundCube-2.png" alt="">
  </div>
</template>