<template>
  <div id="mainPage">
    <div id="sectionDiv">
      <div class="row cssOverflow module-group">        
      <div class="col-md-6 module-box">
            <div class="panel panel-default module">
                <div class="panel-heading module-hd clearfloat">
                    <div class="box-hd-left clearfix">
                        <span class="hd-left-name oneLineOverflow">微信热点</span>
                    </div>
                    <div class="box-hd-center clearfloat">
                      <a href="javascript:;" onclick="jumpToMonitor(4, '63')">微信
                        <span class="number" style="" id="site_unread_num_63">999+</span>
                      </a>
                      <a href="javascript:;" onclick="jumpToMonitor(4, '64')">5555555555
                        <span class="number" style="display: none;" id="site_unread_num_64">0</span>  
                      </a>
                      </div>
                    <div class="box-hd-right">
                        <div class="btn-group btn-group-sm">
                            
                            <button class="btn btn-sm btn-link downOpen xs">
                                <span class="glyphicon glyphicon-menu-down symbol"></span>
                            </button>
                            
                            <button class="btn btn-sm btn-link downOpen sq" style="display: none;">
                                <span class="glyphicon glyphicon-menu-down symbol"></span>
                            </button>
                                            
                                <button class="btn btn-sm btn-link" title="点击查看更多" onclick="jumpToMonitor(4)">
    
                                <span class="glyphicon glyphicon-option-horizontal"></span>
                            </button>
                            
                        </div>
                    </div>
                </div>
                <div class="panel-body module-content checkBox" style="height:510px;overflow:hidden;">
                    <div class="content-scorll-box" saveposition="static" style="position: static;">
                        <ul id="section_art_list_4" thismids="100218"><li class="module-content-no-number"></li></ul>
                    </div>
                </div>
            </div>
        </div>        
        <div class="col-md-6 module-box"> <!-- EqAltitude -->
            <div class="panel panel-default module">
                <div class="panel-heading module-hd clearfloat">
                    <div class="box-hd-left clearfix">
       
                        <span class="hd-left-name oneLineOverflow">重点党媒热点</span>
                    </div>
                    <div class="box-hd-center clearfloat">
                      </div>
                    <div class="box-hd-right">
                        <div class="btn-group btn-group-sm">
                            
                            <button class="btn btn-sm btn-link downOpen xs">
                                <span class="glyphicon glyphicon-menu-down symbol"></span>
                            </button>
                            
                            <button class="btn btn-sm btn-link downOpen sq" style="display: none;">
                                <span class="glyphicon glyphicon-menu-down symbol"></span>
                            </button>
                                            
                                <button class="btn btn-sm btn-link" title="点击查看更多" onclick="jumpToMonitor(31)">
    
                                <span class="glyphicon glyphicon-option-horizontal"></span>
                            </button>
                            
                        </div>
                    </div>
                </div>
                <div class="panel-body module-content checkBox" style="height:510px;overflow:hidden;">
                    <div class="content-scorll-box" saveposition="static" style="position: static;">
                        <ul id="section_art_list_31" thismids="100218"><li class="module-content-no-number"></li></ul>
                    </div>
                </div>
            </div>
        </div></div><div class="row cssOverflow module-group">        
        <div class="col-md-6 module-box"> <!-- EqAltitude -->
            <div class="panel panel-default module">
                <div class="panel-heading module-hd clearfloat">
                    <div class="box-hd-left clearfix">

                        <span class="hd-left-name oneLineOverflow">微博热点</span>
                    </div>
                    <div class="box-hd-center clearfloat">
                      </div>
                    <div class="box-hd-right">
                        <div class="btn-group btn-group-sm">
                            
                            <button class="btn btn-sm btn-link downOpen xs">
                                <span class="glyphicon glyphicon-menu-down symbol"></span>
                            </button>
                            
                            <button class="btn btn-sm btn-link downOpen sq" style="display: none;">
                                <span class="glyphicon glyphicon-menu-down symbol"></span>
                            </button>
                                            
                                <button class="btn btn-sm btn-link" title="点击查看更多" onclick="jumpToMonitor(32)">
    
                                <span class="glyphicon glyphicon-option-horizontal"></span>
                            </button>
                            
                        </div>
                    </div>
                </div>
                <div class="panel-body module-content checkBox" style="height:510px;overflow:hidden;">
                    <div class="content-scorll-box" saveposition="static" style="position: static;">
                        <ul id="section_art_list_32" thismids="100218"><li class="module-content-no-number"></li></ul>
                    </div>
                </div>
            </div>
        </div></div></div>
      <div id="subjectMonitor" class="row cssOverflow module-group">
        <div class="col-sm-12 module-box"> <!-- EqAltitude -->
          <div class="panel panel-default module">
            <div class="panel-heading module-hd clearfloat">
              <div class="box-hd-left">
                <span>专题监测</span>
              </div>
              <div class="box-hd-center clearfloat">
      
              </div>
              <div class="box-hd-right">
                <div class="btn-group btn-group-sm">
                  <button id="event_subject_jump_btn" class="btn btn-sm btn-link">
                    <span class="glyphicon glyphicon-option-horizontal"></span>
                  </button>
                </div>
              </div>
            </div>
            
            <div class="panel-body module-content clearfloat">
              
              <!-- 左边热点专题列表 -->
              <div class="box-content-left hot-subject">
                <!-- 背景 -->
                <div class="hot-subject_border"></div>

                <div class="hot-subject_hd">热点专题</div>
                <ul class="top10" id="event_subject"><li class="top10Li active"><a href="javascript:;" onclick="loadSubjectHotArt(this,243)">上海闵行</a></li><li class="top10Li"><a href="javascript:;" onclick="loadSubjectHotArt(this,233)">十九大</a></li><li class="top10Li"><a href="javascript:;" onclick="loadSubjectHotArt(this,111)">YY</a></li><li class="top10Li"><a href="javascript:;" onclick="loadSubjectHotArt(this,219)">央广网</a></li><li class="top10Li"><a href="javascript:;" onclick="loadSubjectHotArt(this,109)">玩玩</a></li><li class="top10Li"><a href="javascript:;" onclick="loadSubjectHotArt(this,156)">陈村1</a></li><li class="top10Li"><a href="javascript:;" onclick="loadSubjectHotArt(this,149)">深圳市委S</a></li><li class="top10Li"><a href="javascript:;" onclick="loadSubjectHotArt(this,157)">KS</a></li><li class="top10Li"><a href="javascript:;" onclick="loadSubjectHotArt(this,123)">20170526</a></li><li class="top10Li"><a href="javascript:;" onclick="loadSubjectHotArt(this,106)">深圳</a></li></ul>
              </div>
          
              <!-- 右边信息列表 -->
              <div class="box-content-right hot-subject-list" saveposition="static" style="position: static;">
                <div class="subject-list-hd">上海闵行</div>
                
                <ul class="newsItems" id="subjectArtList"><li class="module-content-no-number"></li></ul>
              </div>
            </div>
            <div class="box-bottom"></div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'monitor',
    data () {
      return {

      }
    },
    methods: {

    }
  }
