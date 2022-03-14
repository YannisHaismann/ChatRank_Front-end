<script lang="ts">
import { defineComponent } from "vue";
import gsap from "gsap";
import { onMounted } from "vue";
import $ from "jquery";
import { useStore } from "vuex";

import homeBtn from "@/assets/Home-vector.svg";
import homeBtnFull from "@/assets/Home-vector-FULL.svg";
import statisticsBtn from "@/assets/Stats-vector.svg";
import statisticsBtnFull from "@/assets/Stats-vector-FULL.svg";
import botBtn from "@/assets/bot-vector.svg";
import botBtnFull from "@/assets/bot-vector-FULL.svg";
import myAccountBtn from "@/assets/my-account-vector.svg";
import myAccountBtnFull from "@/assets/my-account-vector-FULL.svg";
import logoutBtn from "@/assets/logout-vector.svg";

import IconNavBar from "@/components/Icon-navbar.vue";

export default defineComponent({
  name: "navbar",
  props: ["activePage"],
  components: {
    IconNavBar,
  },
  setup(props) {
    const store = useStore();

    const navbarTl = gsap.timeline();

    const getDevice = () => {
      if ($(document).width() < store.state.md) {
        return "phone";
      } else if ($(document).width() < store.state.lg) {
        return "tablet";
      } else {
        return "desktop";
      }
    };

    const openNavbar = (): void => {
      navbarTl.play();
    };

    const closeNavbar = (): void => {
      navbarTl.reverse();
    };

    onMounted(() => {
      navbarTl.to("#navbar", {
        width: "250px",
        duration: 0.2,
      });
      navbarTl.to("#active-gradient", {
        translateX: "138px",
        duration: 0.2,
        delay: -0.2,
      });
      navbarTl.to(".text-navbar", {
        opacity: 1,
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
      myAccountBtnFull,
      getDevice,
    };
  },
});
</script>

<template>
  <div
    @mouseenter="openNavbar"
    @mouseleave="closeNavbar"
    class="flex flex-shrink-0 justify-around flex-col w-20 md:w-28 h-full bg-darkB rounded-r-2xl overflow-hidden"
    id="navbar"
  >
    <img
      v-show="getDevice() != 'phone'"
      class="w-24 mx-auto"
      src="./../assets/logo.png"
    />
    <div
      id="top-icons-list"
      class="container flex flex-col gap-3 md:gap-12 w-full md:w-28 left-0 mb-4"
    >
      <icon-nav-bar
        :name="'Home'"
        :activePage="activePage"
        :icon="homeBtn"
        :iconFull="homeBtnFull"
      />

      <icon-nav-bar
        :name="'Statistics'"
        :activePage="activePage"
        :icon="statisticsBtn"
        :iconFull="statisticsBtnFull"
      />

      <icon-nav-bar
        :name="'Bot'"
        :activePage="activePage"
        :icon="botBtn"
        :iconFull="botBtnFull"
      />
    </div>
    <div
      class="bg-darkBorder flex-shrink-0 w-5/6 h-0.5 mx-auto rounded-sm"
    ></div>
    <div
      id="bottom-icons-list"
      class="container md:w-28 flex flex-col gap-3 mt-4 md:gap-12 w-full left-0 bg-red"
    >
      <icon-nav-bar
        :name="'My account'"
        :activePage="activePage"
        :icon="myAccountBtn"
        :iconFull="myAccountBtnFull"
      />
      <icon-nav-bar
        :name="'Leave'"
        :activePage="activePage"
        :icon="logoutBtn"
        :iconFull="logoutBtn"
      />
    </div>
  </div>
</template>
