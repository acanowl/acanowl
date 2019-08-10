<template>
    <div class="login_body">
        <div>
            <input class="login_text" type="text" placeHolder="账户名/手机号/Email" >
        </div>
        <div>
            <input class="login_text" type="password" placeHolder="请输入您的密码" >
        </div>
        <div class="login_btn">
            <input type="submit" value="登录">
        </div>
        <div class="login_link">
            <a href="#">立即注册</a>
            <a href="#">找回密码</a>
        </div>
    </div>
</template>

<script>
export default {
    name:'Login'
}
</script>

<style scoped lang='scss'>
@function rem($px){
    @return $px / 75 * 1rem;
}
#content {
    .login_body{ 
        width:100%;
        .login_text{ 
            width:100%; 
            height: rem(80); 
            border:none; 
            border-bottom: rem(1) #ccc solid; 
            margin-bottom: rem(10); 
            outline: none; 
            text-indent: rem(20);
        }
        .login_btn{ 
            height:rem(100); 
            margin:rem(20);
            input{ 
                width:100%; 
                height:100%; 
                background:#e54847; 
                border-radius: rem(6); 
                border:none; 
                display: block; 
                color:rgb(236, 207, 207); 
                font-size: rem(40);
            }
        }
        .login_link{ 
            display: flex; 
            justify-content:space-between;
            a{ 
                text-decoration: none; 
                margin:0 rem(10); 
                font-size: rem(24); 
                color:#e54847;
            }
        }
    }
}

</style>
