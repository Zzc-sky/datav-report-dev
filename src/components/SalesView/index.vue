<template>
  <div class="sales-view">
    <el-card shadow="hover" :body-style="{ padding: '0px 0px 20px' }">
      <template v-slot:header>
        <div class="menu-wrapper">
          <el-menu
            mode="horizontal"
            :default-active="activeIndex"
            @select="onMenuSelect"
            class="sales-view-menu"
          >
            <el-menu-item index="1">销售额</el-menu-item>
            <el-menu-item index="2">访问量</el-menu-item>
          </el-menu>
          <div class="menu-right">
            <el-radio-group v-model="radioSelect" size="small">
              <el-radio-button label="今日"></el-radio-button>
              <el-radio-button label="本周"></el-radio-button>
              <el-radio-button label="本月"></el-radio-button>
              <el-radio-button label="今年"></el-radio-button>
            </el-radio-group>
            <el-date-picker
              v-model="date"
              size="small"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              unlink-panels
              :picker-options="pickerOptions"
              class="sales-view-picker"
            ></el-date-picker>
          </div>
        </div>
      </template>
      <template>
        <div class="sales-view-chart-wrapper">
          <v-chart :options="chartOption" />
          <div class="sales-view-list-wrapper">
            <div class="sales-view-title">排行榜</div>
            <div class="sales-view-list">
              <div class="list-item" v-for="item in rankData" :key="item.no">
                <div :class="['list-item-no', item.no <= 3 ? 'hot-no' : '']">
                  {{ item.no }}
                </div>
                <div class="list-item-name">{{ item.name }}</div>
                <div class="list-item-money">{{ item.money }}</div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      radioSelect: "今日",
      date: "",
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const start = new Date();
              const end = new Date();
              start.setTime(start.getTime() - 3600 * 24 * 1000 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const start = new Date();
              const end = new Date();
              start.setTime(start.getTime() - 3600 * 24 * 1000 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const start = new Date();
              const end = new Date();
              start.setMonth(start.getMonth() - 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      },
      chartOption: {
        title: {
          text: "年度销售业绩数据",
          textStyle: {
            fontSize: 12,
            color: "#666"
          },
          top: 20,
          left: 25
        },
        xAxis: {
          type: "category",
          data: [
            "1月",
            "2月",
            "3月",
            "4月",
            "5月",
            "6月",
            "7月",
            "8月",
            "9月",
            "10月",
            "11月",
            "12月"
          ],
          axisTick: {
            alignWithLabel: true,
            lineStyle: {
              color: "#999"
            }
          },
          axisLine: {
            lineStyle: {
              color: "#999"
            }
          },
          axisLabel: {
            color: "#333"
          }
        },
        yAxis: {
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitLine: {
            lineStyle: {
              type: "dotted",
              color: "#eee"
            }
          }
        },
        series: [
          {
            type: "bar",
            data: [410, 82, 200, 334, 390, 330, 220, 150, 82, 200, 134, 290],
            barWidth: "35%"
          }
        ],
        color: ["#3398DB"],
        grid: {
          top: 70,
          left: 60,
          right: 60,
          bottom: 50
        }
      },
      rankData: [
        {
          no: 1,
          name: "肯德基",
          money: "323,234"
        },
        {
          no: 2,
          name: "麦当劳",
          money: "299,132"
        },
        {
          no: 3,
          name: "肯德基",
          money: "283,998"
        },
        {
          no: 4,
          name: "海底捞",
          money: "266,223"
        },
        {
          no: 5,
          name: "西贝筱面村",
          money: "223,445"
        },
        {
          no: 6,
          name: "汉堡王",
          money: "219,663"
        },
        {
          no: 7,
          name: "真功夫",
          money: "200,997"
        }
      ]
    };
  },
  methods: {
    onMenuSelect(index) {
      this.activeIndex = index;
    }
  }
};
</script>

<style lang="scss" scoped>
.sales-view {
  margin-top: 20px;
  .menu-wrapper {
    position: relative;
    display: flex;
    .sales-view-menu {
      width: 100%;
      padding-left: 20px;
      .el-menu-item {
        height: 50px;
        line-height: 50px;
        margin: 0 20px;
      }
    }
    .menu-right {
      position: absolute;
      right: 20px;

      display: flex;
      align-items: center;
      height: 50px;

      .sales-view-picker {
        margin-left: 20px;
      }
    }
  }
  .sales-view-chart-wrapper {
    display: flex;
    height: 270px;
    .echarts {
      width: 70%;
    }
    .sales-view-list-wrapper {
      height: 100%;
      flex: 1;
      .sales-view-title {
        margin-top: 20px;
        font-size: 12px;
        color: #666;
        font-weight: 500;
      }
      .sales-view-list {
        overflow: hidden;
        margin-top: 15px;

        .list-item {
          display: flex;
          align-items: center;
          font-size: 12px;
          height: 20px;
          padding: 6px 20px 6px 0;
          .list-item-no {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 20px;
            height: 20px;
            color: #333;
            &.hot-no {
              background: #000;
              border-radius: 50%;
              color: #fff;
              font-weight: 500;
            }
          }

          .list-item-name {
            margin-left: 10px;
            color: #333;
          }
          .list-item-money {
            flex: 1;
            text-align: right;
          }
        }
      }
    }
  }
}
</style>