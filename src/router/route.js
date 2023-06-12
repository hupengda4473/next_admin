/**
 * 路由meta对象参数说明
 * meta: {
 *      title:          菜单栏及 tagsView 栏、菜单搜索名称（国际化）
 *      isLink：        是否超链接菜单，开启外链条件，`1、isLink: 链接地址不为空 2、isIframe:false`
 *      isHide：        是否隐藏此路由
 *      isKeepAlive：   是否缓存组件状态
 *      isAffix：       是否固定在 tagsView 栏上
 *      isIframe：      是否内嵌窗口，开启条件，`1、isIframe:true 2、isLink：链接地址不为空`
 *      roles：         当前路由权限标识，取角色管理。控制路由显示、隐藏。超级管理员：admin 普通角色：common
 *      icon：          菜单、tagsView 图标，阿里：加 `iconfont xxx`，fontawesome：加 `fa xxx`
 * }
 */

/**
 * 定义动态路由
 * @description 未开启 isRequestRoutes 为 true 时使用（前端控制路由），开启时第一个顶级 children 的路由将被替换成接口请求回来的路由数据
 * @description 各字段请查看 `/@/views/system/menu/component/addMenu.vue 下的 ruleForm`
 * @returns 返回路由菜单数据
 */
export const dynamicRoutes = [
	{
		path: '/',
		name: '/',
		component: () => import('/@/layout/index.vue'),
		redirect: '/home',
		meta: {
			isKeepAlive: true,
		},
		children: [
			{
				path: '/home',
				name: 'home',
				component: () => import('/@/views/home/index.vue'),
				meta: {
					title: '首页',
					isLink: '',
					isHide: false,
					isKeepAlive: true,
					isAffix: true,
					isIframe: false,
					roles: ['admin', 'common'],
					icon: 'iconfont icon-shouye',
				},
			},
			{
				path: '/visualizing',
				name: '数据可视化',
				component: () => import('/@/layout/routerView/parent.vue'),
				redirect: '/visualizing/demo1',
				meta: {
					title: '数据可视化',
					isLink: '',
					isHide: false,
					isKeepAlive: true,
					isAffix: false,
					isIframe: false,
					roles: ['admin'],
					icon: 'ele-ChatLineRound',
				},
				/**
				 * 打开内置全屏
				 * component 都为 `() => import('/@/layout/routerView/link.vue')`
				 * isLink 链接为内置的路由地址，地址为 staticRoutes 中定义
				 */
				children: [
					{
						path: '/visualizing/visualizingLinkDemo1',
						name: 'demo1',
						component: () => import('/@/layout/routerView/link.vue'),
						meta: {
							title: 'demo1',
							isLink: '/visualizingDemo1',
							isHide: false,
							isKeepAlive: false,
							isAffix: false,
							isIframe: false,
							roles: ['admin'],
							icon: 'iconfont icon-caozuo-wailian',
						},
					},
					{
						path: '/visualizing/visualizingLinkDemo2',
						name: 'demo2',
						component: () => import('/@/layout/routerView/link.vue'),
						meta: {
							title: 'demo2',
							isLink: '/visualizingDemo2',
							isHide: false,
							isKeepAlive: false,
							isAffix: false,
							isIframe: false,
							roles: ['admin'],
							icon: 'iconfont icon-caozuo-wailian',
						},
					},
				],
			},
			{
				path: '/system',
				name: 'system',
				component: () => import('/@/layout/routerView/parent.vue'),
				redirect: '/system/menu',
				meta: {
					title: '系统设置',
					isLink: '',
					isHide: false,
					isKeepAlive: true,
					isAffix: false,
					isIframe: false,
					roles: ['admin'],
					icon: 'iconfont icon-xitongshezhi',
				},
				children: [
					{
						path: '/system/menu',
						name: 'systemMenu',
						component: () => import('/@/views/system/menu/index.vue'),
						meta: {
							title: '菜单管理',
							isLink: '',
							isHide: false,
							isKeepAlive: true,
							isAffix: false,
							isIframe: false,
							roles: ['admin'],
							icon: 'iconfont icon-caidan',
						},
					},
					{
						path: '/system/role',
						name: 'systemRole',
						component: () => import('/@/views/system/role/index.vue'),
						meta: {
							title: '角色管理',
							isLink: '',
							isHide: false,
							isKeepAlive: true,
							isAffix: false,
							isIframe: false,
							roles: ['admin'],
							icon: 'ele-ColdDrink',
						},
					},
					{
						path: '/system/user',
						name: 'systemUser',
						component: () => import('/@/views/system/user/index.vue'),
						meta: {
							title: '用户管理',
							isLink: '',
							isHide: false,
							isKeepAlive: true,
							isAffix: false,
							isIframe: false,
							roles: ['admin'],
							icon: 'iconfont icon-icon-',
						},
					},
					{
						path: '/system/dept',
						name: 'systemDept',
						component: () => import('/@/views/system/dept/index.vue'),
						meta: {
							title: '部门管理',
							isLink: '',
							isHide: false,
							isKeepAlive: true,
							isAffix: false,
							isIframe: false,
							roles: ['admin'],
							icon: 'ele-OfficeBuilding',
						},
					},
					{
						path: '/system/dic',
						name: 'systemDic',
						component: () => import('/@/views/system/dic/index.vue'),
						meta: {
							title: '字典管理',
							isLink: '',
							isHide: false,
							isKeepAlive: true,
							isAffix: false,
							isIframe: false,
							roles: ['admin'],
							icon: 'ele-SetUp',
						},
					},
				],
			},
			{
				path: '/test',
				name: 'test',
				component: () => import('/@/layout/routerView/parent.vue'),
				redirect: '/test/test1',
				meta: {
					title: 'test',
					isLink: '',
					isHide: false,
					isKeepAlive: true,
					isAffix: false,
					isIframe: false,
					roles: ['admin'],
					icon: 'iconfont icon-xitongshezhi',
				},
				children: [
					{
						path: '/test/test1',
						name: 'test1',
						component: () => import('/@/layout/routerView/parent.vue'),
						redirect: '/test/test1/test11-1',
						meta: {
							title: '菜单test1',
							isLink: '',
							isHide: false,
							isKeepAlive: true,
							isAffix: false,
							isIframe: false,
							roles: ['admin'],
							icon: 'iconfont icon-caidan',
						},
						children: [
							{
								path: '/test/test1/test11-1',
								name: 'test11-1',
								component: () => import('/@/views/test/test1/test11-1/index.vue'),
								meta: {
									title: 'test11-1',
									isLink: '',
									isHide: false,
									isKeepAlive: true,
									isAffix: false,
									isIframe: false,
									roles: ['admin'],
									icon: 'iconfont icon-caidan',
								},
							},
							{
								path: '/test/test1/test11-2',
								name: 'test11-2',
								component: () => import('/@/views/test/test1/test11-2/index.vue'),
								meta: {
									title: 'test11-2',
									isLink: '',
									isHide: false,
									isKeepAlive: true,
									isAffix: false,
									isIframe: false,
									roles: ['admin'],
									icon: 'ele-ColdDrink',
								},
							}
						],
					},
					{
						path: '/test/test2',
						name: 'test2',
						component: () => import('/@/layout/routerView/parent.vue'),
						redirect: '/test/test2/test22-1',
						meta: {
							title: '菜单test2',
							isLink: '',
							isHide: false,
							isKeepAlive: true,
							isAffix: false,
							isIframe: false,
							roles: ['admin'],
							icon: 'ele-ColdDrink',
						},
						children: [
							{
								path: '/test/test2/test22-1',
								name: 'test22-1',
								component: () => import('/@/views/test/test2/test22-1/index.vue'),
								meta: {
									title: 'test22-1',
									isLink: '',
									isHide: false,
									isKeepAlive: true,
									isAffix: false,
									isIframe: false,
									roles: ['admin'],
									icon: 'iconfont icon-caidan',
								},
							},
							{
								path: '/test/test2/test22-2',
								name: 'test22-2',
								component: () => import('/@/views/test/test2/test22-2/index.vue'),
								meta: {
									title: 'test22-2',
									isLink: '',
									isHide: false,
									isKeepAlive: true,
									isAffix: false,
									isIframe: false,
									roles: ['admin'],
									icon: 'ele-ColdDrink',
								},
							}
						]
					}
				],
			},
		],
	},
];

