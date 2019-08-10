<template>
    <div class="movie_body">
        <ul>
            <li v-for="item in comingList" :key="item.id">
                <div class="pic_show"><img :src="item.img | setWH('128.180')"></div>
                <div class="info_list" >
                    <h2>{{item.nm}} <img v-if="item.version" src="@/assets/maxs.png"> </h2>
                    <p><span class="person">{{item.wish}}</span> 人想看</p>
                    <p>主演: {{item.star}}</p>
                    <p>{{item.rt}}上映</p>
                </div>
                <div class="btn_pre">
                    预售
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'ComingSoon',
    data(){
        return{
            comingList :[],
        }
    },
    mounted(){
        this.axios.get('/api/movieComingList?cityId=10').then((res)=>{
            var msg = res.data.msg;
            if(msg === 'ok'){
                this.comingList = res.data.data.ComingList;
            }
        })
    }
}
</script>

<style scoped lang='scss'>
@function rem($px){
    @return $px / 75 * 1rem;
}
#content {
    .movie_body{ 
        flex:1; 
        overflow:auto;
        ul{ 
            margin:0 rem(24); 
            overflow: hidden;
            li{ 
                margin-top:rem(24); 
                display: flex; 
                align-items:center; 
                border-bottom: rem(1) #e6e6e6 solid; 
                padding-bottom: rem(20);
            }
        }
        .pic_show{ 
            width:rem(128); 
            height: rem(180);
            img{ 
                width:100%;
            }
        }
        .info_list { 
            margin-left: rem(20); 
            flex:1; 
            position: relative;
            h2{ 
                font-size: rem(34); 
                line-height: rem(48); 
                width:150px; 
                overflow: hidden; 
                white-space: nowrap; 
                text-overflow:ellipsis;
            }
            p{ 
                font-size: rem(26); 
                color:#666; 
                line-height: rem(44); 
                width:rem(400); 
                overflow: hidden; 
                white-space: nowrap; 
                text-overflow:ellipsis;
            }
            .grade{ 
                font-weight: 700; 
                color: #faaf00; 
                font-size: rem(30);
            }
            img{ 
                width:50px; 
                position: absolute; 
                right:rem(20); 
                top: rem(10);
            }
        }
        .btn_mall,.btn_pre{ 
            width:rem(94); 
            height:rem(54); 
            line-height: rem(56); 
            text-align: center; 
            background-color: #f03d37; 
            color: #fff; 
            border-radius: rem(8); 
            font-size: rem(24); 
            cursor: pointer;
        }
        .btn_pre{ 
            background-color: #3c9fe6;
        }
    }
}
</style>
