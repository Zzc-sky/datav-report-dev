<template>
  <common-card title="累计用户数" value="1,258,985">
    <template>
      <div id="total-user-chart"></div>
    </template>
    <template v-slot:footer>
      <div class="total-users-footer">
        <span>日同比</span>
        <span class="emphasis">25.87%</span>
        <div class="increase" />
        <span class="month">月同比</span>
        <span class="emphasis">57.33%</span>
        <div class="decrease" />
      </div>
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
      const dom = document.getElementById("total-user-chart");
      const chart = this.$echarts.init(dom);
      chart.setOption({
        xAxis: {
          show: false
        },
        yAxis: {
          type: "category",
          show: false
        },
        series: [
          {
            type: "bar",
            stack: "总量",
            data: [133.5],
            itemStyle: { color: "#45c946" }
          },
          {
            type: "bar",
            stack: "总量",
            data: [250],
            barWidth: 10,
            itemStyle: { color: "#eeeeee" }
          },
          {
            type: "custom",
            stack: "总量",
            data: [133.5],
            renderItem: (params, api) => {
              const value = api.value(0);
              const endPoint = api.coord([value, 0]);
              console.log(endPoint);
              return {
                type: "group",
                children: [
                  {
                    type: "path",
                    position: endPoint,
                    shape: {
                      d: "M65.582671 288.791335l446.417329 446.41733 446.417329-446.41733z",
                      x: -5,
                      y: -20,
                      width: 10,
                      height: 10,
                      layout: "cover"
                    },
                    style: {
                      fill: "#45c946"
                    }
                  },
                  {
                    type: "path",
                    position: endPoint,
                    shape: {
                      d: "M65.582671 735.208665l446.417329-446.41733 446.417329 446.41733z",
                      x: -5,
                      y: 10,
                      width: 10,
                      height: 10,
                      layout: "cover"
                    },
                    style: {
                      fill: "#45c946"
                    }
                  }
                ]
              };
            }
          }
        ],
        grid: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
#total-user-chart {
  width: 100%;
  height: 100%;
}
.total-users-footer {
  display: flex;
  align-items: center;

  .month {
    margin-left: 10px;
  }
}
</style>