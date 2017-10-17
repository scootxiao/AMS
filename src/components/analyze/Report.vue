<template>
  <div class="analyze-report switchPage">
    <div class="analyze-report-Title">
      <div class="title oneLineOverflow">舆情专报</div>
      <img class="word" src="../../assets/img/word.png" title="导出word报告"/>
      <img class="pdf" src="../../assets/img/pdf.png" />
    </div>
    
    <div class="analyze-report-Hd">
      <div class="Hd-item oneLineOverflow">监测对象： <span id="subjectNameReport" class="cssfontWeightNormal"></span></div>
      <div class="Hd-item oneLineOverflow">监测范围：<span class="cssfontWeightNormal">全网监测</span></div>
      <div class="Hd-item oneLineOverflow">监测时间：<span id="subjectTime" class="cssfontWeightNormal"></span></div>
    </div>
      
    <ul class="reportContentUl">
      <li class="reportContentUl-list" >
        <div class="listTop cssfontWeight600">[<span>舆情综述</span>]</div>
        <div class="listContent" id="consensusStated"></div>
      </li>
      
      <li class="reportContentUl-list" >
        <div class="listTop cssfontWeight600">[<span>传播范围</span>]</div>
        <div class="listContent" id="arealLimits"></div>
      </li>
      
      <li class="reportContentUl-list" >
        <div class="listTop cssfontWeight600">[<span>舆情趋势</span>]</div> 
              
        <div class="panel panel-default">
          <div class="panel-heading">
            <div class="panel-title">
              舆情趋势图
              <div class="btn-group btn-group-xs pull-right">
                <input class="btn btn-default hours"  type="button" value="时" onclick="refeshRpTimeTrend('hour',this)" />
                <input class="btn btn-default days active" type="button" value="天" onclick="refeshRpTimeTrend('day',this)" />
              </div>
            </div>
          </div>
          <div class="panel-body">
            <div class="chartView" id="report_timetrend"></div>
          </div>
         </div>
        
      </li>
      <li class="reportContentUl-list" >
        <div class="listTop cssfontWeight600">[<span>最早报道媒体</span>]</div>
        <div class="tableBox">
          <table class="table table-bordered table-hover">
            <thead>
              <tr>
                <th width="10%">媒体类型</th>
                <th width="25%">发布时间</th>
                <th width="45%">标题</th>
                <th width="20%">信息来源</th>
              </tr>
            </thead>
            <tbody id="firstArticles"></tbody>
          </table>
        </div>
      </li>
      
      <li class="reportContentUl-list" >
        <div class="listTop cssfontWeight600">[<span>热门专题文章</span>]</div>
        <ul class="aticle-Ul" id="TXContext"></ul>
      </li>
    </ul>
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
   /*舆情报告*/
  .analyze-report{
    padding:20px 80px;
    width: 100%;
    min-height: 50px;
    background-color: #fff;
  }

  .analyze-report-Title{
    padding: 0 100px;
    width: 100%;
    height: 100px;
    line-height: 100px;
  }

  .analyze-report-Title .title{
    width: 100%;
    height: 100%;
    font-size: 42px;
      letter-spacing: 10px;
    color: #df0000; 
    text-align:center;
    float: left;
  }

  .analyze-report-Title > img{
    width: 35px;
    height: 35px;
    float: right;
    cursor: pointer;
  }


  .analyze-report-Title > img.word{
    margin: 32px -35px 0 0;
  }

  .analyze-report-Title > img.pdf{
    margin: 32px -80px 0 0;
  }


  .analyze-report-Hd{
    padding: 0 0 5px 0;
    width: 100%;
    min-height: 24px;
    border-bottom: solid 1px #34516d;
  }

  .analyze-report-Hd > div.Hd-item{
    width: 100%;
    height: 36px;
    line-height: 36px;
    font-size: 16px;
    color: #141414;
    font-weight:bold;
  }


  .analyze-report-Hd > div.Hd-item .cssfontWeightNormal{
    font-size:14px;
  }


  /* 内容列表  舆情综述 传播范围 舆情趋势 最早报道媒体 热门专题文章*/
  .reportContentUl{
    width: 100%;
    min-height: 50px;
  }

  .reportContentUl .reportContentUl-list{
    margin: 0 0 10px 0;
    width: 100%;
  }

  /* 标题 */
  .reportContentUl .reportContentUl-list .listTop{
    height: 48px;
    line-height: 48px;
    font-size: 16px;
  }

  /* 内容*/
  .reportContentUl .reportContentUl-list .listContent{
    line-height: 24px;
    font-size: 14px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    word-wrap:break-word;
    max-height: 72px; 
  }

  .reportContentUl .reportContentUl-list .panel{
    width: 100%;
  }

  .reportContentUl .reportContentUl-list .panel .chartView{
    margin:0 auto;
    width: 998px;
    height: 400px;
  }

  /* 内容*/


  /* 热门专题文章列表 */
  .aticle-Ul{
    width: 100%;
    min-height:120px;
  }

  .aticle-Ul .aticleUl-list{
    margin: 0 0 10px 0;
    width: 100%;
  }

  .aticle-Ul .aticleUl-list > div{
    width: 100%;
    line-height: 24px;
  }


  .aticle-Ul .aticleUl-list .aticleUlList-Title{
    height: 32px;
    line-height:32px;
    font-size:14px;
    font-weight:600;
    cursor: default;
  }

  .aticle-Ul .aticleUl-list .aticleUlList-Content{
    font-size:14px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    word-wrap:break-word;
    max-height: 72px;
  }
  /* 热门专题文章列表 */


  /* 最早报道媒体表格 */
  .reportContentUl .reportContentUl-list .tableBox{
    width:100%;
    min-height:120px;
  }

  .reportContentUl .reportContentUl-list .tableBox > table{
    width:100%;
  }
  /* 最早报道媒体表格 */
    
  /*舆情报告*/
</style>
