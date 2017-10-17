<template>
  <div class="filtrate_box">
    <div class="breadcrumb_box">
      <ol class="_breadcrumb">
        <li>监测</li>
        <li>深圳</li>
        <li>负面</li>
      </ol>
      <div class="_breadcrumb_searchbox clearfix">
        <input type="text" class="search-input">
        <button type="button" class="search-btn"><span class="glyphicon glyphicon-search"></span></button>
      </div>
      <div class="result">
        共<span class="num">1174293</span>件相关信息
      </div>
    </div>
  
    <div class="filtrate-item monitorUnit cssOverflow clearfix">
      <div class="filtrate-name EqAltitude">监测单元：</div>
      <div class="filtrate-content EqAltitude">
        <ul>
          <li><a class="oneLineOverflow" href="javascript::void(0)">深圳深圳1</a></li>
          <li><a class="oneLineOverflow" href="javascript::void(0)">深圳2</a></li>
          <li><a class="oneLineOverflow" href="javascript::void(0)">深圳深圳深圳深圳3</a></li>
          <li><a class="oneLineOverflow" href="javascript::void(0)">深深圳圳4</a></li>
          <li><a class="oneLineOverflow" href="javascript::void(0)">深深圳深圳深圳圳6</a></li>
          <li><a class="oneLineOverflow" href="javascript::void(0)">深圳2</a></li>
          <li><a class="oneLineOverflow" href="javascript::void(0)">深圳深圳深圳深圳3</a></li>
          <li><a class="oneLineOverflow" href="javascript::void(0)">深深圳圳4</a></li>
          <li><a class="oneLineOverflow" href="javascript::void(0)">深圳深圳5</a></li>
          <li><a class="oneLineOverflow" href="javascript::void(0)">深深圳圳4</a></li>
          <li><a class="oneLineOverflow" href="javascript::void(0)">深圳深圳5</a></li>
          <li><a class="oneLineOverflow" href="javascript::void(0)">深深圳深圳深圳圳6</a></li>
        </ul>
      </div>
    </div>
      
    <div class="filtrate-item cssOverflow clearfix">
      <div class="filtrate-name EqAltitude">媒体类型：</div>
      <div class="filtrate-content EqAltitude">
        <a href="javascript::void(0);" class="btn btn-xs btn-link">全部</a>
        <a href="javascript::void(0);" class="btn btn-xs btn-link">微博</a>
        <a href="javascript::void(0);" class="btn btn-xs btn-link">微信</a>
        <a href="javascript::void(0);" class="btn btn-xs btn-link">新闻APP</a>
        <a href="javascript::void(0);" class="btn btn-xs btn-link">论坛</a>
        <a href="javascript::void(0);" class="btn btn-xs btn-link">博客</a>
        <a href="javascript::void(0);" class="btn btn-xs btn-link">报纸</a>
        <a href="javascript::void(0);" class="btn btn-xs btn-link">跟帖</a>
        <a href="javascript::void(0);" class="btn btn-xs btn-link">境外</a>
        <a href="javascript::void(0);" class="btn btn-xs btn-link">Twitter</a>
      </div>
    </div>
      
    <div class="filtrate-item cssOverflow clearfix">
      <div class="filtrate-name EqAltitude">时间范围：</div>
      <div class="filtrate-content EqAltitude">
        <a href="javascript::void(0);" class="btn btn-xs btn-link">24小时</a>
        <a href="javascript::void(0);" class="btn btn-xs btn-link">3天内</a>
        <a href="javascript::void(0);" class="btn btn-xs btn-link">1周内</a>
        <a href="javascript::void(0);" class="btn btn-xs btn-link">1月内</a>
        <a href="javascript::void(0);" class="btn btn-xs btn-link">3月内</a>
        <a href="javascript::void(0);" class="btn btn-xs btn-link">自定义</a>
        <div class="custom_box clearfix">
          <input type="text" class="wdt Wdate" onfocus="var moreEnd=$dp.$('moreEnd');WdatePicker({minDate:'%y-{%M-3}-%d 00:00:00',dateFmt:'yyyy-MM-dd HH:mm',onpicked:function(){moreEnd.focus();},maxDate:'#F{$dp.$D(\'moreEnd\')}'})"> 
          <span>-</span>
          <input type="text" class="wdt Wdate" onfocus="WdatePicker({maxDate:'%y-%M-%d',dateFmt:'yyyy-MM-dd HH:mm',minDate:'#F{$dp.$D(\'moreStart\')}'})">
          <div class="btn-group btn-group-xs">
            <button type="button" class="btn btn-default">确定</button>
            <button type="button" class="btn btn-link">取消</button>
          </div> 
        </div>
      </div>
    </div>
      
    <div class="filtrate-item cssOverflow clearfix">
      <div class="filtrate-name EqAltitude">情感色彩：</div>
      <div class="filtrate-content EqAltitude">
        <a class="btn btn-xs btn-default">负面</a>
        <a class="btn btn-xs btn-default">中性</a>
        <a class="btn btn-xs btn-default">正面</a>
      </div>
    </div>
    
    <div class="filtrate-item cssOverflow clearfix">
      <div class="filtrate-name EqAltitude">信息筛选：</div>
      <div class="filtrate-content EqAltitude">
        <a href="javascript::void(0);" class="btn btn-xs btn-link">过滤后的信息</a>
        <a href="javascript::void(0);" class="btn btn-xs btn-link">全部信息</a>
        <a href="javascript::void(0);" class="btn btn-xs btn-link">垃圾信息</a>
      </div>
    </div>
    
    <div class="filtrate-item cssOverflow clearfix">
      <div class="filtrate-name EqAltitude">相似文章：</div>
      <div class="filtrate-content EqAltitude">
        <a href="javascript::void(0);" class="btn btn-xs btn-link">合并相似</a>
        <a href="javascript::void(0);" class="btn btn-xs btn-link">不合并相似</a>
      </div>
    </div>
    
    <div class="filtrate-bottom-border"></div>
    <div class="filtrateExtra">
      <div class="filtrateExtra-border"></div>
      <a class="filtrateExtra-more"><span class="glyphicon glyphicon-menu-down"></span>更多选项</a>
    </div>
    
    <div class="filter">
      <div class="btn-group btn-group-xs filter_sort">
        <button type="button" class="btn btn-default">热度 <span class="glyphicon glyphicon-arrow-down"></span></button>
        <button type="button" class="btn btn-default">发布时间<span class="glyphicon glyphicon-arrow-down"></span></button>
        <button type="button" class="btn btn-default">采集时间<span class="glyphicon glyphicon-arrow-down"></span></button>
      </div>
      
      <div class="filter_area">
        区域：<span class="region-btn" id="region-btn-0" _myplace="myPlace" _myindex="0"><a href="javascript:;" class="region-change" name="0"><b class="region-ret-0">所有地区 </b></a></span>
      </div>
      
      <div class="btn-group btn-group-xs filter_mode">
        <button type="button" class="btn btn-default"><span class="glyphicon glyphicon-th"></span>表格</button>
        <button type="button" class="btn btn-default"><span class="glyphicon glyphicon-th-list"></span>列表</button>        
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'footer',
    data () {
      return {
        
      }
    }
  }
