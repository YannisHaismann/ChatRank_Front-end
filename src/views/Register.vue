<script lang="ts">
import { defineComponent } from "vue";
import $ from "jquery";
import LoginInput from "@/components/LoginInput.vue";


export default defineComponent({
  name: "Register",
  props: { },
  components: { LoginInput },
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
    <div class="w-3/4 h-3/4 border-2 border-darkBorder bg-darkC rounded-2xl m-auto" id="login_container">
      <p class="text-16px sm:text-24px text-center text-white font-maven-bold mt-6">Register</p>
      <div class="w-full px-10 py-2 sm:p-10">
        <div class="flex justify-center sm:justify-between mx-auto h-full flex-wrap flex-row gap-y-4 gap-x-10">
          <login-input class="sm:mt-5 mx-2 w-40 sm:w-96" :type="'email'" :name="'Mail'"/>
          <login-input class="sm:mt-5 mx-2 w-40 sm:w-96" :type="'text'" :name="'First name'"/>
          <login-input class="sm:mt-5 mx-2 w-40 sm:w-96" :type="'text'" :name="'Last name'"/>
          <login-input class="sm:mt-5 mx-2 w-40 sm:w-96" :type="'text'" :name="'Username'"/>
          <login-input class="sm:mt-5 mx-2 w-40 sm:w-96" :type="'password'" :name="'Password'"/>
          <div class="sm:mt-5 mx-2 flex flex-col text-white font-maven-medium">
            <p class="text-10px sm:text-14px">Gender</p>
            <select class="border-2 pl-3 outline-none border-darkBorder text-white rounded-2xl text-10px sm:text-16px bg-darkB h-6 sm:h-8 w-40 sm:w-96">
              <option value="1">Male</option>
              <option value="2">Female</option>
              <option value="3">Neutral Gender</option>
            </select>
          </div>
          <login-input class="sm:mt-5 mx-2 w-40 sm:w-96" :type="'date'" :name="'Birthday date'"/>
          <div class="sm:block hidden flex-auto"></div>
        </div>
      </div>
      <div class="mx-auto w-40 sm:w-80">
        <p class="text-white font-maven-medium w-24 sm:w-28 text-10px sm:text-12px mt-2 ml-2 cursor-pointer">Already register ?</p>
        <p class="w-40 sm:w-80 bg-mainA mb-14 text-white font-maven-medium text-center rounded-2xl h-8 sm:h-10 pt-1 sm:pt-1 text-16px sm:text-20px mt-2 sm:mt-4 cursor-pointer">Register</p>
      </div>
    </div>
    <img class="w-40 sm:w-96 absolute right-1 top-14 sm:top-0 sm:right-10 z-n1" src="./../assets/Cube-1.png" alt="">
    <img class="w-40 sm:w-96 absolute right-0 top-24 sm:right-2 sm:top-24 z-n1" src="./../assets/RoundCube-2.png" alt="">
  </div>
</template>