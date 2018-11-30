<template>
  <div>
    <header class="detail-header fixed-header">
      <a href="javascript:history.go(-1)">
        <img src="../../assets/images/detail-left.png">
      </a>
      
      <a href="shopcar.html" class="right">
        <img src="../../assets/images/shopbar.png">
      </a>
    </header>

    <div class="contaniner fixed-contb">
      <section class="detail">
        <wv-swipe :height="330" :autoplay="4000">
          <wv-swipe-item v-for="(v,k) in goods.image" :key="k">
            <img :src="v.path">
          </wv-swipe-item>
        </wv-swipe>
        <dl class="jiage">
          <dt>
            <h3>{{goods.goods_name}}</h3>
            <div class="collect">
              <img src="../../assets/images/detail-heart-hei.png">
              <p>收藏</p>
            </div>
          </dt>
          <dd>
            <b v-if="goods.skus">￥{{ goods.skus[selectsku].price }}</b>
            &nbsp;&nbsp;
            <p v-if="goods.skus">( 库存量：{{ goods.skus[selectsku].stock }})</p>
            <!-- <input type="button" value="￥10.00" readonly> -->
            <small>+356积分</small>
          </dd>
        </dl>

        <div class="chose">
          <ul>
            <h3>规格：</h3>
            <li
              @click="selectsku=key"
              :class="{'chose-active' : key == selectsku}"
              v-for="(c,key) in goods.skus"
              :key="key"
            >{{c.sku_name}}</li>
          </ul>
          <ul>
            <h3>购买数量：</h3>
            <li id="number">
              <wv-number-spinner
                v-if="goods.skus"
                :min="1"
                :max="goods.skus[selectsku].stock"
                v-model="buycount"
              ></wv-number-spinner>
            </li>
          </ul>
        </div>

        <a href="#" class="seven">
          <b>7</b>天无理由退换货
        </a>

        <ul class="same">
          <a href="#">
            <span>同类推荐</span>
            <li class="one">
              <img src="../../assets/images/detail-pp01.png">
              <p>￥188.00</p>
            </li>
            <li>
              <img src="../../assets/images/detail-pp02.png">
              <p>￥188.00</p>
            </li>
            <li>
              <img src="../../assets/images/detail-pp03.png">
              <p>￥188.00</p>
            </li>
            <li>
              <img src="../../assets/images/detail-pp04.png">
              <p>￥188.00</p>
            </li>
          </a>
        </ul>

        <article class="detail-article">
          <nav>
            <ul>
              <li>商品详情</li>
              <li class="article-active">评价</li>
            </ul>
          </nav>
          <section class="talkbox">
            <ul class="talk">
              <li>
                <figure>
                  <img src="../../assets/images/detail-tou.png">
                </figure>
                <dl>
                  <dt>
                    <p>弱小喵</p>
                    <time>2015.11.17</time>
                    <div class="star">
                      <span>
                        <img src="../../assets/images/detail-iocn01.png">
                      </span>
                      <span>
                        <img src="../../assets/images/detail-iocn01.png">
                      </span>
                      <span>
                        <img src="../../assets/images/detail-iocn01.png">
                      </span>
                      <span>
                        <img src="../../assets/images/detail-iocn001.png">
                      </span>
                      <span>
                        <img src="../../assets/images/detail-iocn001.png">
                      </span>
                    </div>
                  </dt>
                  <dd>还可以吧，很好看，质量还不错，就是快递大叔实在慢死了</dd>
                  <small>颜色：豹纹凯特</small>
                </dl>
              </li>
              <li>
                <figure>
                  <img src="../../assets/images/detail-tou.png">
                </figure>
                <dl>
                  <dt>
                    <p>弱小喵</p>
                    <time>2015.11.17</time>
                    <div class="star">
                      <span>
                        <img src="../../assets/images/detail-iocn01.png">
                      </span>
                      <span>
                        <img src="../../assets/images/detail-iocn01.png">
                      </span>
                      <span>
                        <img src="../../assets/images/detail-iocn01.png">
                      </span>
                      <span>
                        <img src="../../assets/images/detail-iocn001.png">
                      </span>
                      <span>
                        <img src="../../assets/images/detail-iocn001.png">
                      </span>
                    </div>
                  </dt>
                  <dd>还可以吧，很好看，质量还不错，就是快递大叔实在慢死了</dd>
                  <small>颜色：豹纹凯特</small>
                  <div class="picbox">
                    <img src="../../assets/images/detail-pp01.png">
                    <img src="../../assets/images/detail-pp02.png">
                    <img src="../../assets/images/detail-pp03.png">
                    <img src="../../assets/images/detail-pp04.png">
                  </div>
                </dl>
              </li>
              <li>
                <figure>
                  <img src="../../assets/images/detail-tou.png">
                </figure>
                <dl>
                  <dt>
                    <p>弱小喵</p>
                    <time>2015.11.17</time>
                    <div class="star">
                      <span>
                        <img src="../../assets/images/detail-iocn01.png">
                      </span>
                      <span>
                        <img src="../../assets/images/detail-iocn01.png">
                      </span>
                      <span>
                        <img src="../../assets/images/detail-iocn01.png">
                      </span>
                      <span>
                        <img src="../../assets/images/detail-iocn001.png">
                      </span>
                      <span>
                        <img src="../../assets/images/detail-iocn001.png">
                      </span>
                    </div>
                  </dt>
                  <dd>还可以吧，很好看，质量还不错，就是快递大叔实在慢死了</dd>
                  <small>颜色：豹纹凯特</small>
                </dl>
              </li>
              <li>
                <figure>
                  <img src="../../assets/images/detail-tou.png">
                </figure>
                <dl>
                  <dt>
                    <p>弱小喵</p>
                    <time>2015.11.17</time>
                    <div class="star">
                      <span>
                        <img src="../../assets/images/detail-iocn01.png">
                      </span>
                      <span>
                        <img src="../../assets/images/detail-iocn01.png">
                      </span>
                      <span>
                        <img src="../../assets/images/detail-iocn01.png">
                      </span>
                      <span>
                        <img src="../../assets/images/detail-iocn001.png">
                      </span>
                      <span>
                        <img src="../../assets/images/detail-iocn001.png">
                      </span>
                    </div>
                  </dt>
                  <dd>还可以吧，很好看，质量还不错，就是快递大叔实在慢死了</dd>
                  <small>颜色：豹纹凯特</small>
                  <div class="picbox">
                    <img src="../../assets/images/detail-pp01.png">
                    <img src="../../assets/images/detail-pp02.png">
                    <img src="../../assets/images/detail-pp03.png">
                    <img src="../../assets/images/detail-pp04.png">
                  </div>
                </dl>
              </li>
            </ul>
          </section>
        </article>
      </section>
    </div>

    <footer class="detail-footer fixed-footer">
      <a href="#" class="go-car">
        <input type="button" @click="addcart" value="加入购物车">
      </a>
      <a href="buy.html" class="buy">立即购买</a>
    </footer>
  </div>
