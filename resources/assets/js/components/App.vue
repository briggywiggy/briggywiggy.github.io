<template>
	<div class="template-wrapper">
		<!-- <h1>Vue Router Demo App</h1>

		<p>
			<router-link :to="{ name: 'home' }">Home</router-link>
		</p>

		<div class="container">
			<router-view></router-view>
		</div> -->
		<off-canvas></off-canvas>
		<router-view class="router-view" :class="{'off-canvas' : $store.state.offCanvas}"></router-view>
	</div>
</template>

<style type="text/css" scoped>
@font-face {
	font-family: goodDogPlain;
	src: url(../../fonts/good_dog/GOODDP__.ttf);
}
.router-view {
	margin-left: 5%;
	transition: 0.5s;
}
.router-view.off-canvas {
	margin-left: 15%;
}
</style>

<script type="text/javascript" scoped>
	export default {
		mounted() {
		}
	}
</script>