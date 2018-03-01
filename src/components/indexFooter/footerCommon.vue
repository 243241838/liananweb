<template>
   <!--底部连接-->
        <footer>
            <div class="center">
                <p><span>链安保险经纪有限公司</span><span>版权所有</span><span>XICP备XXXXXXXX号</span></p>
            </div>
        </footer>
</template>
<script>
import $ from 'jQuery';
export default {
    data () {
        return {
        }
    },
    computed: {
    },
    methods: {
    }
}
</script>
<style lang='scss'>
@import  '../../assets/scss/normalize.css';
@import  '../../assets/scss/common.scss';
@import "../../assets/fonts/iconfont.css";
footer{
    width:100%;
    height:130px;
    background:#111212;
    text-align:center;
    line-height:130px;
    color:#5a5e5d;
    font-size:12px;
    p{
        span:nth-child(1){
            margin-right:22px;
        }
        span:nth-child(2){
            margin-right:16px;
        }
    }
}
</style>