<script lang="ts">
import { defineComponent, ref } from "vue";
import BtnOnOff from "@/components/BtnOnOff.vue";
import BtnValidate from "@/components/BtnValidate.vue";
import { useStore } from "vuex";
import $ from "jquery";
import moreBtn from "@/assets/more-btn.svg"
import addLine from "@/assets/addLine.svg"

export default defineComponent({
  name: "Bot",
  components: {
    BtnOnOff,
    BtnValidate
  },
  props: {
  },
  setup(props) {
    const boolActions = ref(false);
    const store = useStore();

    const getDevice = () => {
      if (($(document).height() > store.state.tablet && window.innerHeight > window.innerWidth || $(document).width() > store.state.desktop)) {
        return "tablet";
      } else if($(document).width() > store.state.desktop) {
        return "desktop";
      } else {
        return "phone";
      }
    };

    return { props, boolActions, moreBtn, addLine };
  },
});
</script>

<template>
  <div class="w-full h-full flex" id="Bot">
    <div class="w-3/4 h-5/6 border-2 border-darkBorder rounded-2xl m-auto bg-darkC">
      <div class="relative flex-shrink-0 bg-darkB w-full text-10px border-b-2 border-darkBorder tablet:text-14px h-5 tablet:h-11 block rounded-t-2xl">
        <p class="text-white absolute top-1/2 transform -translate-y-1/2 left-1/2 -translate-x-1/2 font-maven-bold text-10px tablet:text-20px">Bot</p>
      </div>
      <div class="p-4 h-full w-full tablet:p-12 flex flex-col relative">
        <div>
          <p class="text-white font-maven-medium text-12px tablet:text-20px">Informations</p>
          <div class="mt-1 tablet:mt-4 flex">
            <div class="text-white w-20 tablet:w-32 largeScreen:w-40 font-maven-medium">
              <p class="text-6px tablet:text-10px largeScreen:text-12px">Name</p>
              <p class="-mt-1 tablet:-mt-2 text-8px tablet:text-base largeScreen:text-lg">Bot-#536</p>
            </div>
            <div class="text-white w-20 tablet:w-32 largeScreen:w-40 font-maven-medium">
              <p class="text-6px tablet:text-10px largeScreen:text-12px">Status</p>
              <btn-on-off />
            </div>
          </div>
        </div>
        <div class="my-2 tablet:my-10 bg-darkBorder h-0.5 rounded-2xl">
        </div>
        <div>
          <p class="text-white font-maven-medium text-12px tablet:text-20px">Rules</p>
          <div class="mt-4 flex h-full w-full">
            <table
              class="text-white block border-2 border-darkBorder h-full w-full bg-darkC rounded-2xl font-maven-medium"
            >
              <thead class="bg-darkB border-b-2 border-darkBorder w-full text-8px tablet:text-14px h-5 tablet:h-9 block relative rounded-t-2xl">
                <tr class="absolute top-1/2 transform -translate-y-1/2">
                  <td class="w-10 tablet:w-16"></td>
                  <td class="w-28 tablet:w-52">Game</td>
                  <td class="w-28 tablet:w-52">Min-rank</td>
                  <td class="w-28 tablet:w-52">Max-rank</td>
                </tr>
              </thead>
              <tbody
                class="w-full h-full relative block"
              >
                <tr class="block w-full text-6px tablet:text-14px h-6 tablet:h-12 relative border-b-2 border-darkBorder">
                  <td class="w-10 ml-5 tablet:w-16 relative">
                    <img class="w-4 my-0.5 tablet:my-1 mx-auto tablet:w-9" src="./../assets/pdp-template.png" />
                  </td>
                  <td class="w-28 tablet:w-52 relative"><span class="absolute top-1">League Of Legends</span><span class="absolute tablet:top-6 top-2.5 text-5px tablet:text-10px">Ranked Flex</span></td>
                  <td class="w-28 tablet:w-52">Diamond II</td>
                  <td class="w-28 tablet:w-52">None</td>
                  <img
                    class="moreBtn absolute w-5 tablet:w-8 right-4 top-1/2 transform -translate-y-1/2"
                    :src="moreBtn"
                  />
                </tr>
                <tr class="block w-full text-6px tablet:text-14px h-6 tablet:h-12 relative border-b-2 border-darkBorder">
                  <img class="absolute w-4 tablet:w-8 top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2" :src="addLine" alt="">
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="mt-12 tablet:mt-20 relative w-full">
          <btn-validate class="absolute right-0" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
