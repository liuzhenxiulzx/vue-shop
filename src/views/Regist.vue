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
                        <input type="text" placeholder="请输入账号" v-model="username"/>
                    </li>
                    <li>
                        <img src="../assets/images/password.png"/>
                        <label>密码</label>
                        <input type="password" placeholder="请输入密码" v-model="password"/>
                    </li>
                    <li>
                        <img src="../assets/images/password.png"/>
                        <label>密码</label>
                        <input type="password" placeholder="请确认密码" v-model="repassword"/>
                    </li>
                </ul>
                <input type="submit" @click="doregist" value="立即注册"/>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            username:'',
            password:'',
            repassword:'',
     
        }
    },
    methods:{
       doregist(){
           if(this.password !=this.repassword){
               alert('密码不一致');
           }else{
               
    
              this.$router.push('/login');
           }
       }
    }
}
</script>
