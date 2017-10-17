import Vue from 'vue'
import Router from 'vue-router'

import MainPage from '@/components/MainPage'
import Monitor from '@/components/Monitor'
import HongSearchIndex from '@/components/HongSearchIndex'
import HongSearch from '@/components/HongSearch'
import Recommend from '@/components/Recommend'
import Analyze from '@/components/Analyze'

import ListMode from '@/components/mode/ListMode'
import TableMode from '@/components/mode/TableMode'


Vue.use(Router)

export default new Router({
  routes: [
  	{	path: '/mainPage',name: 'MainPage',component: MainPage },
    {	
    	path: '/monitor',
    	name: 'Monitor',
    	component: Monitor,
    	children:[ 
    		{ path:"/",component:ListMode },
            { path:"listMode",component:ListMode },
            { path:"tableMode",component:TableMode },
            { path: '*',redirect: '/ListMode'}
        ]
    },
    {	path: '/hsindex',
    	name: 'HongSearchIndex',
    	component: HongSearchIndex,
    },
    {	path: '/hongsearch',
    	name: 'HongSearch',
    	component: HongSearch,
    	children:[ 
    		{ path:"/",component:ListMode },
            { path:"listMode",component:ListMode },
            { path:"tableMode",component:TableMode },
            { path: '*',redirect: '/ListMode'}
        ]
    },
    {	path: '/recommend',
    	name: 'recommend',
    	component: Recommend,
    	children:[ 
    		{ path:"/",component:ListMode },
            { path:"listMode",component:ListMode },
            { path:"tableMode",component:TableMode },
            { path: '*',redirect: '/ListMode'}
        ]
    },
    {	path: '/analyze',name: 'Analyze',component: Analyze },
    {	path: '/',redirect: '/mainPage' },
    {	path: '*',redirect: '/mainPage' }
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
*/
