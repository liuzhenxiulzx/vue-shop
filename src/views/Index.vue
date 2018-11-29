<template>
  <div>
    <!-- 加载子视图 -->
    <router-view></router-view>
    <footer class="page-footer fixed-footer">
      <ul>
        <li class="active">
          <router-link to="/">
            <img src="../assets/images/footer01.png">
            <p>首页</p>
          </router-link>
        </li>
        <li>
          <router-link to="/Index/classify">
            <img src="../assets/images/footer002.png">
            <p>分类</p>
          </router-link>
        </li>
        <li>
          <router-link to="/Index/cart">
            <img src="../assets/images/footer003.png">
            <p>购物车</p>
          </router-link>
        </li>
        <li>
          <router-link to="/Index/self">
            <img src="../assets/images/footer004.png">
            <p>个人中心</p>
          </router-link>
        </li>
      </ul>
    </footer>
  </div>
</template>
<style>
/* 引入全局样式 */
@import "../assets/base.css";
@import "../assets/style.css";
</style>