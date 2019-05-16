<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for = 'item in lunbotu' :key = 'item.id'>
                <img :src="item.img" alt="">
            </mt-swipe-item>
        </mt-swipe>
        <div class="container">
            <ul class="nav-a">
                <li>
                    <img src='../../images/menu1.png' alt="">
                    <p>新闻资讯</p>
                </li>
                <li>
                    <img src='../../images/menu2.png' alt="">
                    <p>新闻资讯</p>
                </li>
                <li>
                    <img src='../../images/menu3.png' alt="">
                    <p>新闻资讯</p>
                </li>
                <li>
                    <img src='../../images/menu4.png' alt="">
                    <p>新闻资讯</p>
                </li>
                <li>
                    <img src='../../images/menu5.png' alt="">
                    <p>新闻资讯</p>
                </li>
                <li>
                    <img src='../../images/menu6.png' alt="">
                    <p>新闻资讯</p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import { Toast } from 'mint-ui';
export default {
    data(){
        return {
            lunbotu : []
        }
    },
    created(){
        this.getlist()
    },
    methods:{
        getlist(){
            this.$http.get('http://www.liulongbin.top:3005/api/getlunbo').then(result => {
                if(result.body.status === 0){
                    this.lunbotu = result.body.message
                    console.log(this.lunbotu)
                }else{
                    Toast('加载轮播图失败');
                }
            })
        }
    }
}
</script>
<style lang='scss' scoped>
    .mint-swipe{
        height:200px;
        
        .mint-swipe-item{
            &:nth-child(1){
                background-color:pink;
            };
            img{
                width:100%;
                height:100%;
            }
        }
    }
    .container{
        .nav-a{
            padding:0;
            padding-top:20px;
            margin:0;
            list-style:none;
            display:flex;
            flex-wrap: wrap;
            li{
                margin-top:10px;
                width:33%;
                height:90px;
                img{
                    display:block;
                    
                    width:60px;
                    height:60px;
                    margin:0 auto;
                }
                p{
                    text-align:center;
                    margin-top:10px;
                }
            }
        }
    }
</style>



