<template>
    <div class="city_body">
        <div class="city_list">
            <div class="city_hot">
                <h2>热门城市</h2>
                <ul class="clearfix">
                    <li v-for="item in hotList" :key='item.id'>{{item.nm}}</li>
                </ul>
            </div>
            <div class="city_sort" ref="city_soft">
                <div v-for="item in cityList" :key="item.index">
                    <h2>{{ item.index }}</h2>
                    <ul>
                        <li v-for="itemList in item.list" :key="itemList.id" >{{ itemList.nm }}</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="city_index">
            <ul>
                <li v-for="(item,index) in cityList" :key="item.index" @touchstart ='handleToIndex(index)'>{{item.index}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:'City',
    data(){
        return{
            cityList : [],
            hotList : []
        }
    },
    mounted(){
        this.axios.get('/api/cityList').then(res => {
            var msg = res.data.msg;
            // 判断是否获取到数据
            if(msg === 'ok'){
                var cities = res.data.data.cities;
                // [{ index : 'A' , list :[{ nm : '阿城' , id : 123 }]}]
                var { cityList ,hotList } = this.formatCityList(cities)
                this.cityList = cityList ;
                this.hotList = hotList;
            }
        })
    },
    methods :{
        formatCityList(cities){
            var cityList = [];  // 城市列表
            var hotList = [];   // 热门城市
            
            // 遍历热门城市
            for(var i = 0 ; i< cities.length ; i++){
                if(cities[i].isHot === 1){
                    hotList.push(cities[i])
                }
            }

            // 遍历所有城市
            for(var i = 0 ; i< cities.length ; i++){
                // 获取城市首字母大写
                var firstLetter = cities[i].py.substring(0,1).toUpperCase();
                // console.log(i+":"+firstLetter)
                if(toCom(firstLetter)){ // 新添加 index
                    cityList.push({
                        index:firstLetter ,
                        list :[{
                                nm:cities[i].nm ,
                                id:cities[i].id
                        }]
                    })
                }else{  // 累加到已有 index
                    for(var j = 0 ; j<cityList.length;j++){
                        if(cityList[j].index === firstLetter){
                            cityList[j].list.push({
                                nm:cities[i].nm,
                                id:cities[i].id
                            })
                        }
                    }
                }
            }
            
            // 排序
            cityList.sort((n1,n2)=>{
                if(n1.index > n2.index){
                    return 1;
                }
                else if(n1.index < n2.index){
                    return -1;
                }else{
                    return 0
                }
            })
 
            /**
             * 判断 首字母大写是否相同
             * 如果首字母和存在列表中index 相等  返回 false
             * 若果不相等 返回 true 
             */
            function toCom(firstLetter){
                for(var i = 0 ; i<cityList.length ; i++){
                    if( cityList[i].index ===firstLetter){
                        return false
                    }
                }
                return true;
            }
            
            return {
                cityList,
                hotList
            }

        },
        handleToIndex(index){
            var h2 = this.$refs.city_soft.getElementsByTagName('h2')
            this.$refs.city_soft.parentNode.scrollTop = h2[index].offsetTop;
        }
    }
}
</script>

<style scoped lang='scss'>
@function rem($px){
    @return $px / 75 * 1rem;
}
#content {
    .city_body{ 
        margin-top: rem(192); 
        display: flex; 
        width:100%; 
        position: absolute; 
        top: 0; 
        bottom: 0;
        .city_list{ 
            flex:1; 
            overflow: auto; 
            background: #FFF5F0;
            &::-webkit-scrollbar{
                background-color:transparent;
                width:0;
            }
        }
        .city_hot{ 
            margin-top: rem(40);
            h2{ 
                padding-left: rem(30); 
                line-height: rem(60); 
                font-size: rem(34); 
                background:#F0F0F0; 
                font-weight: normal;
            }
            ul li{ 
                float: left; 
                background: #fff; 
                width: 29%; 
                height: rem(66);
                margin-top: rem(30); 
                margin-left: 3%; 
                padding: 0 rem(8); 
                border: rem(1) solid #e6e6e6; 
                border-radius: rem(6); 
                line-height: rem(66); 
                text-align: center; 
                box-sizing: border-box;
                font-size: rem(30);
            }
        }
        .city_sort{
            div{ 
                margin-top: rem(40);
            }
            h2{ 
                padding-left: rem(30); 
                line-height: rem(60); 
                font-size: rem(34); 
                background:#F0F0F0; 
                font-weight: normal;
            }
            ul{ 
                padding-left: rem(20); 
                margin-top: rem(20);
                li{ 
                    font-size: rem(30);
                    line-height: rem(60);
                }
            }
        }
        .city_index{ 
            width:rem(40); 
            display: flex; 
            flex-direction:column; 
            justify-content:center; 
            text-align: center; 
            border-left:rem(1) #e6e6e6 solid;
            font-size: rem(25);
            li{
                margin: rem(15) 0;
            }
        }
    }
}

</style>
