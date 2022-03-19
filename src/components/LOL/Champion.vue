<script lang="ts">
import { defineComponent, onMounted } from "vue";
import $ from 'jquery';

export default defineComponent({
  name: "Champion",
  props: [ 'name', 'img', 'win', 'loose'],
  setup(props) {
    const percentageCalculate = (win: number, loose: number) => {
      let total = win + loose;
      let final = Math.ceil((win / total) * 100);
      $('#' + props.name + '-win').css('width', final + '%');
      $('#' + props.name + '-loose').css('width', (100 - final) + '%');
    }

    onMounted(() => {
      percentageCalculate(+props.win, +props.loose)
    });
    return { props };
  },
});
</script>

<template>
  <div id="Champion">
    <div class="flex gap-1 tablet:gap-2">
      <img class="w-5 h-5 tablet:w-10 tablet:h-10 largeScreen:w-12 veryLargeScreen:w-14 veryLargeScreen:h-14 xl:h-12" :src="require(`./../../assets/LOL/Champions/${img}`)" alt="">
      <div>
        <p class="text-10px tablet:test-base largeScreen:text-lg">{{ name }}</p>
        <div class="flex h-2 w-10 tablet:w-16 largeScreen:min-w-6rem tablet:h-4">
          <div :id="name + '-win'" class="bg-win text-center rounded-l-2xl">
            <p class="text-6px tablet:text-12px">{{ win }}w</p>
          </div>
          <div :id="name + '-loose'" class="bg-loose text-center rounded-r-2xl">
            <p class="text-6px tablet:text-12px">{{ loose }}l</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
