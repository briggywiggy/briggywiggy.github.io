<template>
	<div class="template-wrapper">
		<div class="room-container">
			<div class="scroller">
				<div class="room room-current">
					<div class="room-side room-side-back">
						<img :src="'/img/set4/3.jpg'" class="room-img" data-toggle="modal" data-target="#exampleModal" @click="modalImg = '/img/set4/3.jpg'">
						<img :src="'/img/set4/6.jpg'" class="room-img" data-toggle="modal" data-target="#exampleModal" @click="modalImg = '/img/set4/6.jpg'">
					</div>
					<div class="room-side room-side-left">
						<img :src="'/img/set4/7.jpg'" class="room-img" data-toggle="modal" data-target="#exampleModal" @click="modalImg = '/img/set4/7.jpg'">
						<img :src="'/img/set4/1.jpg'" class="room-img" data-toggle="modal" data-target="#exampleModal" @click="modalImg = '/img/set4/1.jpg'">
						<img :src="'/img/set4/2.jpg'" class="room-img" data-toggle="modal" data-target="#exampleModal" @click="modalImg = '/img/set4/2.jpg'">
					</div>
					<div class="room-side room-side-right">
						<img :src="'/img/set4/4.jpg'" class="room-img" data-toggle="modal" data-target="#exampleModal" @click="modalImg = '/img/set4/4.jpg'">
						<img :src="'/img/set4/5.jpg'" class="room-img" data-toggle="modal" data-target="#exampleModal" @click="modalImg = '/img/set4/5.jpg'">
						<img :src="'/img/set4/8.jpg'" class="room-img" data-toggle="modal" data-target="#exampleModal" @click="modalImg = '/img/set4/8.jpg'">
					</div>
					<div class="room-side room-side-bottom"></div>
				</div>
				<div class="room">
					<div class="room-side room-side-back">
						<img :src="'/img/set3/1.jpg'" class="room-img" data-toggle="modal" data-target="#exampleModal" @click="modalImg = '/img/set3/1.jpg'">
						<img :src="'/img/set3/6.jpg'" class="room-img" data-toggle="modal" data-target="#exampleModal" @click="modalImg = '/img/set3/6.jpg'">
					</div>
					<div class="room-side room-side-left">
						<img :src="'/img/set3/3.jpg'" class="room-img" data-toggle="modal" data-target="#exampleModal" @click="modalImg = '/img/set3/3.jpg'">
						<img :src="'/img/set3/4.jpg'" class="room-img" data-toggle="modal" data-target="#exampleModal" @click="modalImg = '/img/set3/4.jpg'">
						<img :src="'/img/set3/5.jpg'" class="room-img" data-toggle="modal" data-target="#exampleModal" @click="modalImg = '/img/set3/5.jpg'">
					</div>
					<div class="room-side room-side-right">
						<img :src="'/img/set3/8.jpg'" class="room-img" data-toggle="modal" data-target="#exampleModal" @click="modalImg = '/img/set3/8.jpg'">
						<img :src="'/img/set3/7.jpg'" class="room-img" data-toggle="modal" data-target="#exampleModal" @click="modalImg = '/img/set3/7.jpg'">
						<img :src="'/img/set3/2.jpg'" class="room-img" data-toggle="modal" data-target="#exampleModal" @click="modalImg = '/img/set3/2.jpg'">
					</div>
					<div class="room-side room-side-bottom"></div>
				</div>
			</div>
		</div>

		<div class="content">
			<nav class="nav">
				<button class="btn-nav btn-nav-left" @click="navigate(0)">
					<svg class="nav-icon nav-icon-left" width="42px" height="12px" viewBox="0 0 70 20">
						<path class="nav-triangle" d="M52.5,10L70,0v20L52.5,10z"/>
						<path class="nav-line" d="M55.1,11.4H0V8.6h55.1V11.4z"/>
					</svg>
				</button>
				<button class="btn-nav btn-nav-right" @click="navigate(1)">
					<svg class="nav-icon nav-icon-right" width="42px" height="12px" viewBox="0 0 70 20">
						<path class="nav-triangle" d="M52.5,10L70,0v20L52.5,10z"/>
						<path class="nav-line" d="M55.1,11.4H0V8.6h55.1V11.4z"/>
					</svg>
				</button>
			</nav>
		</div>

		<!-- Preloader -->
		<div class="overlay overlay-loader overlay-active">
			<img :src="'/img/aquarium-1.png'" class="aquarium-1">
			<img :src="'/img/aquarium-2.png'" class="aquarium-2">
			<div class="preloader-wrapper">
				<img :src="'/img/optimized-fish.gif'" class="preloader">
			</div>
		</div>

		<!-- Modal -->
		<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div class="modal-dialog modal-dialog-centered" role="document">
				<div class="modal-content">
					<img :src="modalImg" class="img-fluid">
				</div>
			</div>
		</div>
	</div>
</template>

<style type="text/css" src="./css/gallery.css" scoped></style>

<script type="text/javascript" src="./js/gallery.js" scoped></script>