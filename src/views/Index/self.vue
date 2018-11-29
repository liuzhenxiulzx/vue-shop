<template>
	<div>
		<header class="self-header">
		<figure><img src="../../assets/images/self-tou.png"/></figure>
		<dl>
			<dt>弱小喵</dt>
			<dd>
				<img src="../../assets/images/self-header.png"/>
				<span>5684</span>
				<span>炒饭大湿</span>
			</dd>
		</dl>
		<button>签到</button>
	</header>
	
	<div class="contaniner fixed-contb">
		<section class="self">
			<dl>
				<dt>
					<router-link to="/personal/order">
						<img src="../../assets/images/self-icon.png"/>
						<b>全部订单</b>
						<span><img src="../../assets/images/right.png"/></span>
					</router-link>
				</dt>
				<dd>
						<ul>
							<li>
								<router-link to="/personal/sendgoods">
									<img src="../../assets/images/order-icon01.png"/>
									<p>待发货</p>
								</router-link>
							</li>
							<li>
								<a href="go-order.html">
									<img src="../../assets/images/order-icon03.png"/>
									<p>待付款</p>
								</a>
							</li>
							<li>
								<a href="go-order.html">
									<img src="../../assets/images/order-icon02.png"/>
									<p>待收货</p>
								</a>
							</li>
							<li>
								<router-link to="/personal/assessing">
									<img src="../../assets/images/order-icon04.png"/>
									<p>待评价</p>
								</router-link>
							</li>
						</ul>
				</dd>
			</dl>
			
			<ul class="self-icon">
				<li>
					<router-link to="/personal/datum">
						<img src="../../assets/images/self-icon01.png"/>
						<p>个人信息</p>
						<span><img src="../../assets/images/right.png"/></span>
					</router-link>
				</li>
				<li>
					<router-link to="/personal/mycollect">
						<img src="../../assets/images/self-icon02.png"/>
						<p>我的收藏</p>
						<span><img src="../../assets/images/right.png"/></span>
					</router-link>
				</li>
				<li>
					<router-link to="/personal/integral">
						<img src="../../assets/images/self-icon03.png"/>
						<p>我的积分</p>
						<span><img src="../../assets/images/right.png"/></span>
					</router-link>
				</li>
				<li>
					<router-link to="/personal/address">
						<img src="../../assets/images/self-icon04.png"/>
						<p>地址管理</p>
						<span><img src="../../assets/images/right.png"/></span>
					</router-link>
				</li>
			</ul>
			<ul class="self-icon">
				<li>
					<a href="none.html">
						<img src="../../assets/images/self-icon05.png"/>
						<p>我的分销</p>
						<span><img src="../../assets/images/right.png"/></span>
					</a>
				</li>
				<li>
					<a href="#">
						<img src="../../assets/images/self-icon06.png"/>
						<p>邀请好友</p>
						<span><img src="../../assets/images/right.png"/></span>
					</a>
				</li>
				
			</ul>
			<a ><input type="button" @click="logout" value="退出" /></a>
			
		</section>
		
		
	</div>
	</div>
</template>

<script>
export default {
	methods:{
		// 退出登录
		logout(){
			localStorage.removeItem('token');
			this.$router.push('/login');
		}
	}
}
</script>


