<template>
  <div id="headWarp">
    <div class="container-fluid">
      <div class="head clearfix">
        <div class="headLeft" style="width:auto;">
          <img class="headLeftImg" src="../../assets/img/headLeft.gif" />
          <div class="sysName">
            AMS <span>舆情大数据分析系统</span>
          </div>
        </div>
        
        <div class="headRight" >
          <div class="headRight-right">
             <div class="inline">欢 迎 您 ：</div> 系统管理员-testtest
          </div>
          <div id="curr_service_org" style="">
            <div class="inline">服务组织：</div><span>广州天河区2</span>
          </div>
        </div>
      </div>
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
  #headWarp{
    padding:0 100px;
    height:75px;
    background-color: #00124c;
    overflow:hidden;
  }

  #headWarp .head{
    margin: 0 auto;
    width: 100%;
    height: inherit;
    background-color: #00124c;
  }

  #headWarp .head .headLeft{
    width: 750px;
    height: 75px;
    float: left;
    position: relative;
  }

  #headWarp .head .headLeft > .headLeftImg{
    margin-left:-90px;
    float:left;
  }

  #headWarp .head .headLeft .sysName{
    width: 300px;
    height: 48px;
    font-size: 30px;
    font-weight: 600;
    color: #fff;
    position: absolute;
    top: 15px;
    left:0;
  }

  #headWarp .head .headLeft .sysName span{
    font-size: 18px;
    font-weight:normal;
  }

  #headWarp .head .headRight{
    width: 318px;
    height: inherit;
    float: right;
    position:relative;
  }

  #headWarp .head .headRight .headRight-left{
    margin: 5px 0 0 -73px;
    width: 64px;
    height:64px;
    float: left;
    border-radius:32px;
    overflow: hidden;
  }



  #headWarp .head .headRight .headRight-right{
    margin: 24px 0 0 0px;
    width: 160px;
    height: 28px;
    line-height: 28px;
    font-size: 12px;
    color: #fff;
    text-align: left;
    white-space:nowrap;
    overflow: hidden;
    text-overflow:ellipsis;
  }

  /* 后面添加 当前服务组织样式 */
  #curr_service_org{
    position:absolute;
    right:0px;
    width: 160px;
    height: 18px;
    line-height: 18px;
    color: #fff;
    text-align: left;
    white-space:nowrap;
    overflow: hidden;
    text-overflow:ellipsis;
  }

  .headRight-right .inline,
  #curr_service_org .inline{
    display:inline-block;
    vertical-align: middle;
    width:60px;
    height:18px;
    line-height:18px;
    font-size: 12px;
    text-align:right;
  }
</style>
