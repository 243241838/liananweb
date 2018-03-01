import { Vue } from 'js/base'
import headCommon from '../../../components/indexHead/headCommon.vue';
import footerCommon from '../../../components/indexFooter/FooterCommon.vue';
import indexScss from './scss/journalism.scss';
import journalism from './journalism.vue'
var indexVue = new Vue({
    el: '#journalism',
    template: '<div><headCommon></headCommon><journalism></journalism><footerCommon></footerCommon></div>',
    components: {
        headCommon: headCommon,
        footerCommon: footerCommon,
        'journalism': journalism
    }
})
