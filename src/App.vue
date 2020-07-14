<template>
  <div id="app" class="container">
    <!-- 头部区域 -->
    <Header-com></Header-com>
    <div class="row">
      <div class="col-md-2">
        <!-- 左侧导航区域 -->
        <Nav-side> </Nav-side>
      </div>
      <div class="col-md-10">
        <!-- 右侧侧导航区域 -->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderCom from "./components/HeaderCom";
import NavSide from "./components/NavSide";

export default {
  components: {
    HeaderCom,
    NavSide
  }
};
</script lang="less">

<style >
</style>
