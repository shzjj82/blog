<template>
  <div class="global-write-card">
    <div class="global-write-nav">
      <div class="global-write-nav-item" v-for="nav in navList" :key="nav.name">
        <div class="icon">
          <i class="iconfont" :class="nav.icon"></i>
        </div>
        <div class="name">{{nav.name}}</div>
      </div>
    </div>
    <div class="global-write-draft">
        <i class="el-icon-edit-outline"></i>
        <div class="nav-text">我的草稿</div>
        <div class="nav-number">3</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      navList: [
        {
          name: "写回答",
          icon: "icon-ceshishenqing",
          route: ""
        },
        {
          name: "写文章",
          icon: "icon-icon_shiyongwendang",
          route: ""
        },
        {
          name: "写想法",
          icon: "icon-wentijieda",
          route: ""
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
@font-face {
  font-family: "iconfont";
  src: url("./font/iconfont.eot");
  src: url("./font/iconfont.eot?#iefix") format("embedded-opentype"),
    url("./font/iconfont.woff2") format("woff2"),
    url("./font/iconfont.woff") format("woff"),
    url("./font/iconfont.ttf") format("truetype"),
    url("./font/iconfont.svg#iconfont") format("svg");
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.icon-ceshishenqing:before {
  content: "\eb61";
}

.icon-icon_shiyongwendang:before {
  content: "\eb91";
}

.icon-wentijieda:before {
  content: "\ec2e";
}


.global-write-card {
  background: #fff;
  .global-write-nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    .global-write-nav-item {
      margin: 23px;
      .icon {
        margin-bottom: 6px;
        color: #8590a6;
        text-align: center;
      }
      .name {
        font-size: 16px;
        color: #444;
      }
    }
  }
  .global-write-draft {
    padding: 0 20px;
    border-top: 1px solid #f0f2f7;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 14px;
    color: #8590a6;
    height: 40px;
    .nav-text{
        margin: 0 10px;
        flex: 1;
    }
    .nav-number{
        padding: 6px 10px;
    }
  }
}
</style>
