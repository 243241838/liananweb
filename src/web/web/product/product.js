import { Vue } from 'js/base'
import headCommon from '../../../components/indexHead/headCommon.vue';
import footerCommon from '../../../components/indexFooter/FooterCommon.vue';
import indexScss from './scss/product.scss';
import product from './product.vue'
var indexVue = new Vue({
    el: '#product',
    template: '<div><headCommon></headCommon><product></product><footerCommon></footerCommon></div>',
    components: {
        headCommon: headCommon,
        footerCommon: footerCommon,
        'product': product
    }
})
