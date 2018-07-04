<template>
	<div class="template-wrapper route-template">
		<div class="flexslider">
			<ul class="slides">
				<li>
					<div class="first-slide">weee</div>
				</li>
				<li>
					<div class="second-slide">waaa</div>
				</li>
				<li>
					<div class="third-slide">woooo</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<style type="text/css" scoped>
.flexslider {
	border: none;
	height: 100vh;
	width: 100%;
	margin-bottom: 0;
}
.flexslider .slides li div {
	height: 100vh;
	padding: 10px;
}

.first-slide {
	background: url('/img/bg1.png');
	background-position: center center;
	background-size: cover;
}

.second-slide,
.third-slide {
	color: white;
}

.second-slide {
	background: url('/img/bg2.png');
	background-position: center center;
	background-size: cover;
}

.third-slide {
	background: url('/img/bg3.png');
	background-position: center center;
	background-size: cover;
}

/deep/ .flex-control-nav {
	height: 48px;
	width: 28px;
	margin-top: -24px;
	position: absolute;
	top: 50%;
	right: 0;
}
/deep/ .flex-control-nav li {
	clear: right;
	float: right;
	padding-bottom: 5px;
}
</style>

<script type="text/javascript" scoped>
	export default {
		data() {
			return {
				currentSlide: null,
			}
		},
		methods: {
			flexsliderStart() {
				var self = this;
			}
		},
		mounted() {
			var self = this;
			$('.flexslider').flexslider({
				animation: 'slide',
				direction: 'vertical',
				directionNav: false,
				pauseOnHover: true,
				after: function(slider){
					self.currentSlide = slider.currentSlide;
					self.flexsliderStart();
				},
			});
		}
	}
</script>