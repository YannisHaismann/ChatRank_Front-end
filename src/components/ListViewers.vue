<script lang="ts">
import { defineComponent, ref, onMounted, watchEffect } from "vue";
import moreBtn from "@/assets/more-btn.svg";
import ActionsOnViewer from "./ActionsOnViewer.vue"
import $ from "jquery";
import { useStore } from "vuex";
import SearchViewer from "@/components/SearchViewer.vue";

export default defineComponent({
  name: "list-viewer",
  props: { viewers: Object },
  components: { ActionsOnViewer, SearchViewer },
  setup(props) {
    const boolActions = ref(false);
    const store = useStore();
    const useViewers = ref();

    const getDevice = () => {
      if (($(document).height() > store.state.tablet && window.innerHeight > window.innerWidth || $(document).width() > store.state.desktop)) {
        return "tablet";
      } else if($(document).width() > store.state.desktop) {
        return "desktop";
      } else {
        return "phone";
      }
    };

    const displayUpdateDate = (date: string) => {
      let removeHourReg = /T.*$/;
      let finalDate = date.replace(removeHourReg, '');
      return finalDate;
    }

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

    const updateUseViewers = (value: any) => {
      useViewers.value = props.viewers;
      useViewers.value = useViewers.value.filter((el: any) => {
        return el.username.startsWith(value);
      });
    }

    watchEffect(() => {
      useViewers.value = props.viewers;
    })

    return { moreBtn, showModuleActions, boolActions, useViewers, displayUpdateDate, updateUseViewers };
  },
});
</script>

<template>
  <div class="tablet:h-1/2 h-1/3 flex-shrink-0 flex flex-col" id="ListViewers">
    <search-viewer @changeValue="updateUseViewers($event.target.value)" />
    <table
      class="text-white block border-2 border-darkBorder h-full w-full bg-darkC rounded-2xl mt-2 tablet:mt-3 font-maven-medium"
    >
      <thead class="bg-darkB w-full text-10px tablet:text-14px h-5 tablet:h-11 block relative rounded-t-2xl">
        <tr class="absolute left-5 top-1/2 transform -translate-y-1/2">
          <td class="w-10 tablet:w-16"></td>
          <td class="w-28 tablet:w-52">Username</td>
          <td class="w-28 tablet:w-52">Last update</td>
          <td class="w-28 tablet:w-52">Type</td>
        </tr>
      </thead>
      <div
        v-for="(viewer, index) in useViewers" :key="viewer.id"
        :class="{'border-t-2': index == 0}"
        class="w-full text-6px tablet:text-14px h-6 tablet:h-12 block relative border-b-2 border-darkBorder"
      >
        <tr class="absolute flex left-5 top-1/2 transform -translate-y-1/2">
          <td class="w-10 tablet:w-16">
            <img class="w-4 tablet:w-9" :src="viewer.url_profile_img" />
          </td>
          <td class="w-28 tablet:w-52 block mt-1.5">{{ viewer.username }}</td>
          <td class="w-28 tablet:w-52 block mt-1.5">{{ displayUpdateDate(viewer.date_of_update) }}</td>
          <td class="w-28 tablet:w-52 block mt-1.5">{{ viewer.type.name }}</td>
        </tr>
        <img
          @click="showModuleActions($event)"
          class="moreBtn absolute w-5 tablet:w-8 right-4 top-1/2 transform -translate-y-1/2"
          :src="moreBtn"
        />
        <actionsOnViewer v-show="boolActions" />
      </div>
    </table>
  </div>
</template>
