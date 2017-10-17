<template>
  <div class="analyze-watch switchPage">

  <div class="analyze-watch-title oneLineOverflow" >专题分析</div>

  <div class="analyze-watch-head">
    <input type="text" id="watch_start_time" style="display:inline-block;" readonly="readonly" class="Wdate WDT form-control" onFocus="WdatePicker({maxDate:'#F{$dp.$D(\'watch_end_time\',{d:0});}', minDate:'#F{$dp.$D(\'watch_end_time\',{d:-44});}', dateFmt : 'yyyy-MM-dd HH:mm'})" />
    &nbsp;&nbsp;至&nbsp;&nbsp;
    <input type="text" id="watch_end_time" style="display:inline-block;" readonly="readonly" class="Wdate WDT form-control" onFocus="WdatePicker({minDate:'#F{$dp.$D(\'watch_start_time\',{d:0});}', maxDate:'#F{$dp.$D(\'watch_start_time\',{d:44});}', dateFmt : 'yyyy-MM-dd HH:mm'})" />
    <input type="button" class="btn btn-default" value="查询" onclick="loadWatchData()"/>
    <input type="hidden" id="watch_type" value="day"/>
  </div>
  
  
  <div class="panel panel-default analyze-watch-Box">
    <div class="panel-heading">
      <div class="panel-title">
        舆情趋势图
        <div class="btn-group btn-group-xs pull-right">
          <input type="button" class="btn btn-default cssButton active" value="天" />
          <input type="button" class="btn btn-default cssButton" value="时" />
        </div>
      </div>
    </div>
    <div class="panel-body chart-view" id="timeTrenChart"></div>
  </div>
  
  <div class="panel panel-default analyze-watch-Box">
    <div class="panel-heading">
      <div class="panel-title">
        媒体分布统计图
      </div>
    </div>
    
    <div class="panel-body" >
      <div class="row" >
        <div class="col-xs-7" >
          <div class="chart-view" id="meChart"></div>
        </div>
        <div class="col-xs-5 table-scrollbar">
          <table class="table table-striped table-hover">
            <thead>
              <tr>
                <th width="30%" >媒体</th>
                <th width="30%" >中性</th>
                <th width="20%" >负面</th>
                <th width="20%" >正面</th>
              </tr>
            </thead>
            <tbody id="meTable">
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  

    <div class="panel panel-default analyze-watch-Box">
      <div class="panel-heading">
        <div class="panel-title">
          舆情地区趋势图
        </div>
      </div>
      
      <div class="panel-body" >
        <div class="row" >
          <div class="col-xs-7" id="mapChart">
            <div class="chart-view" id="mapLoad"></div>
          </div>
          <div class="col-xs-5 table-scrollbar area_map">
            <table class="table table-striped table-hover">
              <thead>
                <tr>
                  <th width="34%">区域</th>
                      <th width="38%">舆情数</th>
                      <th width="28%">占比</th>
                </tr>
              </thead>
              <tbody id="mapSortDetil">
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    
 

  <div class="panel panel-default analyze-watch-Box">
    <div class="panel-heading">
      <div class="panel-title">
        舆情网站分布top10
      </div>
    </div>
    
    <div class="panel-body" >
      <div class="row" >
        <div class="col-xs-7">
          <div class="chart-view" id="siteTop10Chart"></div>
        </div>
        <div class="col-xs-5 table-scrollbar">
          <table class="table table-striped table-hover">
            <thead>
              <tr>
                <th width="30%" >网站</th>
                <th width="30%" >中性</th>
                <th width="20%" >负面</th>
                <th width="20%" >正面</th>
              </tr>
            </thead>
            <tbody id="siteTop10Table">
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  
  <div class="panel panel-default analyze-watch-Box">
    <div class="panel-heading">
      <div class="panel-title">
        作者活跃度top10
      </div>
    </div>
    
    <div class="panel-body" >
      <div class="row" >
        <div class="col-xs-7">
          <div class="chart-view" id="authorTop10Chart"></div>
        </div>
        <div class="col-xs-5 table-scrollbar">
          <table class="table table-striped table-hover">
            <thead>
              <tr>
                <th width="30%" >网站</th>
                <th width="30%" >中性</th>
                <th width="20%" >负面</th>
                <th width="20%" >正面</th>
              </tr>
            </thead>
            <tbody id="authorTop10Table">
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  
  <div class="panel panel-default analyze-watch-Box">
    <div class="panel-heading">
      <div class="panel-title">
        传播路径
      </div>
    </div>
    <div class="panel-body" >
      <div class="row" >
        <div class="col-xs-7">
          <div class="chart-view bg-black" id="weiboSpark"></div>
        </div>
        <div class="col-xs-5 table-scrollbar">
          <table class="table table-striped table-hover">
            <thead>
              <tr>
                <th width="50%" >微博用户</th>
                <th width="50%" >转发层级</th>
              </tr>
            </thead>
            <tbody id="weiboSparkTable">
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  <div class="panel panel-default analyze-watch-Box">
    <div class="panel-heading">
      <div class="panel-title">
        溯源分析
      </div>
    </div>
    <div class="panel-body chart-view" >
      <div id="weiboTrace" class="clearfix"></div>
      <div id="weiboOneView" class="clearfix"></div>
    </div>
  </div>

  
  <div class="panel panel-default analyze-watch-Box" id="blogArticleChange">
    <div class="panel-heading">
      <div class="panel-title">
        博文变化
      </div>
    </div>
    <div class="panel-body chart-view" style="position:relative;">
      <img class="arrowsLeft" src="../../assets/img/arrowLeft.png?vhong=1" />
      <img class="arrowsRight" src="../../assets/img/arrowRight.png?vhong=1" />
      <div class="ChangeBoxs" id="weiboChage"></div>
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

    },
    components:{

    },
  }
