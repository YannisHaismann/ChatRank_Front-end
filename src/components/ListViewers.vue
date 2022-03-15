<script lang="ts">
import { defineComponent } from "vue";
import moreBtn from "@/assets/more-btn.svg";

export default defineComponent({
  name: "list-viewer",
  components: {},
  setup() {
    return { moreBtn };
  },
});
</script>

<template>
  <div class="h-1/2" id="ListViewers">
    <table
      class="text-white border-2 border-darkBorder h-full w-full bg-darkC inline-block rounded-2xl overflow-hidden mt-5 font-maven-medium"
    >
      <thead class="bg-darkB w-full text-14px h-11 block relative">
        <tr class="absolute left-5 top-1/2 transform -translate-y-1/2">
          <td class="tablet:w-14"></td>
          <td class="tablet:w-52">Username</td>
          <td class="tablet:w-52">Last connection</td>
          <td class="tablet:w-52">Type</td>
        </tr>
      </thead>
      <tbody
        class="w-full text-14px h-12 block relative border-t-2 border-b-2 border-darkBorder"
      >
        <tr class="absolute left-5 top-1/2 transform -translate-y-1/2">
          <td class="tablet:w-14">
            <img src="./../assets/pdp-template.png" />
          </td>
          <td class="tablet:w-52">yesmanGaming</td>
          <td class="tablet:w-52">21/09/21</td>
          <td class="tablet:w-52">Viewer</td>
        </tr>
        <img
          class="absolute w-8 right-4 top-1/2 transform -translate-y-1/2"
          :src="moreBtn"
        />
      </tbody>
    </table>
  </div>
</template>
