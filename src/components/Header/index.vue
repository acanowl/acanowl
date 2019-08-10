<template>
    <header id="header">
        <h1>{{title}}</h1>
    </header>
</template>

<script>
export default {
    name:'Header',
    props:{
        title:{
            type : String,
            default : 'Acanowl Film'
        }
    }
}
</script>

<style scoped lang='scss'>
@function rem($px){
    @return $px / 75 * 1rem;
}
#header{
    width:100%;
    height:rem(100); 
    color: #fff; 
    background: #e54847; 
    border-bottom: rem(1) solid #e54847; 
    position: relative;
    h1{ 
        font-size: rem(36); 
        text-align: center; 
        line-height: rem(100); 
        font-weight: normal; 
    }
    i{ 
        position: absolute; 
        left: rem(10); 
        top: 50%; 
        margin-top: rem(26); 
        font-size: rem(52);
    }
}
</style>
