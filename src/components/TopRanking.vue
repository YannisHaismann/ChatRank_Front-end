<script lang="ts">
import { defineComponent, ref } from "vue";
import ActionsOnViewer from "@/components/ActionsOnViewer.vue"
import $ from "jquery";
import { useStore } from "vuex";
import moreBtn from "@/assets/more-btn.svg";

export default defineComponent({
  name: "TopRanking",
  components: { ActionsOnViewer },
  setup() {
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

    const showModuleActions = (event: Event) => {
      if(event.target){
        $('body').click((e: Event) => {
          if(e.target){
            let target: HTMLElement = e.target as HTMLElement; 
            if(target.classList[0] !== 'moreBtn'){
              boolActions.value = false;
            }
          }
        });
        if(getDevice() === 'phone'){
          $('#ActionsOnViewer').css('top', ($(event.target).position().top + 20) + 'px')
          $('#ActionsOnViewer').css('right',  '-10px')
        } else {
          $('#ActionsOnViewer').css('top', ($(event.target).position().top + 30) + 'px')
          $('#ActionsOnViewer').css('right',  '-10px')
        }

        boolActions.value = true;
      }
    }

    return { showModuleActions, moreBtn, boolActions };
  },
});
</script>

<template>
<div class="w-full h-full relative" id="TopRanking">
  <p class="text-white font-maven-medium ml-3 text-18px">Top ranking</p>
  <btn1 class="top-3 right-10" name="Ranked flex" />
    <table
    class="text-white block border-2 border-darkBorder h-full w-full bg-darkC rounded-2xl font-maven-medium"
  >
    <thead class="bg-darkB w-full text-10px tablet:text-14px h-5 tablet:h-11 block relative rounded-t-2xl">
      <tr class="absolute left-5 top-1/2 transform -translate-y-1/2">
        <td class="w-10 tablet:w-16"></td>
        <td class="w-28 tablet:w-52">Username</td>
        <td class="w-28 tablet:w-52">Ranked solo</td>
        <td class="w-28 tablet:w-52">Ranked flex</td>
      </tr>
    </thead>
    <tbody
      class="w-full text-6px tablet:text-14px h-6 tablet:h-12 block relative border-t-2 border-b-2 border-darkBorder"
    >
      <tr class="absolute left-5 top-1/2 transform -translate-y-1/2">
        <td class="w-10 tablet:w-16">
          <img class="w-4 tablet:w-9" src="./../assets/pdp-template.png" />
        </td>
        <td class="w-28 tablet:w-52 relative"><span class="absolute top-0.5">yesmanGaming</span><span class="absolute top-5 text-10px">pseudo twitch</span></td>
        <td class="w-28 tablet:w-52">Challenger 1340lp</td>
        <td class="w-28 tablet:w-52">Unranked</td>
      </tr>
      <img
        @click="showModuleActions($event)"
        class="moreBtn absolute w-5 tablet:w-8 right-4 top-1/2 transform -translate-y-1/2"
        :src="moreBtn"
      />
      <actionsOnViewer v-show="boolActions" />
    </tbody>
  </table>
</div>
</template>
