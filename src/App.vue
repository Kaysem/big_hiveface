<template>
  <div id="app">
    <router-view></router-view>    
  </div>
</template>

<script>

export default {
  name: 'app',
  data(){
    return{
    }
  },
  mounted:function(){
    let _this = this;
    
  },
  methods:{
  },
  watch:{
  }
}

</script>

<style>
  html , body {
    margin:0;
    padding:0;
    width: 100%;
    height:100%;
    background:#01061e;
    color: #fff !important;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #fff;
    height:100%;
    width:100%;
  }
  .el-scrollbar__wrap {
    overflow-x: hidden;
  }
  .el-scrollbar__bar {
    right: 0;
  }
  .el-scrollbar__thumb{
    background-color: rgba(135,141,153,.9);
  }
  .el-scrollbar__thumb:hover {
    background-color: rgba(135,141,153,1);
  }
</style>
