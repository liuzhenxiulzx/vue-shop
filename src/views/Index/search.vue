<template>
    <div>
        <header class="top-header fixed-header">
            <a class="icona" href="javascript:history.go(-1)">
                    <img src="../../assets/images/left.png"/>
                </a>
            <h3>男装专区</h3>
                
                <a class="iconb" href="shopcar.html">
                    <img src="../../assets/images/shopbar.png"/>
                </a>
        </header>
        
        <div class="contaniner fixed-conta">
            <section class="list">
                <figure><img src="../../assets/images/list-ban01.png"/></figure>
                <div class="search">
                    <input v-model="search.keywords" type="search" placeholder="韩版卫衣" />
                    <label><img @click="dosearch()" src="../../assets/images/list-search.png"/></label>
                </div>
                <nav>
                    <ul>
                        <li>
                            <a href="#">
                                <span>全部</span>
                            </a>
                        </li>
                        <li @click="select('id')" class="list-active">
                            <a href="#">
                                <span>新品</span>
                                <img v-if="search.order == 'desc'" src="../../assets/images/up-red.png"/>
                                <img  v-else src="../../assets/images/down-red.png"/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span>价格</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span>评价</span>
                            </a>
                        </li>
                    </ul>
                </nav>
                <ul class="wall"
                    v-infinite-scroll="loadMore"
                    infinite-scroll-disabled="isload"
                    infinite-scroll-distance="50"
                >

                    <li class="pic" v-for="(v , k ) in goods" :key="k">
                        <router-link to="/goods/details">
                            <img :src="v.logo"/>
                            <p>{{v.goods_name}}</p>
                            <b>￥{{v.skus[0].price}}</b>
                       </router-link>
                    </li>
                   
                </ul>
          
                <wv-loadmore id="stopLoad" v-if="islastpage" type="lineDot" text="loading"></wv-loadmore>
                 <wv-loadmore v-else></wv-loadmore>
            </section>
        </div>
	
	
    </div>
</template>

<script>
export default {
    data(){
        return {
            search:{
                "page":1,
                "per_page":1, 
                "keywords":this.$route.query.keywords,
                "sortby":"id",
                "order":"asc"
            },
            goods:[],
            isload:false , // 是否禁止滚动加载 true：禁止调用  false：调用
            islastpage:false,  //判断是否到底
        }
    },
    created(){
        this.dosearch()
    },
    methods:{
        select(id){
            // 排序方式
            this.search.order  = this.search.order == 'desc' ? 'asc' : 'desc';
            // 重新加载数据
             this.dosearch();
        },
        // 当距离底部50距离的时候调用
        loadMore(){
            //先禁用滚动加载 否则会不停的加载
            this.isload = true;
            this.search.page++;  //把当前页码加1
            //重新加载数据
            this.axios.get('/search',{params:this.search})
            .then(res=>{
                
                //把加载出来的数据合并到以前的数据中
                this.goods = this.goods.concat(res.data.data.data);

                // 判断是否最后一页
                if(res.data.data.last_page > this.search.page){
                   // 设置为允许继续加载
                    this.isload = false;
                }else{
                    // 到最后一页是切换图标
                    this.islastpage = true
                }
             })
        },
        dosearch(){
            // 不为空时传递参数
             if(this.$route.query.keywords!=''){
                //  重新激活自动加载(搜索条件初始化)
                this.isload = false
                this.islastpage = false
                this.search.page = 1

                this.axios.get('/search',{params:this.search})
                .then(res=>{
                    // 把返回的数据保存到goods中
                    this.goods = res.data.data.data
                 })

            }
        }
    }
}
</script>

<style>
#stopLoad .weui-loadmore__tips{
  background-color: #efefef !important;
}
</style>
