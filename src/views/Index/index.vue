<template>
    <div>
    <!-- <header class="page-header">
		 <h4>CAST商城</h4> 
	</header> -->
	
	<div class="contaniner fixed-contb">
		
		<wv-swipe :height="130" :autoplay="4000">
			<wv-swipe-item><img src="../../assets/images/index-ban01.png"/></wv-swipe-item>
			<wv-swipe-item><img src="../../assets/images/index-ban02.png"/></wv-swipe-item>
			<wv-swipe-item><img src="../../assets/images/index-ban03.png"/></wv-swipe-item>
		</wv-swipe>
	
		<section class="shop">
			<h3>
				<a href="#">
					服装
					<span><img src="../../assets/images/right.png"/></span>
				</a>
			</h3>
			<dl>
				<dd>
					<router-link to="/goods/goodslist">
						<img src="../../assets/images/index-ph01.png"/>
						<b>男装</b>
					</router-link>
				</dd>
				<dd>
					<a href="list.html">
						<img src="../../assets/images/index-ph02.png"/>
						<b>女装</b>
					</a>
				</dd>
			</dl>
		</section>
		
		<section class="shop">
			<h3>
				<a href="list.html">
					食品
					<span><img src="../../assets/images/right.png"/></span>
				</a>
			</h3>
			<dl>
				<dd>
					<a href="list.html">
						<img src="../../assets/images/index-03.png"/>
						<b>切糕</b>
					</a>
				</dd>
				<dd>
					<a href="list.html">
						<img src="../../assets/images/index-ph04.png"/>
						<b>酥饼</b>
					</a>
				</dd>
			</dl>
		</section>
	</div>
    </div>
</template>


<script>

// import { swiper, swiperSlide } from '../../../node_modules/vue-awesome-swiper'
export default {
	data(){
		return {
			images:[
				{
					img:'/img/index-ban01.c9528620.png',
				},
				{
					img:'/img/index-ban02.6a08ea8f.png',
				},
				{
					img:'/img/index-ban03.92b0cf74.png',
				}
			],
			currentIndex: 0,
			time:''
		}
	},
	 created(){
	    this.time = setInterval(() => {
			this.autoPlay()
		}, 2000)
		
	},
	
	methods:{
		autoPlay() {
			this.currentIndex++
			if (this.currentIndex > this.images.length - 1) {
				this.currentIndex = 0
			}
		},
		go() {
			this.time = setInterval(() => {
				this.autoPlay()
			}, 4000)
		},
		stop() {
			clearInterval(this.time)
			this.time = null
		},
	}
}
</script>




