<template>
	<div class="content-box">
		<div class="setup cssOverflow">
			<div class="setup-left EqAltitude">
				<ul class="setup-Ul">
					<li class="setup-list">个人设置</li>
					<li class="setup-list">修改密码</li>
					<li class="setup-list">信息收藏</li>
					<li class="setup-list">预警设置</li>
					<li class="setup-list">系统过滤</li>
					<li class="setup-list">监测单元设置</li>
					<li class="setup-list">我的探针</li>
					<li class="setup-list">首页设置</li>
					<li class="setup-list">账号关注设置</li>
					<li class="setup-list">账号管理</li>
					<li class="setup-list">系统日志</li>
					<li class="setup-list">APP版本更新</li>
					<li class="setup-list">发送短信</li>
					<li class="setup-list">简报制作</li>
					<li class="setup-list">公告设置</li>
					<li class="setup-list">查看公告</li>
				</ul>
			</div>
			<div class="setup-right EqAltitude">
				<router-view/>
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
.setup{
	margin-top:20px;
	padding: 0 0 60px 205px;
	min-height:680px;
	background-color:#fff;
}

.setup-left{
	margin: 0 0 0 -205px;
	width: 203px;
	background-color: #35638b;
	float: left;
}

.setup-Ul{
	width: 100%;
}
.setup-Ul .setup-list{
	width: 100%;
	height: 40px;
	line-height: 38px;
	font-size: 16px;
	color: #fff;
	text-align: center;
	border-top:solid 1px #5084b1;
	border-bottom:solid 1px #224a6e;
	cursor: pointer;
}

.setup-Ul .setup-list.active{
	background-size: 100% 100%;
}

.setup-Ul .setup-list:hover{
	color:#00e0fe;
	text-shadow: 4px -2px 4px #000;
}

.setup-right{
	padding: 0 0 0px 0;
	width: 100%;
	float: right;
	background-color: #ffffff;
}
</style>