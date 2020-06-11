<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
<!--    <markdown-editor></markdown-editor>-->
  </div>
</template>

<script>
  import MarkdownEditor from '@/components/MarkdownEditor'
export default {
  name: 'App',
  // components:{
  //   MarkdownEditor
  // }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
