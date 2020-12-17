<template>
  <div class="chart1">
    <div class="chart_demo" :style="{width:'777px',height:'339px'}"></div>
  </div>
</template>

<script>
export default {
  name: 'Chart',
  mounted() {
    const chartDom = document.querySelector('.chart_demo')
    const chart = this.$echarts.init(chartDom)
    chart.setOption({
      legend: {
        data: ['省直', '市州'],
        right: 0
      },
      xAxis: {
        type: 'category',
        data: ['电子政务外网', '互联网', '专网'],
        show: true,
        axisLabel: {
          show: true,
          textStyle: {
            color: "#ffffff"
          },
        },
        axisTick: {
          show: false
        },
        axisLine: {
          symbol: ['none', 'arrow'],
          lineStyle: {
            color: '#1fece4'
          },
        }
      },
      yAxis: {
        splitLine: { show: false },//网格背景线
        splitNumber: 4,
        axisLabel: {
          show: true,
          textStyle: {
            color: "#ffffff"
          }
        },
        max: 8000,
        type: 'value',
        axisTick: {
          show: false
        },
        axisLine: {
          symbol: ['none', 'arrow'],
          lineStyle: {
            color: '#1fece4'
          }
        }
      },
      series: [
        {
          name: '省直',
          type: 'bar',
          barWidth: 30,
          data: [200, 850, 450],
          stack: '部署',
          color: '#239fff',
        }, {
          color: '#86fff7',
          name: '市州',
          type: 'bar',
          barWidth: 30,
          data: [1400, 4150, 2350],
          itemStyle: {
            barBorderRadius: [50, 50, 0, 0]
          },
          stack: '部署'
        },

      ]

    })
  },
}
</script>

<style>
html {
  background: gray;
}
.echart {
  width: 777px;
  height: 339px;
}
</style>