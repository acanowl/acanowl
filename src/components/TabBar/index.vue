<template>
    <footer id="footer">
        <ul>
            <router-link tag="li" to="/movie">
                <i class="iconfont icon-dianying"></i>
                <p>电影</p>
            </router-link>
            <router-link tag="li" to="/cinema">
                <i class="iconfont icon-yingyuan"></i>
                <p>影院</p>
            </router-link>
            <router-link tag="li" to="/mine">
                <i class="iconfont icon-wode"></i>
                <p>我的</p>
            </router-link>
        </ul>
    </footer>
</template>

<script>
export default {
    name : 'Footer',
}
</script>

<style scoped lang='scss'>
@function rem($px){
    @return $px / 75 * 1rem;
}
#footer{ 
    width:100%; 
    height:rem(100); 
    background: white; 
    border-top:rem(2) #ebe8e3 solid; 
    position: fixed; 
    left: 0; 
    bottom: 0;
    ul{ 
        display: flex; 
        text-align: center; 
        height:rem(100); 
        align-items:center;
        i{ 
            font-size: rem(40);
        }
        p{ 
            font-size: rem(24); 
            line-height: rem(36);
        }
    }
    li{ 
        flex:1; 
        height:rem(80);
        &.router-link-active{ 
            color: #f03d37;
        }
    }
}
</style>