<template>
  <common-card title="累计销售额" value="¥ 39,574,696">
    <template>
      <div class="compare-wrapper">
        <div class="compare">
          <span>日同比</span>
          <span class="emphasis">31.92%</span>
          <div class="increase" />
        </div>
        <div class="compare">
          <span>月同比</span>
          <span class="emphasis">70.58%</span>
          <div class="decrease" />
        </div>
      </div>
    </template>
    <template v-slot:footer>
      <span>昨日销售额 </span>
      <span class="emphasis"> ¥ 30,000,000</span>
    </template>
  </common-card>
</template>

<script>
// mixins
import commonCardMixin from "../../mixins/commonCardMixin";

export default {
  mixins: [commonCardMixin]
};
</script>

<style lang="scss" scoped>
.compare-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  .compare {
    display: flex;
    align-items: center;
    font-size: 12px;
    margin-top: 3px;
    color: #666;
  }
}
</style>