<template>
    <div id="main">
        <Header title="影院" />
        <div id="content">
            <div class="cinema_menu">
                <div class="city_switch">
                    全城 <i class="iconfont icon-lower-triangle"></i>
                </div>
                <div class="brand_swtich">
                    品牌 <i class="iconfont icon-lower-triangle"></i>
                </div>
                <div class="feature_switch">
                    特色 <i class="iconfont icon-lower-triangle"></i>
                </div>
            </div>
            <CityList />
        </div>
        <TabBar />
    </div>
</template>

<script>
import Header from '@/components/Header'
import TabBar from '@/components/TabBar'
import CityList from '@/components/CityList'

export default {
    name:'Cinema',
    components:{
        Header,
        TabBar,
        CityList
    }
}
</script>

<style scoped lang='scss'>
@function rem($px){
    @return $px / 75 * 1rem;
}
#content {
    .cinema_menu{ 
        width: 100%; 
        height: rem(90); 
        border-bottom:rem(1) solid #e6e6e6; 
        display: flex; 
        justify-content:space-around; 
        align-items:center; 
        background:white;
    }
}

</style>
