const routes = [
	{
		path: '/about',
		name: '关于',
		component: resolve => require(['@view/about.vue'], resolve),
	}, 
	{
		path: '/works',
		name: '作品',
		components: {
			default: resolve => require(['@view/works.vue'], resolve)
		}
	},
	{
		path: '/fenav',
		name: '导航',
		component: resolve => require(['@view/fenav.vue'], resolve)
	},
	{
		path: '/contact',
		name: '联系',
		component: resolve => require(['@view/contact.vue'], resolve)
	},
	{
		path: '/*',
		name: '404',
		component: resolve => require(['@view/about.vue'], resolve)
	},
]
export default routes;