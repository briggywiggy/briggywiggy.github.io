
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

 require('./bootstrap');

 import Vue from 'vue'
 import VueRouter from 'vue-router'
 import Vuex from 'vuex'
 import axios from 'axios'

 Vue.use(VueRouter)
 Vue.use(Vuex);
 Vue.use(axios)

 import App from './components/App'
 import Home from './components/Home'
 import About from './components/About'
 import Gallery from './components/Gallery'
 import Contact from './components/Contact'
 import PageNotFound from './components/PageNotFound'

 import UsersIndex from './components/UsersIndex'

 const router = new VueRouter({
 	mode: 'history',
 	linkActiveClass: 'active',
 	routes: [
 	{ path: '/', name: 'index', component: Home },
 	{ path: '/home', name: 'home', component: Home },
 	{ path: '/about', name: 'about', component: About },
 	{ path: '/gallery', name: 'gallery', component: Gallery },
 	{ path: '/contact', name: 'contact', component: Contact },
 	{ path: '*', name: 'pagenotfound', component: PageNotFound },
 	{ path: '/users', name: 'users.index', component: UsersIndex },
 	]
 })

 const store = new Vuex.Store ({
 	debug: true,
 	state: {
 		message: 'Hello!',
 		offCanvas: false,
 	}
 })

// window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

 import OffCanvas from './components/OffCanvas.vue'

 Vue.component('off-canvas', OffCanvas);

 const app = new Vue({
 	el: '#app',
 	router,
 	store,
 	render: h => h(App)
 });
