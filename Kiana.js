(function(g, d) {
	function h(a) {
		a = a || {};
		this.a = this.type = null;
		this.d = "usr/plugins/Kiana/src/";
		this.A = {
			kiana: {
				s: {
					stand: {
						h: 0,
						src: this.d + "img/kiana-1.png"
					},
					move: {
						h: 0,
						src: this.d + "img/kiana-2.png"
					},
					hover: {
						h: 1100,
						src: this.d + "img/kiana-3.gif"
					},
					click: {
						h: 0,
						src: this.d + "img/kiana-4.png"
					}
				},
				j: {
					click: "快看快看，我抽到了什么~;去死去死去死去死！;主人，人家钱包都空了;变态！;Kiana，变身！;嗯，miHoYo什么的，最讨厌了~;千万别小看我哟~;要加油哦！;我就知道主人最疼人家啦~;锵锵~;烦死啦，走开走开啦！".split(";"),
					drag: ["呀~~"]
				},
				e: {},
				random: []
			}
		};
		this.r = this.p = this.v = this.m = null;
		this.f = 0;
		this.i = 1;
		this.bound = this.t = !1;
		this.k = {
			mobile: {
				mousedown: "touchstart",
				mousemove: "touchmove",
				mouseup: "touchend"
			},
			pc: {
				mousedown: "mousedown",
				mousemove: "mousemove",
				mouseup: "mouseup"
			}
		};
		this.u = a.u || !1;
		this.w = a.w || !0;
		this.B = a.B || !0;
		this.g = "pc";
		/AppleWebKit.*Mobile.*/i.test(navigator.userAgent) && (this.g = "mobile");
		d('<style type="text/css">.bhxy-click{transform-origin: 50% 100%;animation: bhxy-click 0.5s linear;-webkit-transform-origin: 50% 100%;-webkit-animation: bhxy-click 0.5s linear;}@keyframes bhxy-click{0%{transform:scale(1,1);}10%{transform:scale(1.1,0.95);}30%{transform:scale(1,1);}}@-webkit-keyframes bhxy-click{0%{-webkit-transform:scale(1,1);}10%{-webkit-transform:scale(1.1,0.9);}30%{-webkit-transform:scale(1,1);}}@media screen and (max-width: 768px)/*设置浏览器宽度小于多少数值隐藏挂件*/ {.bhxykiana{display: none}}</style>').appendTo("head")
	}
	h.prototype = {
		constructor: h,
		I: function(a, c) {
			var b = this;
			if (a && this.A[a]) {
				this.a = {
					b: d("<div class='bhxykiana'>").css({
						position: "fixed",
						width: 115,
						height: 170,
						bottom: 10,
						right: 30,
						cursor: "pointer",
						zIndex: 10050
					}),
					C: d("<img />").css({
						display: "block",
						width: "100%",
						height: "100%"
					}),
					c: null,
					e: null
				};
				void 0 !== c && this.a.b.css(c);
				this.a.b.append(this.a.C).appendTo("body");
				this.a.b.on("click", function() {
					"undefined" != typeof _czc && _czc.push(["_trackEvent", "hxzj_ads_click", "click", b.type]);
					b.f <= b.i && (b.stop(), b.change("click"), b.j("click"), b.start(3E3));
					b.f = 0
				});
				var f = this.a.b;
				this.a.b.on(this.k[this.g].mousedown + ".bhxy", function(a) {
					a.preventDefault();
					var c = b.n(a).x - d(this).offset().left,
						h = b.n(a).y - d(this).offset().top;
					d(document).on(b.k[b.g].mousemove + ".bhxy", function(a) {
						b.f > b.i && (b.change("move"), b.f == b.i + 1 && b.j("drag", "drag"));
						b.f++;
						a.preventDefault();
						var e = b.n(a).G - c;
						a = b.n(a).H - h;
						a >= d(g).height() - f.height() - 5 && b.bound ? a = d(g).height() - f.height() - 5 : 0 >= a && b.bound && (a = 0);
						e >= d(g).width() - f.width() - 5 && b.bound ? e = d(g).width() - f.width() - 5 : 0 >= e && b.bound && (e = 0);
						f.css({
							right: "auto",
							bottom: "auto",
							left: e,
							top: a
						})
					});
					d(document).on(b.k[b.g].mouseup + ".bhxy", function() {
						b.f > b.i && (b.a.b.removeClass("bhxy-click"), setTimeout(function() {
							b.a.b.addClass("bhxy-click")
						}, 0), b.l(), b.o(!1));
						d(document).off(b.k[b.g].mousemove + ".bhxy");
						d(document).off(b.k[b.g].mouseup + ".bhxy")
					})
				});
				"pc" == this.g && (this.a.b.on("mouseenter.bhxy", function() {
					b.t = !0;
					b.f <= b.i && "click" != b.m && b.change("hover");
					b.q.show()
				}), this.a.b.on("mouseleave.bhxy", function() {
					b.t = !1;
					b.f <= b.i && "click" != b.m && b.change("stand");
					b.q.hide()
				}));
				this.B && (this.q = d("<div>").addClass("close-btn-wrp").css({
					position: "absolute",
					top: -10,
					right: 0,
					width: "100%",
					height: 20
				}).hide().appendTo(this.a.b), d("<div>").addClass("close-btn").text("×").css({
					position: "absolute",
					top: 0,
					right: 0,
					width: 18,
					height: 18,
					lineHeight: "15px",
					fontSize: 20,
					textAlign: "center",
					cursor: "pointer",
					backgroundColor: "#ddd",
					borderRadius: "4px"
				}).appendTo(this.q).on("click", function(a) {
					a.stopPropagation();
					b.disable()
				}));
				this.F(a);
				this.start();
				return this.a
			}
		},
		start: function(a) {
			this.u || a ? this.o(a) : this.o(!1);
			this.u && this.random()
		},
		stop: function() {
			clearTimeout(this.p);
			clearTimeout(this.v)
		},
		o: function(a) {
			var c = this;
			clearTimeout(this.p);
			!1 === a ? a = 0 : 0 != a && (a = a || 3E3);
			this.p = setTimeout(function() {
				c.t ? c.change("hover") : c.change("stand")
			}, a)
		},
		random: function() {
			var a = this,
				c = 1E3 * Math.round(5 * Math.random() + 5);
			clearTimeout(this.v);
			this.v = setTimeout(function() {
				clearTimeout(a.p);
				var b = a.a.c.random;
				b.length && (b = b[Math.round(Math.random() * (b.length - 1))], a.change(b), a.o(3E3), a.random())
			}, c)
		},
		change: function(a) {
			this.a.c.s[a] && (this.m = a, this.a.C.attr("src", this.a.c.s[a].src))
		},
		F: function(a) {
			this.stop();
			this.type = a;
			this.a.c = this.A[a || "22"];
			this.change("stand");
			this.start()
		},
		j: function(a, c) {
			var b = this,
				f = this.a.c.j[a] || a,
				e = a;
			clearTimeout(this.r);
			this.l(0);
			d.isArray(f) && (e = Math.floor(Math.random() * f.length), f = f[e]);
			var g = d("<div>").html(f).attr({
				style: "transition:0.3s",
				dialog: "true"
			}).css({
				position: "absolute",
				top: -20,
				left: -100,
				visibility: "hidden",
				opacity: 0,
				backgroundColor: "#213C7F",
				color: "#fff",
				padding: "5px 10px",
				fontSize: "13px",
				width: 130,
				wordWrap: "break-word",
				zIndex: 10050,
				borderRadius: 4
			}).appendTo(this.a.b);
			this.w && this.J(a, c || e);
			setTimeout(function() {
				g.css({
					visibility: "visible",
					opacity: 0.75
				});
				b.r = setTimeout(function() {
					b.l()
				}, 2E3)
			}, 0)
		},
		J: function(a, c) {
			var b = this;
			this.D && this.D[0].pause();
			this.a.c.e[a] || (this.a.c.e[a] = {});
			var f = "number" == typeof c ? c + 1 : c,
				e;
			if (this.a.c.e[a]["v-" + f]) e = this.a.c.e[a]["v-" + f][0], e.currentTime = 0, e.play();
			else {
				var g = d("<audio>").appendTo(this.a.b).hide();
				e = g[0];
				if (!e || !e.play || !e.canPlayType("audio/mpeg")) {
					this.w = !1;
					g.remove();
					return
				}
				e.addEventListener("ended", function() {
					"move" != b.m && b.start();
					b.l()
				});
				g.attr("src", this.d + "voice/" + this.type + "_" + f + ".mp3");
				e.volume = .2;
				e.play();
				this.a.c.e[a]["v-" + f] = g
			}
			this.stop();
			this.D = this.a.c.e[a]["v-" + f]
		},
		l: function(a) {
			clearTimeout(this.r);
			this.a.b.find("[dialog]").stop(!0, !0).fadeOut("undefined" == typeof a ? 400 : a, function() {
				d(this).remove()
			})
		},
		n: function(a) {
			a = a.originalEvent;
			var c = [];
			c.y = "undefined" !== typeof a.pageY && (a.pageY || a.pageX) ? a.pageY : a.touches[0].pageY;
			c.x = "undefined" !== typeof a.pageX && (a.pageY || a.pageX) ? a.pageX : a.touches[0].pageX;
			c.H = "undefined" !== typeof a.clientY && (a.clientY || a.clientX) ? a.clientY : a.touches[0].clientY;
			c.G = "undefined" !== typeof a.clientX && (a.clientY || a.clientX) ? a.clientX : a.touches[0].clientX;
			return c
		},
		disable: function() {
			this.a.b.hide()
		}
	};
	d(function() {
		if ("undefined" == typeof g.K) {
			var a = g.bhxyG = new h;
			a.setModel = a.F;
			a.I("kiana")
		}
	})
})(window, jQuery);
preloadList = '/usr/plugins/Kiana/src/img/kiana-1.png /usr/plugins/Kiana/src/img/kiana-2.png /usr/plugins/Kiana/src/img/kiana-3.gif /usr/plugins/Kiana/src/img/kiana-4.png'.split(' ');
for (i = 0; i < preloadList.length; i++) img = new Image, img.src = preloadList[i];
preloadListaud = '/usr/plugins/Kiana/src/voice/kiana_1.mp3 /usr/plugins/Kiana/src/voice/kiana_2.mp3 /usr/plugins/Kiana/src/voice/kiana_3.mp3 /usr/plugins/Kiana/src/voice/kiana_4.mp3 /usr/plugins/Kiana/src/voice/kiana_5.mp3 /usr/plugins/Kiana/src/voice/kiana_6.mp3 /usr/plugins/Kiana/src/voice/kiana_7.mp3 /usr/plugins/Kiana/src/voice/kiana_8.mp3 /usr/plugins/Kiana/src/voice/kiana_9.mp3 /usr/plugins/Kiana/src/voice/kiana_10.mp3 /usr/plugins/Kiana/src/voice/kiana_11.mp3 /usr/plugins/Kiana/src/voice/kiana_drag.mp3'.split(' ');
for (i = 0; i < preloadListaud.length; i++) aud = new Audio, aud.src = preloadListaud[i];