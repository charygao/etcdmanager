import Vue from 'vue';
import App from './components/app.vue';
import router from './router';
import store from './store';
const vueLocalStorage = require('vue-localstorage');
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import Vuelidate from 'vuelidate';
import NoSelectionDialog from './components/no-selection.dialog.vue';
import PurgeDialog from './components/purge.dialog.vue';
import DeleteDialog from './components/delete.dialog.vue';
import lang from '@/i18n/en';
import VueI18n from 'vue-i18n';

Vue.config.productionTip = false;
Vue.config.devtools = true;

Vue.use(VueI18n);

export const i18n = new VueI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages: lang,
  });

  export const loadedLang = ['en'];

Vue.use(vueLocalStorage, {
    name: 'ls',
    bind: true,
});

Vue.use(Vuetify);
Vue.use(Vuelidate);

Vue.component('no-selection-dialog', NoSelectionDialog);
Vue.component('purge-dialog', PurgeDialog);
Vue.component('delete-dialog', DeleteDialog);

new Vue({
    i18n,
    router,
    store,
    validations: {},
    render: (h) => {
        //  @ts-ignore
        return h(App);
    },
}).$mount('#app');
