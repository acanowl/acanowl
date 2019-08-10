<template>
    <div id="main">
        <Header title="电影" />
            <div id="content">
                <div class="movie_menu">
                    <router-link tag='div' to="/movie/city" class="city_name">
                        <span>大连</span><i class="iconfont icon-lower-triangle"></i>
                    </router-link>
                    <div class="hot_swtich">
                        <router-link tag='div' to="/movie/nowPlaying" class="hot_item">正在热映</router-link>
                        <router-link tag='div' to="/movie/comingSoon" class="hot_item">即将上映</router-link>
                    </div>
                    <router-link tag='div' to="/movie/search" class="search_entry">
                        <i class="iconfont icon-sousuo"></i>
                    </router-link>
                </div>
                <keep-alive>
                    <router-view />
                </keep-alive>
            </div>
        <TabBar />
    </div>
</template>

<script>
import Header from '@/components/Header'
import TabBar from '@/components/TabBar'

export default {
    name:'Movie',
    components:{
        Header,
        TabBar
    }
}
</script>

<style scoped lang='scss'>
@function rem($px){
    @return $px / 75 * 1rem;
}
#content {
    .movie_menu{ 
        width: 100%; 
        height: rem(90); 
        border-bottom:rem(1) solid #e6e6e6; 
        display: flex; justify-content:space-between; align-items:center; 
        background:white; 
        z-index:10;
        .city_name{ 
            margin-left: rem(40); 
            height:100%; 
            line-height: rem(90);
                font-size:rem(30); 
            
            &.router-link-active{
                color: #ef4238; 
                border-bottom: rem(2) #ef4238 solid;
            }
            &.active{ 
                color: #ef4238; 
                border-bottom: rem(2) #ef4238 solid;
            }
        }
        .hot_swtich{ 
            display: flex; 
            height:100%; 
            line-height: rem(90);
        }
        .hot_item{ 
            font-size: rem(30); 
            color:#666; 
            width:rem(160); 
            text-align:center; 
            margin:0 rem(24); 
            font-weight:700;
            &.active{ 
                color: #ef4238; 
                border-bottom: rem(2) #ef4238 solid;
            }
            &.router-link-active{
                color: #ef4238; 
                border-bottom: rem(2) #ef4238 solid;
            }
        }
        .search_entry{ 
            margin-right:rem(40); 
            height:100%; 
            line-height: rem(90);
            &.active{ 
                color: #ef4238; 
                border-bottom: rem(2) #ef4238 solid;
            }
            &.router-link-active{
                color: #ef4238; 
                border-bottom: rem(2) #ef4238 solid;
            }
            i{  
                font-size:rem(48); 
                color:red;
            }
        }
    }
}

</style>
