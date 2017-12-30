// import Vue from "vue";
//import VueRouter from "vue-router";
//require.ensure(['./es6example.js'],()=>{},"js/es6example");
import routes from './routers';
import App from '@view/app';

Vue.use(VueRouter);
//Vue.config.debug = false;
import appHeader from '@component/common/header';
import pageTitle from '@component/common/pagetitle';
const spaGroup = {　　　　
	install: function(Vue) {
		Vue.component('app-header', appHeader);　　
		Vue.component('page-title', pageTitle);
	}
}
Vue.use(spaGroup);

import apigetInfo from '@store/vstore';
window.apigetInfo = apigetInfo;
const router = new VueRouter({
	routes,
	// history: true,
	scrollBehavior(to, from, savedPosition) {
		if(savedPosition) {
			return savedPosition
		} else {
			return { x: 0, y: 0 }
		}
	}
});
new Vue({
	el: '#app',
	router,
	render: h => h(App)
});