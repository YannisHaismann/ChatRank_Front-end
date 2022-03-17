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
    <div class="flex gap-2">
      <img :src="require(`./../../assets/LOL/Champions/${img}`)" alt="">
      <div>
        <p class="text-lg">{{ name }}</p>
        <div class="flex w-24 min-w-6rem h-4">
          <div :id="name + '-win'" class="bg-win text-center rounded-l-2xl">
            <p class="text-12px">{{ win }}w</p>
          </div>
          <div :id="name + '-loose'" class="bg-loose text-center rounded-r-2xl">
            <p class="text-12px">{{ loose }}l</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
