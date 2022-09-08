<template>
  <t-card>
    <div class="content" :style="colorStyle">
      <icon class="icon" :name="info.icon"> </icon>
      <div class="info">
        <div class="label">{{ info.label }}</div>
        <div class="number">
          <count-to :endVal="info.number" :durations="3000"></count-to>
          <div class="unit">{{ info.unit }}</div>
        </div>
      </div>
    </div>
  </t-card>
</template>

<script>
import { Icon } from "tdesign-icons-vue";
import CountTo from "vue-count-to";

export default {
  name: "InfoCard",
  components: {
    Icon,
    CountTo,
  },
  props: {
    info: {
      type: Object,
      value: null,
    },
  },
  data() {
    return {
      colorStyle: `--info-card-primary-color: ${this.info.color || "blue"}`,
    };
  },
};
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .icon {
    font-size: 30px;
    color: var(--info-card-primary-color);
  }
  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    .label {
      font-size: 14px;
      color: #525151;
    }
    .number {
      display: flex;
      align-items: baseline;
      font-size: 30px;
      color: var(--info-card-primary-color);
      .unit {
        font-size: 16px;
        color: black;
        margin-left: 8px;
      }
    }
  }
}
</style>
