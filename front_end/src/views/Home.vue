<template>
  <div class="home-container">
    <main-header></main-header>
    <div class="main inner">
      <el-row :gutter="10">
        <el-col :span="17" class="left">
          <el-menu :default-active="activeIndex" class="el-menu" mode="horizontal">
            <el-menu-item index="1">推荐</el-menu-item>
            <el-menu-item index="2">关注</el-menu-item>
            <el-menu-item index="3">热搜榜</el-menu-item>
          </el-menu>
          <div class="content">
            <router-view></router-view>
          </div>
        </el-col>
        <el-col :span="7">
          <global-write-card />
          <global-write-side-bar />
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import MainHeader from "@/components/mainHeader";
import GlobalWriteCard from '@/components/globalWriteCard';
import GlobalWriteSideBar from '@/components/globalWriteSideBar';
export default {
  name: "home",
  data() {
    return {
      activeIndex: '1'
    };
  },
  components: {
    MainHeader,GlobalWriteCard,GlobalWriteSideBar

  }
};
</script>
<style lang="less" scoped>
.home-container {
  .inner {
    margin: 0 auto;
    width: 1000px;
  }
  .main{
    margin-top: 10px;
  }
  .left{
    background: #fff;
  }
}
</style>

