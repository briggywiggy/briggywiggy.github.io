export default {
	data() {
		return {
			modalImg: null,

				//Room
				DOM: {},
				currentRoom: null,
				totalRooms: null,
				initTransform: {},
				resetTransform: {},
				menuTransform: {},
				infoTransform: {},
				initTransition: {},
				roomTransition: {},
				menuTransition: {},
				infoTransition: {},
				tiltTransition: {},
				tilt: null,
				tiltRotation: {},
				win: {},
				isMoving: null,
				isNavigating: null,
			}
		},
		methods: {
			//Preloader
			initPreloader() {
				function makeNewPosition(){
					// Get viewport dimensions (remove the dimension of the div)
					var h = $(window).height() - 72;
					var w = $(window).width() - 87;

					var nh = Math.floor(Math.random() * h);
					var nw = Math.floor(Math.random() * w);

					return [nh,nw];    

				}
				function animatePreloader(){
					var newq = makeNewPosition();
					$('.preloader-wrapper').animate({ top: newq[0], left: newq[1] }, 10000, function(){
						animatePreloader();        
					});

				};

				setTimeout(function() {
					$('.preloader-wrapper').addClass('animated bounce');
					setTimeout(function() {
						$('.preloader-wrapper').addClass('float');
						$('.preloader').addClass('spin');
						// animatePreloader();
					}, 1000);
				}, 1500);
			},

			//Set Data
			initData() {
				var self = this;
				//Preloader
				//The rooms
				self.DOM.rooms = [].slice.call(document.querySelector('.scroller').querySelectorAll('.room'));
				self.DOM.content = document.querySelector('.content');
				self.currentRoom = 0;
				self.totalRooms = (self.DOM.rooms).length;
				self.initTransform = { translateX : 0, translateY : 0, translateZ : '500px', rotateX : 0, rotateY : 0, rotateZ : 0 };
				self.resetTransform = { translateX : 0, translateY : 0, translateZ : 0, rotateX : 0, rotateY : 0, rotateZ : 0 };
				self.menuTransform = { translateX : 0, translateY : '150%', translateZ : 0, rotateX : '15deg', rotateY : 0, rotateZ : 0 };
				self.menuTransform = { translateX : 0, translateY : '50%', translateZ : 0, rotateX : '-10deg', rotateY : 0, rotateZ : 0 };
				self.infoTransform = { translateX : 0, translateY : 0, translateZ : '200px', rotateX : '2deg', rotateY : 0, rotateZ : '4deg' };
				self.initTransition = { speed: '0.9s', easing: 'ease' };
				self.roomTransition = { speed: '0.4s', easing: 'ease' };
				self.menuTransition = { speed: '1.5s', easing: 'cubic-bezier(0.2,1,0.3,1)' };
				self.infoTransition = { speed: '15s', easing: 'cubic-bezier(0.3,1,0.3,1)' };
				self.tiltTransition = { speed: '0.2s', easing: 'ease-out' };
				self.tilt = false;
				self.tiltRotation = { rotateX: 1, rotateY: -3 };
				self.win = { width: window.innerWidth, height: window.innerHeight };
			},

			//Images finished loading
			imagesLoaded() {
				var self = this;

				imagesloaded($('.scroller'), function() {
					anime({
						targets: document.querySelector('.overlay-loader'),
						duration: 600,
						easing: 'easeInOutCubic',
						delay: 1000,
						translateY: '-100%',
						begin: function() {
							self.move({ transition: self.initTransition, transform: self.initTransform }).then(function() {
								self.initTilt();
								self.initEvents();
							})
						},
						complete: function() {
							$('.overlay-loader').removeClass('overlay-active');
						}
					});
				});
			},

			move(opts) {
				var self = this;

				return new Promise(function(resolve, reject) {
					if(self.isMoving && !opts.stopTransition) {
						return false;
					}

					self.isMoving = true;

					if(opts.transition) {
						self.applyRoomTransition(opts.transition);
					}

					if(opts.transform) {
						self.applyRoomTransform(opts.transform);
						var onEndFn = function() {
							self.isMoving = false;
							resolve();	
						};
						var onEndTransition = function(el, callback) {
							var onEndCallbackFn = function(ev) {
								this.removeEventListener('transitioned', onEndCallbackFn);
								if(callback && typeof callback === 'function') {
									callback.call();
								}
							};
							el.addEventListener('transitionend', onEndCallbackFn);
						};
						onEndTransition(document.querySelector('.scroller'), onEndFn);
					} else {
						resolve();
					}
				});
			},
			initTilt() {
				var self = this;

				self.applyRoomTransition(self.tiltTransition);
				self.tilt = true;
			},
			applyRoomTransition(transition) {
				document.querySelector('.scroller').style.transition = transition === 'none' ? transition : 'transform ' + transition.speed + ' ' + transition.easing;
			},
			applyRoomTransform(transform) {
				document.querySelector('.scroller').style.transform = 'translate3d(' + transform.translateX + ', ' + transform.translateY + ', ' + transform.translateZ + ') ' +
				'rotate3d(1,0,0,' + transform.rotateX + ') rotate3d(0,1,0,' + transform.rotateY + ') rotate3d(0,0,1,' + transform.rotateZ + ')';
			},
			initEvents() {
				var self = this;

				$(document).mousemove(function(event) {
					requestAnimationFrame(function() {
						if(!self.tilt || self.$store.state.offCanvas) {
							return false;
						}
						var currentMousePos = { x: -1, y: -1 };
						currentMousePos.x = event.pageX;
						currentMousePos.y = event.pageY;

						var rotX = self.tiltRotation.rotateX ? self.initTransform.rotateX -  (2 * self.tiltRotation.rotateX / self.win.height * currentMousePos.y - self.tiltRotation.rotateX) : 0,
						rotY = self.tiltRotation.rotateY ? self.initTransform.rotateY -  (2 * self.tiltRotation.rotateY / self.win.width * currentMousePos.x - self.tiltRotation.rotateY) : 0;
						self.applyRoomTransform({
							'translateX' : self.initTransform.translateX, 
							'translateY' : self.initTransform.translateY, 
							'translateZ' : self.initTransform.translateZ, 
							'rotateX' : rotX + 'deg', 
							'rotateY' : rotY + 'deg',
							'rotateZ' : self.initTransform.rotateZ
						});
					});
				})
			},

			navigate(nav) {
				var self = this;

				if(self.isMoving || self.isNavigating) {
					return false;
				}

				self.isNavigating = true;

				var room = self.DOM.rooms[self.currentRoom];
				self.tilt = false;

				if(nav) {
					self.currentRoom = self.currentRoom < self.totalRooms - 1 ? self.currentRoom + 1 : 0;
				} else {
					self.currentRoom = self.currentRoom > 0 ? self.currentRoom - 1 : self.totalRooms - 1;
				}

				var nextRoom = self.DOM.rooms[self.currentRoom];
				nextRoom.style.transform = 'translate3d(' + (nav ? 100 : -100) + '%,0,0) translate3d(' + (nav ? 1 : -1) + 'px,0,0)' ;
				nextRoom.style.opacity = 1;

				self.move({transition: self.roomTransition, transform: self.resetTransform})
				.then(function() {
					return self.move({transform: { translateX : (nav ? -100 : 100) + '%', translateY : 0, translateZ : 0, rotateX : 0, rotateY : 0, rotateZ : 0 }});
				})
				.then(function() {
					nextRoom.classList.add('room-current');
					room.classList.remove('room-current');
					room.style.opacity = 0;

					return self.move({transform: { translateX : (nav ? -100 : 100) + '%', translateY : 0, translateZ : '500px', rotateX : 0, rotateY : 0, rotateZ : 0 }});
				})
				.then(function() {
					self.applyRoomTransition('none');
					nextRoom.style.transform = 'translate3d(0,0,0)';
					self.applyRoomTransform(self.initTransform);

					setTimeout(function() {
						self.initTilt();
						self.isNavigating = false;
					}, 60);
				});
			}
		},
		mounted() {
			var self = this;
			self.initPreloader();
			self.initData();
			self.imagesLoaded();
		}
	}