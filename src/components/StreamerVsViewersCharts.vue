<script lang="ts">
import { defineComponent, onMounted } from "vue";
import Chart from 'chart.js/auto'
import { useStore } from "vuex";
import $ from "jquery";

export default defineComponent({
  name: "StreamerVsViewersCharts",
  props: {
  },
  setup(props) {
    const store = useStore();

    onMounted(() => {
      const data = {
        labels: ['Viewers'],
        datasets: [{
          data: [10, 22, 10, 14],
          backgroundColor: "red",
          borderWidth: 1,
          tension: 0.1,
          fill: false,
        }]
      };

      const ctx = $('#chart-streamerVsViewers');
      const myChart = new Chart(ctx, {
        type: 'line',
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
                // boxWidth: getDevice() === 'phone' ? 16 : 48,
                // boxHeight: getDevice() === 'phone' ? 4 : 12
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
  <div class="w-full h-full" id="StreamerVsViewersCharts">
    <canvas class="max-w-full max-h-full" id="chart-streamerVsViewers">

    </canvas>
  </div>
</template>

<style scoped lang="scss"></style>
