<template>
	<div class="hsIndex">
		<div class="logoBox clearfix">
			<img src="../../assets/img/hongSearch_logo.png" />
		</div>
		<div class="hongsearch-box" >
			<input type="hidden" name="userId" value="" />
			<div class="input-group">
				<input type="text" class="form-control hongsearchBox-input" id="hongSearchText" maxlength="200" />
				<span class="input-group-btn">
					<button id="hongsearchBox-btn" class="btn btn-primary hongsearchBox-btn" type="button" v-on:click="search">搜    索</button>
				</span>
			</div>
			<div class="searchResult-Box" first="1">
				<div class="recordBox">
					<ul class="searchResultBox-Ul clearfix" id="blurHistory"></ul>
					<div class="operateBox">
						<div class="btn-group btn-group-sm">
							<input class="btn btn-link BoxDelete-btn" type="button" value="清除历史" />
							<input class="btn btn-link BoxShow-btn" type="button" value="查看更多" />
						</div>	
					</div>
				</div>
				<div class="searchResultBox">
					<ul class="searchResultBox-Ul clearfix">
						<li class="searchResultBoxUl-List clearfix">
							<div class="List-content">深圳双创周什么时候结束？</div>
						</li>
						<li class="searchResultBoxUl-List clearfix">
							<div class="List-content">深圳双创周什么时候结束？</div>
						</li>
						<li class="searchResultBoxUl-List clearfix">
							<div class="List-content">深圳双创周什么时候结束？</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
  import router from '../../router'
  import FiltrateView from '../common/Filtrate'
  import PaginationView from '../common/Pagination'
  import RtModuleView from '../common/RtModule'

  export default {
    name: 'hsIndex',
    data () {
      return {

      }
    },
    methods: {
    	search: function (event) {
	      router.push({ path:'/hongsearch/hsList'})
    	}
    },
    components:{
      FiltrateView,
      PaginationView,
      RtModuleView
    },
  }
</script>

<style scoped>
 
	/*泓搜主页样式*/
	.hsIndex{
		position:absolute;
		top:50%;
		left:50%;
		margin-top: -160px;
		margin-left:-25%;
		width:50%;
		height:124px;
	}

	.logoBox{
	/* 	margin: 160px 0 0 0; */
		width: 100%;
		height: 64px;
		line-height: 64px;
		text-align: center;
	}

	.logoBox > img{
	 	width: 200px;
	 	height: 53px;
	}


	.hongsearch-box{
		margin-top: 20px;
		width: 100%;
		height: 40px;
		position: relative;
	}

	.hongsearch-box .hongsearchBox-input{
		padding:0 8px;
		height:40px;
		line-height: 40px;
		font-size: 14px;
		color: #151515;
		outline: none;
		border: solid 1px #ccc;
		border-radius:0;
		float: left;	
	}

	.hongsearch-box .hongsearchBox-input:hover{
		border: solid 1px #ababab;
	}

	.hongsearch-box .hongsearchBox-input.active{
		border: solid 1px #005ac8;
	}


	.hongsearch-box .hongsearchBox-input.recommend{
		color: #454545;
	}

	.hongsearch-box .hongsearchBox-btn{
		padding:0;
		width: 100px;
		height: 40px;
		line-height: 40px;
		font-size: 14px;
		outline: none;
		border: none;
		background-color: #005ac8;
		border-radius:0;
		color: #fff;
		cursor: pointer;
	}

	.hongsearch-box .hongsearchBox-btn.active{
		background-color: #A9C0F0;
	}

	.searchResult-Box{
		position: absolute;
	    top: 41px;
	    left:0px;
	    right:0px;  
	    z-index: 1;
	}

	.searchResult-Box > div {
		display:none;
		background-color:#fff;
		border: solid 1px #bfbfbf;
		-webkit-box-shadow:2px 2px 2px 2px #c7c7c7;  
		-moz-box-shadow:2px 2px 2px 2px  #c7c7c7;  
		box-shadow:2px 2px 2px 2px  #c7c7c7;
	}

	.searchResultBox-Ul{
		width: 100%;
	}

	.searchResultBox-Ul .searchResultBoxUl-List{
		padding: 0 36px 0 12px;
		width: 100%;
		height: 24px;
		color: #323232;
	}

	.searchResultBox-Ul .sel{
		background-color: #efefef;
	}

	.searchResultBox-Ul .searchResultBoxUl-List .List-content{
		width: 100%;
		height: 24px;
		line-height: 24px;
		font-size: 14px;
		float: left;
		cursor: default;
		word-wrap: break-word;
		word-break: break-all;
		white-space:nowrap;
		overflow: hidden;
		text-overflow:ellipsis;
	}

	.searchResultBox-Ul .searchResultBoxUl-List .op-box{
		margin: 0px -32px 0 0 ;
		float: right;
	}

	.searchResultBox-Ul .searchResultBoxUl-List .op-box .btn{
		padding:0 1px;
		font-size:15px;
		color:#c7c7c7;
		display:none;
	}

	/* hover状态效果 */
	.searchResultBoxUl-List:hover{
		background-color: #efefef;
	}

	.searchResultBoxUl-List:hover .op-box .btn{
		display:block;
	}
	/* hover状态效果 */

	.searchResult-Box .operateBox{
		width: 100%;
		height: 32px;
		line-height: 32px;
		text-align: right;
	}

	.searchResult-Box .operateBox .BoxDelete-btn{
		color: #323232;
	}

	.searchResult-Box .operateBox .BoxShow-btn{
		color: #005ac8;
	}
	/*泓搜主页样式*/
</style>