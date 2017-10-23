<template>
<div class="warning_set">
	
	<div class="rightContent clearfloat">
		<div class="rightContentLeft" >
			<div class="rightContentLeftHd">组织</div>
			<div class="search">
				<div class="searchBox">
					<form >
						<input class="searchInput" id="warning_org_search" maxlength="12" type='text' placeholder="组织名称"/>
						<img class="searchBth" src="../../assets/img/searchBtn.png" onclick="warningSearchOrg();"/>
					</form>
				</div>
			</div>
			
			<ul class="rightContentUl" id="warningOrgleftTree" style="height:400px;overflow-y:scroll;"> 
			</ul>
		</div>
		
		<div class="ContentRight" id="warningList" style="display:block;" >
			<div class="ContentRightHeader">设置预警信息</div>
			<div class="ContentRightMiddle">
				<input type="button" class="cssButton" value="添&nbsp;&nbsp;加" onclick="showSubjectWindow()"/>
				<input type="hidden" id="warningOrgId">
			</div>
			<div class="tableBox">
				<table class="table table-striped table-bordered table-hover fixed table_center">
					<thead>
						<tr>
							<th width="10%">序号</th>
							<th width="15%">预警词名称</th>
							<th width="15%">到期时间</th>
							<th width="50%">预警级别</th>
							<th width="10%">操作</th>
						</tr>
					</thead>
					<tbody id="system_warning_right_data">
					</tbody>
				</table>
			</div>
			
			<div class="leftSectionBottom" style="margin:10px 0;display: none;">
				<!-- 分页 -->
				<div class="diggBox">
					<input type="hidden" name="pagePerv"/>
					<input type="hidden" name="pageNext"/>
					<div class="digg" id="PagerView">
					</div>
				</div>
			</div>

		</div>
		
		
		<div class="rightContentRight  ContentRight" id="warningInfo" style="display:none;" >
			<form id="subjectAddFormAccount">
				<input type="hidden" name="siteIds1"/>
				<input type="hidden" name="siteIds2"/>
				<input type="hidden" name="articleTypes"/>
				<input type="hidden" name="id"/>
				<input type="hidden" name="type" value="0"/>
				<div class="FormTop">
					<span id="title">设置预警信息</span>
					<div class="btnBox">
						<input type="button" class="cssButton submit" value="提交" onclick="warningSave();"/>
						<input type="button" class="cssButton reset" value="重置" onclick="resetForm('add')"/>
						<input type="button" class="cssButton reset" value="重置" onclick="resetForm('update')" style="display: none;"/>
					</div>
				</div>
	
				<div class="FormLine clearfloat">
					<div class="LineLeft">
						<span class="cssColorRed">* </span>标　　题：
					</div>
					
					<div class="LineRight">
						<input class="LineRightText"  type="text"  name="name"/>
					</div>
				</div>
				
				<div class="FormLine clearfloat">
					<div class="LineLeft">
						信息类型：
					</div>
					
					<div class="LineRight">
						<div class="UnitClassfyBox clearfloat" id="warningArticleTypeDiv">
							<li class="UnitClassfy">
								<label><input type="checkbox" />&nbsp;全部</label>
							</li>
						</div>

					</div>
				</div>
				
				<div class="FormLine clearfloat warningSites">
					<div class="LineLeft">
						信 息 源：
					</div>
					<div class="LineRight">
						<!-- <button class="cssButton" type="button">选择信息源</button> -->
						<div class="searchBox">
							<input type="hidden" name="sitePageNo" value="1"/>
							<input type="hidden" name="sitePageSize" value="60"/>
							<input class="searchInput" placeholder="站点名称/域名/公众号/微博账号模糊查询" name="siteNameOrg" style="width: 305px;"/>
							<input type="button" class="cssButton" value="查找" onclick="warningGetSiteList1();"/>
							<input type="button" class="cssButton" value="展开" onclick="warningShowSiteList1();" id="warningShowSiteBtn"/>
							<!-- <input type="button" class="cssButton" value="高级设置" onclick="higherSet();"/> -->					
						</div>
						
						<div class="messageTreeBox clearfloat" style="font-size: 14px;">
							<fieldset class="selectedBox" style="display: none;">
								<legend>包&nbsp;&nbsp;&nbsp;&nbsp;含</legend>
							    <ul class="clearfloat" id="warningMonitorSiteUl"></ul>
							</fieldset>
							
							<fieldset class="selectedBox" style="display: none;">
								<legend>排&nbsp;&nbsp;&nbsp;&nbsp;除</legend>
							    <ul class="clearfloat" id="warningExcludeSiteUl"></ul>
							</fieldset>
							
							<div class="tableBox" id="warningSiteList" style="display: none;">
								<table border="0" cellspacing="0" class="table table-striped table-bordered table-hover fixed table_center" >
									<tbody>
									</tbody>
								</table>
								
								<div class="leftSectionMiddle" style="height:48px;min-height:48px;">
									<div class="leftSectionBottom">
										<!-- 分页 -->
										<div class="diggBox">
											<div class="digg" id="warningSitePagerView"></div>
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
						<span class="cssColorRed">* </span>关&nbsp;键&nbsp;词：
					</div>
					
					<div class="LineRight">
						<textarea class="LineRightTextArea" name="warningContext"></textarea>
					</div>
				</div>
				
				<div class="FormLine clearfloat">
					<div class="LineLeft">
						作　　者：
					</div>
					
					<div class="LineRight">
						<textarea class="LineRightTextArea" name="exceptAuthor"></textarea>
					</div>
				</div>
				
				<div class="FormLine clearfloat">
					<div class="LineLeft">
						展示方式：
					</div>
					
					<div class="LineRight">
						<select class="LineRightSelect" name="difference">
							<option value="0">AMS系统</option>
							<option value="1">大屏幕</option>
						</select>
					</div>
				</div>
				
				<div class="FormLine clearfloat">
					<div class="LineLeft">
						<span class="cssColorRed">* </span>过期时间：
					</div>
					
					<div class="LineRight">
						<input name="overdueTime" id="overdueTime" class="Wdate cssInput" style="padding:0 5px;width:132px; vertical-align: 0px;" 
								onfocus="WdatePicker({dateFmt:'yyyy-MM-dd HH:mm',minDate:'%y-%M-%d %H:%m'})"/>
					</div>
				</div>
				
				<div class="FormLine clearfloat">
					<div class="LineLeft">
						<span class="cssColorRed">* </span>预警级别：
					</div>
					
					<div class="LineRight">
						<label class="cssGroupLabel cssPointer">
                            <input class="cssGroupLabelRadio " type="radio" name="WarnningStyle" id="discoverWarnning" checked="checked" />&nbsp;发现预警 
                        </label>
                        <label class="cssGroupLabel cssPointer" style="display: none;">
                        	<input class="cssGroupLabelRadio " type="radio" name="WarnningStyle" id="continueWarning" />&nbsp;持续预警 
                        </label>
                        
                        <div class="continueWarningSelectBox">
                           	( <label class="cssGroupLabel cssPointer" chk="level_warning" onclick="continuousWarningChk(this);">
                            	<input class="cssGroupLabelRadio" type="checkbox" />&nbsp;量级预警
                            </label>
                            <label class="cssGroupLabel cssPointer" chk="incremental_warning" onclick="continuousWarningChk(this);">
                            	<input class="cssGroupLabelRadio" type="checkbox" />&nbsp;增量预警 
                            </label>
                            <label class="cssGroupLabel cssPointer" chk="trend_warning" onclick="continuousWarningChk(this);">
                            	<input class="cssGroupLabelRadio" type="checkbox" />&nbsp;趋势预警 
                            </label>
                            <span id="lookOverDetails" class="cssColorRed">
                            	查看说明
                            	<div class="WarningSelectBoxDetails">
                            		<table>
                            			<thead>
                            				<tr>
                            					<th width="20%">预警项</th>
			      	    						<th width="80%">说明</th>
                            				</tr>
                            			</thead>
                            			<tbody>
                            				<tr>
												<td>发现预警：</td>
												<td style="text-align:left;">用于新建分类后，发现该分类下有微博数据，<br>则触发短信或邮件通知</td>
											</tr>
											<tr>
												<td>量级预警：</td>
												<td style="text-align:left;">微博总条数超过预警设置的数量，<br>则触发短信或邮件通知</td>
											</tr>
											<tr>
												<td>增量预警：</td>
												<td style="text-align:left;">在设定间隔时间内，微博增长的数量超过预警设置的数量<br>，则触发短信或邮件通知</td>
											</tr>
											<tr>
												<td>趋势预警：</td>
												<td style="text-align:left;">
													例如：时间间隔 <span class="cssColorRed">10分钟</span> ，增长基数 <span class="cssColorRed">10条</span> ，增长幅度 <span class="cssColorRed">10%</span><br>
													在<span class="cssColorRed">10分钟</span>内，微博增长的数量超过预警设置的增长基数<span class="cssColorRed">10条</span>，<br>
													并且比前<span class="cssColorRed">10分钟</span>多增长<span class="cssColorRed">10%</span>，则触发短信或邮件通知
												</td>
											</tr>
                            			</tbody>
                            		</table>
                            	</div>
                            </span> )
                           </div>
					</div>
				</div>
				
				<div class="FormLine clearfloat" name="level_warning" style="display: none;">
					<div class="LineLeft">
						<span class="cssColorRed">* </span>量级预警：
					</div>
					
					<div class="LineRight">
						 <select class="LineRightSelect cssSelect" onchange="selectIntermission(this);">
                             <option value="100">100条</option>
                             <option value="70">70条</option>
                             <option value="50">50条</option>
                             <option value="30">30条</option>
                             <option value="-1">自定义</option>
                         </select>
                         <input class="cssSelect normalSelect" name="warningMagnitude" oninput="numberInput(this)" placeholder="请输入数字" type="number" style="display: none;"/>
					</div>
				</div>
				
				<div class="FormLine clearfloat" name="incremental_warning" style="display: none;">
					<div class="LineLeft">
						<span class="cssColorRed">* </span>增量预警：
					</div>
					
					<div class="LineRight">
						<label class="cssGroupLabel"> 
                            <span>时间间隔</span>
                            <select onchange="selectIntermission(this);" class="cssSelect normalSelect">
                                <option value="10">10分钟</option>
                                <option value="7">7分钟</option>
                                <option value="5">5分钟</option>
                                <option value="3">3分钟</option>
                                <option value="-1">自定义</option>
                            </select>
                            <input class="cssSelect normalSelect" name="incrementIntervalTime" oninput="numberInput(this)" placeholder="请输入数字" type="number" style="display: none;"/>
                        </label>

						<label class="cssGroupLabel">                           
                            <span>增长数量</span>
                            <select onchange="selectIntermission(this);" class="cssSelect normalSelect">
                                <option value="10">10条</option>
                                <option value="7">7条</option>
                                <option value="5">5条</option>
                                <option value="3">3条</option>
                                <option value="-1">自定义</option>
                            </select>
                            <input class="cssSelect normalSelect" name="incrementGrowthNumber" oninput="numberInput(this)" placeholder="请输入数字" type="number" style="display: none;"/>
                        </label>
					</div>
				</div>
				
				<div class="FormLine clearfloat" name="trend_warning" style="display: none;">
					<div class="LineLeft">
						<span class="cssColorRed">* </span>趋势预警：
					</div>
					
					<div class="LineRight">
						<label class="cssGroupLabel">
			                  <span>时间间隔</span>
			                  <select onchange="selectIntermission(this);" class="cssSelect normalSelect">
			                      <option value="10">10分钟</option>
			                      <option value="7">7分钟</option>
			                      <option value="5">5分钟</option>
			                      <option value="3">3分钟</option>
			                      <option value="-1">自定义</option>
			                  </select>
			                  <input class="cssSelect normalSelect" name="trendIntervalTime" oninput="numberInput(this)" placeholder="请输入数字" type="number" style="display: none;"/>
		                 </label>
	                          
	                     <label class="cssGroupLabel">
	                          <span>增长数量</span>
	                          <select onchange="selectIntermission(this);" class="cssSelect normalSelect">
	                               <option value="10">10条</option>
	                               <option value="7">7条</option>
	                               <option value="5">5条</option>
	                               <option value="3">3条</option>
	                               <option value="-1">自定义</option>
	                          </select>
	                          <input class="cssSelect normalSelect" name="trendGrowthNumber" oninput="numberInput(this)" placeholder="请输入数字" type="number" style="display: none;"/>
						</label>
	
                        <label class="cssGroupLabel">
	                         <span>增量幅度</span>
	                         <select onchange="selectIntermission(this);" class="cssSelect normalSelect">
	                             <option value="10">10%</option>
	                             <option value="7">7%</option>
	                             <option value="5">5%</option>
	                             <option value="3">3%</option>
	                             <option value="-1">自定义</option>
	                         </select>
	                         <input class="cssSelect normalSelect" name="trendIncrementAmplitude" oninput="numberInput(this)" placeholder="请输入数字" type="number" style="display: none;"/>
                       	</label>
					</div>
				</div>
				
				<div class="FormLine clearfloat">
					<div class="LineLeft">
						<span class="cssColorRed">* </span>预警方式：
					</div>
					
					<div class="LineRight">
						<label class="cssGroupLabel cssPointer" onclick="warningWay(this)">
                        	<input class="cssGroupLabelCheckbox" type="checkbox" name="smsChk" id="warning_sms_chk" chk="warnphone"/>&nbsp;短信通知
                        </label>
                        
                        <label class="cssGroupLabel cssPointer" onclick="warningWay(this)">
                        	<input class="cssGroupLabelCheckbox" type="checkbox" name="emailChk" id="warning_email_chk" chk="warnemail"/>&nbsp;邮件通知
                        </label>
					</div>
				</div>
				
				<div class="FormLine clearfloat">
					<div class="LineLeft">
						<span class="cssColorRed">* </span>短信通知：
					</div>
					
					<div class="LineRight">
					    <input type="text" class="LineRightText" name="warnphone" />
					    <label id="warnphone-error" class="error" for="warnphone" style="display: none;"></label>
                        <p class="annotations">注：不填写只通知当前用户的手机，多个手机请用<span class="cssColorRed">英文逗号","</span>隔开</p>
					</div>
				</div>
				
				<div class="FormLine clearfloat">
					<div class="LineLeft">
						<span class="cssColorRed">* </span>邮箱通知：
					</div>
					
					<div class="LineRight">
						 <input type="text" class="LineRightText" name="warnemail" />
						 <label id="warnemail-error" class="error" for="warnemail" style="display: none;"></label>
                         <p class="annotations">注：不填写只通知当前用户的邮箱，多个邮箱请用<span style="color: red;">英文逗号","</span>隔开</p>
					</div>
				</div>
				
			</form>
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




