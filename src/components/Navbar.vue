<script lang="ts">
import { defineComponent } from "vue";
import gsap from "gsap";
import { onMounted } from "vue";

import homeBtn from "@/assets/Home-vector.svg";
import homeBtnFull from "@/assets/Home-vector-FULL.svg";
import statisticsBtn from "@/assets/Stats-vector.svg";
import statisticsBtnFull from "@/assets/Stats-vector-FULL.svg";
import botBtn from "@/assets/bot-vector.svg";
import botBtnFull from "@/assets/bot-vector-FULL.svg";
import myAccountBtn from "@/assets/my-account-vector.svg";
import logoutBtn from "@/assets/logout-vector.svg";

export default defineComponent({
  name: "navbar",
  props: ["activePage"],
  setup(props) {
    const navbarTl = gsap.timeline();

    const openNavbar = (): void => {
      navbarTl.play();
    };

    const closeNavbar = (): void => {
      navbarTl.reverse();
    };

    onMounted(() => {
      navbarTl.to("#navbar", {
        width: "300px",
        duration: 0.2,
      });
      navbarTl.to("#active-gradient", {
        translateX: "188px",
        duration: 0.2,
        delay: -0.2,
      });
      navbarTl.pause(0);
    });

    return {
      openNavbar,
      closeNavbar,
      homeBtn,
      statisticsBtn,
      botBtn,
      botBtnFull,
      myAccountBtn,
      logoutBtn,
      homeBtnFull,
      props,
      statisticsBtnFull,
    };
  },
});
</script>

<template>
  <div
    @mouseenter="openNavbar"
    @mouseleave="closeNavbar"
    class="flex flex-shrink-0 w-28 h-full bg-darkB rounded-r-2xl"
    id="navbar"
  >
    <div
      id="top-icons-list"
      class="container absolute flex flex-col gap-12 top-44 w-28 left-0"
    >
      <div id="home-btn" class="h-16 w-full relative">
        <img
          v-show="activePage === 'Home'"
          id="active-gradient"
          class="absolute right-0 top-0"
          src="./../assets/active-gradient-btn.png"
        />
        <div
          v-show="activePage === 'Home'"
          class="bg-mainA h-full w-1 left-0"
        ></div>
        <img
          v-if="activePage === 'Home'"
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          :src="homeBtnFull"
        />
        <img
          v-else
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          :src="homeBtn"
        />
        <p class="text-white">Dashboard</p>
      </div>

      <div id="statistics-btn" class="h-16 w-full relative">
        <img
          v-show="activePage === 'Statistics'"
          id="active-gradient"
          class="absolute right-0 top-0"
          src="./../assets/active-gradient-btn.png"
        />
        <div
          v-show="activePage === 'Statistics'"
          class="bg-mainA h-full w-1 left-0"
        ></div>
        <img
          v-if="activePage === 'Statistics'"
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          :src="statisticsBtnFull"
        />
        <img
          v-else
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          :src="statisticsBtn"
        />
      </div>

      <div id="bot-btn" class="h-16 w-full relative">
        <img
          v-show="activePage === 'Bot'"
          id="active-gradient"
          class="absolute right-0 top-0"
          src="./../assets/active-gradient-btn.png"
        />
        <div
          v-show="activePage === 'Bot'"
          class="bg-mainA h-full w-1 left-0"
        ></div>
        <img
          v-if="activePage === 'Bot'"
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          :src="botBtnFull"
        />
        <img
          v-else
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          :src="botBtn"
        />
      </div>
    </div>
  </div>
</template>
