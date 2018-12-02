<template>
  <div>
    <header class="page-header">
      <h3>购物车</h3>
    </header>

    <div class="contaniner fixed-contb">
      <section class="shopcar" v-for="(v,k) in goods" :key="k">
        <div class="shopcar-checkbox">
          <label
            for="shopcar"
            @click="select(v.id)"
            :class="{'shopcar-checkd':cart.find(v1=>v1.sku_id==v.id).checked}"
			onselectstart="return false" ></label>
          <input type="checkbox" id="shopcar">
        </div>
        <figure>
          <img :src="v.goods.logo">
        </figure>

        <dl>
          <dt>{{v.goods.goods_name}}</dt>
          <dd>规格:{{v.sku_name}}</dd> 
		  <!--  v-for="(v1,k1) in v.attrs" :key="k1" -->
          <div class="add">
            <span>-</span>
              <input type="text" :value="cart.find(v1=>v1.sku_id==v.id).buycount" />
            <span>+</span>
          </div>
          <h3>￥{{v.price}}</h3>
          <small>
            <img src="../../assets/images/shopcar-icon01.png">
          </small>
        </dl>
      </section>
      <!--去结算-->
      <div class="page-footer">
        <div class="shop-go">
          <b>合计：￥56234</b>
          <span>
            <router-link to="/Settlement">去结算（0）</router-link>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      goods: [], //服务器返回的商品信息
	    cart: undefined, //浏览器中购物车信息
    };
  },
  created() {
    // 从浏览器中取出购物车数据
	let cart = localStorage.getItem("cart");
    if (cart) {
	  this.cart = JSON.parse(cart);
      // console.log(cart);
      // 从购物车中取出所有商品的skuid，并拼接成字符串
      let skuids = this.cart.map((v)=>v.sku_id).join(',');
      this.axios.get('/search?sku_ids='+skuids)
      	.then(res=>{
			  this.goods = res.data.data
		  });

    } else {
      alert("当前购物车暂无商品");
      this.$router.push("/");
    }
  },
  methods: {
   
    //商品选中
    select(k) {
	    //根据点击的商品id找出购物车中对应的记录
	    let cart = this.cart.find((v)=>v.sku_id==k); 
		cart.checked = !cart.checked;
		// 提交到浏览器
		localStorage.setItem('cart',JSON.stringify(this.cart));

    }
  }
};
</script>
<style scoped>
.page-footer {
  position: fixed;
  bottom: 60px;
}
</style>
