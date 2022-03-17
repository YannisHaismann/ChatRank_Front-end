<script lang="ts">
import { defineComponent, onMounted } from "vue";

export default defineComponent({
  name: "Champion",
  props: {
    name: String,
    img: String,
    win: Number,
    loose: Number,
  },
  setup(props) {
    const percentageCalculate = (win: number, loose: number) => {
      console.log("On going");
    }

    onMounted(() => {
      percentageCalculate(props.win!, props.loose!)
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
        <div class="flex min-w-6rem h-4">
          <div id="win" class="bg-win text-center rounded-l-2xl">
            <p class="text-12px">{{ win }}w</p>
          </div>
          <div id="loose" class="bg-loose text-center rounded-r-2xl">
            <p class="text-12px">{{ loose }}l</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
