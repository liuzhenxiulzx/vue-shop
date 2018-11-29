<template>
    <div>
        <header class="top-header">
            <a class="text texta" href="index.html">取消</a>
            <h3>登录</h3>
            <router-link class="text" to="/regist">注册</router-link>
        </header>
        
        <div class="login">
            <form>
                <ul>
                    <li>
                        <img src="../assets/images/login.png"/>
                        <label>账号</label>
                        <input type="text" placeholder="请输入账号" v-model="username"/>
                    </li>
                    <li>
                        <img src="../assets/images/password.png"/>
                        <label>密码</label>
                        <input type="password" placeholder="请输入密码" v-model="password"/>
                    </li>
                </ul>
                <input type="buttom" id="btn" @click="login" value="登录"/>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            username:'',
            password:''
        }
    },
    methods:{
        login(){
            if(this.username == 'tom' && this.password == 123){
                // 设置token
                localStorage.setItem('token','asldfjsodfjojehrentfeourf9we4r43');
                // 跳转到首页
                this.$router.push('/');
            }else{
                alert('用户或密码错误');
            }
        }
    }
}
</script>

<style>
    #btn{
            width: 94%;
            margin: 5% 3%;
            padding: 4% 0;
            background-color: #FC605A;
            color: #fff;
            font-size: 1.7em;
            border-radius: 0.3em;
            border: none;
            text-align:center;
    }
</style>


