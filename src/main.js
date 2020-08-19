import Vue from 'vue'
import Vuelidate from 'vuelidate'
import Paginate from 'vuejs-paginate'
import VueMeta from 'vue-meta'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import localizeFilter from '@/filters/localize.filter'
import currencyFilter from '@/filters/currency.filter'
import tooltipDirective from '@/directives/tooltip.directive'
import messagePlugin from '@/utils/message.plugin'
import titlePlugin from '@/utils/title.plugin'
import Loader from '@/components/app/Loader'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(titlePlugin)
Vue.use(Vuelidate)
Vue.use(VueMeta)
Vue.filter('date', dateFilter)
Vue.filter('localize', localizeFilter)
Vue.filter('currency', currencyFilter)
Vue.directive('tooltip', tooltipDirective)
Vue.component('Loader', Loader)
Vue.component('Paginate', Paginate)

firebase.initializeApp({
    apiKey: "AIzaSyBYoGPO5fU_IuR2BD19SocFksKAc_9vuvc",
    authDomain: "vue-skobius-crm.firebaseapp.com",
    databaseURL: "https://vue-skobius-crm.firebaseio.com",
    projectId: "vue-skobius-crm",
    storageBucket: "vue-skobius-crm.appspot.com",
    messagingSenderId: "155771105507",
    appId: "1:155771105507:web:76b120149ef4c4c5c155d6",
    measurementId: "G-GGDN1ER101"
})

let app

firebase.auth().onAuthStateChanged(() => {
    if (!app) {
        app = new Vue({
            router,
            store,
            render: h => h(App)
        }).$mount('#app')
    }
})
