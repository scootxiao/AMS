
<template>
	<ul class="newsItems">
	  <li class="newsletters">
	    <div class="row">
	        <div class="col-sm-8 title clearfix">
	            <input class="newsItemTop-checkbox" type="checkbox" value="7649300_b562076722ecd24ba0c2b739e1192fd7" storetype="" deletetype="2" />
	            <input type="hidden" class="item_article_url" />
	            <input type="hidden" value="精彩横岗" class="item_article_author" />
	            <input type="hidden" value="2" class="item_article_type" />
	            <a class="indepth" target="_blank" title="查看原文">
	                <img class="img-rounded messageType" src="../../assets/img/messageType2.png" />
	            </a>
	            <div class="newsItemTop-title">
	                <a href="javascript:void(0)" title="太方便了!深圳高铁可自主选座和连续换乘，还有这些你不知道......." >太方便了!<span style="color:#f00;">深圳</span>高铁可自主选座和连续换乘，还有这些你不知道.......</a>
	            </div>
	        </div>
	        <div class="col-sm-4 text-right clearfix title-right">
	            <span class="polarity neutral">中性</span>
	            <span class="focus-degree oneLineOverflow" title="热度：文章受关注程度与影响力大小">热度5</span>
	        </div>
	    </div>
	    <div class="row">
	        <div class="col-sm-12 time-author">
	             <span title="2017-10-13 15:40">
	                时间：2天前 15:40
	            </span> 
	            <span>
	              作者：精彩横岗
	            </span>
	            <span class="message_source" title="" >
	              信息源：元搜索
	            </span>
	            <button type="button" class="btn btn-xs btn-link moreIn4-btn" >更多信息<span class="glyphicon glyphicon-menu-down"></span></button>
	        </div>
	        
	        <div class="col-sm-12 moreIn4MBox-warper">
	          <div class="moreIn4MBox">
	            <p>监测单元：<span class="monitor_unit ">深圳,深圳2,全部总控,修改关键词总控,zcq测试总控</span></p>
	            <p>文章分布：
	                <span title="同一篇文章分布" class="similarity tong" onclick="toSameArticle('7649300_b562076722ecd24ba0c2b739e1192fd7','');">相同</span>
	            </p>
	          </div>
	        </div>
	        <div class="col-sm-12 contentBox">
	            今天的天气好晴朗 <span style="color:#f00;">深圳</span>好风光 要问横岗君我今天为什么如此开心 因为横岗君我得知了一个超大超大的好消息 10月12日起 铁路网上购...管怎样 中国高铁的服务越来越好 横岗君为铁道部疯狂打call 选座以后 靠窗！一定抢得的！ 来源：<span style="color:#f00;">深圳</span>全接触 你可能错过的内容 ⊙ &nbsp; &nbsp; ⊙&nbsp; &nbsp;&nbsp; ⊙&nbsp;&nbsp;&nbsp;&nbsp;
	        </div>
	        <div class="col-sm-12"> </div>
	    </div>
	    
	    <div class="row origin-comment">

	    </div>

	    <div class="row handle-box">
	        <div class="btn-group">
	            <button type="button" class="btn btn-link stick">
	                <i class="icon iconfont icon-zhiding"></i>置顶
	            </button>

	            <button type="button" class="btn btn-link collect" >
	                <i class="icon iconfont icon-shoucang"></i><span>收藏</span>
	            </button>
	            <button type="button" class="btn btn-link recommend" >
	                <i class="icon iconfont icon-dianzan"></i>
	                <span>推荐</span>
	            </button>
	            <button type="button" class="btn btn-link delete" >
	                <i class="icon iconfont icon-shanchu"></i>删除
	            </button>
	        </div>
	    </div>
	  </li>
	</ul>
</template>

