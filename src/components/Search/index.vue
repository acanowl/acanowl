<template>
    <div class="search_body">
        <div class="search_input">
            <div class="search_input_wrapper">
                <i class="iconfont icon-sousuo"></i>
                <input type="text" v-model="message">
            </div>					
        </div>
        <div class="search_result">
            <h3>电影/电视剧/综艺</h3>
            <ul>
                <li v-for="item in moviesList" :key='item.id'>
                    <div class="img"><img :src="item.img | setWH('128.180')"></div>
                    <div class="info">
                        <p><span>{{item.nm}}</span><span>{{item.sc}}</span></p>
                        <p>{{item.enm}}</p>
                        <p>{{item.cat}}</p>
                        <p>{{item.rt}}</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:'Search',
    data(){
        return{
            message:'',
            moviesList : [],
        }
    },
    methods:{
        cancelRequest(){
            if(typeof this.source === 'function'){
                this.source('终止请求')
            }
        }
    },
    watch:{
        // 终止多次请求
        message(newVal){
            var that = this;
            this.cancelRequest();

            this.axios.get('/api/searchList?cityId=10&kw='+newVal,{
                cancelToken: new this.axios.CancelToken(function executor(c){
                    that.source = c;
                })
            }).then((res)=>{
                var msg = res.data.msg;
                var movies = res.data.data.movies;
                if(msg && movies){
                    this.moviesList = res.data.data.movies.list;
                }
            }).catch((err)=>{
                if(this.axios.isCancel(err)){
                    console.log('Request canceled',err.message);
                }else{
                    console.log(err);
                }
            })
        }
    }
}
</script>

<style scoped lang='scss'>
@function rem($px){
    @return $px / 75 * 1rem;
}
#content {
    .search_body{ 
        flex:1; 
        overflow:auto;
        .search_input{ 
            padding: rem(16) rem(20); 
            background-color: #f5f5f5; 
            border-bottom: rem(1) solid #e5e5e5;
        }
        .search_input_wrapper{ 
            padding: 0 rem(20); 
            border: rem(1) solid #e6e6e6; 
            border-radius: rem(10); 
            background-color: #fff; 
            display: flex; 
            line-height: rem(40);
            i{
                font-size: rem(32); 
                padding: rem(8) 0;
            }
            input{ 
                border: none; 
                font-size: rem(26); 
                color: #333; 
                padding: rem(8) 0; 
                outline: none; 
                margin-left: rem(10); 
                width:100%;
            }
        }
        .search_result{
            h3{ 
                font-size: rem(30); 
                color: #999; 
                padding: rem(18) rem(30); 
                border-bottom: 1px solid #e6e6e6;
            }
            li{ 
                border-bottom:1px #c9c9c9 dashed; 
                padding: rem(20) rem(30); 
                box-sizing:border-box; 
                display: flex;
            }
            .img{ 
                width: rem(120); 
                float:left; 
                img{ 
                    width: 100%; 
                }
            }
            .info{ 
                float:left; 
                margin-left: rem(30); 
                flex:1;
                
                p{ 
                    width: rem(540);
                    height: rem(44); 
                    display: flex; 
                    line-height: rem(44); 
                    font-size: rem(24);
                    overflow: hidden; 
                    white-space: nowrap; 
                    text-overflow:ellipsis;
                
                    &:nth-of-type(1){
                        span{
                            overflow: hidden; 
                            white-space: nowrap; 
                            text-overflow:ellipsis;
                        }
                        span:nth-of-type(1){ 
                            font-size: rem(36); 
                            flex:1; 
                        }
                        span:nth-of-type(2){ 
                            font-size: rem(32);
                            color:#fc7103;
                        }
                    }
                }
            }
        }
    }
}

</style>
