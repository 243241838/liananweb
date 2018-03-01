import { Vue } from 'js/base'
import headCommon from '../../../components/indexHead/headCommon.vue';
import footerCommon from '../../../components/indexFooter/FooterCommon.vue';
import indexScss from './scss/joinUs.scss';
import joinUs from './joinUs.vue'
var indexVue = new Vue({
    el: '#joinUs',
    template: '<div><headCommon></headCommon><joinUs></joinUs><footerCommon></footerCommon></div>',
    components: {
        headCommon: headCommon,
        footerCommon: footerCommon,
        'joinUs': joinUs
    }
})
