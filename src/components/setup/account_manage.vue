<template>
	<div class="rightContent clearfloat">
		<div class="rightContentLeft">
			<div class="rightContentLeftHd">组织</div>
			<div class="search">
				<div class="searchBox">
					<input class="searchInput"  maxlength="12" type='text' id="accountTreeSearch"/>
					<img class="searchBth" src="${ctx }/ams/system/img/searchBtn.png" onclick="searchTree();"/>
				</div>
			</div>
			
			<div class="clientBox">
				<div class="accountManage-organizationHd" onclick="loadAllCustomerUser();">
					客户组织
					<img class="add" src="${ctx }/ams/system/img/addV2.png" onclick="toAddOrgTypeAccount();"/>
				</div>
				
				<ul class="rightContentUl" id="orgleftTree"></ul>
			</div>
			
			<div class="serverBox">
				<div class="accountManage-organizationHd">
					<span onclick="loadServiceUserList(0)">内服人员</span>
					<img class="add" src="${ctx }/ams/system/img/addV2.png" onclick="toAddServiceUser();"/>
				</div>
				<ul class="rightContentUl" id="serviceTree"> </ul>
			</div>
			
		</div>
		
		<div class="rightContentRight">
			
			
			<!--外面-->
			
			<!--添加/修改组织-->
			<form id="orgInfoAccount" class="account_manage_form" style="display:none;" >
				<div class="FormTop">
					添加/修改组织
					<div class="btnBox">
						<input type="button" class="cssButton" value="提交" onclick="submitOrg();"/>
						<input type="button" class="cssButton" value="重置" onclick="resetOrgAccount();"/>
					</div>
				</div>
				
				<div class="FormLine clearfloat">
					<div class="LineLeft">
						<span class="cssColorRed">* </span>组织名称：
					</div>
					<div class="LineRight">
						<input class="LineRightText" type="text" name="organizatioName"/>
						<input type="hidden" name="id"/>
						<input type="hidden" name="parentId"/>
						<input type="hidden" name="siteIds">
						<input type="hidden" name="sitePageNo" value="1">
						<input type="hidden" name="sitePageSize" value="60">
					</div>
				</div>
				 
				<div class="FormLine clearfloat">
					<div class="LineLeft">
						<span class="cssColorRed">* </span>客户级别：
					</div>
					
					<div class="LineRight">
						<select class="LineRightText" name="lerver">
							<option value="1">一级客户</option>
							<option value="2">二级客户</option>
							<option value="3">三级客户</option>
							<option value="4">试用客户</option>
						</select>
					</div>
				</div>
				
				<div class="FormLine clearfloat">
					<div class="LineLeft">
						<span class="cssColorRed">* </span>到期时间：
					</div>
					
					<div class="LineRight">
						<input type="text" name="expireDate" class="LineRightText Wdate cssInput"onFocus="WdatePicker({'minDate':new Date(),dateFmt:'yyyy-MM-dd HH:mm'})"/>
					</div>
				</div>
				
				<div class="FormLine clearfloat">
					<div class="LineLeft">
						otherid：
					</div>
					<div class="LineRight">
						<input class="LineRightText" type="text" name="otherid"/>
					</div>
				</div>
				
				
				<div class="FormLine clearfloat sites">
					<div class="LineLeft">
						重点网站： 
					</div>
					<div class="LineRight" id="sourceBox">
						<div class="searchBox">
							<input type="hidden" name="sitePageNo" value="1"/>
							<input type="hidden" name="sitePageSize" value="60"/>
							<input class="searchInput" placeholder="站点名称" name="siteNameOrg"/>
							<input type="button" class="cssButton" value="查找" onclick="getSiteList();"/>
							<input type="button" class="cssButton" value="展开" onclick="showSiteList();" id="showSiteBtn"/>					
						</div>
						
						<div class="messageTreeBox clearfloat" style="font-size: 14px;">
							<fieldset class="selectedBox">
							    <legend style="margin-left: 4px;" title="最多可选择10个重点网站">已选重点网站</legend>
							    <ul class="clearfloat">
								</ul>
							</fieldset>
							<div style="margin:0 0 10px 0;width:100%;height:24px;line-height:24px;text-indent:2px;font-size:12px;color:#f00;">
								说明：最多可选择10个重点网站
							</div>
							<div class="tableBox" id="siteList" style="display: none;">
								<table class="table table-striped table-bordered table-hover fixed table_center" border="0" cellspacing="0">
									<!-- <thead>
										<tr>
											<th width="16.5%">第一列</th>
											<th width="16.5%">第二列</th>
											<th width="16.5%">第三列</th>
											<th width="16.5%">第四列</th>
											<th width="16.5%">第五列</th>
											<th width="16.5%">第六列</th>
										</tr>
									</thead> -->
									<tbody>
									</tbody>
								</table>
								
								<div class="leftSectionMiddle" style="min-height:48px;height:48px;" >
									<div class="leftSectionBottom">
										<!-- 分页 -->
										<div class="diggBox">
											<div class="digg" id="sitePagerView"></div>
										</div>
									</div>
									<div id="siteListLoad"></div><!-- 加载中-->
							 	</div>
							</div>
						</div>
					</div>
				</div>
				
				<div class="FormLine clearfloat">
					<div class="LineLeft">
						舆情地图：
					</div>
					<div class="LineRight">
						<select class="cssSelect" name="DistributionMap">
							<option value="" selected="selected">请选择</option>
							<option value="/ams/common/resource/map/group/shenzhen/shenzhenMap">深圳地图</option>
							<option value="/ams/common/resource/map/group/guangzhou/guangzhouMap">广州地图</option>
							<option value="/ams/common/resource/map/group/shanghai/shanghaiMap">上海地图</option>
							<option value="/ams/common/resource/map/group/jieyang/jieyangMap">揭阳地图</option>
						</select>
						<span class="cssColorRed">(温馨提示：不选择地图的情况下，舆情热度统计分布图功能将显示)</span>
					</div>
				</div>
				
				
				<div class="FormLine clearfloat">
					<div class="LineLeft">
						菜单设置：
					</div>
					<div class="LineRight">
						<div id="menuSet">
							<table class="table table-striped table-bordered table-hover fixed table_center">
								<thead>
									<tr>
										<th width="20%">父菜单</th>
										<th width="20%">菜单名</th>
										<th width="43%">菜单别称</th>
										<th width="17%">显示&nbsp;<input type="checkbox" name="checkall" style="cursor: pointer;" title="全选/全不选"/></th>
									</tr>
								</thead>
								<tbody>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</form>
			
			<!--外面-->




			
			
			<!--客户 （已经做完）-->
			
			<!--添加/修改客户账号-->
			<form id="customerUpForm" class="account_manage_form" style="display: none;">
				<div class="FormTop">
					添加/修改客户账号
					<div class="btnBox" style="width: 350px;">
						<input type="button" class="cssButton" value="提交" onclick="saveCustomerUser();"/>
						<input type="button" class="cssButton" value="重置" onclick="resetCustomerUser();"/>
						<input type="button" class="cssButton" value="重置密码" name="initPwd"/>
						<input type="button" class="cssButton" value="解封" name="initUserErr"/>
					</div>
				</div>
				<div class="FormLine clearfloat">
					<div class="LineLeft">
						<span class="cssColorRed">* </span>所属组织：
					</div>
					<div class="LineRight" style="position:relative">
						<input class="LineRightText" type="text" name="organizeName" onfocus="$('.organizeNameBox').show()"/>
						<div class="organizeNameBox" style="display:none;">
							<div class="boxTop">
								<div class="boxTitle">
									选择组织
									<input placeholder="输入组织名称" class="cssInput" type="text" oninput="editCustomerOrgTree(this.value)"/>
								</div>
								<img class="boxWindowClose" src="${ctx }/ams/common/img/SearchResultHidden.png" onclick="$('.organizeNameBox').hide()"/>
							</div>
							<div class="boxContent">
								<ul class="OrganizationUl clearfloat" id="editCustomerUserOrgTree">
								</ul>	
							</div>
						</div>
						<input type="hidden" name="organizationid"/>
						<input type="hidden" name="userId"/>
					</div>
				</div>
				<div class="FormLine clearfloat">
					<div class="LineLeft">
						<span class="cssColorRed">* </span>用户姓名：
					</div>
					<div class="LineRight">
						<input class="LineRightText" type="text" name="name"/>
					</div>
				</div>
				<div class="FormLine clearfloat">
					<div class="LineLeft">
						<span class="cssColorRed">* </span>登录账号：
					</div>
					
					<div class="LineRight">
						<input class="LineRightText" type="text" name="loginname"/>
						<div class="LineRightCheckboxBox" >
							<label class="LineRightCheckbox">
								<input type="checkbox" name="isLoginApp"/>&nbsp;支持APP登录
							</label>
						</div>
					</div>
					
				</div>
				
				
				<div class="FormLine clearfloat">
					<div class="LineLeft">
						<span class="cssColorRed">* </span>初始密码：
					</div>
					
					<div class="LineRight">
						<input class="LineRightText" type="password" name="loginPassword" value=""/>
					</div>
					
				</div>
				
				
				<div class="FormLine clearfloat">
					<div class="LineLeft">
						<span class="cssColorRed"></span>手机号码：
					</div>
					
					<div class="LineRight">
						<input class="LineRightText" type="text" name="sms"/>
					</div>
					
				</div>
				
				
				<div class="FormLine clearfloat">
					<div class="LineLeft">
						<span class="cssColorRed">* </span>电子邮箱：
					</div>
					
					<div class="LineRight">
						<input class="LineRightText" type="text"  name="email"/>
					</div>
				</div>
				
				<div class="FormLine clearfloat">
					<div class="LineLeft">

					</div>
					
					<div class="LineRight">
						<input type="button" class="cssButton" value="新增" onclick="toAddUserSys();">
					</div>
				</div>
				
				<div class="tableBox">
					<table class="table table-striped table-bordered table-hover fixed" border="0" cellspacing="0">
						<thead>
							<th width="10%">系统名</th>
							<th width="15%">登录账号</th>
							<th width="15%">登录密码</th>
							<th width="40%">系统URL</th>
							<th width="10%">系统备注</th>
							<th width="10%">编辑</th>
						</thead>
						<tbody id="customerForeignSysListTbody">
						</tbody>
					</table>
				</div>
			</form>
			

			<!--客户组织账号列表-->
			<form id="customerListForm" class="account_manage_form" style="display: none;">
				<input type="hidden" value="1" name="pageNo"/>
				<input type="hidden" value="10" name="pageSize"/>
				<div class="FormTop" style="margin-bottom: 0;">
					客户组织账号列表
					<div class="btnBox">
						<input type="button" class="cssButton" value="新建" onclick="toAddCustomerUser();"/>
					</div>
				</div>
				
				<div class="FormTableHead clearfloat">
					<div class="TableHeadLeft">
							<input type="hidden" name="accoutCustomerOrganizeId"/>
							<input type="hidden" name="accoutCustomerOrganizeName"/>
						姓名：<input class="cssInput" name="accoutCustomerUserName" type="text" />&nbsp;&nbsp;
						
						账号：<input class="cssInput" name="accoutCustomerUserLoginName" type="text" />&nbsp;&nbsp;
						
						手机号码：<input class="cssInput" name="accoutCustomerUserSms" type="text" />
					</div>
					<div class="TableHeadRight">
						<input class="cssButton" name="searchCustomerUserBtn" type="button" value="查找" onclick="searchCustomerUser();"/>
					</div>
				</div>
				
				<div class="tableBox">
					<table class="table table-striped table-bordered table-hover fixed table_center" border="0" cellspacing="0">
						<thead>
							<th width="5%">序号</th>
							<th width="10%">姓名</th>
							<th width="15%">账号</th>
							<th width="15%">手机号码</th>
							<!-- <th width="15%">到期时间</th> -->
							<th width="20%">最后登录时间</th>
							<th width="10%">登录次数</th>
							<th width="25%">操作</th>
						</thead>
						<tbody id="customerListTbody">
						</tbody>
					</table>
				</div>
				
				<div class="leftSectionMiddle" style="min-height:48px;height:48px;" >
					<div class="leftSectionBottom">
						<!-- 分页 -->
						<div class="diggBox">
							<div class="digg" id="accountPagerView"></div>
						</div>
					</div>
					<div id="siteListLoad"></div><!-- 加载中-->
				 </div>
			</form>

			<!--客户-->
			
			
			
			
			<!--服务人员 （已经做完）-->
			
			<!--添加/修改服务人员账号-->
			<form id="editServiceUserForm" class="account_manage_form" style="display: none;">
				<div class="FormTop">
					
					添加/修改服务人员账号
					
					<div class="btnBox" style="width: 350px;">
						<input type="button" class="cssButton" value="提交" onclick="editServiceUser();"/>
						<input type="button" class="cssButton" value="重置" onclick="resetServiceUser();"/>
						<input type="button" class="cssButton" value="重置密码" name="initPwd"/>
						<input type="button" class="cssButton" value="解封" name="initUserErr"/>
					</div>
					
				</div>
				
				
				<div class="FormLine clearfloat">
					<div class="LineLeft">
						<span class="cssColorRed">* </span>用户姓名：
					</div>
					
					<div class="LineRight">
						<input class="LineRightText" type="text" name="name"/>
						<input type="hidden" name="serverOrganizeIds"/>
						<input type="hidden" name="userId"/>
					</div>

				</div>
				
				<div class="FormLine clearfloat">
					<div class="LineLeft">
						<span class="cssColorRed">* </span>登录账号：
					</div>
					
					<div class="LineRight">
						<input class="LineRightText" type="text" name="loginName"/>
						<div class="LineRightCheckboxBox" >
							<label class="LineRightCheckbox">
								<input type="checkbox" name="isLoginApp"/>&nbsp;支持APP登录
							</label>
						</div>
					</div>
				</div>
				
				<div class="FormLine clearfloat">
					<div class="LineLeft">
						<span class="cssColorRed">* </span>初始密码：
					</div>
					
					<div class="LineRight">
						<input class="LineRightText" type="text" name="loginPassword"/>
					</div>
				</div>
				
				<div class="FormLine clearfloat">
					<div class="LineLeft">
						手机号码：
					</div>
					
					<div class="LineRight">
						<input class="LineRightText" type="text" name="sms"/>
					</div>
				</div>
				
				<div class="FormLine clearfloat">
					<div class="LineLeft">
						<span class="cssColorRed">* </span>电子邮箱：
					</div>
					
					<div class="LineRight">
						<input class="LineRightText" type="text" name="email"/>
					</div>
				</div>
				
				<div class="FormLine clearfloat">
					<div class="LineLeft">
						<span class="cssColorRed">* </span>服务组织：
					</div>
					
					<div class="LineRight">
						
						<div class="SelectOrganization clearfloat">
							
							<div class="SelectingOrganization">
								<div class="OrganizationHd">选择组织</div>
								
								<div class="OrganizationContent">
									<ul id="editServiceUserOrgTree" class="OrganizationUl clearfloat"></ul>
								</div>
							</div>
							
							<div class="SelectedOrganization">
								<div class="OrganizationHd">已选中组织</div>
								<div class="OrganizationContent">
									<ul class="OrganizationUl clearfloat" id="editServiceUserOrgCheck">
									</ul>
								</div>	
							</div>
						</div>
					</div>
				</div>
						
			</form>
			
			
			<!--内服账号列表-->
			<form id="serviceListForm" class="account_manage_form" style="display: none;">
				<div class="FormTop" style="margin-bottom: 0;">
					内服账号列表
					<div class="btnBox">
						<input type="button" class="cssButton" value="新建" onclick="toAddServiceUser()"/>
					</div>
				</div>
				
				<div class="FormTableHead clearfloat">
					<div class="TableHeadLeft">
						<input type="hidden" name="pageNo" value="1"/>
						姓名：<input class="cssInput" type="text" name="name" style="width: 40px;"/>&nbsp;&nbsp;
						
						账号：<input class="cssInput" type="text" name="loginname" style="width: 40px;"/>&nbsp;&nbsp;
						
						时间：<input name="startTime" id="moreStart" class="Wdate cssInput" style="padding:0 5px;width:132px; vertical-align: 0px;" onFocus="var moreEnd=$dp.$('moreEnd');WdatePicker({minDate:'%y-{%M-3}-%d 00:00:00',dateFmt:'yyyy-MM-dd HH:mm',onpicked:function(){moreEnd.focus();},maxDate:'#F{$dp.$D(\'moreEnd\')}'})"/>
						至<input name="endTime" id="moreEnd" class="Wdate cssInput" style="padding:0 5px;width:132px; vertical-align: 0px;" onFocus="WdatePicker({maxDate:'%y-%M-%d',dateFmt:'yyyy-MM-dd HH:mm',minDate:'#F{$dp.$D(\'moreStart\')}'})"/>
						<!-- <input class="cssInput" type="text" name="sms"/> -->
						<input type="hidden" name="id"/>
					</div>
					<div class="TableHeadRight">
						<input class="cssButton" type="button" value="查找" onclick="loadServiceUserList()"/>
					</div>
				</div>
				
				<div class="tableBox">
					<table width="100%" border="0" cellspacing="0">
						<thead>
							<th width="5%">序号</th>
							<th width="10%">姓名</th>
							<th width="10%">账号</th>
							<th width="15%">服务组织</th>
							<th width="20%">登录时长</th>
							<th width="20%">最后登录时间</th>
							<th width="8%">登录次数</th>
							<th width="12%">操作</th>
						</thead>
						<tbody id="serviceUserList">	</tbody>
					</table>
				</div>
				
				<div class="leftSectionMiddle" style="min-height:48px;height:48px;" >
					<div class="leftSectionBottom">
						<!-- 分页 -->
						<div class="diggBox">
							<div class="digg" id="accountServicePagerView"></div>
						</div>
					</div>
					<div id="siteListLoad"></div><!-- 加载中-->
			 	</div>
			</form>
			
			<!--服务人员-->

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




