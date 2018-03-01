<template>
    <div class="head">
        <div class="top">
            <div class="center">
                <div class="fl"><img src="./images/logo.png" alt=""></div>
                <p class="fl">链安保险经纪有限公司</p>
            </div>
        </div>
        <nav>
            <div class="center">
                <ul>
                    <li class="fl" :class="{active: index1==index}" v-for="(item, index) in nav" v-text="item.name" @click="win_href(index, item.aUrl)"></li>
                </ul>
            </div>
        </nav>
    </div>
</template>
<script>
import {Common} from 'js/common';
export default {
    data () {
        return {
            index1: 0,
            nav: [
                {name: '首页', aUrl: 'index.html'},
                {name: '保险产品', aUrl: 'product.html'},
                {name: '加入我们', aUrl: 'joinUs.html'},
                {name: '新闻资讯', aUrl: 'journalism.html'}
            ]
        }
    },
    mounted () {
        this.index_1();
    },
    computed: {
    },
    methods: {
        index_1 () {
            let index = Common.getQueryString('index');
            if (index) {
                this.index1 = index;
            }
        },
        win_href (index, url) {
            if (url === 'index.html' && index === 0) {
                window.location.href = '../' + url + '?index=' + index;
            } else {
                window.location.href = '../web/' + url + '?index=' + index;
            }
        }
    }
}
</script>
<style lang='scss'>
@import  '../../assets/scss/normalize.css';
@import  '../../assets/scss/common.scss';
@import "../../assets/fonts/iconfont.css";
.head{
    >.top{
        width:100%;
        height:106px;
        font-size:42px;
        color:#333333;
        line-height:106px;
        img{
            position:relative;
            padding-right:5px;
            width:50px;
            top:13px;
        }
    }
    nav{
        width:100%;
        height:64px;
        background:#ffce4b;
        ul{
            li{
                font-size:18px;
                color:#333333;
                line-height:64px;
                height:64px;
                padding: 0 19px;
                margin-right:25px;
                cursor:pointer;
            }
            li:nth-child(1){
                margin-right:50px;

            }
            li:hover{
                background:#333333;
                color:#ffce4b;
                font-weight:normal;
            }
            .active{
                // font-weight:bold;
                background:#333333;
                color:#ffce4b;
                font-weight:normal;
            }
        }
    }
}
</style>