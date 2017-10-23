import Vue from 'vue'
import Router from 'vue-router'

import MainPage from '@/components/MainPage'

import Monitor from '@/components/Monitor'

import HongSearch from '@/components/HongSearch'
import Hs_Index from '@/components/hongsearch/HsIndex'
import Hs_List from '@/components/hongsearch/HsList'

import Recommend from '@/components/Recommend'

import Analyze from '@/components/Analyze'
import Analyze_list from '@/components/analyze/SubjectList'
import Analyze_Visual from '@/components/analyze/Visualization'
import Analyze_report from '@/components/analyze/Report'

import SetUp from '@/components/SetUp'
import PersonalSettings from '@/components/setup/personal_settings'
import ChangePassword from '@/components/setup/change_password'
import InformationCollection from '@/components/setup/information_collection'
import WarningSet from '@/components/setup/warning_Set'

Vue.use(Router)

export default new Router({
  routes: [
  	{	
  		path: '/mainPage',
  		name: 'MainPage',
  		component: MainPage 
  	},
    {	
    	path: '/monitor',
    	name: 'Monitor',
    	component: Monitor,
    },
    {	path: '/hongsearch',
    	name: 'HongSearch',
    	component: HongSearch,
      children:[ 
        { path:"/",component:Hs_Index },
        { path:"hsIndex",component:Hs_Index },
        { path:"hsList",component:Hs_List },
        { path: '*',redirect: '/HsIndex'}
      ]
    },
    {	path: '/recommend',
    	name: 'recommend',
    	component: Recommend,
    },
    {	path: '/analyze',
    	name: 'Analyze',
    	component: Analyze,
    	children:[ 
			  { path:"/",component:Analyze_list },
		    { path:"analyzeList",component:Analyze_list },
		    { path:"analyzeVisual",component:Analyze_Visual },
		    { path:"analyzeReport",component:Analyze_report },
		    { path: '*',redirect: '/Analyze_list'}
		  ]
    },
    { path: '/setup',
      name: 'SetUp',
      component: SetUp,
      children:[ 
        { path:"/",component:PersonalSettings },
        { path:"personalsettings",component:PersonalSettings },
        { path:"changepassword",component:ChangePassword },
        { path:"informationcollection",component:InformationCollection },
        { path:"warningset",component:WarningSet },
        { path: '*',redirect: '/personalsettings'}
      ]
    },
/*    {	path: '/',redirect: '/mainPage' },
    {	path: '*',redirect: '/mainPage' }*/
  ]
})

/*
export default [{
	path: '/home',
	component: Home
}, {
	path: '/follow',
	component: Follow
}, {
	path: '/column',
	component: Column
}, {
	path: '/user-info',
	component: UserInfo
}, {
	path: '/article/:id',
	component: Article
}, {
	path: '/',
	redirect: '/home'
}, {
	path: '*',
	redirect: '/home'
}]

children:[ 
	{ path:"/",component:ListMode },
    { path:"listMode",component:ListMode },
    { path:"tableMode",component:TableMode },
    { path: '*',redirect: '/ListMode'}
]
*/
