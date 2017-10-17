<template>
  <div class="client-organization">
    <div class="leftTitle">
      组织
    </div>
    <div class="clientOrganization-title">客户组织</div>
    <div class="search">
      <div class="searchBox">
        <input class="searchInput" placeholder="组织名称" type="text" name="name"/>
        <img class="searchBth" src="../../assets/img/searchBtn.png" />
      </div>
    </div>
    
    <ul class="clientOrganization-Ul" >         
      <li class="clientOrganizationUl-List active">
        <div class="clientOrganizationUlList-Name" title="广东">
          <div class="ListNameUl-List-ico active" open="open"></div>
          <div class="name oneLineOverflow">广东</div>
        </div>
        <ul class="ListName-Ul" style="">
          <li class="ListNameUl-List oneLineOverflow childorg active" orgid="69" title="广州天河区2">
            广州天河区2
          </li>
          <li class="ListNameUl-List oneLineOverflow childorg" orgid="70" title="惠州">
            惠州
          </li>
          <li class="ListNameUl-List oneLineOverflow childorg" orgid="71" title="佛山">
            佛山
          </li>
          <li class="ListNameUl-List oneLineOverflow childorg" orgid="72" title="珠江">
            珠江
          </li>
          <li class="ListNameUl-List oneLineOverflow childorg" orgid="73" title="中山">
            中山
          </li>
          <li class="ListNameUl-List oneLineOverflow childorg" orgid="74" title="雷州">
            雷州
          </li>
          <li class="ListNameUl-List oneLineOverflow childorg" orgid="76" title="梅州">
            梅州
          </li>
          <li class="ListNameUl-List oneLineOverflow childorg" orgid="142" title="揭阳">
            揭阳
          </li>
          <li class="ListNameUl-List oneLineOverflow childorg" orgid="144" title="我的测试wlm">
            我的测试wlm
          </li>
        </ul>
      </li>
      <li class="clientOrganizationUl-List">
        <div class="clientOrganizationUlList-Name" title="广西">
          <div class="ListNameUl-List-ico"></div>
          <div class="name oneLineOverflow">广西</div>
        </div>
        <ul class="ListName-Ul" style="display: none;">
          <li class="ListNameUl-List oneLineOverflow childorg" orgid="123" title="桂林">
            桂林
          </li>
          <li class="ListNameUl-List oneLineOverflow childorg" orgid="124" title="南宁">
            南宁
          </li>
        </ul>
      </li>
      <li class="clientOrganizationUl-List">
        <div class="clientOrganizationUlList-Name" title="深圳">
          <div class="ListNameUl-List-ico"></div>
          <div class="name oneLineOverflow">深圳</div>
        </div>
        <ul class="ListName-Ul" style="display: none;">
          <li class="ListNameUl-List oneLineOverflow childorg" orgid="64" title="福田">
            福田
          </li>
          <li class="ListNameUl-List oneLineOverflow childorg" orgid="119" title="内服1">
            内服1
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'amsHead',
    data () {
      return {
        
      }
    }
  }
</script>

<style scoped>
/*左边客户组织列表*/
.client-organization{
  margin: 0;
    width: 190px;
    background-color: #003e73;
    position: fixed;
    top: 140px;
    left: -190px;
    z-index:1;
  /*   -webkit-box-shadow:0 0 2px 2px #003e73; 
  -moz-box-shadow:0 0 2px 2px #003e73; 
  box-shadow: 0 0 2px 2px #003e73; */
  /* position:relative; */
}

.client-organization .leftTitle{
  padding:23px 5px;
  width:32px;
  line-height:24px;
  text-align:center;
  height:100px;
  position: absolute;
  top:72px;
  left:190px;
  background-color:#003e73;
  border-left:solid 1px #bfbfbf;
  border-radius:0 5px 5px 0;
  font-size:14px;
  color:#fff;
  cursor: pointer;  
}

.client-organization .clientOrganization-title{
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 16px;
  color: #fff;  
}

.client-organization .search{
  padding: 3px 0 0 0;
  width: 100%;
  height: 34px;
  background-color: #072e54;
}


