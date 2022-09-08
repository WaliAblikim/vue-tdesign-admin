<template>
  <div class="container">
    <t-row :gutter="22">
      <t-col v-for="(card, index) in cards" :key="index + 1" :span="3">
        <info-card :info="card"></info-card>
      </t-col>
    </t-row>
    <t-row>
      <t-col :span="12">
        <t-card class="chart-card">
          <div class="charts">
            <dv-charts :option="option"></dv-charts>
          </div>
        </t-card>
      </t-col>
    </t-row>
  </div>
</template>

<script>
import InfoCard from "@/components/infoCard";

export default {
  name: "Dashboard",
  components: { InfoCard },
  data() {
    return {
      cards: [
        {
          icon: "user",
          label: "新增用户",
          color: "#40c9c6",
          number: 195,
          unit: "位",
        },
        {
          icon: "chat",
          label: "今日消息",
          color: "#36a3f7",
          number: 99,
          unit: "个",
        },
        {
          icon: "money-circle",
          label: "营业额",
          color: "#f4516c",
          number: 365454,
          unit: "元",
        },
        {
          icon: "cart",
          label: "订单数",
          color: "#34bfa3",
          number: 295,
          unit: "个",
        },
      ],
      option: {
        title: {
          text: "畅销占比饼状图",
        },
        series: [
          {
            type: "pie",
            data: [
              { name: "新增用户", value: 195 },
              { name: "今日消息", value: 99 },
              { name: "营业额", value: 365 },
              { name: "订单数", value: 295 },
            ],
            insideLabel: {
              show: true,
            },
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.t-row {
  margin-bottom: 24px;
}
.charts {
  width: 100%;
  height: 500px;
}
</style>
