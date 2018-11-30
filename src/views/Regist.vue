<template>
    <div>
        <header class="top-header">
            <a class="text texta" href="">取消</a>
            <h3>注册</h3>
            <router-link to="/login" class="text">登录</router-link>
        </header>
        
        <div class="login">
            <form action="" method="post">
                
                <ul>
                    <li>
                        <img src="../assets/images/login.png"/>
                        <label>账号</label>
                        <input type="text" placeholder="请输入账号" v-model="fromdata.username"/>
                    </li>
                    <li>
                        <img src="../assets/images/password.png"/>
                        <label>密码</label>
                        <input type="password" placeholder="请输入密码" v-model="fromdata.password"/>
                    </li>
                    <li>
                        <img src="../assets/images/password.png"/>
                        <label>密码</label>
                        <input type="password" placeholder="请确认密码" v-model="fromdata.password_confirmation"/>
                    </li>
                </ul>
                <input  @click.prevent="doregist" type="submit" value="立即注册"/>
            </form>
            
        </div>
    </div>
</template>

<script>
import { Toast,Dialog  } from 'we-vue'
export default {
    data(){
        return {
            fromdata:{
                username:'',
                password:'',
                password_confirmation:'',
            }
        }
    },
    methods:{
       doregist(){
           this.axios.post('/members',this.fromdata)
            .then(res=>{
        
                if(res.data.status_code == 200)
                {

                   Toast.success('注册成功')
                
                    this.$router.push('/login');
    
                }
                else
                {
                    Toast.fail({
                       duration: 1000,
                       message: '注册失败,账号或密码格式不正确'
                    })
                }
            });
       }
    }
}
</script>
