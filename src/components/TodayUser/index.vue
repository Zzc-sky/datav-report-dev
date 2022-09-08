<template>
  <common-card title="今日交易用户数" value="277,432">
    <template>
      <div id="today-user-chart"></div>
    </template>
    <template v-slot:footer>
      <span>退货率</span>
      <span class="emphasis"> 5.37%</span>
    </template>
  </common-card>
</template>

<script>
// mixins
import commonCardMixin from "../../mixins/commonCardMixin";

export default {
  mixins: [commonCardMixin],
  mounted() {
    this.initEchart();
  },
  methods: {
    initEchart() {
      const dom = document.getElementById("today-user-chart");
      const chart = this.$echarts.init(dom);
      chart.setOption({
        xAxis: {
          show: false,
          type: "category",
          data: [
            "00:00",
            "01:00",
            "02:00",
            "03:00",
            "04:00",
            "05:00",
            "06:00",
            "07:00",
            "08:00",
            "09:00",
            "10:00",
            "11:00",
            "12:00",
            "13:00"
          ],
        },
        yAxis: {
          show: false
        },
        series: [
          {
            type: "bar",
            data: [
              410, 82, 200, 334, 390, 330, 220, 150, 82, 200, 134, 290, 330, 150
            ],
            barWidth: "60%"
          }
        ],
        grid: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        },
        color: ["#3398DB"]
      });
    }
  }
};
</script>

<style lang="scss" scoped>
#today-user-chart {
  width: 100%;
  height: 100%;
}
</style>