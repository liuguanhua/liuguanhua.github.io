import worksinfo from './worksinfo';
import homeInfo from './home';
const fenavInfo = {
	0: {
		title: 'css预处理器&库',
		inlist: [{
				url: 'http://www.sass-zh.com/',
				name: 'sass'
			},
			{
				url: 'http://lesscss.cn/',
				name: 'less'
			}, {
				url: 'http://stylus-lang.com/',
				name: 'stylus'
			},
			{
				url: 'http://postcss.org/',
				name: 'postcss'
			}, {
				url: 'http://daneden.github.io/animate.css/',
				name: 'animate'
			},
			{
				url: 'http://ianlunn.github.io/Hover/',
				name: 'hover'
			}, {
				url: 'http://cssload.net/',
				name: 'cssload'
			},
			{
				url: 'http://anijs.github.io/',
				name: 'anijs'
			}, {
				url: 'http://css3lib.alloyteam.com/',
				name: 'css3lib'
			},
			{
				url: 'http://necolas.github.io/normalize.css/',
				name: 'normalize'
			}, {
				url: 'http://typo.sofi.sh/',
				name: 'typo'
			},
			{
				url: 'https://weui.io/',
				name: 'weui'
			}, {
				url: 'http://nec.netease.com/',
				name: 'nec'
			},
			{
				url: 'http://jrainlau.github.io/elf/',
				name: 'elf'
			}
		]
	},
	1: {
		title: '前端框架',
		inlist: [{
				url: 'http://www.bootcss.com/',
				name: 'Bootstrap'
			},
			{
				url: 'http://h-ui.net/',
				name: 'hui'
			}, {
				url: 'http://dev.dcloud.net.cn/mui/',
				name: 'mui'
			},
			{
				url: 'http://amazeui.org/',
				name: 'amazeui'
			}, {
				url: 'http://www.jeasyui.net/',
				name: 'easyui'
			},
			{
				url: 'http://purecss.org/',
				name: 'pure'
			}, {
				url: 'http://www.ionic.wang/',
				name: 'ionic'
			},
			{
				url: 'http://zui.sexy//',
				name: 'zui'
			}, {
				url: 'https://pandao.github.io/planeui/',
				name: 'planeui'
			},
			{
				url: 'http://www.getuikit.net/',
				name: 'uikit'
			}, {
				url: 'http://www.pintuer.com/',
				name: 'pintuer'
			},
			{
				url: 'http://www.foundcss.com/',
				name: 'foundation'
			}
		]
	},
	2: {
		title: 'javascript',
		inlist: [{
				url: 'http://jquery.com/',
				name: 'jquery'
			},
			{
				url: 'http://www.jqueryui.org.cn/',
				name: 'jqueryui'
			}, {
				url: 'http://cn.vuejs.org/',
				name: 'vue'
			},
			{
				url: 'https://facebook.github.io/react/',
				name: 'react'
			}, {
				url: 'http://nodejs.cn/',
				name: 'node'
			},
			{
				url: 'https://www.angular.cn/',
				name: 'angular'
			}, {
				url: 'http://seajs.org/docs/',
				name: 'sea'
			},
			{
				url: 'http://www.requirejs.cn/',
				name: 'require'
			}, {
				url: 'http://threejs.org/',
				name: 'three'
			},
			{
				url: 'http://backbonejs.org/',
				name: 'backbone'
			}, {
				url: 'http://videojs.com/',
				name: 'video'
			},
			{
				url: 'http://echarts.baidu.com/',
				name: 'echarts'
			},
			{
				url: 'http://reactnative.cn/',
				name: 'reactnative'
			}, {
				url: 'http://recharts.org/',
				name: 'recharts'
			},
			{
				url: 'http://www.swiper.com.cn/',
				name: 'swiper'
			}
		]
	},
	3: {
		title: '构建工具',
		inlist: [{
				url: 'https://www.npmjs.com/',
				name: 'npm'
			},
			{
				url: 'http://www.gulpjs.com.cn/',
				name: 'gulp'
			}, {
				url: 'http://www.browsersync.cn/',
				name: 'browsersync'
			},
			{
				url: 'http://www.gruntjs.net/',
				name: 'grunt'
			}, {
				url: 'https://bower.io/',
				name: 'bower'
			},
			{
				url: 'http://fis.baidu.com/',
				name: 'fls3'
			}, {
				url: 'http://webpack.github.io/',
				name: 'webpack'
			}
		]
	},
	4: {
		title: '一键分享',
		inlist: [{
				url: 'http://share.baidu.com/',
				name: 'baidu'
			},
			{
				url: 'http://www.bshare.cn/',
				name: 'bshare'
			}, {
				url: 'http://overtrue.me/share.js/',
				name: 'share'
			},
			{
				url: 'http://www.jiathis.com/',
				name: 'jiathis'
			}
		]
	},
	5: {
		title: 'cdn服务',
		inlist: [{
				url: 'http://cdn.code.baidu.com/',
				name: 'baidu'
			},
			{
				url: 'http://www.bootcdn.cn/',
				name: 'bootcdn'
			}, {
				url: 'http://staticfile.org/',
				name: 'staticfile'
			},
			{
				url: 'http://www.jsdelivr.com/',
				name: 'jsdelivr'
			},
			{
				url: 'https://cdnjs.com/',
				name: 'cdnjs'
			}
		]
	},
	6: {
		title: '字体图标',
		inlist: [{
				url: 'http://fontawesome.dashgame.com/',
				name: 'fontawesome'
			},
			{
				url: 'http://www.iconfont.cn/',
				name: 'iconfont'
			}, {
				url: 'https://icomoon.io/',
				name: 'icomoon'
			},
			{
				url: 'http://glyphicons.com/',
				name: 'glyphicons'
			},
			{
				url: 'http://fontello.com/',
				name: 'fontello'
			}
		]
	},
}

const outInfo = {
	fenavInfo: fenavInfo,
	worksinfo: worksinfo,
	skillInfo: homeInfo.skillInfo,
	jobsInfo: homeInfo.jobsInfo
}

export default outInfo;