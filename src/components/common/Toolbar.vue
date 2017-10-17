<template>
  <div class="toolbar-wrap1">
    <div id="right_tools" class="toolbar-wrap">
      <div class="toolbar-tab all-check">
        <em class="tab-text" oper="1">全选</em>
      </div>
      <div class=" toolbar-tab all-delete" >
        <em class="tab-text">批量删除</em> 
      </div>
      <div class=" toolbar-tab all-output-word">
        <em class="tab-text" style="line-height:20px;">批量导出<br>word</em> 
      </div>
      <div class=" toolbar-tab all-output-excel">
        <em class="tab-text" style="line-height:20px;">批量导出<br>excel</em> 
      </div>
      <div class=" toolbar-tab all-recommend" >
        <em class="tab-text">批量推荐</em> 
      </div>
      <div class=" toolbar-tab all-collect">
        <em class="tab-text">批量收藏</em> 
      </div>
      <div class=" toolbar-tab all-cluster"> 
        <em class="tab-text">人工聚类</em> 
      </div>
      <div class=" toolbar-tab all-export" > 
        <em class="tab-text">全部导出</em> 
      </div>
    </div>
    <div class="toolbar-tab text goto-top"> 
      <em class="tab-text">回到顶部</em> 
    </div>
  </div> 
</template>

<script>
  export default {
    name: 'amsHead',
    data () {
      return {
        
      }
    }
  }
</script>

<style scoped>
  .toolbar-wrap1 {
    position: fixed;
    bottom: 70px;
    right: 10px;
    z-index: 1;
    width: 40px;
    background-color:#fff; 
    -webkit-box-shadow:0 0 10px 2px #ced8df;  
   -moz-box-shadow:0 0 10px 2px #ced8df; 
   box-shadow:0 0 10px 2px #ced8df; 
  }

  .toolbar-wrap {
    width: 100%;
  }

  .toolbar-tab {
    position: relative;
    width: 40px;
    height: 40px;
    cursor: pointer;
    color: #666;
    background-image: url("../../assets/img/icon.png");
    background-repeat: no-repeat;
  }

  .toolbar-wrap>div.all-check{
    background-position: 0px 0px;
  }
  .toolbar-wrap>div.all-delete{
    background-position: 0px -42px;
  }
  .toolbar-wrap>div.all-output-word{
    background-position: 0px -84px; 
  }
  .toolbar-wrap>div.all-output-excel{
    background-position: 0px -126px; 
  }
  .toolbar-wrap>div.all-recommend{
    background-position: 0px -168px; 
  }
  .toolbar-wrap>div.all-collect{
    background-position: 0px -210px; 
  }
  .toolbar-wrap>div.all-cluster{
    background-position: 0px -252px; 
  }

  .toolbar-wrap>div.all-export{
    background-position: 0px -294px; 
  }

  .toolbar-wrap1>div.goto-top{
    background-position: 0px -336px;
  }

  .toolbar-wrap>div:hover,
  .toolbar-wrap1>div:hover{
    background-position-x: -40px;
  }

  .tab-text {
    width: 70px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-family: "微软雅黑";
    font-size:12px;
    color: #FFF;
    font-style: normal;
    position: absolute;
    z-index: 1;
    left: 70px;
    top: 0px;
    background-color: #7A6E6E;
    border-radius: 5px 0px 0px 5px;
    transition: left 0.3s ease-in-out 0.1s;
    cursor: pointer;
  }

  .tbar-tab-hover {
    left: -70px;
    background-color: #002f5b;
  }

  .tbar-tab-selected {
    background-color: #002f5b;
  }
</style>
