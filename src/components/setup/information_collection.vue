<template>
<div class="information_collection">
	<div class="rightTop clearfloat">
		系统设置 > 信息收藏 
		<div class="TopRight">
			<form>
				<input type="hidden" name="pageNo" value="1"/>
				<select class="form-control cssSelect" name="order">
					<option value="create_time" selected="selected">按收藏时间</option>
					<!-- <option>按热度排序</option> -->
					<option value="article_time">按发布时间</option>
					<option value="download_time">按收录时间</option>
				</select>
				
				<select class="form-control cssSelect" name="pageSize">
					<option value="10">10条</option>
					<option value="20">20条</option>
					<option value="30">30条</option>
					<option value="50" selected="selected">50条</option>
					<option value="100">100条</option>
				</select>
			</form>
		</div>
	</div>
	
	<div id="information_collection_loading" class="rightBottom clearfloat">
		<div class="BottomLeft">
			<div class="LeftTitle clearfloat">
				<span onclick="getUserCollectType();" title="点击搜索全部">全部</span>
				<img class="add" src="${ctx }/ams/system/img/add.png" onclick="toAddCollectType();" title="添加分类"/>
			</div>
			<ul class="BottomLeft-Ul">
			</ul>
		</div>
		
		<div class="BottomRight">
			<ul class="newsItems"></ul>
	 		<div class="leftSectionBottom">
				<!-- 分页 -->
				<div class="diggBox">
					<div class="digg" id="collectPagerView"></div>
				</div>
			</div>
		</div>
	</div>
</div>
</template>

<script>
  export default {
    name:'nav',
    data () {
      return {
        
      }
    }
  }
</script>

<style scoped>
	.form-horizontal{
		margin-top:20px;
	}
	.form-horizontal .control-label {
	    font-size: 16px;
	    font-weight: normal;
	}

	.form-group-btn{
		margin-top:80px;
	}

	.form-group {
	    margin-bottom: 20px;
	}
</style>




