<template>
  <div id="app">
    <header>
      <div height="59">
        <a class="logo">慢一點</a>
      </div>
      <div msg="SettingsHeader">
        <div class="titlebar">
          <div class="container">
            訂單查詢
          </div>
        </div>
      </div>
    </header>
    <div msg="orders">
      orders
    </div>
    <div id="bottomNav" class="bottom_navigation flex_center" msg="footer">
      <div class="container flex_center">
        <a class="current">
          訂單

        </a>
        <a >
          設定
        </a>
      </div>

    </div>
<!--    <el-menu-->
<!--      :default-active="activeIndex2"-->
<!--      class="el-menu-demo"-->
<!--      mode="horizontal"-->
<!--      @select="handleSelect"-->
<!--      background-color="#545c64"-->
<!--      text-color="#fff"-->
<!--      active-text-color="#ffd04b">-->
<!--      <el-menu-item index="1">处理中心</el-menu-item>-->
<!--      <el-submenu index="2">-->
<!--        <template slot="title">我的工作台</template>-->
<!--        <el-menu-item index="2-1">选项1</el-menu-item>-->
<!--        <el-menu-item index="2-2">选项2</el-menu-item>-->
<!--        <el-menu-item index="2-3">选项3</el-menu-item>-->
<!--        <el-submenu index="2-4">-->
<!--          <template slot="title">选项4</template>-->
<!--          <el-menu-item index="2-4-1">选项1</el-menu-item>-->
<!--          <el-menu-item index="2-4-2">选项2</el-menu-item>-->
<!--          <el-menu-item index="2-4-3">选项3</el-menu-item>-->
<!--        </el-submenu>-->
<!--      </el-submenu>-->
<!--      <el-menu-item index="3" disabled>消息中心</el-menu-item>-->
<!--      <el-menu-item index="4">订单管理</el-menu-item>-->
<!--    </el-menu>-->




<!--    <img src="./assets/logo.png" class="blur mask">-->
<!--    <img src="./assets/logo.png" class="blurandmask">-->
    <br/><br/><br/>

    <router-view name="CssTest"></router-view>
<!--    <markdown-editor></markdown-editor>-->
  </div>
</template>

<script>
  import MarkdownEditor from '@/components/MarkdownEditor'
  import ElementUI from 'element-ui';

  export default {
  name: 'App',
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
  // components:{
  //   MarkdownEditor
  // }

}
</script>

<style>
/*#app {*/
/*  font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  text-align: center;*/
/*  color: #2c3e50;*/
/*  margin-top: 60px;*/
/*}*/
#app {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-size: 100%;
  vertical-align: baseline;
}

/*   */
.blur{
  -webkit-filter: blur(5px); /* Chrome, Opera */
  -moz-filter: blur(5px);
  -ms-filter: blur(5px);
  filter: blur(5px);
}

.mask{

  background:rgba(0,0,0,.3);
  /*background:hsla(0,100%,80%,0.5)*/
  /*background:#000; opacity:0.5; */
}
  .blurandmask:hover{
    -webkit-filter: blur(5px); /* Chrome, Opera */
    -moz-filter: blur(5px);
    -ms-filter: blur(5px);
    filter: blur(5px);
    background:rgba(0,0,0,.1);
  }
.titlebar {
  padding: 8px 0;
  text-align: left;
  background: #f3f3f3;
}
.container {
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
}
.titlebar .container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 0 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
header .logo {
  display: inline-block;
  height: 55px;
  padding: 5px 0 0 0;
  margin: 0 auto;
  text-align: center;
}
.editor center, header {
  text-align: center;
}
.flex_center {
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.bottom_navigation, footer {
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
}
.bottom_navigation {
  height: 65px;
  background: #282828;
  z-index: 3;
}
.bottom_navigation {
  background: #f0941d;
}
.flex_center {
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.flex_center, .flex_top {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.bottom_navigation a.current {
  background: #ed8400;
}
#bottomNav{
  top: 747px;
}
</style>
