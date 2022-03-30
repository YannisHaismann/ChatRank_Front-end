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
  <div class="w-full h-full bg-red-400" id="login">
    <div class="flex flex-col" id="login_container">
      <input type="text">
      <input type="text">
      <a href="">Mot de passe oublié</a>
      <p @click="register">S'enregistrer</p>
    </div>
  </div>
</template>