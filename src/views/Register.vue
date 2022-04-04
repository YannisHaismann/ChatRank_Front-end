<script lang="ts">
import { defineComponent, ref } from "vue";
import $ from "jquery";
import LoginInput from "@/components/LoginInput.vue";
import { useRouter } from 'vue-router';

export default defineComponent({
  name: "Register",
  props: { },
  components: { LoginInput },
  setup() {
    const router = useRouter();
    const boolEmail = ref(false);
    const boolUsername = ref(false);
    const boolPhone = ref(false);

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
    };
    
    const userInfos = ref({} as User);
    userInfos.value.sex = '1';
    userInfos.value.type = '1';

    const register = () => {

      $.ajax('http://127.0.0.1:8000/apip/users/register', {
        type: "POST",
        data: userInfos.value,
        success: (data: any) => {
          boolEmail.value = false;
          console.log("success");
          console.log(data);
          if(data === true){
            router.push('/login/0');
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
    
    const setMail = (email: string) => {
      userInfos.value.email = email;
    }
    
    const setFirstName = (firstname: string) => {
      userInfos.value.firstname = firstname;
    }
    
    const setLastName = (lastname: string) => {
      userInfos.value.lastname = lastname;
    }
    
    const setUsername = (username: string) => {
      userInfos.value.username = username;
    }
    
    const setPassword = (password: string) => {
      userInfos.value.password = password;
    }
    
    const setSex = (sex: string) => {
      userInfos.value.sex = sex;
    }
    
    const setBirthDayDate = (dateOfBirthday: string) => {
      userInfos.value.dateOfBirthday = dateOfBirthday;
    }
    
    const setPhoneNumber = (phoneNumber: string) => {
      userInfos.value.phoneNumber = phoneNumber;
    }

    return { register, setMail, setFirstName, setLastName, setUsername, setPassword, setSex, setBirthDayDate, setPhoneNumber, boolEmail, boolUsername };
  },
});
</script>

<template>
  <div class="w-full h-full flex bg-gradient-to-tr from-bgLeftColor via-bgMiddleColor to-bgDarkGreen relative z-10" id="login">
    <div class="w-3/4 h-3/4 border-2 border-darkBorder bg-darkC rounded-2xl m-auto" id="login_container">
      <p class="text-16px sm:text-24px text-center text-white font-maven-bold mt-6">Register</p>
      <div class="w-full px-10 py-2 sm:p-10">
        <div class="flex justify-center sm:justify-between mx-auto h-full flex-wrap flex-row gap-y-4 gap-x-10">
          <login-input :bool="boolEmail" :errorMsg="'This mail is already used.'" @valueUpdate="setMail" class="sm:mt-5 mx-2 w-40 sm:w-96" :type="'email'" :name="'Mail'"/>
          <login-input @valueUpdate="setFirstName" class="sm:mt-5 mx-2 w-40 sm:w-96" :type="'text'" :name="'First name'"/>
          <login-input @valueUpdate="setLastName" class="sm:mt-5 mx-2 w-40 sm:w-96" :type="'text'" :name="'Last name'"/>
          <login-input :bool="boolUsername" :errorMsg="'This username is already used.'" @valueUpdate="setUsername" class="sm:mt-5 mx-2 w-40 sm:w-96" :type="'text'" :name="'Username'"/>
          <login-input @valueUpdate="setPassword" class="sm:mt-5 mx-2 w-40 sm:w-96" :type="'password'" :name="'Password'"/>
          <div class="sm:mt-5 mx-2 flex flex-col text-white font-maven-medium">
            <p class="text-10px sm:text-14px">Gender</p>
            <select @change="setSex($event.target.value)" class="border-2 pl-3 outline-none border-darkBorder text-white rounded-2xl text-10px sm:text-16px bg-darkB h-6 sm:h-8 w-40 sm:w-96">
              <option selected value="1">Male</option>
              <option value="2">Female</option>
              <option value="3">Neutral Gender</option>
            </select>
          </div>
          <login-input :bool="boolPhone" :errorMsg="'This username is already used.'" @valueUpdate="setPhoneNumber" @change="setBirthDayDate($event.target.value)" class="sm:mt-5 mx-2 w-40 sm:w-96" :type="'date'" :name="'Birthday date'"/>
          <login-input @valueUpdate="setPhoneNumber" class="sm:mt-5 mx-2 w-40 sm:w-96" :type="'tel'" :name="'Phone number'"/>
          <!-- <div class="sm:block hidden flex-auto"></div> -->
        </div>
      </div>
      <div class="mx-auto w-40 sm:w-80">
        <p class="text-white font-maven-medium w-24 sm:w-28 text-10px sm:text-12px mt-2 ml-2 cursor-pointer">Already register ?</p>
        <p @click="register" class="w-40 sm:w-80 bg-mainA mb-14 text-white font-maven-medium text-center rounded-2xl h-8 sm:h-10 pt-1 sm:pt-1 text-16px sm:text-20px mt-2 sm:mt-4 cursor-pointer">Register</p>
      </div>
    </div>
    <img class="w-40 sm:w-96 absolute right-1 top-14 sm:top-0 sm:right-10 z-n1" src="./../assets/Cube-1.png" alt="">
    <img class="w-40 sm:w-96 absolute right-0 top-24 sm:right-2 sm:top-24 z-n1" src="./../assets/RoundCube-2.png" alt="">
  </div>
</template>