<script setup lang="ts">
import { onMounted } from 'vue';
import ApexCharts from 'apexcharts';

const renderChart = (chartId: string, label: string, value: number, orMore: boolean = false) => {
  const result = orMore ? `+${value}` : value.toString()

  const options = {
    chart: {
      height: 280,
      type: "radialBar"
    },
    series: [100],
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 15,
          size: "70%"
        },
        dataLabels: {
          showOn: "always",
          name: {
            offsetY: -10,
          },
          value: {
            color: "#111",
            fontSize: "30px",
            show: true,
            formatter: function () {
              return result;
            }
          }
        }
      }
    },
    stroke: {
      lineCap: "round",
    },
    labels: [label],
    fill: {
      colors: ['#f4b03e']
    }
  };

  const chart = new ApexCharts(document.querySelector(chartId), options);
  chart.render();
};

onMounted(() => {
  renderChart("#chart1", "Успешни кампании", 15);
  renderChart("#chart2", "Доброволци", 30, true);
  renderChart("#chart3", "Населени места", 18);
  renderChart("#chart4", "Помогнали сме на", 1000, true);
  renderChart("#chart5", "Години дейност", 12);
});
</script>

<template>
  <section>
    <div class="chart" id="chart1"></div>
    <div class="chart" id="chart2"></div>
    <div class="chart" id="chart3"></div>
  </section>
  <section>
    <div class="chart" id="chart4"></div>
    <div class="chart" id="chart5"></div>
  </section>
</template>

<style scoped>
section {
  display: flex;
}

.chart {
  display: flex;
  height: 200px;
  width: 100%;
  margin-bottom: 20px;
}

@media (max-width: 920px) {
  .chart {
    max-width: 250px;
  }
}

@media (max-width: 750px) {
  section {
    flex-direction: column;
  }
}
</style>
