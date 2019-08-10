<template>
    <div class="cinema_body">
        <ul>
            <li v-for="item in cinemaList" :key='item.id'>
                <div>
                    <span>{{item.nm}}</span>
                    <span class="q"><span class="price">{{item.sellPrice}}</span> 元起</span>
                </div>
                <div class="address">
                    <span>{{item.addr}}</span>
                    <span>{{item.distance}}</span>
                </div>
                <div class="card">
                    <div v-for="(num,key) in item.tag" v-if="num===1"  :key='key' :class="key | classCard" >{{ key | formatCard }}</div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'CityList',
    data(){
        return{
            cinemaList :[],
        }
    },
    mounted(){
        this.axios.get('/api/cinemaList?cityId=10').then((res)=>{
            var msg =res.data.msg;
            if(msg === 'ok'){
                this.cinemaList = res.data.data.cinemas;
            }
        })
    },
    filters:{
        formatCard(key){
            var card =[
                { key : 'allowRefund' , value : '可改票'},
                { key : 'endorse' , value : '可退'},
                { key : 'sell' , value : '折扣卡'},
                { key : 'snack' , value : '小吃'},
            ];
            for(var i = 0 ; i <card.length;i++){
                if(card[i].key === key){
                    return card[i].value;
                }
            }
            return '';
        },
        classCard(key){
            var card =[
                { key : 'allowRefund' , value : 'bl'},
                { key : 'endorse' , value : 'bl'},
                { key : 'sell' , value : 'or'},
                { key : 'snack' , value : 'or'},
            ];
            for(var i = 0 ; i <card.length;i++){
                if(card[i].key === key){
                    return card[i].value;
                }
            }
            return '';
        }
    }
}
</script>

<style scoped lang='scss'>
@function rem($px){
    @return $px / 75 * 1rem;
}
#content {
    .cinema_body{ 
        flex:1; 
        overflow:auto;
        ul{ 
            padding:rem(40);
        }
        li{ 
            border-bottom:rem(1) solid #e6e6e6;
            margin-bottom: rem(40);
        }
        div{ 
            margin-bottom: rem(20);
        }
        .q{ 
            font-size: rem(22); 
            color:#f03d37;
        }
        .price{ 
            font-size: rem(36);
        }
        .address{ 
            font-size: rem(26); 
            color:#666;
            span:nth-of-type(2){ 
                float:right; 
            }
        }
        .card{ 
            display: flex;
            div{ 
                padding: 0 rem(6); 
                height: rem(30); 
                line-height: rem(30); 
                border-radius: rem(4); 
                color: #f90; 
                border: rem(1) solid #f90; 
                font-size: rem(26); 
                margin-right: rem(10);
            }
            div.or{ 
                color: #f90; 
                border: rem(1) solid #f90;
            }
            div.bl{ 
                color: #589daf; 
                border: rem(1) solid #589daf;
            }
        }
    }
}
</style>
