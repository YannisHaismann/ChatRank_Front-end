<template>
  <router-view />
</template>

<style lang="scss">
html{
  width: 100vw;
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