</script>

<style scoped>
  /* 新版本面包屑样式 */
  .breadcrumb_box{
    padding:6px 6px 6px 20px;
    background-color:#fff;
    position:relative;
  }

  .breadcrumb_box ._breadcrumb{
    margin-bottom:0px;
    display: inline-block;
      vertical-align: middle;
  }
  .breadcrumb_box ._breadcrumb li{
    padding-left:5px;
    display: inline-block;
    font-size:12px;
    color:#666;
  }

  .breadcrumb_box ._breadcrumb li::after{
    margin-left: 5px;
    content:"/";
    font-size:14px;
    color:#aaa; 
  }

  .breadcrumb_box ._breadcrumb .active::after{
    display:none;
  }

  ._breadcrumb_searchbox{
    display: inline-block;
      vertical-align: middle;
      margin-left:10px;
      padding-right:20px;
      padding-top:2px;
      padding-bottom:2px;
      width:120px;
      height:24px;
      border:solid 1px #ccc;
      border-radius:2px;
  }
      
  ._breadcrumb_searchbox .search-input{
    border:none;
    outline:none;
    padding:0 0 0 5px;
    width:100%;
    height:18px;
    font-size:12px;
    color:#333;
    float:left;
  }

  ._breadcrumb_searchbox .search-btn{
    margin-right:-20px;
    border:none;
    outline:none;
    width:20px;
    height:18px;
    font-size:12px;
    color:#666;
    background-color:#fff;
    float:right;
  }

  .breadcrumb_box .result{
    position:absolute;
    top:6px;
    right:6px;
    height:24px;
    line-height:24px;
    font-size:12px;
    color: #999;
  }

  .breadcrumb_box .result .num{
    padding:0 8px;
    font-size:13px;
    color:#666;
  }
   
  /* 新版本面包屑样式 */

  .filtrate-item{
    padding:0 0 0 120px;
    background-color:#fff;
    border-color: #E6E2E1 #E6E2E1 #D1CCC7;
      border-style: solid solid dotted;
      border-width: 0 1px 1px;
  }

  .filtrate-item.monitorUnit{
    border: 2px solid #D1CCC7;
  }

  .filtrate-item .filtrate-name{
    margin-left:-120px;
    padding-left:24px;
    padding-top: 10px;
    width:120px;
    text-align:left;
    float:left;
    font-size:12px;
    color: #B0A59F;
    background-color:#F7F5F5;
  }

  .filtrate-item .filtrate-content{
    padding-right: 25px;
      padding-left: 25px; 
    position: relative;
      float: left;
      background-color: #FFF;
      width: 100%;
      padding-top: 6px;
      overflow: hidden;
  }

  .filtrate-item.monitorUnit .filtrate-content{
    padding-top: 10px;
  }

  .filtrate-item .filtrate-content ul{
     position: relative;
      overflow: hidden;
      max-height: 60px;
  }

  .filtrate-item .filtrate-content ul li{
    margin: 0 8px 8px 0;
      float: left;
      height: 22px;
      line-height: 22px;
  }


  .filtrate-item .filtrate-content ul li a{
      position: relative;
      color: #806F66;
      max-width: 150px;
      display: inline-block;
      padding: 1px 20px 1px 4px;
      line-height: 20px;
      height: 20px;
      position:relative;
  }

  /* .filtrate-item .filtrate-content a::before{
    content:"2";
    position:absolute;
    right:0;
    top:0;
    padding:2px 4px;
    height:16px;
    line-height:12px;
    font-size:12px;
    color:#fff;
    border-radius:8px;
    background-color:#f00;
  } */

  .filtrate-item .filtrate-content ul li a:hover{
    color:#f00;
  }

  .filtrate-item .filtrate-content .btn{
    margin-bottom:5px;
    color: #806F66;
    position:relative;
  }
      
  .filtrate-bottom-border{
    position: relative;
      top: -1px;
      border-top: 1px solid #D1CCC7;
      height: 0;
      overflow: hidden;
  } 

  .filtrateExtra{
    display: block;
      height: 29px;
      position: relative;
      top: -1px;
  }

  .filtrateExtra .filtrateExtra-border{
    background: #EFEBEA;
      border: 1px solid #EBE4DE;
      border-top: none;
      display: block;
      font-size: 0;
      height: 4px;
      line-height: 2px;
      overflow: hidden;
  }

  .filtrateExtra .filtrateExtra-more{
    background-color: #EFECEB;
      border-color: #EFECEB #E6E2E1 #E6E2E1;
      border-style: solid;
      border-width: 1px;
      position: absolute;
      top: 4px;
      right: 0;
      z-index: 1;
      display: block;
      height: 16px;
      width: 85px;
      color: #806F66;
      font-size: 12px;
      line-height: 14px;
      vertical-align: middle;
      cursor: pointer;
  }


  .filter{
    margin: 10px 0;
      background: #faf9f9;
      color: #806f66;
  }

  .filter .filter_area{
    padding:0 5px;
    position: relative;
      display: inline-block;
      vertical-align: middle;
    height:28px;
    line-height:26px;
    font-size:12px;
    border: 1px solid #ccc;
  }

  .filter .btn-group-xs .btn{
    padding-top: 4px;
    padding-bottom: 4px;
    color: #806f66;
    border-radius:0;
  }

  .filter .filter_area{
    color: #B0A59F;
  }   

  .filter .region-btn .region-ret-0{
    color: #806f66;
    font-weight:normal;
  }

  .filter .filter_sort .glyphicon{
    transform:scale(0.8,0.8);
    -ms-transform:scale(0.8,0.8);   /* IE 9 */
    -moz-transform:scale(0.8,0.8);  /* Firefox */
    -webkit-transform:scale(0.8,0.8); /* Safari 和 Chrome */
    -o-transform:scale(0.8,0.8);
  }

  .filter .filter_mode .glyphicon{
    margin-right:2px;
  }


  .filter .filter_result{
    padding:0 5px;
    position: relative;
      display: inline-block;
      vertical-align: middle;
    height:28px;
    line-height:26px;
    font-size:12px;
    border: 1px solid #ccc;
  }


  /* 自定义时间 */
  .custom_box{
    margin-bottom:6px;
      vertical-align: middle;
      height:24px;
      border:solid 1px #ccc;
      display:none;
  }

  .custom_box_show{
    display: inline-block;
  }

  .custom_box .wdt{
    display: block;
      float: left;
      padding:0 2px;
      width: 124px;
      height: 22px;
      line-height: 22px;
      font-size:12px;
      color:#806F66;
      border: none;
      outline:none;
      cursor: text;
  }

  .custom_box span{
    display: block;
    float: left;
    width:10px;
    text-align:center;
    height:22px;
    border-left:solid 1px #ccc;
    border-right:solid 1px #ccc;
    background-color:#eee;
  }

  .custom_box .btn-group .btn{
    margin-bottom:0;
    padding-top:2px;
    padding-bottom:2px;
    border-radius:0;
    border-top:none;
    border-bottom:none;
  }
</style>