<script>
  export default {
    name: 'newsItems',
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

<style>
 .newsItems {
      margin-bottom: 0;
      padding: 0 15px;
      background-color: #fff;
  }
  /* 信息列表 20170706*/
  .newsletters{
    padding-left:60px;
    padding-top:20px;
    width:auto;
    border-bottom:solid 1px #ccc;
  }

  .newsletters .title{
    min-height:26px;
    line-height:26px;
  }

  .newsletters .title .newsItemTop-checkbox{
    margin-left:-60px;
    float:left;
  }

  .newsletters .title .indepth{
    margin-left:-40px;
    width:26px;
    height:26px;
    float:left;
  }

  .newsletters .title .newsItemTop-title{
    width:100%;
    line-height:26px;
      font-size: 14px;
      max-height: 52px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      word-wrap: break-word;
      word-break: break-all;
  }

  .newsletters .title .newsItemTop-title a{
    font-weight:600;
    font-size:16px;
    color:#141414;
  }


  .newsletters .title .messageType{
    width:26px;
    height:26px;
  }


  .newsletters .title-right{
    height:26px;
    line-height:26px;
    float:right;
  }

  /* 命中哪些部门 */
  .monitor_unit{
    max-width:100%;
    padding:0 8px !important;
    position:relative;
    display:inline-block;
    vertical-align: middle;
  }

  .monitor_unit::before{
    content:"[";
    position:absolute;
    top:-1px;
    left:3px;
    height:26px;
    line-height:26px;
  }

  .monitor_unit::after{
    content:"]";
    position:absolute;
    top:-1px;
    right:3px;
    height:26px;
    line-height:26px;
  }

  /* 命中哪些部门 */

  /* 极性 */
  .polarity{
    padding:4px;
    font-size:12px;
    color:#fff;
    border-radius:3px;
  }

  /* 正面  */
  .polarity.positive{
    background-color:#24d524;
    cursor:pointer;
  }
  /* 负面  */
  .polarity.negative{
    background-color:#f44336 ;
    cursor:pointer;
  }

  /* 中性 */
  .polarity.neutral{
    background-color:#607d8b;
    cursor:pointer;
  }

  /* 相似文章篇数 */
  .similarArticleNumber{
    padding-left:32px !important;
    padding-right:18px !important;
    max-width:80px;
    cursor:pointer;
    color:#3274fc;
    position:relative;
    display:inline-block;
    vertical-align: middle;
  }

  .similarArticleNumber .similarArticleNumber_before{
  /*  content:"相似"; */
    position:absolute;
    top:0px;
    left:0px;
  }

  .similarArticleNumber .similarArticleNumber_after{
  /*  content:"篇"; */
    position:absolute;
    top:0px;
    right:0px;
  }
  /* 相似文章篇数 */

  /* 相似、相同分布 */
  .similarity{
    padding:2px 4px;
    font-size:12px;
    color:#fff;
    border-radius:3px;
    cursor:pointer;
  }
  .similarity.shi{
    background-color:#56a03f;
  }
  .similarity.tong{
    background-color:#3274fc;
  }
  /* 相似、相同分布 */

  /* 热度 */
  .focus-degree{
    margin-right:10px;
    padding:4px 10px;
    max-width:100px;
    font-size:12px;
    color:#fff;
    border-radius:3px;
    background-color:#ff6600;
    display: inline-block;
      line-height: 16px;
      vertical-align: middle;
  }
  /* 热度 */

  .newsletters .time-author{
    padding-top:6px;
    padding-bottom:6px;
    min-height:36px;
    line-height:24px;
    font-size:12px;
    color:#808080;
  }

  .newsletters .time-author > span{
    margin-right: 20px;
      padding-right:0;
      max-width: 100%;
      font-size: 12px;
      height: 24px;
      line-height: 24px;
      vertical-align: middle;
      display: inline-block;
  }

  .newsletters .time-author .moreIn4-btn{
    color:#123f6a;
  }

  .moreIn4-btn.active > .glyphicon{
    transition: all 0.2s;
      -moz-transition: all 0.2s;
      -webkit-transition: all 0.2s;
      -o-transition: all 0.2s;
  }

  .moreIn4-btn.active > .glyphicon {
      transform: rotate(-180deg);
      -ms-transform: rotate(-180deg);
      -moz-transform: rotate(-180deg);
      -webkit-transform: rotate(-180deg);
      -o-transform: rotate(-180deg);
  }

  .moreIn4MBox-warper{
    margin-bottom:5px;
    display: none;
  }

  .moreIn4MBox{
    padding:5px 8px;
    min-height:32px;
    background-color:#e2e7ec;
  }

  .moreIn4MBox > p{
    margin-bottom:0;
    padding:4px 0;
    min-height: 32px;
      line-height: 24px;
      font-size: 12px;
      color: #808080;
  }

  .moreIn4MBox > p > span{
    padding-right: 20px;
  }

  .moreIn4MBox > p > span.similarity{
    margin-right:15px;
    padding-right: 4px;
  }

  .moreIn4MBox .moreIn4MBox-line{
    margin:5px 0;
    width:100%;
    height:1px;
    background-color:#9caebf;
  }

  .moreIn4MBox .origin-box > span{
      margin-right: 20px;
      padding-right:0;
      max-width: 100%;
      font-size: 12px;
      height: 32px;
      line-height: 32px;
      vertical-align: middle;
      display: inline-block;
  }

  .moreIn4MBox .monitor_unit{
    display:inline;
    vertical-align: baseline;
  }

  .moreIn4MBox .monitor_unit::before{
    content:"[";
    position:static;
  }

  .moreIn4MBox .monitor_unit::after{
    content:"]";
    position:static;
  }

  /* 文章内容 */
  .newsletters .contentBox{
    width: 100%;
    line-height: 24px;
    font-size: 14px;
    color:#333;
    max-height:72px;
    display: -webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:3;
    overflow: hidden;
    word-wrap: break-word;
      word-break: break-all;
  }
  /* 文章内容 */

  .newsletters .newslettersImgs{
    margin-top:15px;
    padding: 10px 0 0px 50px;
    width: 300px;
  }

  .newsletters .newslettersImgs li.imgList{
    margin: 0 0 5px 0;
    width: 80px;
    height: 80px;
    line-height: 80px;
    font-size: 0px;
    text-align: center;
    float: left;
  }

  .newsletters .newslettersImgs li:nth-child(2),
  .newsletters .newslettersImgs li:nth-child(5),
  .newsletters .newslettersImgs li:nth-child(8){
    margin: 0 5px 5px 5px;
  }

  .newsletters .newslettersImgs .imgList img{
    width: 100%;
    height: 100%;
    vertical-align: middle;
  }

  .newsletters .newslettersImgs .imgList .imgList-a{
    width:30px;
    height:30px;
    display:inline-block;
  }

  /* 来源 点赞 */
  .newsletters .origin-comment{
    padding-left: 10px;
    padding-right:15px;
  /*  height:48px; */
    min-height:12px;
    line-height:48px;
    font-size:12px;
    color:#808080;
  }

  .newsletters .origin-comment > div{
    padding:0 5px;
  }


  /* 评论量，转发量，点赞数盒子 */
  .newsletters .origin-comment .comment-box > div{
    max-width:33%;
    padding-right:20px;
    float:left;
  }

  /* 删除推荐里btn */
  .newsletters .origin-comment .comment-box  .btn-link{
    color:#666;
  }
  /* 评论量，转发量，点赞数盒子 */


  /* 主办单位，来源，授权码盒子 */
  .newsletters .origin-comment .origin-box{
    padding-top:6px;
    padding-bottom:6px;
    font-size:0;
    line-height:32px;
  }

  .newsletters .origin-comment .origin-box > span{
    margin-right:20px;
    max-width:100%;
    font-size:12px;
    height:32px;
    line-height:32px;
    vertical-align: middle;
    display:inline-block;
  }

  /* 主办单位，来源，授权码盒子 */

  .newsletters .handle-box{
    margin-left:-60px;
    margin-right:0px;
    padding-left:47px;
    border-top:solid 1px #ebebeb;
  }

  .newsletters .handle-box .btn-link{ /* 正常状态 */
    color:#666;
    font-size:13px;
    outline:none;
  }

  /*已置顶  已报送 已添加探针  已作者追踪  已收藏 已点赞  已删除 */
  .newsletters .handle-box .btn-link.active{
    color:#2856b6;
  }

  /* 探针第三种状态 */
  .newsletters .handle-box .btn-link.detector.status3{
    color:#ff4e00;
  }

  .newsletters .handle-box .btn-link .glyphicon{
    margin-right:5px;
    font-size:15px;
  }
</style>