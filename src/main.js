import {createApp} from 'vue';
import {createPinia} from 'pinia';
import VueLazyLoad from 'vue3-lazyload';
import axios from './plugins/axios';

import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';

import App from './App.vue';
import router from './router';

import './assets/css/variables.css';
import './assets/css/reboot.css';
import './assets/less/fonts.less';
import './assets/less/layouts.less';

const app = createApp(App);

app.use(VueLazyLoad, {
    loading: '/src/assets/pics/error-image.jpg',
    error: '/src/assets/pics/error-image.jpg',
    lifecycle: {
        loading: (el) => {
            // console.log('loading', el);
        },
        error: (el) => {
            // console.log('error', el);
        },
        loaded: (el) => {
            // console.log('loaded', el);
        },
    },
});
app.component('v-select', vSelect);
app.use(createPinia());
app.use(router);
app.use(axios, {
    baseURL: import.meta.env.VITE_API_APIURL,
});

app.mount('#app');
