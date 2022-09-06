<template>
  <div class="home">
    <top-view />
    <sales-view />
    <bottom-view />
    <map-view />
  </div>
</template>

<script>
// 组件
import TopView from "../components/TopView/index.vue";
import SalesView from '../components/SalesView/index.vue'
import BottomView from '../components/BottomView/index.vue'
import MapView from '../components/MapView/index.vue'

export default {
  name: "Home",
  components: {
    TopView,
    SalesView,
    BottomView,
    MapView
  }
};
</script>

<style scoped>
.home {
  width: 100%;
  height: 100%;
  background-color: #eee;
  padding: 20px;
  box-sizing: border-box;
}
</style>