/**
 * 定义404、401界面
 * @link 参考：https://next.router.vuejs.org/zh/guide/essentials/history-mode.html#netlify
 */
export const notFoundAndNoPower = [
	{
		path: '/:path(.*)*',
		name: 'notFound',
		component: () => import('/@/views/error/404.vue'),
		meta: {
			title: '页面找不到',
			isHide: true,
		},
	},
	{
		path: '/401',
		name: 'noPower',
		component: () => import('/@/views/error/401.vue'),
		meta: {
			title: '页面无权限',
			isHide: true,
		},
	},
];

/**
 * 定义静态路由（默认路由）
 * 此路由不要动，前端添加路由的话，请在 `dynamicRoutes 数组` 中添加
 * @description 前端控制直接改 dynamicRoutes 中的路由，后端控制不需要修改，请求接口路由数据时，会覆盖 dynamicRoutes 第一个顶级 children 的内容（全屏，不包含 layout 中的路由出口）
 * @returns 返回路由菜单数据
 */
export const staticRoutes = [
	{
		path: '/login',
		name: 'login',
		component: () => import('/@/views/login/index.vue'),
		meta: {
			title: '登录',
		},
	},
	{
		path: '/visualizingDemo1',
		name: 'visualizingDemo1',
		component: () => import('/@/views/visualizing/demo1.vue'),
		meta: {
			title: 'demo1',
		},
	},
	{
		path: '/visualizingDemo2',
		name: 'visualizingDemo2',
		component: () => import('/@/views/visualizing/demo2.vue'),
		meta: {
			title: 'demo2',
		},
	},
];
