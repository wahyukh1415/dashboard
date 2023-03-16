<template>
  <div
    class="mx-auto mb-11 bg-white w-full max-w-sm rounded overflow-hidden shadow-lg"
  >
    <div class="flex justify-between font-bold text-sm border-b px-3.5 py-2">
      <p>
        {{ title ? title : '-' }}
      </p>
      <p v-if="title === 'Zone Humidity'">55</p>
    </div>
    <!-- <img class="w-full" :src="img" :alt="title ? title : '-'" /> -->
    <div v-if="type === 'donuts'">
      <apexchart
        type="donut"
        :options="chartOptions"
        :series="series"
      ></apexchart>
    </div>
    <div v-else-if="type === 'bar'">
      <apexchart
        type="bar"
        height="350"
        :options="chartOptionsBar"
        :series="seriesBar"
      ></apexchart>
    </div>
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'

export default {
  components: {
    apexchart: VueApexCharts,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    img: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      series: [44, 55, 41, 17, 15],
      chartOptions: {
        chart: {
          type: 'donut',
        },
        plotOptions: {
          pie: {
            startAngle: -90,
            endAngle: 90,
            offsetY: 10,
          },
        },
        grid: {
          padding: {
            bottom: -80,
          },
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: 'bottom',
              },
            },
          },
        ],
      },

      seriesBar: [
        {
          name: 'Zone',
          data: [2.3, 3.1, 1.4],
        },
      ],
      chartOptionsBar: {
        chart: {
          height: 350,
          type: 'bar',
        },
        plotOptions: {
          bar: {
            borderRadius: 10,
            dataLabels: {
              position: 'top', // top, center, bottom
            },
          },
        },
        dataLabels: {
          enabled: true,
          // eslint-disable-next-line object-shorthand
          formatter: function (val) {
            return val + '%'
          },
          offsetY: -20,
          style: {
            fontSize: '12px',
            colors: ['#304758'],
          },
        },

        xaxis: {
          categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
          ],
          position: 'top',
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          crosshairs: {
            fill: {
              type: 'gradient',
              gradient: {
                colorFrom: '#D8E3F0',
                colorTo: '#BED1E6',
                stops: [0, 100],
                opacityFrom: 0.4,
                opacityTo: 0.5,
              },
            },
          },
          tooltip: {
            enabled: true,
          },
        },
        yaxis: {
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          labels: {
            show: false,
            // eslint-disable-next-line object-shorthand
            formatter: function (val) {
              return val + '%'
            },
          },
        },
        title: {
          text: 'Zone',
          floating: true,
          offsetY: 330,
          align: 'center',
          style: {
            color: '#444',
          },
        },
      },
    }
  },
}
</script>
