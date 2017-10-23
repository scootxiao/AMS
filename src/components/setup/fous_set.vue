<template>
	<div class="sysSetup-right EqAltitude">
		<div class="sectionHd">
			<form class="form-inline">
				<select class="form-control cssSelect"  name="order">
					<option value="create_time">按追踪时间排序</option>
					<!-- <option value="followers_count">按粉丝数排序</option>
					<option value="bi_followers_count">按双向关注数排序</option>
					<option value="statuses_count">按微博量排序</option> -->
				</select>
				<select class="form-control cssSelect" name="media_type" id="search-media-type">
					<option value="">全部</option>
					<option value="0">新浪微博</option>
					<option value="2">微信公众号</option>
				</select>
				
				<input type="text" class="form-control cssInput" name="search_name" value="" placeholder="账号" />
				<input type="button" class="btn btn-default cssButton" value="查询" onclick="getUserTraceListBy()" />

				<!-- <span>追踪任务回收:</span>
				<input type="text" name="recycleDate"  style="margin:0 10px 0 0;width:155px;border: solid 1px #ccc;" class="Wdate cssInput"onFocus="WdatePicker({'minDate':'now()',dateFmt:'yyyy-MM-dd HH:mm:ss'})"/> -->
				<!-- <input type="button" class="cssButton" value="新增追踪" onclick="userTraceAddShow();"/> -->
				<div class="btn-group">
					<input type="button" class="btn btn-default cssButton" value="批量回收" onclick="batchUpdateUserTraceRecycle(1);"/>
					<input type="button" class="btn btn-default cssButton" value="批量启动" onclick="batchUpdateUserTraceRecycle(0);"/>
					<input type="button" class="btn btn-default cssButton" value="批量删除" onclick="batchDeleteUserTrace();"/>
				</div>

				<select class="form-control right-form-control cssSelect" name="pageSize">
					<option value="20">20</option>
					<option value="30">30</option>
					<option value="50">50</option>
					<option value="100">100</option>
				</select>
				<input type="hidden" value="1" name="pageNo"/>
			</form>
		</div>

	 	<div class="secRight">
	 		<div class="sectionContent  rightBottom clearfloat" style="position: relative;" id="userTrace_loading">
				<div class="tableBox">
					<table class="table table-striped table-bordered table-hover fixed table_center" >
						<thead>
							<tr>
								<th width="5%" >
									<input type="checkbox" />
								</th>
								<!-- <th width="5%">序号</th> -->
								<th width="15%">作者</th>
								<th width="10%">媒体类型</th>
								<th width="20%">最新发布消息</th>
								<th width="15%">最新发布时间</th>
								<th width="15%">追踪添加时间</th>
								<th width="10%">追踪状态</th>
								<th width="10%">操作</th>
							</tr>
						</thead>
						<tbody id="userTrace_content">
						</tbody>
					</table>
					<textarea id="userTrace_template" style="display:none">
					{for hit in template.list}
						<tr>
							<td>
								<input type="checkbox" name="user_trace_id" value="@{hit.id}"/>
							</td>
							<!-- <td>
								@{Number(hit_index)+1}
							</td> -->
							<td>
								<div class="authorBox">
									<img class="authorPic" src="../ams/otherTrace/img/nav1.png"  />
									<div class="authorName">
									{if null!=hit.name}
										<a href="javascript:;" onclick="openPersonalHome('@{hit.personalHome}');">@{hit.name}</a>
									{else if}
										<a href="javascript:;" onclick="openPersonalHome('@{hit.personalHome}');">@{hit.uid}</a>
									{/if}
									</div>
								</div>
							</td>
							<td>
								{if hit.media_type == 2}
									微信公众号
								{else if} 
									新浪微博
								{/if}
							</td>
							<td title="@{hit.title}"><a href="@{hit.article_url}" target="_blank">@{hit.title}</a></td>
							<td title="@{hit.created_at}">@{hit.created_at}</td>
							<td>@{hit.create_time}</td>
							<td>
								{if hit.recycle_status == 1}
									已回收
								{else if} 
									已追踪
								{/if}
							</td>
							<td>
								<div class="btn-group btn-group-xs">
									{if hit.recycle_status == 1}
										<button type="button" class="btn btn-default" onclick="updateUserTraceRecycle('@{hit.id}',0)">启动</button>
									{else if}
										<button type="button" class="btn btn-default" onclick="updateUserTraceRecycle('@{hit.id}',1)">回收</button>
									{/if}
									<button type="button" class="btn btn-default" onclick="deleteUserTrace('@{hit.id}')" >删除</button>
								</div>
							</td>
						</tr>
					{/for}
					</textarea>
				</div>
				
				<div class="leftSectionBottom" >
					<!-- 分页 -->
					<div class="diggBox">
						<input type="hidden" name="pagePerv"/>
						<input type="hidden" name="pageNext"/>
						<div class="digg clearfix" id="collectPagerView"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
  export default {
    name: 'sysSetup',
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
</style>