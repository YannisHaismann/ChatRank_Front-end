<script>
import { defineComponent, onMounted } from 'vue';
import { useStore } from "vuex";
import $ from "jquery";

export default defineComponent({
  setup() {
    const store = useStore();

    const getTwitchUserInfos = (accessToken) => {
      //https://api.twitch.tv/helix/users
      $.ajax('https://api.twitch.tv/helix/users', {
        type: "GET",
        beforeSend: function(xhr) {
          xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken);
        },
        headers: {
          "Client-ID": store.state.clientId,
        },
        success: (data) => {
          data = data.data[0];
          store.state.user.username = data.display_name;
        }
      })
    }

    async function testBackToken () {
      return new Promise((resolve, reject) => {
        $.ajax(store.state.serverBackIp + '/users/find/pierre51', {
          type: "GET",
          beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', 'Bearer ' + localStorage.getItem('back_token'));
          },
          success: (data) => {
            resolve(data);
          },
          error: (error) => {
            reject(1);
          }
        })
      });
    }

    async function refreshToken () {
      return new Promise((resolve, reject) => {
        $.ajax(store.state.serverBackIp + '/token/refresh', {
          type: "POST",
          dataType: 'json',
          contentType: "application/json; charset=utf-8",
          data: JSON.stringify({
            refresh_token: localStorage.getItem('back_refresh_token'),
          }),
          success: (data) => {
            resolve(data);
          },
          error: (error) => {
            reject(error);
          }
        })
      })
    }

    async function getTwitchInfos() {
      return new Promise((resolve, reject) => {
        $.ajax('https://api.twitch.tv/helix/users', {
          type: "GET",
          beforeSend: function(xhr) {
            xhr.setRequestHeader('Authorization', 'Bearer ' + localStorage.getItem('twitch_access_token'));
          },
          headers: {
            "Client-ID": store.state.clientId,
          },
          success: (data) => {
            resolve(data);
          },
          error: (error) => {
            reject(error);
          } 
        })
      });
    }

    async function updateTokensAndCheckIfLogin() {
      if(localStorage.getItem('twitch_access_token') && localStorage.getItem('back_token')){
        let response;
        try{
          response = await getTwitchInfos();
          try{
            response = await testBackToken();
            return true;
          }catch(error){
            try{
              response = await refreshToken();
              localStorage.setItem('back_token', response.token);
              localStorage.setItem('back_refresh_token', response.refresh_token);
              return true;
            }catch(err){
              console.log(err);
            }
          }
        }catch(e){
          console.log(e);
        }
        return false;
      }
    }

    function parseJwt (token) {
      var base64Url = token.split('.')[1];
      var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));

      return JSON.parse(jsonPayload);
    };

    function updateUserInBdd(id, twitchInfos) {
      return new Promise((resolve, reject) => {
        $.ajax(store.state.serverBackIp + `/users/${id}`, {
          type: "PATCH",
          dataType: 'json',
          contentType: "application/merge-patch+json; charset=UTF-8;",
          data: JSON.stringify({
            "username": twitchInfos.display_name,
            "urlProfileImg": twitchInfos.profile_image_url,
          }),
          beforeSend: function(xhr) {
            xhr.setRequestHeader('Authorization', 'Bearer ' + localStorage.getItem('back_token'));
          },
          headers: {
            "Client-ID": store.state.clientId,
          },
          success: (data) => {
            resolve(data);
          },
          error: (error) => {
            reject(error);
          } 
        })
      });
    }

    function getUserInformations() {
      return new Promise((resolve, reject) => {
        $.ajax(store.state.serverBackIp + `/users/${store.state.tokenDatas.id}`, {
          type: "GET",
          beforeSend: function(xhr) {
            xhr.setRequestHeader('Authorization', 'Bearer ' + localStorage.getItem('back_token'));
          },
          headers: {
            "Client-ID": store.state.clientId,
          },
          success: (data) => {
            resolve(data);
          },
          error: (error) => {
            reject(error);
          } 
        })
      });
    }

    async function updateUserFromTwitchAndConnect() {
      let twitchInfos = await getTwitchInfos();
      twitchInfos = twitchInfos.data[0];

      store.commit('setTokenDatas', parseJwt(localStorage.getItem('back_token')));
      let update = await updateUserInBdd(store.state.tokenDatas.id, twitchInfos);

      let userInformations = await getUserInformations();

      //Changer par data from backend api
      store.state.user.username = userInformations.username;
      store.state.user.email = userInformations.email;
      store.state.user.profileImg = userInformations.urlProfileImg;

      if(userInformations.type == "/public/apip/types/2"){
        store.state.user.type = 2;
      }else{
        store.state.user.type = 1;
      }
      // store.state.user.type = 1;
      store.state.user.firstname = userInformations.firstname;
      store.state.user.lastname = userInformations.lastname;
      store.state.user.sex = userInformations.type;
      store.state.user.dateOfBirthday = userInformations.dateOfBirthday;
      store.state.user.phoneNumber = userInformations.phoneNumber;
    }
    
    onMounted(() => {
      if(updateTokensAndCheckIfLogin()){
        updateUserFromTwitchAndConnect();

        // Update informations in bdd from twitch (username...)
        // Passer en mode connecté
      }
      // if(localStorage.getItem('twitch_access_token')){
      //   getTwitchUserInfos(localStorage.getItem('twitch_access_token'));
      // }
    })

    return {  };
  },
})
</script>


<template>
  <router-view />
</template>

<style lang="scss">
body{
  // width: 100vw;
  height: 100vh;
}
#app {
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
}

*{
  box-sizing: border-box!important;
}
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
}
input:-webkit-autofill {
    -webkit-text-fill-color: white;
    caret-color: white;
}
input:-webkit-autofill:focus {
  -webkit-text-fill-color: white;
  caret-color: white;
}


@font-face {
  font-family: "Maven Black";
  src: url("./assets/fonts/MavenPro-Black.ttf");
}

@font-face {
  font-family: "Maven Bold";
  src: url("./assets/fonts/MavenPro-Bold.ttf");
}

@font-face {
  font-family: "Maven ExtraBold";
  src: url("./assets/fonts/MavenPro-ExtraBold.ttf");
}

@font-face {
  font-family: "Maven Medium";
  src: url("./assets/fonts/MavenPro-Medium.ttf");
}

@font-face {
  font-family: "Maven Regular";
  src: url("./assets/fonts/MavenPro-Regular.ttf");
}

@font-face {
  font-family: "Maven SemiBold";
  src: url("./assets/fonts/MavenPro-SemiBold.ttf");
}
</style>