</script>

<style scoped>
 
/*可视化分析*/
.analyze-watch{
  padding:20px 40px;
  width: 100%;
  min-height: 50px;
  background-color: #fff;
}


.analyze-watch .analyze-watch-title{
  padding: 0 100px;
    width: 100%;
    height: 100px;
    line-height: 100px;
    font-size: 30px;
    color: #141414;
    text-align: center;
}

.analyze-watch .analyze-watch-head{
  height: 48px;
  line-height:48px;
  text-align:right;
}



.analyze-watch .analyze-watch-Box{
  width: 100%;
  min-height: 400px;
}

.analyze-watch .analyze-watch-Box .analyze-watch-Box-hd{
  padding: 0 120px 0 0;
  width: 100%;
  height: 48px;
  line-height: 48px;
  font-size: 18px;
  color: #fff;
  text-indent: 40px;
  border-radius: 5px 5px 0 0;
  background-color: #003e73;
}


.analyze-watch .analyze-watch-Box .analyze-watch-Box-hd > input.active{
  background-color: #097bdd;
  color:#fff;
}


.analyze-watch-Box .chart-view{
  padding:10px;
  width: 100%;
  min-height: 400px;
  overflow:hidden;
}

.analyze-watch-Box .chart-view.bg-black{
  background-color:#000;
}

.analyze-watch-Box .chart-view .container{
  width:100%;
}


/*溯源分析*/
.time_data dl {
    height: 42px;
    width: 131px;
}

.time_data dl dt a{
  
}

.time_data dl dt a > img{
  border-radius:3px;
}

.time_data_list {
    overflow-y: auto;
    overflow-x:hidden;
}

.more_data {
    margin:0 auto;
}

.mysu_none{
  display: none;
}

.time_data_list {
    background-position:149px 0;
    padding: 0 10px;
}

/*溯源分析*/


/* 传播路径 */
/* .sigma-parent {
    position: relative;
    border-radius: 4px;
    -moz-border-radius: 4px;
    -webkit-border-radius: 4px;
    height: 400px;
} */
/* 传播路径 */

/*博文变化样式 */
#blogArticleChange .arrowsLeft{
  width:30px;
  height:48px;
  position: absolute;
    left: 10px;
    bottom: 10px;
    z-index:1;
    cursor: pointer;
}

#blogArticleChange .arrowsRight{
  width:30px;
  height:48px;
  position: absolute;
    right: 10px;
    bottom: 10px;
    z-index:1;
    cursor: pointer;
}


#blogArticleChange .ChangeBoxs{
  width:6000px;
  overflow-y:scroll;
  position: absolute;
    left: 0px;
    top: 0px;
}

#blogArticleChange .ChangeBox{
  margin:0 5px;
  padding:5px 0 0 0;
  width:235px;
  height:400px;
  float:left;
}


#blogArticleChange .ChangeBox .ChangeBoxTop{
  width:100%;
  height:320px;
  position: relative;
  border:solid 1px #d0d1d3;
  border-radius:5px;
}

#blogArticleChange .ChangeBox .ChangeBoxTop:before{
    content: "";
    display: block;
    position: absolute;
    left: 107px;
    top: 308px;
    width: 20px;
    height: 20px;
    border: 2px solid #d0d1d3;
    border-width: 0px 0 1px 1px;
    background-color: #FFF;
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
    -webkit-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    transform: rotate(-45deg);
}

#blogArticleChange .ChangeBox .ChangeBoxTop:after{
  content: attr(data-beforeContent);
    display: block;
    position: absolute;
    left: 205px;
    top: 10px;
    width: 24px;
    height: 24px;
    line-height: 24px;
    text-align: center;
    font-size: 14px;
    color: #fff;
    border-radius: 50%;
    background-color: #f00;
}

#blogArticleChange .ChangeBox .ChangeBoxTop .ChangeBoxUl{
  margin:20px 0 0 0;
  width:100%;
  height:290px;
  overflow:auto;
}

#blogArticleChange .ChangeBox .ChangeBoxTop .ChangeBoxLi{
  margin:0 0 10px 0;
  padding:0 0 0 100px;
  width:100%;
  height:32px;
  line-height:32px;
  font-size:14px;
}

#blogArticleChange .ChangeBox .ChangeBoxTop .ChangeBoxLi .liLeft{
  margin: 0 0 0 -88px;
  width:72px;
  height:32px;
  line-height:32px;
  border-radius:6px;
  text-align:center;
  color:#fefefe;
  background-color:#005ac8;
  float:left;
  position: relative;
}

#blogArticleChange .ChangeBox .ChangeBoxTop .ChangeBoxLi .liLeft::after{
  content: "";
    display: block;
    position: absolute;
    left: 68px;
    top: 12px;
    width: 6px;
    height: 6px;
    border: 2px solid #005ac8;
    border-width: 0px 1px 1px 0;
    background-color: #005ac8;
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
    -webkit-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    transform: rotate(-45deg);
}

#blogArticleChange .ChangeBox .ChangeBoxTop .ChangeBoxLi .liRight{
  width:100%;
  height:32px;
  line-height:32px;
  color:#131313;
}

#blogArticleChange .ChangeBox .ChangeBoxBottom{
  margin:20px auto 0 auto;
  width:100px;
  height:36px;
  line-height:36px;
  text-align:center;
  font-size:14px;
  color:#fff;
  background-color:#5a5a5a;
  border-radius:12px;
}




.table-scrollbar{
  max-height:400px;
  position: relative;
  overflow:auto;
}

.table-scrollbar.area_map{
  max-height:650px;
}

/*博文变化样式 */

/*可视化分析*/
</style>
