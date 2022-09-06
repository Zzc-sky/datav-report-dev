<template>
  <div class="top-view">
    <el-row :gutter="20">
      <el-col :span="6">
        <el-card shadow="hover"> <total-sales /> </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover"> <total-order /> </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover"> <today-user /> </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover"> <total-users /> </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import TotalSales from "../TotalSales/index.vue";
import TotalOrder from "../TotalOrder/index.vue";
import TodayUser from "../TodayUser/index.vue";
import TotalUsers from '../TotalUsers/index.vue'

export default {
  components: {
    TotalSales,
    TotalOrder,
    TodayUser,
    TotalUsers
  }
};
</script>

<style>
</style>