.client-organization .searchBox{
  margin: 0 auto;
  padding:0 28px 0 0px;
  width: 180px;
  height: 28px;
  border-radius: 3px;
  background-color: #fff;
  /*float: left;*/

}

.client-organization .searchBox .searchInput{
  padding: 0 0 0 12px;
  width: 100%;
  height: 28px;
  line-height: 28px;
  font-size: 14px;
  float: left;
  color: #141414;
  outline: none;
  border:none;
  border-radius: 3px 0 0 3px;
/*  background-color: #ff0;*/
}

.client-organization .searchBox .searchBth{
    margin: 5px -20px 0 0;
    width: 17px;
    height: 21px;
    float: right;
    cursor: pointer;
}

.client-organization .clientOrganization-Ul{
  width: 100%;
  height: 400px;
  overflow-y:auto;
}

.client-organization .clientOrganization-Ul .clientOrganizationUl-List{
  width: 100%;
  border-bottom:solid 1px #012141;
  border-top: solid 1px #105590;
}

.client-organization .clientOrganization-Ul .clientOrganizationUl-List.active{
  background-color: #0a263e;
} 

.client-organization .clientOrganization-Ul .clientOrganizationUl-List:hover{
  background-color: #093255;
} 

.client-organization .clientOrganization-Ul .clientOrganizationUl-List .clientOrganizationUlList-Name{
  padding: 0 10px 0 30px;
  line-height: 38px;
  /* background-position: 10px center;
  background-repeat: no-repeat; */
  font-size: 14px;
  color: #fff;
  white-space:nowrap;
  overflow: hidden;
  text-overflow:ellipsis;
/*  background-image: url(../img/Organization_open.png); */
}

.client-organization .clientOrganization-Ul .clientOrganizationUl-List 
.clientOrganizationUlList-Name .ListNameUl-List-ico{
  margin: 11px 0 0 -20px;
    width: 17px;
    height: 17px;
    float: left;
/*    background-image: url(../img/Organization_open.png);*/
    cursor: pointer;
}

.client-organization .clientOrganization-Ul .clientOrganizationUl-List 
.clientOrganizationUlList-Name .name{
    cursor: pointer;
}

.client-organization .clientOrganization-Ul .clientOrganizationUl-List 
.clientOrganizationUlList-Name .ListNameUl-List-ico.active{
/*  background-image: url(../img/Organization_close.png); */
}

.client-organization .clientOrganization-Ul .clientOrganizationUl-List .ListName-Ul{
  width: 100%;
}


.client-organization .clientOrganization-Ul .clientOrganizationUl-List .ListName-Ul .ListNameUl-List{
  padding: 0 10px 0 50px;
  width: 100%;
  height: 39px;
  line-height: 38px;
  border-bottom: solid 1px #001631;
 /* background-image: url(../img/NameSub-list.png);*/
  background-repeat: no-repeat;
  background-position: 35px center;
  font-size: 14px;
  color: #fff;
  white-space:nowrap;
  overflow: hidden;
  background-color: #072e54;
  cursor: pointer;
}

.client-organization .clientOrganization-Ul .clientOrganizationUl-List .ListName-Ul .ListNameUl-List:hover{
  background-color: #092846;
}

.client-organization .clientOrganization-Ul .clientOrganizationUl-List .ListName-Ul .ListNameUl-List.active{
/*  background-image: url(../img/NameSub-listActive.png); */
  background-size: 100% 100%;
  background-position: 0px 0px;
}


.clientOrganization-Ul::-webkit-scrollbar{
  width:8px;
  background:#fff;
}

/*定义滚动条轨道 内阴影+圆角*/  
.clientOrganization-Ul::-webkit-scrollbar-track  
{  
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);  
    border-radius: 10px;  
    background-color: #F5F5F5;  
}  
  
/*定义滑块 内阴影+圆角*/  
.clientOrganization-Ul::-webkit-scrollbar-thumb  
{  
    border-radius: 10px;  
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);  
    background-color: #555;  
} 

/*左边客户组织列表*/
</style>