</script>

<style scoped>

  #mainPage{
    margin-top:20px;
    padding:0 80px;
    width:auto;
  }

  #mainPage .module-group{
    margin-left:0;
    margin-right:0;
  }


  #mainPage .module-group .module-box{
    border-radius: 5px 5px 0 0;
    margin-bottom:20px;
    padding-left:10px;
    padding-right:10px;
  }

  .module{
    margin-bottom:0px;
    width:100%;
    border:none;
    webkit-box-shadow: none; 
      box-shadow: none;
  }

  .module .module-hd{
    padding: 0 90px 0 165px;
    width: 100%;
    line-height: 40px;
    background-color: #fff;
    border-radius: 5px 5px 0 0;
    border-bottom: solid 1px #e4e8eb;
  }

  .module .module-hd .box-hd-left{
    margin-left: -165px;
    width: 125px;
    padding-left: 45px;
  /*  padding-right: 15px; */
    background-color:#426280 ;
    border-radius: 5px 0 0 0;
    font-size: 16px;
    color: #fff;
    position: relative;
    float: left;
  }

  .module .module-hd .box-hd-left::before{
    content: "";
    position: absolute;
    top: 0;
    right: -40px;
    bottom: 0;
    width: 40px;
    height:40px;
    border-top: 40px solid #426280;
    border-right: 30px solid transparent;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
  }

  .module .module-hd .box-hd-left > img{
    float: left;
    margin:10px 0 0 -25px ;
  }

  .module .module-hd .box-hd-left > span.hd-left-name{
    width:100%;
    float:left;
  }



  .module .module-hd  .box-hd-center{
    width: 100%;
    height:40px;
    line-height: 40px;
    overflow:hidden;
    border-radius: 0 5px 0 0;
    float: left;
    font-size: 0;
    position:relative;
    transition: All 0.4s ease-in-out;
      -webkit-transition: All 0.4s ease-in-out;
      -moz-transition: All 0.4s ease-in-out;
      -o-transition: All 0.4s ease-in-out;
  }

  .module .module-hd  .box-hd-center.active{
    height:80px;
    overflow-y:hidden;
  }

  .box-hd-center a{
    margin: 0 10px;
    display: inline-block;
    position: relative;
    font-size:13px;
    color:#333;
  }

  .box-hd-center a > .number{
    position: absolute;
    top: 2px;
    right: -13px;
    min-width: 18px;
    padding: 0 2px;
    height: 16px;
    line-height: 16px;
    border-radius: 8px;
    text-align: center;
    background-color: #f00;
    font-size: 12px;
    color: #fff;
  }

  .box-hd-center a .center-pic{
    vertical-align: middle;
  }



  /* 头部右边 */
  .module .module-hd .box-hd-right{
    margin-right: -90px;
    width: 90px;
    height: 40px;
    line-height: 40px;
    font-size: 0px;
    text-align: right;
    float: right;
  }

  .module .module-hd .box-hd-right .glyphicon-menu-down{
    font-size:14px;
    top: 8px;
  }

  .module .module-hd .box-hd-right .glyphicon-option-horizontal{
    font-size:24px;
    top: 6px;
  }

  /* 头部右边 */


  /*列表内容区*/
  .module .module-content{
    background-color: #fff;
    height:460px;
    overflow:hidden;
  }

  .module .module-content li.module-content-no-number{
    width: 100%;
      height: 500px;
      background-color: #fff;
      /* background-image: url(../../common/img/NoData.gif); */
      /*background-image: url(../../common/img/no-data.png);*/
      background-repeat: no-repeat;
      /* background-size: 200px 150px; */
      background-size: 372px 420px;
      background-position: center 50px;
      position:relative;
  }

  .module-content > div.content-scorll-box{
    width:100%;
    height:510px;
    overflow:hidden;
  }


  .module-content > div.content-scorll-box > ul > li{
    margin-bottom: 15px;
  }

  .module-content > div.content-scorll-box > ul > li:last-child{
    margin-bottom:0px;
  }

  .module-content .liTop{
    padding: 0 80px 0 45px;
    height: 24px;
    line-height: 24px;  
  }

  .module-content .liTop .liTop-left{
    margin-left: -45px;
    width: 45px;
    line-height: 24px;
    text-align: center;
    font-size: 0;
    float: left;
    position: relative;
  }

  .module-content .liTop .liTop-left::before{
    content: "";
    position: absolute;
    top:10px;
    left: 2px;
    width: 4px;
    height: 4px;
    border-radius: 2px;
    background-color: #cccccc;
  }

  .module-content .liTop .liTop-left a{
    display: inline-block;
    width:20px;
    height:20px;
  }

  .module-content .liTop .liTop-left a > img{
    vertical-align: middle;
    width:20px;
    height:20px;
  }



  .module-content .liTop .liTop-center{
    width: 100%;
    height:24px;
    line-height: 24px;
    float: left;
  }

  .module-content .liTop .liTop-center a{
    font-size: 15px;
    font-weight: 500;
    color: #000;
  }

  .module-content .liTop .liTop-right{
    margin-right: -80px;
    width: 80px;
    height: 24px;
    line-height: 24px;
    float: right; 
    text-align: right;
  }


  .module-content .liTop .liTop-right .btn-group{
    padding:2px 0;
  }

  .module-content .liTop .liTop-right .btn-group > .btn{
    padding:0 4px;
    color:#666;
  }

  .module-content .liTop .liTop-right .btn-group > .btn.active{
    color:#005ac8;
  }

  .module-content .liTop .liTop-right .btn-group > .btn.stick .iconfont{
    font-size:16px;
  }

  .module-content .liTop .liTop-right .btn-group > .btn.save .iconfont{
    font-size:14px;
  }

  .module-content .liTop .liTop-right .btn-group > .btn.delete .iconfont{
    font-size:16px;
  }







  .module-content > ul > li:hover .liTop-left::before{
    background-color:#2856b6 ;
  }

  .module-content > ul > li:hover .liTop-center a{
    color: #2856b6;
  }



  .module-content .liBottom{
    padding: 0 80px 0 45px;
    height: 24px;
    line-height: 24px;
  }

  .module-content .liBottom .time,
  .module-content .liBottom .source{
    max-width: 33%;
    padding-right:15px;
    font-size: 12px;
    color: #999;
    float: left;
  }


  .module-content .liBottom .author{
    padding-right:24px;
    max-width: 33%;
    float: left;
  }

  .module-content .liBottom .author .author-name{
    width:100%;
    font-size: 12px;
    color: #999;
    float:left;
  }

  .module-content .liBottom .author .detector{
    margin-right:-20px;
    margin-top: 6px;
    width:12px;
    height:12px;
    float:right;
  }




  /* 专题监测 */
  #mainPage #subjectMonitor{
    margin:0;
    padding:0;
    width:100%;
  }

  #mainPage #subjectMonitor .module-box{
    margin:0;
    width:100%;
    transform: translate(0px,0);
    -ms-transform: translate(0px,0);
    -webkit-transform: translate(0px,0);
  }

  #mainPage #subjectMonitor .module-content{
    padding:0 0 0 300px;
    height: auto;
      overflow: hidden;
      position:relative;
  }

  #subjectMonitor .module-content .box-content-left{
    margin-left:-300px;
    padding-top:20px;
    padding-left:25px;
    padding-bottom:60px;
    width:300px;
    min-height:300px;
  /*  border-right:solid 2px #e4e8eb;  */
    float:left;
    background-color:#fff;
    position:relative;
  }


  #subjectMonitor .module-content .box-content-left .hot-subject_border{
    width:100%; 
    height:999em; 
    position:absolute; 
    left:0; 
    top:0;
    background-color:#fff; 
    border-right:2px solid #e4e8eb;
  }

  #subjectMonitor .module-content .box-content-left .hot-subject_border::before{
    content:"";
    width:1px;
    background-color:#91a3c9;
    position:absolute;
    top:0;
    bottom:0;
    left:25px;
  }


  .hot-subject .hot-subject_hd{
    width:100%;
    height:32px;
    line-height:32px;
    font-size:14px;
    color:#fff;
    background-color:#002f5b;
    text-indent:20px;
    position: relative;
    z-index:1;
  }


  .hot-subject .top10{
    width:100%;
    padding-left:1px;
    position: relative;
    z-index:1;
  }

  .hot-subject .top10Li{
    height:48px;
    line-height:48px;
    text-indent:20px;
    position:relative;
  }

  .hot-subject .top10Li::before{
    content:"";
    width:6px;
    height:6px;
    position:absolute;
    top:21px;
    left:-3px;
    border-radius:3px;
    background-color:#144c90;
    -webkit-box-shadow:0 0 5px 2px #5383bd;  
    -moz-box-shadow:0 0 5px 2px  #5383bd;  
    box-shadow:0 0 5px 2px #5383bd;  
  }

  .hot-subject .top10Li.active{
    background-color:#e4e8eb;
  }

  .hot-subject .top10Li.active::before{
    -webkit-box-shadow:0 0 8px 4px #fff;  
    -moz-box-shadow:0 0 8px 4px  #fff;  
    box-shadow:0 0 8px 4px  #fff;  
  }

  .hot-subject .top10Li.active::after{
    content:"";
    width:20px;
    height:36px;
    border-top:solid 18px transparent;
    border-bottom:solid 18px transparent;
    border-left:solid 10px transparent;
    border-right:solid 10px #fff; 
    position:absolute;
    top:7px;
    right:-2px;
    border-radius:3px;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
  }


  .hot-subject .top10Li > a{
    max-width:90%;
    font-size:14px;
    color:#333;
    text-align:left;
    text-indent:0;
    display:inline-block;
    white-space:nowrap;
    overflow: hidden;
    text-overflow:ellipsis;
    word-wrap: break-word;
    word-break: break-all;
  }

  .hot-subject .top10Li:hover > a{
    color:#f00;
  }


  #subjectMonitor .module-content .box-content-right{
    width:100%;
    min-height:300px;
    float:right;
  }


  .hot-subject-list{
    padding-left:20px;
  }

  .hot-subject-list .subject-list-hd{
    height:60px;
    line-height:60px;
    font-size:16px;
    color:#333;
  }

  #subjectMonitor .box-bottom{
    width:100%;
    height:40px;
    border-top:solid 1px #e4e8eb; 
    background-color:#fff;
  }




  /* 首页信息列表样式调整 */
  .newsletters {
      padding-left: 40px;
  }

  .newsletters .handle-box {
      margin-left: -40px;
      padding-left:27px;
  }

  /* 首页信息列表样式调整 */
</style>
