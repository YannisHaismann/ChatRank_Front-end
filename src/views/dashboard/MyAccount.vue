<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "@/components/Navbar.vue";

export default defineComponent({
  name: "DashboardHome",
  components: {
    Navbar,
  },
  setup() {
    return {};
  },
});
</script>

<template>
  <div id="MyAccount" class="dashboard-home flex flex-auto h-full w-full bg-darkA">
    <navbar :activePage="'MyAccount'" />
    <div class="h-full w-full p-4 tablet:p-10 overflow-y-auto">
      <div class="border-2 bg-darkC h-full border-darkBorder rounded-2xl">
        <div class="relative flex-shrink-0 bg-darkB w-full text-10px border-b-2 border-darkBorder tablet:text-14px h-5 tablet:h-11 block rounded-t-2xl">
          <p class="text-white absolute top-1/2 transform -translate-y-1/2 left-1/2 -translate-x-1/2 font-maven-bold text-10px tablet:text-20px">My account</p>
        </div>
        <div class="p-4 tablet:p-10">
          <div>
            <p class="text-white font-maven-medium text-12px tablet:text-20px">Private informations</p>
            <div class="mt-1 tablet:mt-4 flex flex-wrap gap-4 tablet:gap-24">
              <div class="text-white w-fit tablet:w-fit largeScreen:w-fit font-maven-medium">
                <p class="text-6px tablet:text-10px largeScreen:text-12px">Mail</p>
                <p class="-mt-1 tablet:-mt-2 text-8px tablet:text-base largeScreen:text-lg">yannishaismann@outlook.fr</p>
              </div>
              <div class="text-white w-fit tablet:w-fit largeScreen:w-fit font-maven-medium">
                <p class="text-6px tablet:text-10px largeScreen:text-12px">First name</p>
                <p class="-mt-1 tablet:-mt-2 text-8px tablet:text-base largeScreen:text-lg">Yannis</p>
              </div>
              <div class="text-white w-fit tablet:w-fit largeScreen:w-fit font-maven-medium">
                <p class="text-6px tablet:text-10px largeScreen:text-12px">Last name</p>
                <p class="-mt-1 tablet:-mt-2 text-8px tablet:text-base largeScreen:text-lg">Haismann</p>
              </div>
              <div class="text-white w-fit tablet:w-fit largeScreen:w-fit font-maven-medium">
                <p class="text-6px tablet:text-10px largeScreen:text-12px">Phone</p>
                <p class="-mt-1 tablet:-mt-2 text-8px tablet:text-base largeScreen:text-lg">0762948837</p>
              </div>
              <div class="text-white w-fit tablet:w-fit largeScreen:w-fit font-maven-medium">
                <p class="text-6px tablet:text-10px largeScreen:text-12px">Title</p>
                <p class="-mt-1 tablet:-mt-2 text-8px tablet:text-base largeScreen:text-lg">Premium</p>
              </div>
              <div class="text-white w-fit tablet:w-fit largeScreen:w-fit font-maven-medium">
                <p class="text-6px tablet:text-10px largeScreen:text-12px">Password</p>
                <p class="tablet:-mt-1 text-8px tablet:text-base largeScreen:text-lg">**************</p>
              </div>
            </div>
          </div>
          <div class="my-2 tablet:my-10 bg-darkBorder h-0.5 rounded-2xl">
          </div>
          <div>
            <p class="text-white font-maven-medium text-12px tablet:text-20px">Public informations</p>
            <div class="mt-1 tablet:mt-4 flex flex-wrap gap-10 tablet:gap-24">
              <div class="text-white w-fit tablet:w-fit largeScreen:w-fit font-maven-medium">
                <p class="text-6px tablet:text-10px largeScreen:text-12px">Pseudo</p>
                <p class="-mt-1 tablet:-mt-2 text-8px tablet:text-base largeScreen:text-lg">yesmanGaming</p>
              </div>
              <div class="text-white w-fit tablet:w-fit largeScreen:w-fit font-maven-medium">
                <p class="text-6px tablet:text-10px largeScreen:text-12px">Image</p>
                <img class="w-6 tablet:w-12" src="./../../assets/default-pdp.png"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
