<template>
    <div id='body'>
        <div class="banner">杜绝不了意外的话 就请给予我们破晓的勇气</div>
        <div class="list">
            <div class="center">
                <div>
                    <dl class="fl" v-for="(item, index) in list">
                        <dt><img :src="item.img" alt=""></dt>
                        <dd>
                            <p v-text="item.p1"></p>
                            <p></p>
                            <p v-text="item.p2"></p>
                            <p>投保年龄：<span v-text="item.p3"></span></p>
                        </dd>
                    </dl>
                </div>
                <p><i class="iconfont">&#xe6c3;</i>有任何疑问，请拨打咨询热线：<span>0571-56707435</span></p>
            </div>
        </div>
    </div>
</template>
<script>
import {Common, storage} from 'js/common'
import $ from 'jQuery';
export default {
    data () {
        return {
            list: [
                {img: require('./images/dl1.jpg'), p1: '平安驾驶人意外伤害保险||代', p2: '保障全面，涵盖自驾保障，轻松出行，驾乘无忧', p3: '18-65周岁'},
                {img: require('./images/dl2.jpg'), p1: '平安庆生卡', p2: '学生保险卡-专为学生群体设计；价格实惠，馈赠首选', p3: '0-18周岁'},
                {img: require('./images/dl3.jpg'), p1: '汇保险住院宝', p2: '超高保额，超全保障，超广覆盖，超低价格', p3: '30天-65周岁'},
                {img: require('./images/dl4.jpg'), p1: '平安畅游九州境内旅行保险', p2: '国内旅意首选产品，责任涵盖意外伤害、急性病身故、意外伤害医疗、行李损失等', p3: '不限年龄'},
                {img: require('./images/dl5.jpg'), p1: '家财综合保障卡', p2: '保费低，保障全，无论自然风险还是意外风险，都可保障', p3: '不限年龄'},
                {img: require('./images/dl6.jpg'), p1: '平安个人银行卡盗刷保险', p2: '适用所有借记卡、信用卡，提供挂失服务，报销挂失费用；全年保障无忧', p3: '18-65周岁'}
            ]
        }
    },
    created () {
    },
    mounted () {
    },
    computed: {
    },
    watch: {
    },
    methods: {
    }
}
</script>