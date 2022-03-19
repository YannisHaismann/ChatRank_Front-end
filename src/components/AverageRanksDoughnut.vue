<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useStore } from "vuex";
import $ from 'jquery';
import Chart from 'chart.js/auto'

export default defineComponent({
  name: "AverageRanksDoughnut",
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
        labels: store.state.lolRanks,
        datasets: [{
          data: [10, 10, 10, 10, 10, 10, 10, 10, 10],
          backgroundColor: store.state.lolRanksColor,
          borderWidth: 1,
        }]
      }

     const ctx = $('#chart-averageRanksDoughnut');
     const myChart = new Chart(ctx, {
       type: 'pie',
       data: data,
       options: {
          responsive: true,
          plugins:{
            legend: {
              display: true,
              position: "right",
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
  <div class="w-full h-full" id="AverageRanksDoughnut">
    <canvas class="max-w-full max-h-full" id="chart-averageRanksDoughnut">

    </canvas>
  </div>
</template>

<style scoped lang="scss"></style>
