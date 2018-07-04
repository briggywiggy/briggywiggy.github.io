<template>
	<div class="template-wrapper">
		<div class="offcanvas-menu" :class="{'active' : $store.state.offCanvas }">
			<div class="offcanvas-menu-wrapper">
				<div class="offcanvas-menu-header">
					<div class="burger-wrapper">
						<div class="burger" :class="{'active' : $store.state.offCanvas, 'inactive' : !$store.state.offCanvas }" @click="toggleOffCanvas()">
							<span class="lettuce"></span>
							<span class="patty"></span>
							<span class="tomato"></span>
						</div>
					</div>
				</div>
				<div class="offcanvas-menu-body">
					<ul class="offcanvas-menu-nav" v-for="item in menuItems">
						<router-link :to="item.link" tag="li">
							{{ item.text }}
						</router-link>
					</ul>
				</div>
				<div class="offcanvas-menu-footer">
					<img :src="'/img/logo-sm.png'" class="logo img-fluid" :class="{'active' : $store.state.offCanvas }" />
				</div>
			</div>
		</div>
		<transition name="fade">
			<div class="offcanvas-backdrop" v-if="$store.state.offCanvas"></div>
		</transition>
	</div>
</template>

<script type="text/javascript" scoped>
	export default {
		data() {
			return {
				menuItems: [
				{
					text: 'Home',
					description: 'this is a description',
					link: '/home'
				},
				{
					text: 'About',
					description: 'this is a description',
					link: '/about'
				},
				{
					text: 'Gallery',
					description: 'this is a description',
					link: '/gallery'
				},
				{
					text: 'Contact',
					description: 'this is a description',
					link: '/contact'
				},
				{
					text: 'Ipsum',
					description: 'this is a description',
					link: '/ipsum'
				},
				],
			}
		},
		methods: {
			toggleOffCanvas() {
				var self = this;
				self.$store.state.offCanvas = !self.$store.state.offCanvas;
			}
		}
	}
</script>

<style type="text/css" scoped>
.offcanvas-menu {
	background-color: #afffd8;
	height: 100%;
	position: fixed;
	top: 0;
	left: -10%;
	transition: 0.5s;
	z-index: 2;
	width: 15%;
}
.offcanvas-menu-wrapper {
	height: inherit;
	position: relative;
}
.offcanvas-menu.active {
	left: 0;
}
.offcanvas-backdrop {
	background-color: rgba(0,0,0, 0.75);
	height: 100%;
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	transition: 0.5s;
	z-index: 1;
}

.offcanvas-menu-header {
	height: 65px;
	position: relative;
}

.offcanvas-menu-body {
	color: dimgray;
	cursor: pointer;
	line-height: 20px;
	font-family: goodDogPlain;
	font-size: 24px;
}
.offcanvas-menu-body li:hover,
.offcanvas-menu-body li.active {
	color: salmon;
}

.offcanvas-menu-footer {
	height: 65px;
	position: absolute;
	bottom: 0;
	width: 100%;
}

.logo {
	height: 111px;
	width: auto;
	margin: auto;
	position: absolute;
	right: 15px;
	bottom: 10px;
	transition: all 0.25s ease-in-out;
}
.logo.active {
	right: 10px;
}

.offcanvas-menu-nav {
	list-style-type: none;
	-webkit-margin-before: 0;
	-webkit-margin-after: 0;
	-webkit-margin-start: 0;
	-webkit-margin-end: 0;
	-webkit-padding-start: 0;
}
.offcanvas-menu-nav li {
	padding: 10px 20px;
	text-align: center;
}


/* Burger */
.burger-wrapper {
	position: absolute;
	top: 10px;
	right: 7.5%;
}

.burger {
	border-radius: 3px;
	cursor: pointer;
	height: 35px;
	position: relative;
	margin: auto;
	width: 35px;
}
.lettuce,
.patty,
.tomato {
	background-color: mediumseagreen;
	border-radius: 5pt;
	display: block;
	margin-left: -12px;
	height: 4px;
	width: 24px;
	position: absolute;
	left: 50%;
	-webkit-transition: all 0.5s ease;
	transition: all 0.5s ease;
}
.patty {
	top: 45%;
}
.lettuce { /* lettuce */
	top: 22.5%;
}
.tomato { /* tomato */
	top: 67.5%;
}

.burger.inactive:hover .patty {
	-webkit-transform: rotate(180deg);
	-ms-transform: rotate(180deg);
	transform: rotate(180deg);
}
.burger.inactive:hover .lettuce {
	top: 27.5%;
	left: 77.5%;
	width: 14px;
	-webkit-transform: rotate(225deg);
	-ms-transform: rotate(225deg);
	transform: rotate(225deg)
}
.burger.inactive:hover .tomato {
	top: 62.5%;
	left: 77.5%;
	width: 14px;
	-webkit-transform: rotate(135deg);
	-ms-transform: rotate(135deg);
	transform: rotate(135deg)
}

.burger.active .patty {
	background-color: salmon;
	margin-top: -4px;
	margin-left: -9px;
	top: 50%;
	left: 50%;
	transform: rotate(-45deg);
	width: 18px;
}
.burger.active .lettuce {
	background-color: salmon;
	margin-top: -4px;
	margin-left: -9px;
	top: 50%;
	left: 50%;
	transform: rotate(45deg);
	width: 18px;
}
.burger.active .tomato {
	background-color: salmon;
	height: 2px;
	top: 77.5%;
}

/* Vue Transitions */
.fade-enter-active, .fade-leave-active {
	transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	opacity: 0;
}
</style>