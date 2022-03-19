<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useStore } from "vuex";
import $ from 'jquery';
import Chart from 'chart.js/auto'

export default defineComponent({
  name: "ViewerWinPercentage",
  props: {
    loose: Number,
    win: Number,
  },
  setup(props) {
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

    onMounted(() => {
      const data = {
        labels: [
          'Win',
          'Loose'
        ],
        datasets: [{
          labels: ['Win', 'percentage'],
          data: [props.win, props.loose],
          backgroundColor: [
            store.state.winColor,
            store.state.looseColor
          ],
          borderWidth: 1,
        }]
      }

     const ctx = $('#chart-winPercentage');
     const myChart = new Chart(ctx, {
       type: 'doughnut',
       data: data,
       options: {
          responsive: true,
          plugins:{
            legend: {
              display: true,
              position: "bottom",
              labels: {
                // fontColor: "#333",
                // fontSize: 16
                boxWidth: getDevice() === 'phone' ? 16 : 48,
                boxHeight: getDevice() === 'phone' ? 4 : 12
              }
            },
          }
       }
     });
    });
    return { props };
  },
});
</script>

<template>
  <div class="veryLargeScreen:w-68 largeScreen:w-60 tablet:w-44 w-24" id="ViewerWinPercentage">
    <canvas class="max-w-full max-h-full" id="chart-winPercentage">

    </canvas>
  </div>
</template>

<style scoped lang="scss"></style>
