<template>
<div class="monitor_unit">
	<div class="rightContent clearfloat">
		<div class="rightContentLeft" >
			<div class="rightContentLeftHd">组织</div>
			<div class="search">
				<div class="searchBox">
					<form id="monitor_unit_form">
						<input class="searchInput" name="name" maxlength="12" type='text' placeholder="组织名称"/>
						<img class="searchBth" src="../../assets/img/searchBtn.png" onclick="initSubjects();"/>
					</form>
				</div>
			</div>
			
			<ul class="rightContentUl" style="height:400px;overflow-y:scroll;"> 
				
			</ul>
		</div>
		
		<div class="rightContentRight monitor_unit">
			<form id="monitorUnitForm">
				<input type="hidden" name="organizeId"/>
				<input type="hidden" name="unitId"/>
				<!-- 屏蔽行业 -->
				<!-- <input type="hidden" name="trades"/> -->
				<input type="hidden" name="siteIds1"/>
				<input type="hidden" name="siteIds2"/>
				<input type="hidden" name="articleTypes"/>
				<input type="hidden" name="systemFilters"/>
				<div class="FormTop">
					<span id="title">设置监测单元</span>
					
					<div class="btnBox" id="monitor_unit_btn_box">
						<input type="button" class="cssButton submit" value="提交" />
						<input type="button" class="cssButton reset update" value="重置" style="display: none;"/>
						<input type="button" class="cssButton reset add" value="重置"/>
					</div>
					
					
				</div>
				
				<div class="FormLine clearfloat">
					<div class="LineLeft">
						<span class="cssColorRed">* </span>所属组织：
					</div>
					
					<div class="LineRight">
						<input class="LineRightText" name="organizeName" type="text" disabled="disabled" placeholder="所属组织"/>
					</div>
				</div>
				
				<div class="FormLine clearfloat">
					<div class="LineLeft">
						<span class="cssColorRed">* </span>监测名称：
					</div>
					
					<div class="LineRight">
						<input class="LineRightText" type="text" placeholder="监测单元名称" disabled="disabled" name="name"/>
					</div>
				</div>
				
				<!-- <div class="FormLine clearfloat">
					<div class="LineLeft">
						所属行业：
					</div>
					
					<div class="LineRight">
						<div class="UnitClassfyBox clearfloat">
							<ul>
								<li class="UnitClassfy">
									<label>
										<input type="checkbox" />&nbsp;城管行业库城管行业库
									</label>
								</li>
							</ul>
						</div>
					</div>
				</div> -->
				
				<div class="FormLine clearfloat">
					<div class="LineLeft">
						<span class="cssColorRed">* </span>关&nbsp;键&nbsp;词：
					</div>
					
					<div class="LineRight">
						<textarea style="resize:none;" class="LineRightTextArea"
									onblur="checkKeywords('keyWords');" 
									name="keyWords" id="keyWords" disabled="disabled" placeholder="关键词,例如:(深圳|鹏城)"></textarea>
						<!-- <textarea style="resize:none;" class="LineRightTextArea"
									name="keyWords" id="keyWords" disabled="disabled" placeholder="关键词,例如:(深圳|鹏城)"></textarea> -->
						
						<div id="keywordExplainBox" style="z-index:1;">
							<img class="keywordExplainBoxPic" src="../ams/system/img/point_out.png" />
							<div class="keywordExplain">
							    <div class="keywordExplainHd" style="">关键词说明</div>
						        <table class="table table-striped table-bordered table-hover keywordExplainTable" >
						        	<thead style="background-color: #f5f2e1;">
						        	<tr>
								      <th width="8%" style="text-align: center;">序号</th>
								      <th width="12%">操作符</th>
								      <th width="40%">说明</th>
								      <th width="40%">用例</th>
								    </tr>
						        	</thead>
						        	<tbody>
						        		<tr>
								        	<td style="text-align: center;">1</td>
								        	<td style="text-align: center;">'<a style="color:red">|</a>'</td>
								        	<td style="text-align:left;">OR:满足条件之一即可</td>
								        	<td style="text-align:left;">"A|B"→A、B出现一个即可</td>
							        	</tr>
							        	<tr>
								        	<td style="text-align: center;">2</td>
								        	<td style="text-align: center;">'<a style="color:red">+</a>'</td>
								        	<td style="text-align:left;">AND:条件必须同时满足</td>
								        	<td style="text-align:left;">"A+B"-&gt;A、B须同时出现</td>
							        	</tr>
							        	<tr>
								        	<td style="text-align: center;">3</td>
								        	<td style="text-align: center;">'<a style="color:red"> </a>'(空格)</td>
								        	<td style="text-align:left;">AND:条件必须同时满足,建议用'+'</td>
								        	<td style="text-align:left;">"A B"→A、B须同时出现</td>
							        	</tr>
							        	<tr>
								        	<td style="text-align: center;">4</td>
								        	<td style="text-align: center;">'<a style="color:red">-</a>'</td>
								        	<td style="text-align:left;">NOT:非操作,排除</td>
								        	<td style="text-align:left;">"A-B"→A出现，B不出现</td>
							        	</tr>
							        	<tr>
								        	<td style="text-align: center;">5</td>
								        	<td style="text-align: center;">'<a style="color:red">*</a>'</td>
								        	<td style="text-align:left;">NEAR:相邻,中间最多不超过6个字符</td>
								        	<td style="text-align:left;">"A*B"→A、B相邻，中间不超过6个字即可</td>
							        	</tr>
							        	<tr>
								        	<td style="text-align: center;">6</td>
								        	<td style="text-align: center;">'<a style="color:red">(</a>'、'<a style="color:red">)</a>'</td>
								        	<td style="text-align:left;">括弧:优先级最高,用于分组表达式,须成对出现</td>
								        	<td style="text-align:left;">"A+(B|C)"→A必须出现,B、C出现一个即可</td>
							        	</tr>
							        	<tr>
								        	<td style="text-align: center;">7</td>
								        	<td style="text-align: center;">'<a style="color:red">$</a>'</td>
								        	<td style="text-align:left;">REFER:引用词库,操作符</td>
								        	<td style="text-align:left;">"$A"→引用词库中A指代的内容,若词表中无A,则返回名称A</td>
							        	</tr>
							        	<tr>
								        	<td style="text-align: center;">8</td>
								        	<td colspan="3" style="padding: 8px;text-align:left;">
									           	&nbsp;&nbsp;部分说明:<br>
									            &nbsp;&nbsp;运算符:均为半角字符,英文状态输入<br>
									            &nbsp;&nbsp;$：可不加括号,如:"$深圳区域"等同于"($深圳区域)"<br>
									            &nbsp;&nbsp;*：支持A*(B|C),(A|B)*(C|D)
									        </td>
							        	</tr>
						        	</tbody>
						        </table>       
						    </div>
						</div><!-- keywordExplainBox -->
						
					</div>
				</div>
				
				<div class="FormLine clearfloat">
					<div class="LineLeft">
						作　　者：
					</div>
					
					<div class="LineRight">
						<textarea style="resize:none;" class="LineRightTextArea" name="exceptAuthor" disabled="disabled" placeholder="作者,例如:(张三|李四)"></textarea>
						
						<div id="authorExplainBox">
							<img class="keywordExplainBoxPic" src="../ams/system/img/point_out.png" />
							<div class="keywordExplain">
							    <div class="keywordExplainHd" style="">作者说明</div>
						        <table class="table table-striped table-bordered table-hover keywordExplainTable" >
						        	<thead style="background-color: #f5f2e1;">
						        	<tr>
								      <th width="8%" style="text-align: center;">序号</th>
								      <th width="12%">操作符</th>
								      <th width="40%">说明</th>
								      <th width="40%">用例</th>
								    </tr>
						        	</thead>
						        	<tbody>
						        		<tr>
								        	<td style="text-align: center;">1</td>
								        	<td style="text-align: center;">'<a style="color:red">|</a>'</td>
								        	<td style="text-align:left;">OR:满足条件之一即可</td>
								        	<td style="text-align:left;">"A|B"→A、B出现一个即可</td>
							        	</tr>
							        	<tr>
								        	<td style="text-align: center;">2</td>
								        	<td style="text-align: center;">'<a style="color:red">+</a>'</td>
								        	<td style="text-align:left;">AND:条件必须同时满足</td>
								        	<td style="text-align:left;">"A+B"-&gt;A、B须同时出现</td>
							        	</tr>
							        	<tr>
								        	<td style="text-align: center;">3</td>
								        	<td style="text-align: center;">'<a style="color:red"> </a>'(空格)</td>
								        	<td style="text-align:left;">AND:条件必须同时满足,建议用'+'</td>
								        	<td style="text-align:left;">"A B"→A、B须同时出现</td>
							        	</tr>
							        	<tr>
								        	<td style="text-align: center;">4</td>
								        	<td style="text-align: center;">'<a style="color:red">-</a>'</td>
								        	<td style="text-align:left;">NOT:非操作,排除</td>
								        	<td style="text-align:left;">"A-B"→A出现，B不出现</td>
							        	</tr>
							        	<tr>
								        	<td style="text-align: center;">5</td>
								        	<td style="text-align: center;">'<a style="color:red">*</a>'</td>
								        	<td style="text-align:left;">NEAR:相邻,中间最多不超过6个字符</td>
								        	<td style="text-align:left;">"A*B"→A、B相邻，中间不超过6个字即可</td>
							        	</tr>
							        	<tr>
								        	<td style="text-align: center;">6</td>
								        	<td style="text-align: center;">'<a style="color:red">(</a>'、'<a style="color:red">)</a>'</td>
								        	<td style="text-align:left;">括弧:优先级最高,用于分组表达式,须成对出现</td>
								        	<td style="text-align:left;">"A+(B|C)"→A必须出现,B、C出现一个即可</td>
							        	</tr>
							        	<tr>
								        	<td style="text-align: center;">7</td>
								        	<td style="text-align: center;">'<a style="color:red">$</a>'</td>
								        	<td style="text-align:left;">REFER:引用词库,操作符</td>
								        	<td style="text-align:left;">"$A"→引用词库中A指代的内容,若词表中无A,则返回名称A</td>
							        	</tr>
							        	<tr>
								        	<td style="text-align: center;">8</td>
								        	<td colspan="3" style="padding: 8px;text-align:left;">
									           	&nbsp;&nbsp;部分说明:<br>
									            &nbsp;&nbsp;运算符:均为半角字符,英文状态输入<br>
									            &nbsp;&nbsp;$：可不加括号,如:"$深圳区域"等同于"($深圳区域)"<br>
									            &nbsp;&nbsp;*：支持A*(B|C),(A|B)*(C|D)
									        </td>
							        	</tr>
						        	</tbody>
						        </table>       
						    </div>
						</div>
					</div>
				</div>
				
				<div class="FormLine clearfloat">
					<div class="LineLeft">
						系统过滤：
					</div>
					
					<div class="LineRight" name="systemFilterDiv" style="width: 450px;float: left;">
						
					</div>
				</div>
				
				<div class="FormLine clearfloat">
					<div class="LineLeft">
						起始时间：
					</div>
					
					<div class="LineRight">
						<input name="starttime" id="monitorStart" class="Wdate cssInput" style="padding:0 5px;width:132px; vertical-align: 0px;" 
								onfocus="WdatePicker({maxDate:'%y-%M-%d'})"/>
						<!-- <input name="starttime" id="monitorStart" class="Wdate cssInput" style="padding:0 5px;width:132px; vertical-align: 0px;" onFocus="var moreEnd=$dp.$('monitorEnd');WdatePicker({minDate:'%y-{%M-3}-%d 00:00:00',dateFmt:'yyyy-MM-dd HH:mm',onpicked:function(){warningEnd.focus();},maxDate:'#F{$dp.$D(\'monitorEnd\')}'})"/> -->
						<!-- 	至
						<input name="endtime" id="monitorEnd" class="Wdate cssInput" style="padding:0 5px;width:132px; vertical-align: 0px;" onFocus="WdatePicker({dateFmt:'yyyy-MM-dd HH:mm',minDate:'#F{$dp.$D(\'monitorStart\')}'})"/> -->
					</div>
				</div>
				
				<div class="FormLine clearfloat">
					<div class="LineLeft">
						媒体类型：
					</div>
					
					<div class="LineRight" name="articleTypeDiv" style="width: 450px;float: left;">
						
					</div>
				</div>
				
				<div class="FormLine clearfloat sites1">
					<div class="LineLeft">
						信&nbsp;&nbsp;息&nbsp;&nbsp;源： 
					</div>
					<div class="LineRight" id="sourceBox1">
						<div class="searchBox">
							<input type="hidden" name="sitePageNo1" value="1"/>
							<input type="hidden" name="sitePageSize1" value="60"/>
							<input class="searchInput" placeholder="站点名称/域名/公众号/微博账号模糊查询" name="siteNameOrg1" style="width: 305px;"/>
							<input type="button" class="cssButton" value="查找" onclick="getSiteList1();"/>
							<input type="button" class="cssButton" value="展开" onclick="showSiteList1();" id="showSiteBtn1"/>					
						</div>
						
						<div class="messageTreeBox clearfloat" style="font-size: 14px;">
							<div class="panel panel-default">
								<div class="panel-heading">包        含</div>
								<div class="panel-body selectedBox">
									<ul class="panel-body clearfix" id="monitorSiteUl"></ul>
								</div>
							</div>
							
							<div class="panel panel-default">
								<div class="panel-heading">排       除</div>
								<div class="panel-body selectedBox">
									<ul class="clearfloat" id="excludeSiteUl"></ul>
								</div>
							</div>

							<div class="tableBox" id="siteList1" style="display: none;">
								<table class="table table-striped table-bordered table-hover" border="0" cellspacing="0">
									<tbody>
									</tbody>
								</table>
								
								<div class="leftSectionMiddle" style="height:48px;min-height:48px;">
									<div class="leftSectionBottom">
										<!-- 分页 -->
										<div class="diggBox">
											<div class="digg" id="sitePagerView1"></div>
										</div>
									</div>
									<div id="siteListLoad"></div><!-- 加载中-->
							 	</div>
							</div>
						</div>
					</div>
				</div>
				
			</form>
		</div>
	</div>
</div>
</template>

<script>
  export default {
    name: 'content-box',
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