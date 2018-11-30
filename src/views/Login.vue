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
                        <input type="text" placeholder="请输入账号" v-model="logfrom.username"/>
                    </li>
                    <li>
                        <img src="../assets/images/password.png"/>
                        <label>密码</label>
                        <input type="password" placeholder="请输入密码" v-model="logfrom.password"/>
                    </li>
                </ul>
                <input type="buttom" id="btn" @click="login" value="登录"/>
            </form>
        </div>
    </div>
</template>

<script>
import { Toast,Dialog  } from 'we-vue'
export default {
    data(){
        return {
            logfrom:{
                username:'',
                password:''
            }
           
        }
    },
    methods:{
        login(){
            this.axios.post('/authorizations',this.logfrom)
                .then(res=>{
                    if(res.data.status_code == 200)
                    {
                          // 设置token
                          localStorage.setItem('token','asldfjsodfjojehrentfeourf9we4r43');
                          Toast.success('登录成功')
                          this.$router.push('/');
                    }
                    else if(res.data.status_code == 403)
                    {
                        Toast.fail({
                          duration: 1000,
                          message: '账号不存在'
                        })
                    }
                    else
                    {

                         Toast.fail({
                          duration: 1000,
                          message: '密码错误'
                        })

                    }
                });
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