</template>


<script>
export default {
  data() {
    return {
      goods: {},
      selectsku: 0, //选中的规格
      buycount: 1 //购买的数量
    };
  },
  created() {
    this.axios.get("/search?id=" + this.$route.query.id).then(res => {
      this.goods = res.data.data;
      // console.log(res.data.data);
    });
  },
  methods: {
    addcart() {
      /*
          将数据保存到浏览器
          格式:
          {
            skuid:1,
            buycount:2
            checked:true  是否选中
          }
          */

      // 获取浏览器中的购物车信息
      let cart = localStorage.getItem("cart");
      // 判断是否存在购物车信息 有则把购物车转成字符串
      cart = cart ? JSON.parse(cart) : [];

      //获取选中的规格id
      let seletskuid = this.goods.skus[this.selectsku].id;

      //  判断购物车中是否有同一件商品（根据sku_id查找）
      let identicalgoods = cart.find(v => v.sku_id == seletskuid);
      // console.log(identicalgoods);
      if(identicalgoods)
      {
        // 相同规格商品累加
        identicalgoods.buycount += this.buycount
        // // 判断库存量
        if(this.goods.skus[this.selectsku].stock < identicalgoods.buycount)

            identicalgoods.buycount = this.goods.skus[this.selectsku].stock
        
      }
      else
      {
        // 保存数据到购物车
        cart.push({
          sku_id: seletskuid,
          buycount: this.buycount,
          checked: true
        });
      }

      // 把数组写回浏览器
      localStorage.setItem("cart", JSON.stringify(cart));

      // 跳转至购物车页面
      this.$router.push('/Index/cart')
    }
  }
};
</script>

<style>
#number {
  border: none;
  width: 35%;
}
</style>
